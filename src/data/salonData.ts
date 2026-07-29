import {
  BeautyService,
  BeautyPackage,
  Testimonial,
  BeautyExpert,
  BeforeAfterItem,
  GalleryPhoto,
  BlogPost,
  FAQItem,
} from '../types';

export const SALON_INFO = {
  name: 'Chanti Beauty Parlour',
  tagline: 'Where elegance meets perfection',
  address: 'Dwarakanagar, 3rd Lane, Opposite City Center, Visakhapatnam, Andhra Pradesh 530016',
  phone: '+91 98481 23456',
  phoneAlt: '+91 89127 89012',
  email: 'chantibeautyparlour@gmail.com',
  workingHours: 'Monday – Sunday: 9:00 AM – 8:30 PM',
  whatsappNumber: '919848123456',
  instagram: 'https://instagram.com/chantibeautyparlour',
  facebook: 'https://facebook.com/chantibeautyparlour',
  rating: 4.9,
  reviewsCount: 1280,
  yearsExperience: '10+',
  happyClients: '5000+',
  servicesCount: '15+',
};

export const SERVICES: BeautyService[] = [
  {
    id: 'hair-styling',
    title: 'Hair Styling & Care',
    category: 'hair',
    description: 'Transform your hair with expert precision cuts, deep conditioning, silk smoothening, and vibrant coloring tailored to your hair texture.',
    iconName: 'Scissors',
    image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=1000',
    priceRange: '₹350 - ₹6,999',
    duration: '45 mins - 3 hrs',
    popular: true,
    items: [
      'Layered & Precision Haircuts',
      'Hydrating Hair Spa & Scalp Detox',
      'Keratin & Botox Hair Treatment',
      'Silk Hair Smoothening & Straightening',
      'Global Hair Color & Balayage Highlights'
    ],
  },
  {
    id: 'bridal-makeup',
    title: 'Bridal Makeovers',
    category: 'bridal',
    description: 'Bespoke HD and Airbrush bridal transformations designed to accentuate your natural beauty on your special day in Visakhapatnam.',
    iconName: 'Sparkles',
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80&w=1000',
    priceRange: '₹8,999 - ₹25,000',
    duration: '2 hrs - 4 hrs',
    popular: true,
    items: [
      'Ultra-HD Bridal Makeup',
      'Flawless Airbrush Bridal Finish',
      'Traditional South Indian / Telugu Bridal Style',
      'Engagement & Reception Glow Makeovers',
      'Saree Draping & Flower Jewelry Styling'
    ],
  },
  {
    id: 'facial-treatments',
    title: 'Facial Treatments',
    category: 'facial',
    description: 'Rejuvenate your skin with our signature luxury facials formulated with gold, diamond, and herbal extracts for radiant skin glow.',
    iconName: 'Sparkle',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=1000',
    priceRange: '₹800 - ₹4,500',
    duration: '60 mins - 90 mins',
    popular: true,
    items: [
      'Instant Glow 24K Gold Facial',
      'Diamond Luminosity Facial',
      'Hydra-Infusion Dewy Facial',
      'Anti-Aging Collagen Boost Facial',
      'O3+ Brightening Glow Therapy'
    ],
  },
  {
    id: 'skin-care',
    title: 'Skin Care & Derma',
    category: 'skin',
    description: 'Targeted skin solutions including herbal cleanups, sun-tan removal, anti-acne therapy, and deep pigment corrections.',
    iconName: 'HeartHandshake',
    image: 'https://images.unsplash.com/photo-1512290900673-70020016a1b8?auto=format&fit=crop&q=80&w=1000',
    priceRange: '₹499 - ₹2,999',
    duration: '45 mins - 60 mins',
    items: [
      'Deep Pore Organic Cleanup',
      'Tan Removal & De-pigmentation',
      'Acne Clarifying Herbal Therapy',
      'Skin Polishing & Radiance Exfoliation',
      'Fruit & Vitamin C Rejuvenation'
    ],
  },
  {
    id: 'nail-studio',
    title: 'Nail Studio & Art',
    category: 'nails',
    description: 'Pamper your hands and feet with artistic gel extensions, ombre nail art, luxury spa pedicures, and soothing paraffin wax treats.',
    iconName: 'Palette',
    image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&q=80&w=1000',
    priceRange: '₹400 - ₹2,500',
    duration: '45 mins - 90 mins',
    items: [
      'Gel & Acrylic Nail Extensions',
      'Bridal & Designer 3D Nail Art',
      'Aroma Spa Pedicure & Manicure',
      'Paraffin Moisture Lock Treatment',
      'Nail Polish & Gel Overlay'
    ],
  },
  {
    id: 'spa-relaxation',
    title: 'Spa & Wellness',
    category: 'spa',
    description: 'Melt away stress with soothing aromatherapy body polishes, relaxing neck & shoulder massages, and full scalp oil therapies.',
    iconName: 'Smile',
    image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=1000',
    priceRange: '₹700 - ₹3,800',
    duration: '45 mins - 90 mins',
    items: [
      'Aromatherapy Stress Release Therapy',
      'Deep Scalp & Warm Oil Massage',
      'Body Scrub & Skin Smoothing Polish',
      'Herbal Foot Reflexology',
      'Full Body Rejuvenation Ritual'
    ],
  },
];

