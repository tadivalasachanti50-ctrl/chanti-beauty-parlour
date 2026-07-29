import React, { useState } from 'react';
import { FAQ_ITEMS } from '../data/salonData';
import { ChevronDown, Search, HelpCircle } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openId, setOpenId] = useState<string>('faq-1');
  const [searchQuery, setSearchQuery] = useState('');

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? '' : id);
  };

  const filteredFaqs = FAQ_ITEMS.filter(
    (item) =>
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section id="faq" className="py-20 bg-white text-stone-900 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10">
          <span className="text-[#0A2317] text-xs font-bold uppercase tracking-widest bg-stone-100 border border-stone-300 px-3.5 py-1 rounded-full">
            Help & Information
          </span>
          <h2 className="font-playfair text-3xl sm:text-4xl font-black text-[#0A2317] mt-3 mb-3">
            Frequently Asked Questions
          </h2>
          <p className="text-stone-700 text-sm font-medium">
            Got questions about our beauty services or bridal bookings in Visakhapatnam? We have answers.
          </p>
        </div>

        {/* Search Input */}
        <div className="relative mb-8">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-500" />
          <input
            type="text"
            placeholder="Search questions (e.g., home service, bridal package, products)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-white border-2 border-stone-200 rounded-2xl pl-11 pr-4 py-3 text-xs sm:text-sm text-stone-900 focus:outline-none focus:border-[#0A2317] transition-colors shadow-sm font-semibold"
          />
        </div>

        {/* FAQ Accordions */}
        <div className="space-y-3">
          {filteredFaqs.length === 0 ? (
            <div className="text-center py-8 text-stone-500 text-sm font-bold">
              No matching questions found. Feel free to call us at +91 98481 23456!
            </div>
          ) : (
            filteredFaqs.map((faq) => {
              const isOpen = openId === faq.id;
              return (
                <div
                  key={faq.id}
                  className="bg-stone-50 border-2 border-stone-200 rounded-2xl overflow-hidden transition-all duration-200 shadow-sm"
                >
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 font-playfair font-bold text-[#0A2317] text-sm sm:text-base hover:text-[#8C6D46] transition-colors"
                  >
                    <span className="flex items-center gap-2.5">
                      <HelpCircle className="w-4 h-4 text-[#0A2317] shrink-0" />
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#0A2317] shrink-0 transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 text-xs sm:text-sm text-stone-700 font-semibold leading-relaxed border-t border-stone-200 pt-3 animate-fadeIn">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>
      </div>
    </section>
  );
};
