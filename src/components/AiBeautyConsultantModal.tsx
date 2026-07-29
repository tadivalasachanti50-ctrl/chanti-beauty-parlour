import React, { useState } from 'react';
import { X, Sparkles, Send, CheckCircle2, Heart, HelpCircle, ArrowRight } from 'lucide-react';
import { BeautyConsultationResponse } from '../types';

interface AiBeautyConsultantModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectService: (serviceName: string) => void;
}

export const AiBeautyConsultantModal: React.FC<AiBeautyConsultantModalProps> = ({
  isOpen,
  onClose,
  onSelectService,
}) => {
  const [skinType, setSkinType] = useState('Combination');
  const [hairType, setHairType] = useState('Frizzy / Wavy');
  const [eventType, setEventType] = useState('Bridal / Wedding');
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<BeautyConsultationResponse | null>(null);

  if (!isOpen) return null;

  const handleConsult = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    setLoading(true);
    setResult(null);

    try {
      const response = await fetch('/api/beauty-consultant', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query, skinType, hairType, eventType }),
      });

      const data = await response.json();
      setResult(data);
    } catch (error) {
      console.error('Error fetching AI consultation:', error);
      setResult({
        recommendation:
          'Based on your skin and hair profile, we strongly recommend our Gold Glow Luxury Package at Dwarakanagar, Visakhapatnam for immediate hydration and salon radiance.',
        suggestedServices: ['24K Gold Glow Facial', 'Intense Moisture Hair Spa', 'HD Bridal Makeovers'],
        suggestedPackage: 'Gold Glow Luxury Package (₹3,499)',
        homeCareTips: [
          'Apply SPF 50+ broad-spectrum sunscreen daily.',
          'Drink at least 3 liters of water for skin cell hydration.',
          'Use sulfate-free shampoo for hair smoothening retention.'
        ]
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div
        className="bg-stone-900 border border-stone-800 rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl relative text-stone-100 max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 bg-stone-950 border-b border-stone-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-full bg-[#D4AF8A]/20 text-[#D4AF8A] border border-[#D4AF8A]/40">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-serif text-xl font-bold text-stone-100">
                Chanti AI Beauty Advisor
              </h3>
              <p className="text-xs text-stone-400">
                Personalized skincare & bridal recommendations powered by AI
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-stone-900 text-stone-400 hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1 text-xs sm:text-sm">
          {!result ? (
            <form onSubmit={handleConsult} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="block text-[11px] font-semibold text-stone-300 mb-1">
                    Skin Type
                  </label>
                  <select
                    value={skinType}
                    onChange={(e) => setSkinType(e.target.value)}
                    className="w-full bg-stone-950 border border-stone-800 rounded-xl px-3 py-2 text-stone-200 focus:outline-none focus:border-[#D4AF8A]"
                  >
                    <option value="Dry / Dehydrated">Dry / Dehydrated</option>
                    <option value="Oily / Acne Prone">Oily / Acne Prone</option>
                    <option value="Combination">Combination</option>
                    <option value="Sensitive">Sensitive</option>
                    <option value="Normal Glow">Normal Glow</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-stone-300 mb-1">
                    Hair Texture
                  </label>
                  <select
                    value={hairType}
                    onChange={(e) => setHairType(e.target.value)}
                    className="w-full bg-stone-950 border border-stone-800 rounded-xl px-3 py-2 text-stone-200 focus:outline-none focus:border-[#D4AF8A]"
                  >
                    <option value="Frizzy / Wavy">Frizzy / Wavy</option>
                    <option value="Dry / Damaged">Dry / Damaged</option>
                    <option value="Straight / Thin">Straight / Thin</option>
                    <option value="Color Treated">Color Treated</option>
                    <option value="Scalp Dandruff">Scalp Dandruff</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-stone-300 mb-1">
                    Occasion / Goal
                  </label>
                  <select
                    value={eventType}
                    onChange={(e) => setEventType(e.target.value)}
                    className="w-full bg-stone-950 border border-stone-800 rounded-xl px-3 py-2 text-stone-200 focus:outline-none focus:border-[#D4AF8A]"
                  >
                    <option value="Bridal / Wedding">Bridal / Wedding</option>
                    <option value="Monthly Self Care">Monthly Self Care</option>
                    <option value="Party / Reception">Party / Reception</option>
                    <option value="Hair Repair">Hair Repair</option>
                    <option value="Detan & Brightening">Detan & Brightening</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-stone-300 mb-1">
                  Describe Your Main Beauty Goal or Concern *
                </label>
                <textarea
                  rows={3}
                  required
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="e.g. I have a wedding in 2 months. My skin feels dry and dull, and my hair gets frizzy in humid Visakhapatnam weather. What treatments should I choose?"
                  className="w-full bg-stone-950 border border-stone-800 rounded-xl p-3 text-stone-100 focus:outline-none focus:border-[#D4AF8A]"
                />
              </div>

              <button
                type="submit"
                disabled={loading || !query.trim()}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#D4AF8A] to-[#B88E65] text-stone-950 font-bold flex items-center justify-center gap-2 shadow-lg hover:from-[#c29c78] hover:to-[#a37952] disabled:opacity-50"
              >
                {loading ? (
                  <span>Generating Custom Beauty Analysis...</span>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4" />
                    <span>Get AI Skin & Beauty Recommendation</span>
                  </>
                )}
              </button>
            </form>
          ) : (
            /* Results View */
            <div className="space-y-5 animate-fadeIn">
              <div className="p-4 rounded-2xl bg-amber-950/30 border border-amber-800/40 space-y-2">
                <span className="text-xs font-bold text-[#D4AF8A] uppercase tracking-wider block">
                  Expert Beauty Advice
                </span>
                <p className="text-stone-200 font-light leading-relaxed">
                  {result.recommendation}
                </p>
              </div>

              {result.suggestedPackage && (
                <div className="p-3.5 rounded-xl bg-stone-950 border border-stone-800 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-stone-400 block uppercase">Recommended Package</span>
                    <span className="font-serif font-bold text-stone-100">{result.suggestedPackage}</span>
                  </div>
                  <button
                    onClick={() => {
                      onClose();
                      onSelectService(result.suggestedPackage!);
                    }}
                    className="px-3.5 py-1.5 rounded-lg bg-[#D4AF8A] text-stone-950 font-bold text-xs"
                  >
                    Select Package
                  </button>
                </div>
              )}

              <div>
                <h4 className="font-serif font-bold text-stone-100 mb-2">Recommended Salon Treatments:</h4>
                <div className="space-y-2">
                  {result.suggestedServices.map((service, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-xl bg-stone-950 border border-stone-800 flex items-center justify-between"
                    >
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#D4AF8A]" />
                        <span className="font-semibold text-stone-200">{service}</span>
                      </div>
                      <button
                        onClick={() => {
                          onClose();
                          onSelectService(service);
                        }}
                        className="text-xs text-[#D4AF8A] font-bold flex items-center gap-1 hover:underline"
                      >
                        <span>Book This</span>
                        <ArrowRight className="w-3 h-3" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {result.homeCareTips && result.homeCareTips.length > 0 && (
                <div className="p-4 rounded-2xl bg-stone-950 border border-stone-800 space-y-2">
                  <h4 className="font-serif font-bold text-stone-200">Home Care Tips:</h4>
                  <ul className="space-y-1 text-stone-400 font-light">
                    {result.homeCareTips.map((tip, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-[#D4AF8A] font-bold">•</span>
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <button
                onClick={() => setResult(null)}
                className="w-full py-2.5 rounded-xl bg-stone-950 border border-stone-800 text-stone-300 font-semibold text-xs hover:text-white"
              >
                Ask Another Question
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