export const PACKAGES: BeautyPackage[] = [
  {
    id: 'silver-package',
    name: 'Silver Essentials',
    price: '₹1,499',
    originalPrice: '₹2,200',
    tagline: 'Ideal for monthly beauty upkeep & quick radiance',
    features: [
      'Deep Herbal Skin Cleanup',
      'Nourishing Protein Hair Wash & Conditioning',
      'Eyebrow & Upper Lip Threading',
      'Hand & Foot Polish',
      'Relaxing Head Massage (15 mins)'
    ],
    badge: 'Popular Monthly',
  },
  {
    id: 'gold-package',
    name: 'Gold Glow Luxury',
    price: '₹3,499',
    originalPrice: '₹5,000',
    popular: true,
    tagline: 'Complete head-to-toe makeover for special occasions',
    features: [
      '24K Gold Radiance Facial',
      'Intense Moisture Hair Spa & Steam',
      'Luxury Spa Pedicure & Manicure',
      'Full Body Detan & Scrub',
      'Threading & Hair Styling Blowout'
    ],
    badge: 'Best Value',
  },
  {
    id: 'platinum-package',
    name: 'Platinum Bridal Royal',
    price: '₹12,999',
    originalPrice: '₹18,000',
    tagline: 'Comprehensive bridal elegance package with HD makeup',
    features: [
      'HD Ultra-Flawless Bridal Makeup',
      'Designer Bridal Hair Styling & Accessories',
      'Traditional / Modern Saree Draping',
      'Pre-Bridal Luxury Facial & Body Scrub',
      'Gel Nail Art & Pedicure Spa'
    ],
    badge: 'Royal Bridal',
  },
];

export const EXPERTS: BeautyExpert[] = [
  {
    id: 'chanti',
    name: 'T. Chanti',
    title: 'Founder & Chief Beauty Consultant',
    experience: '12+ Years',
    specialization: 'HD Bridal Makeovers & Skin Aesthetics',
    bio: 'Certified master makeup artist trained in international bridal trends and skin therapy. Chanti has transformed over 3,000 brides in Visakhapatnam.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600',
    rating: 5.0,
  },
  {
    id: 'priya',
    name: 'Priya Sharma',
    title: 'Senior Hair Stylist & Smoothening Master',
    experience: '8 Years',
    specialization: 'Keratin, Balayage, Precision Cuts',
    bio: 'Expert in hair texture restoration, customized balayage colors, and silk smoothening treatments using Schwarzkopf & L\'Oréal.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=600',
    rating: 4.9,
  },
  {
    id: 'anitha',
    name: 'Anitha Rao',
    title: 'Lead Skin Specialist',
    experience: '7 Years',
    specialization: 'Dermaceutical Facials & Anti-Acne Therapy',
    bio: 'Specialist in custom skin consultations, glow therapies, de-pigmentation, and herbal facial treatments.',
    image: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&q=80&w=600',
    rating: 4.9,
  },
  {
    id: 'sneha',
    name: 'Sneha Kumari',
    title: 'Master Nail Artist & Lash Stylist',
    experience: '5 Years',
    specialization: 'Gel Extensions, 3D Bridal Nail Art',
    bio: 'Creative genius behind intricate bridal nail extensions and spa pedicures at Chanti Beauty Studio.',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=600',
    rating: 4.8,
  },
];

