import React, { useState } from 'react';
import { X, Star, Send, CheckCircle } from 'lucide-react';
import { Testimonial } from '../types';

interface ReviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddTestimonial: (newReview: Testimonial) => void;
}

export const ReviewModal: React.FC<ReviewModalProps> = ({ isOpen, onClose, onAddTestimonial }) => {
  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [service, setService] = useState('Bridal Makeup');
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !comment) return;

    const newReview: Testimonial = {
      id: 'rev-' + Date.now(),
      name,
      role: role || 'Visakhapatnam Client',
      service,
      rating,
      comment,
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200',
      date: 'Just now',
    };

    onAddTestimonial(newReview);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 1800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div
        className="bg-stone-900 border border-stone-800 rounded-3xl max-w-md w-full p-6 shadow-2xl relative text-stone-100"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-stone-950 text-stone-400 hover:text-white"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-8 text-center space-y-3">
            <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center border border-emerald-500/40">
              <CheckCircle className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-xl font-bold text-stone-100">Thank You!</h3>
            <p className="text-xs text-stone-300">Your review has been submitted for Chanti Beauty Parlour.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <h3 className="font-serif text-2xl font-bold text-stone-100">Write a Testimonial</h3>
            <p className="text-xs text-stone-400">Share your beauty experience at our Dwarakanagar salon.</p>

            <div>
              <label className="block text-xs text-stone-300 font-medium mb-1">Your Rating</label>
              <div className="flex gap-1.5">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    type="button"
                    key={star}
                    onClick={() => setRating(star)}
                    className="p-1 focus:outline-none"
                  >
                    <Star
                      className={`w-6 h-6 ${
                        star <= rating
                          ? 'text-amber-400 fill-amber-400'
                          : 'text-stone-600'
                      }`}
                    />
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-xs text-stone-300 font-medium mb-1">Full Name *</label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Kavya Madhav"
                className="w-full bg-stone-950 border border-stone-800 rounded-xl px-3.5 py-2.5 text-xs text-stone-100 focus:outline-none focus:border-[#D4AF8A]"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs text-stone-300 font-medium mb-1">Role / Area</label>
                <input
                  type="text"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  placeholder="e.g. Vizag Bride"
                  className="w-full bg-stone-950 border border-stone-800 rounded-xl px-3.5 py-2.5 text-xs text-stone-100 focus:outline-none focus:border-[#D4AF8A]"
                />
              </div>

              <div>
                <label className="block text-xs text-stone-300 font-medium mb-1">Service Availed</label>
                <select
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full bg-stone-950 border border-stone-800 rounded-xl px-3.5 py-2.5 text-xs text-stone-100 focus:outline-none focus:border-[#D4AF8A]"
                >
                  <option value="Bridal Makeup">Bridal Makeup</option>
                  <option value="Hair Smoothening & Spa">Hair Smoothening</option>
                  <option value="Gold Glow Facial">Gold Glow Facial</option>
                  <option value="Nail Art Studio">Nail Studio</option>
                  <option value="Full Package">Beauty Package</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs text-stone-300 font-medium mb-1">Your Feedback *</label>
              <textarea
                required
                rows={3}
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="Describe your salon experience, makeup finish, cleanliness, or staff friendliness..."
                className="w-full bg-stone-950 border border-stone-800 rounded-xl p-3 text-xs text-stone-100 focus:outline-none focus:border-[#D4AF8A]"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-[#D4AF8A] to-[#B88E65] text-stone-950 font-bold py-3 rounded-xl text-xs flex items-center justify-center gap-2 shadow-md hover:from-[#c29c78] hover:to-[#a37952]"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Submit Review</span>
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
