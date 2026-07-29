import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { GoogleGenAI } from '@google/genai';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// In-memory store for appointments & reviews
interface AppointmentRecord {
  id: string;
  name: string;
  mobile: string;
  email: string;
  service: string;
  package?: string;
  preferredDate: string;
  preferredTime: string;
  notes?: string;
  createdAt: string;
  status: 'Confirmed' | 'Pending';
}

const appointmentsStore: AppointmentRecord[] = [];

// API Endpoints
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', time: new Date().toISOString() });
});

// Create appointment endpoint
app.post('/api/appointments', (req, res) => {
  try {
    const { name, mobile, email, service, package: selectedPackage, preferredDate, preferredTime, notes } = req.body;

    if (!name || !mobile || !service || !preferredDate) {
      return res.status(400).json({ error: 'Name, mobile number, service, and date are required.' });
    }

    const newAppointment: AppointmentRecord = {
      id: 'CBP-' + Math.floor(100000 + Math.random() * 900000),
      name,
      mobile,
      email: email || '',
      service,
      package: selectedPackage || '',
      preferredDate,
      preferredTime: preferredTime || '10:00 AM',
      notes: notes || '',
      createdAt: new Date().toISOString(),
      status: 'Confirmed',
    };

    appointmentsStore.unshift(newAppointment);

    return res.status(201).json({
      success: true,
      message: 'Appointment successfully booked at Chanti Beauty Parlour!',
      appointment: newAppointment,
    });
  } catch (error) {
    console.error('Error creating appointment:', error);
    return res.status(500).json({ error: 'Failed to process appointment' });
  }
});

// AI Beauty Consultant API Route using @google/genai
let aiInstance: GoogleGenAI | null = null;

function getGenAI() {
  if (!aiInstance) {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      throw new Error('GEMINI_API_KEY is missing in environment variables.');
    }
    aiInstance = new GoogleGenAI({ apiKey });
  }
  return aiInstance;
}

app.post('/api/beauty-consultant', async (req, res) => {
  try {
    const { query, skinType, hairType, eventType } = req.body;

    if (!query) {
      return res.status(400).json({ error: 'Query is required.' });
    }

    let ai;
    try {
      ai = getGenAI();
    } catch (err: any) {
      return res.status(200).json({
        recommendation: `Welcome to Chanti Beauty Parlour! Based on your interest in ${skinType || 'skin & hair care'}, we recommend our Gold Glow Luxury Package (24K Gold Facial + Moisture Hair Spa). Please book an appointment or visit us in Dwarakanagar, Visakhapatnam!`,
        suggestedServices: ['24K Gold Glow Facial', 'Intense Hair Spa', 'HD Bridal Makeup'],
        suggestedPackage: 'Gold Glow Luxury Package (₹3,499)',
        homeCareTips: [
          'Stay hydrated with 3L water daily.',
          'Apply SPF 50 sunscreen before stepping out in Visakhapatnam sun.',
          'Use sulfate-free shampoo for post-treatment hair care.'
        ]
      });
    }

    const prompt = `You are the master AI Beauty Advisor for Chanti Beauty Parlour, a top-rated luxury salon and bridal studio located in Dwarakanagar, Visakhapatnam.
User details:
- Skin Type: ${skinType || 'Not specified'}
- Hair Type: ${hairType || 'Not specified'}
- Event / Goal: ${eventType || 'General beauty glow'}
- Question/Concern: "${query}"

Provide a warm, expert, feminine response in JSON format with:
1. "recommendation": A polite 3-sentence expert advice on treatments at Chanti Beauty Parlour.
2. "suggestedServices": Array of 2 to 3 service names from Chanti Beauty Parlour (e.g., "HD Bridal Makeup", "24K Gold Facial", "Keratin Hair Smoothening", "O3+ Brightening Cleanup", "Aroma Spa Pedicure").
3. "suggestedPackage": A suggested package ("Silver Essentials ₹1,499", "Gold Glow Luxury ₹3,499", or "Platinum Bridal Royal ₹12,999").
4. "homeCareTips": Array of 3 quick actionable skincare or hair tips.

Return ONLY valid JSON. Do not include markdown code block syntax if possible or return clear JSON string.`;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        responseMimeType: 'application/json',
      }
    });

    const text = response.text || '';
    let parsedJson;
    try {
      parsedJson = JSON.parse(text);
    } catch {
      parsedJson = {
        recommendation: text || 'Thank you for reaching out to Chanti Beauty Parlour! Our senior beauty experts recommend a personal consultation at Dwarakanagar for your skin and hair glow.',
        suggestedServices: ['24K Gold Facial', 'Hair Keratin Spa', 'HD Makeup'],
        suggestedPackage: 'Gold Glow Luxury Package',
        homeCareTips: ['Keep skin moisturized.', 'Drink plenty of water.', 'Use gentle cleansers.']
      };
    }

    return res.json(parsedJson);
  } catch (error: any) {
    console.error('Error in AI Beauty Consultant:', error);
    return res.status(200).json({
      recommendation: 'At Chanti Beauty Parlour in Dwarakanagar, Visakhapatnam, we tailor every facial, hair treatment, and bridal makeover to your unique needs. Come visit us for a personalized beauty skin scan!',
      suggestedServices: ['HD Bridal Makeup', '24K Gold Facial', 'Silk Hair Smoothening'],
      suggestedPackage: 'Gold Glow Luxury Package',
      homeCareTips: [
        'Protect your skin from coastal UV with SPF 50+.',
        'Use coconut or argan oil for scalp hydration.',
        'Get a herbal cleanup every 3 weeks.'
      ]
    });
  }
});

async function startServer() {
  // Vite middleware for development
  if (process.env.NODE_ENV !== 'production') {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Chanti Beauty Parlour Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