export const BEFORE_AFTER_ITEMS: BeforeAfterItem[] = [
  {
    id: 'ba-1',
    title: 'Bridal HD Transformation',
    category: 'Bridal',
    beforeImage: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=800',
    afterImage: 'https://images.unsplash.com/photo-1595959183082-7b570b7e08e2?auto=format&fit=crop&q=80&w=800',
    description: 'Flawless airbrush finish with traditional jewelry styling and glowing skin.',
  },
  {
    id: 'ba-2',
    title: 'Keratin Hair Smoothening',
    category: 'Hair',
    beforeImage: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&q=80&w=800',
    afterImage: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=800',
    description: 'Frizzy unruly hair converted to silky smooth, high-shine straight locks.',
  },
  {
    id: 'ba-3',
    title: '24K Gold Facial Glow',
    category: 'Skin',
    beforeImage: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&q=80&w=800',
    afterImage: 'https://images.unsplash.com/photo-1512290900673-70020016a1b8?auto=format&fit=crop&q=80&w=800',
    description: 'Immediate reduction in dullness and sun-tan with deep pore nourishment.',
  },
  {
    id: 'ba-4',
    title: 'Designer Bridal Nail Art',
    category: 'Nails',
    beforeImage: 'https://images.unsplash.com/photo-1519014816548-bf5fe059798b?auto=format&fit=crop&q=80&w=800',
    afterImage: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&q=80&w=800',
    description: 'Custom gel extensions with Swarovski stones and rose gold foil accents.',
  },
];

