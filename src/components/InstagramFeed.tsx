import React from 'react';
import { Instagram, Heart, MessageCircle, ExternalLink } from 'lucide-react';
import { SALON_INFO } from '../data/salonData';

export const InstagramFeed: React.FC = () => {
  const instaPosts = [
    {
      id: 'ig-1',
      image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&q=80&w=600',
      likes: 482,
      comments: 38,
      caption: 'Royal South Indian bride glam in Visakhapatnam ✨ #ChantiBridalStudio',
    },
    {
      id: 'ig-2',
      image: 'https://images.unsplash.com/photo-1560869713-7d0a29430803?auto=format&fit=crop&q=80&w=600',
      likes: 310,
      comments: 24,
      caption: 'Silk keratin smoothening transformation 💇‍♀️ #VizagSalon #HairGoals',
    },
    {
      id: 'ig-3',
      image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=600',
      likes: 295,
      comments: 19,
      caption: '24K Gold facial glow ritual for the weekend ✨ #SelfCareVizag',
    },
    {
      id: 'ig-4',
      image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&q=80&w=600',
      likes: 520,
      comments: 45,
      caption: '3D Bridal nail gel extensions with Rose Gold accents 💅 #NailStudio',
    },
  ];

  return (
    <section className="py-20 bg-stone-900 border-t border-b border-stone-800 text-stone-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12 text-center md:text-left">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#D4AF8A] uppercase tracking-widest bg-stone-950 px-3.5 py-1 rounded-full border border border-[#D4AF8A]/30 mb-2">
              <Instagram className="w-3.5 h-3.5 text-[#D4AF8A]" />
              <span>@chantibeautyparlour</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-stone-100">
              Follow Us On Instagram
            </h2>
          </div>

          <a
            href={SALON_INFO.instagram}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 bg-gradient-to-r from-amber-600 via-rose-600 to-purple-600 text-white font-bold px-6 py-3 rounded-full text-xs sm:text-sm shadow-xl hover:opacity-90 transition-opacity"
          >
            <Instagram className="w-4 h-4" />
            <span>Follow Us @chantibeautyparlour</span>
            <ExternalLink className="w-3.5 h-3.5 ml-1" />
          </a>
        </div>

        {/* Feed Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {instaPosts.map((post) => (
            <a
              key={post.id}
              href={SALON_INFO.instagram}
              target="_blank"
              rel="noreferrer"
              className="group relative h-72 rounded-3xl overflow-hidden border border-stone-800 hover:border-[#D4AF8A] transition-all shadow-lg block"
            >
              <img
                src={post.image}
                alt={post.caption}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-stone-950/70 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-between p-5 text-white">
                <div className="flex justify-end">
                  <Instagram className="w-5 h-5 text-[#D4AF8A]" />
                </div>

                <div>
                  <p className="text-xs text-stone-200 line-clamp-2 mb-3 font-light">
                    {post.caption}
                  </p>
                  <div className="flex items-center gap-4 text-xs font-semibold text-stone-300">
                    <span className="flex items-center gap-1 text-rose-400">
                      <Heart className="w-3.5 h-3.5 fill-rose-500" />
                      {post.likes}
                    </span>
                    <span className="flex items-center gap-1 text-stone-300">
                      <MessageCircle className="w-3.5 h-3.5" />
                      {post.comments}
                    </span>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
