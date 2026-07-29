import React, { useState } from 'react';
import { TESTIMONIALS } from '../data/salonData';
import { Testimonial } from '../types';
import { Star, Quote, ChevronLeft, ChevronRight, PlusCircle, Sparkles } from 'lucide-react';
import { ReviewModal } from './ReviewModal';

export const TestimonialsSection: React.FC = () => {
  const [testimonialsList, setTestimonialsList] = useState<Testimonial[]>(TESTIMONIALS);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [reviewModalOpen, setReviewModalOpen] = useState(false);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonialsList.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonialsList.length) % testimonialsList.length);
  };

  const handleAddReview = (newReview: Testimonial) => {
    setTestimonialsList([newReview, ...testimonialsList]);
    setCurrentIndex(0);
  };

  const currentTestimonial = testimonialsList[currentIndex];

  return (
    <section id="testimonials" className="py-20 bg-white text-stone-900 relative overflow-hidden border-t border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-[#0A2317] text-xs font-bold uppercase tracking-widest bg-stone-100 border border-stone-300 px-3.5 py-1 rounded-full">
              Client Praise
            </span>
            <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-black text-[#0A2317] mt-3">
              Words From Our Happy Clients
            </h2>
          </div>

          <button
            onClick={() => setReviewModalOpen(true)}
            className="self-start md:self-auto flex items-center gap-2 bg-[#0A2317] hover:bg-[#123524] text-white font-bold px-5 py-2.5 rounded-full text-xs transition-all shadow-md"
          >
            <PlusCircle className="w-4 h-4 text-[#E8D1B5]" />
            <span>Write a Review</span>
          </button>
        </div>

        {/* Carousel Container */}
        <div className="bg-white border-2 border-stone-200 rounded-3xl p-6 sm:p-10 shadow-xl relative">
          <Quote className="absolute top-6 right-8 w-16 h-16 text-stone-200 pointer-events-none" />

          <div className="max-w-3xl mx-auto text-center space-y-6">
            {/* Stars */}
            <div className="flex justify-center gap-1 text-amber-500">
              {[...Array(currentTestimonial.rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-500" />
              ))}
            </div>

            {/* Comment Quote */}
            <p className="font-playfair text-lg sm:text-2xl text-stone-800 leading-relaxed italic font-medium">
              "{currentTestimonial.comment}"
            </p>

            {/* Client Info */}
            <div className="flex flex-col items-center gap-3 pt-2">
              <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-[#0A2317] p-0.5 shadow-md">
                <img
                  src={currentTestimonial.avatar}
                  alt={currentTestimonial.name}
                  className="w-full h-full object-cover rounded-full"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div>
                <h4 className="font-playfair text-lg font-black text-[#0A2317]">{currentTestimonial.name}</h4>
                <div className="text-xs text-stone-600 flex items-center justify-center gap-2 mt-0.5 font-bold">
                  <span className="text-[#8C6D46]">{currentTestimonial.service}</span>
                  <span>•</span>
                  <span>{currentTestimonial.role}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Carousel Controls */}
          <div className="flex items-center justify-between mt-8 pt-6 border-t border-stone-200">
            <div className="text-xs text-stone-600 font-bold">
              Review {currentIndex + 1} of {testimonialsList.length}
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={handlePrev}
                className="p-3 rounded-full bg-stone-100 text-stone-800 hover:text-[#0A2317] border border-stone-300 hover:border-[#0A2317] transition-colors shadow-sm"
                aria-label="Previous review"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                className="p-3 rounded-full bg-stone-100 text-stone-800 hover:text-[#0A2317] border border-stone-300 hover:border-[#0A2317] transition-colors shadow-sm"
                aria-label="Next review"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <ReviewModal
        isOpen={reviewModalOpen}
        onClose={() => setReviewModalOpen(false)}
        onAddTestimonial={handleAddReview}
      />
    </section>
  );
};