export const GALLERY_PHOTOS: GalleryPhoto[] = [
  {
    id: 'gal-1',
    title: 'South Indian Telugu Bride Makeup',
    category: 'Bridal',
    image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&q=80&w=800',
    likes: 342,
  },
  {
    id: 'gal-2',
    title: 'Silk Keratin Smoothening Hair',
    category: 'Hair',
    image: 'https://images.unsplash.com/photo-1560869713-7d0a29430803?auto=format&fit=crop&q=80&w=800',
    likes: 219,
  },
  {
    id: 'gal-3',
    title: 'Glass Skin Dewy Facial Treatment',
    category: 'Skin',
    image: 'https://images.unsplash.com/photo-1512290900673-70020016a1b8?auto=format&fit=crop&q=80&w=800',
    likes: 184,
  },
  {
    id: 'gal-4',
    title: 'Engagement Glam Makeover',
    category: 'Makeup',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=800',
    likes: 412,
  },
  {
    id: 'gal-5',
    title: 'Ombre Gel Extensions & Nail Art',
    category: 'Nails',
    image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&q=80&w=800',
    likes: 298,
  },
  {
    id: 'gal-6',
    title: 'Royal Saree Draping & Hair Flower Styling',
    category: 'Bridal',
    image: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&q=80&w=800',
    likes: 510,
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Kavya Madhav',
    role: 'Vizag Bride 2025',
    service: 'Platinum Bridal Package',
    rating: 5,
    comment: 'I absolutely loved my bridal makeover! Chanti ma\'am and her team made me look like a dream for both my muhurtham and reception in Visakhapatnam. The HD makeup lasted all night without touchups.',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200',
    date: '2 weeks ago',
  },
  {
    id: 'test-2',
    name: 'Sravanthi Reddy',
    role: 'Regular Client',
    service: 'Gold Glow Facial & Hair Spa',
    rating: 5,
    comment: 'The salon is extremely clean, luxurious, and peaceful. The staff at Dwarakanagar are friendly and gentle. Highly recommended for facial treatments and hair keratin!',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=200',
    date: '1 month ago',
  },
  {
    id: 'test-3',
    name: 'Anusha Varma',
    role: 'IT Professional',
    service: 'Hair Smoothening & Nail Studio',
    rating: 5,
    comment: 'Best beauty parlour in Visakhapatnam hands down! Reasonable pricing with 5-star premium products. My hair smoothening results are so shiny and natural.',
    avatar: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&q=80&w=200',
    date: '3 weeks ago',
  },
  {
    id: 'test-4',
    name: 'Divya Sri',
    role: 'Bridal Client',
    service: 'Pre-Bridal Packages',
    rating: 5,
    comment: 'Took the pre-bridal skin care package 2 months before my wedding. My skin tone became so even and glowing. Thank you Chanti Beauty Studio!',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200',
    date: '2 months ago',
  },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'blog-1',
    title: 'Essential Pre-Bridal Skincare Checklist for Vizag Brides',
    slug: 'pre-bridal-skincare-checklist',
    category: 'Bridal Care',
    excerpt: 'Prepare your skin for the perfect wedding glow with this step-by-step timeline starting 3 months before your big day.',
    content: [
      'Your wedding day is one of the most memorable milestones in your life, and achieve flawless bridal makeup begins with healthy, well-nourished skin.',
      '3 Months Before: Schedule a skin consultation at Chanti Beauty Parlour. Begin regular organic cleanups and hydration facials. Maintain a strict daily routine with SPF 50+ to protect against coastal Visakhapatnam sun.',
      '1 Month Before: Start deep gold facials, body polishing, and hair detox therapies. Avoid experimenting with new home remedies or aggressive chemical peels.',
      '1 Week Before: Complete eyebrow shaping, full body waxing, nail gel overlays, and relaxing aromatherapy massages.'
    ],
    author: 'T. Chanti',
    date: 'July 15, 2026',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1512290900673-70020016a1b8?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'blog-2',
    title: '5 Secrets to Maintain Silky Straight Hair After Keratin',
    slug: 'keratin-hair-maintenance-tips',
    category: 'Hair Care',
    excerpt: 'How to prolong your salon hair smoothening and keep your locks frizz-free in humid weather.',
    content: [
      'Keratin treatments give your hair enviable shine and manageable texture. However, living in humid coastal areas like Visakhapatnam requires smart post-treatment care.',
      '1. Use Sulfate-Free Shampoos: Standard sulfates strip away the keratin protective coating. Always opt for salon-grade sulfate-free cleansers.',
      '2. Cold Water Rinse: Rinsing your hair with cool water seals hair cuticles and boosts shine.',
      '3. Deep Condition Weekly: Apply a rich protein mask for 15 minutes once a week to maintain elasticity.'
    ],
    author: 'Priya Sharma',
    date: 'June 28, 2026',
    readTime: '3 min read',
    image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'blog-3',
    title: 'HD Makeup vs. Airbrush Makeup: Which Should You Choose?',
    slug: 'hd-vs-airbrush-bridal-makeup',
    category: 'Makeup Trends',
    excerpt: 'Demystifying the two most popular bridal makeup techniques to help you choose the right fit for your event.',
    content: [
      'Choosing between HD and Airbrush makeup often confuses brides-to-be. Both offer long-lasting coverage but suit different skin types and event formats.',
      'HD Makeup utilizes micro-fine light-reflecting pigments that hide imperfections under high-definition cameras while feeling weightless on normal to dry skin.',
      'Airbrush Makeup sprays a fine mist using a specialized compressor, creating a waterproof, sweat-resistant silicone layer ideal for hot Indian wedding venues.'
    ],
    author: 'T. Chanti',
    date: 'May 18, 2026',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80&w=800',
  },
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'Do I need to book an appointment in advance?',
    answer: 'We highly recommend booking an appointment at least 1-2 days in advance, especially on weekends and auspicious wedding dates, to ensure zero waiting time. Walk-ins are accepted based on slot availability.',
    category: 'General',
  },
  {
    id: 'faq-2',
    question: 'Which bridal makeup package is best for South Indian Telugu weddings?',
    answer: 'Our Platinum Royal Bridal Package is the top choice! It includes HD/Airbrush makeup suitable for long wedding rituals, saree draping with traditional pleating, hair flower styling, and pre-bridal skin glow treatments.',
    category: 'Bridal',
  },
  {
    id: 'faq-3',
    question: 'What cosmetics and brands do you use in the parlour?',
    answer: 'We strictly use 100% authentic premium cosmetics including MAC, L\'Oréal Professionnel, Lakmé Absolute, Schwarzkopf, Wella, Maybelline New York, and O3+ skin products.',
    category: 'Services',
  },
  {
    id: 'faq-4',
    question: 'Do you provide doorstep / home bridal services in Visakhapatnam?',
    answer: 'Yes! We provide venue and home bridal makeover services across Visakhapatnam, including Dwarakanagar, MVP Colony, Gajuwaka, Beach Road, and surrounding areas with prior booking.',
    category: 'Bridal',
  },
  {
    id: 'faq-5',
    question: 'How long does a full bridal makeover take on the wedding day?',
    answer: 'A complete bridal transformation (makeup, hair styling, saree draping, and jewelry setting) typically takes 2.5 to 3 hours. We schedule carefully so the bride is ready relaxed and on time.',
    category: 'Bridal',
  },
  {
    id: 'faq-6',
    question: 'Can I customize the beauty and bridal packages?',
    answer: 'Absolutely! You can mix and match facial treatments, hair spa sessions, body polishes, and nail extensions based on your personal beauty goals and budget.',
    category: 'Packages',
  },
];

export const BRAND_LOGOS = [
  { name: 'L\'Oréal Professionnel', logo: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=200' },
  { name: 'MAC Cosmetics', logo: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80&w=200' },
  { name: 'Lakmé Absolute', logo: 'https://images.unsplash.com/photo-1512290900673-70020016a1b8?auto=format&fit=crop&q=80&w=200' },
  { name: 'Schwarzkopf', logo: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=200' },
  { name: 'Wella Professionals', logo: 'https://images.unsplash.com/photo-1560869713-7d0a29430803?auto=format&fit=crop&q=80&w=200' },
  { name: 'Maybelline New York', logo: 'https://images.unsplash.com/photo-1595959183082-7b570b7e08e2?auto=format&fit=crop&q=80&w=200' },
];
