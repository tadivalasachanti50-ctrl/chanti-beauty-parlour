import React, { useState } from 'react';
import { Sparkles, Calendar, CheckCircle2, Heart, Play, Pause, Volume2, VolumeX, Film, Image as ImageIcon } from 'lucide-react';
import bridalVideoFrame from '../assets/images/bridal_video_frame_1784967500286.jpg';
import royalBridalGoldLook from '../assets/images/royal_bridal_gold_look_1784967908255.jpg';

interface BridalSectionProps {
  onOpenBooking: (serviceName?: string) => void;
}

export const BridalSection: React.FC<BridalSectionProps> = ({ onOpenBooking }) => {
  const [activeMedia, setActiveMedia] = useState<'video' | 'portrait'>('portrait');
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [selectedItems, setSelectedItems] = useState<string[]>([
    'HD Bridal Makeup',
    'Hairstyling & Flower Setting',
    'Saree Draping',
  ]);

  const bridalOptions = [
    { name: 'HD Bridal Makeup', price: 8999, desc: 'Ultra-HD flawless coverage lasting 16+ hours' },
    { name: 'Airbrush Bridal Makeup', price: 11999, desc: 'Waterproof mist application for heavy wedding lighting' },
    { name: 'Reception Glam Makeup', price: 6999, desc: 'Sophisticated evening look with shimmer highlights' },
    { name: 'Pre-Bridal Skin Care Package', price: 4999, desc: 'Gold facial, full body polish, detan & waxing' },
    { name: 'Hairstyling & Flower Setting', price: 2499, desc: 'Traditional South Indian braid or modern bridal updo' },
    { name: 'Saree Draping & Box Pleating', price: 1200, desc: 'Silk saree box pleating & pin setting' },
  ];

  const toggleOption = (name: string) => {
    if (selectedItems.includes(name)) {
      setSelectedItems(selectedItems.filter((item) => item !== name));
    } else {
      setSelectedItems([...selectedItems, name]);
    }
  };

  const calculatedTotal = bridalOptions
    .filter((opt) => selectedItems.includes(opt.name))
    .reduce((sum, opt) => sum + opt.price, 0);

  return (
    <section id="bridal" className="py-20 bg-stone-900 text-stone-100 relative overflow-hidden border-t border-b border-stone-800">
      {/* Background Video Frame Overlay Atmosphere */}
      <div className="absolute inset-0 z-0">
        <img
          src={bridalVideoFrame}
          alt="Bridal Studio Video Frame Background"
          className="w-full h-full object-cover opacity-20 filter blur-sm scale-105"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-stone-950 via-stone-950/90 to-stone-950/80" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Interactive Royal Gold Portrait & 4K Video Frame Player */}
          <div className="lg:col-span-5 relative space-y-4">
            <div className="relative rounded-3xl overflow-hidden border-2 border-[#E8D1B5]/30 shadow-2xl group bg-stone-950">
              {activeMedia === 'portrait' ? (
                /* Royal Gold Bridal Portrait View */
                <div className="relative h-[520px] sm:h-[580px] w-full overflow-hidden animate-fadeIn">
                  <img
                    src={royalBridalGoldLook}
                    alt="Royal Gold Bridal Makeup Look - Chanti Beauty Parlour"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />

                  {/* Top Badge */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-20">
                    <div className="flex items-center gap-2 bg-black/70 backdrop-blur-md px-3 py-1.5 rounded-full border border-[#E8D1B5]/40 text-xs text-[#E8D1B5] font-bold shadow-lg">
                      <Sparkles className="w-3.5 h-3.5 text-[#E8D1B5]" />
                      <span className="text-[10px] tracking-wider uppercase">Royal Gold Look</span>
                    </div>

                    <span className="bg-[#0A2317] text-white text-[10px] font-black uppercase px-3 py-1 rounded-full border border-[#E8D1B5]/30 shadow-md">
                      Signature Studio Look
                    </span>
                  </div>

                  {/* Bottom Portrait Caption */}
                  <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/95 via-black/70 to-transparent space-y-1.5 z-20">
                    <span className="text-[10px] uppercase font-black text-[#E8D1B5] tracking-widest block">
                      Royal Champagne Gold Couture
                    </span>
                    <h4 className="font-playfair text-xl font-black text-white">
                      Traditional Matha Patti & HD Glow
                    </h4>
                    <p className="text-stone-300 text-xs font-medium line-clamp-2">
                      Custom bridal jewelry setting, kohl eye makeup, henna artwork, and flawless dewy complexion.
                    </p>
                  </div>
                </div>
              ) : (
                /* Main Video Frame View */
                <div className="relative h-[520px] sm:h-[580px] w-full overflow-hidden animate-fadeIn">
                  <img
                    src={bridalVideoFrame}
                    alt="South Indian Bridal Makeover Video Frame"
                    className={`w-full h-full object-cover transition-all duration-700 ${
                      isPlaying ? 'scale-105 filter brightness-105' : 'scale-100 filter brightness-90'
                    }`}
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Video Vignette & Gradients */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40" />

                  {/* Top Video Header Controls Bar */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-20">
                    <div className="flex items-center gap-2 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20 text-xs text-white font-bold">
                      <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                      <Film className="w-3.5 h-3.5 text-[#E8D1B5]" />
                      <span className="text-[10px] tracking-wider uppercase">4K Studio Reel</span>
                    </div>

                    <button
                      onClick={() => setIsMuted(!isMuted)}
                      className="p-2 rounded-full bg-black/60 backdrop-blur-md text-white/90 hover:text-white border border-white/20 transition-all"
                      title={isMuted ? 'Unmute' : 'Mute'}
                    >
                      {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-[#E8D1B5]" />}
                    </button>
                  </div>

                  {/* Center Big Play/Pause Button */}
                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-black/60 border-2 border-[#E8D1B5] text-[#E8D1B5] flex items-center justify-center backdrop-blur-md hover:scale-110 hover:bg-[#0A2317] hover:text-white transition-all shadow-2xl z-20"
                  >
                    {isPlaying ? (
                      <Pause className="w-7 h-7 fill-current" />
                    ) : (
                      <Play className="w-7 h-7 fill-current ml-1" />
                    )}
                  </button>

                  {/* Bottom Video Player Overlay Controls */}
                  <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/95 via-black/70 to-transparent space-y-3 z-20">
                    {/* Progress Scrubber */}
                    <div className="w-full h-1 bg-white/20 rounded-full overflow-hidden">
                      <div className={`h-full bg-[#E8D1B5] rounded-full transition-all duration-300 ${isPlaying ? 'w-2/3 animate-pulse' : 'w-1/3'}`} />
                    </div>

                    <div className="flex items-center justify-between text-xs text-white/90">
                      <div>
                        <span className="text-[10px] uppercase font-bold text-[#E8D1B5] tracking-widest block">Bridal Studio Frame</span>
                        <h4 className="font-playfair text-base font-bold text-white">Chanti Bridal Transformation</h4>
                      </div>
                      <div className="font-mono text-[11px] font-bold text-stone-300 bg-black/50 px-2.5 py-1 rounded-md border border-white/10">
                        00:18 / 00:45
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Media Selector Tabs */}
            <div className="flex items-center gap-2 p-1.5 bg-stone-950/90 border border-stone-800 rounded-2xl">
              <button
                onClick={() => setActiveMedia('portrait')}
                className={`flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-xl text-xs font-bold transition-all ${
                  activeMedia === 'portrait'
                    ? 'bg-[#0A2317] text-white border border-[#E8D1B5]/30 shadow-md'
                    : 'text-stone-400 hover:text-stone-200'
                }`}
              >
                <ImageIcon className="w-3.5 h-3.5 text-[#E8D1B5]" />
                <span>Royal Gold Look</span>
              </button>

              <button
                onClick={() => setActiveMedia('video')}
                className={`flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-xl text-xs font-bold transition-all ${
                  activeMedia === 'video'
                    ? 'bg-[#0A2317] text-white border border-[#E8D1B5]/30 shadow-md'
                    : 'text-stone-400 hover:text-stone-200'
                }`}
              >
                <Film className="w-3.5 h-3.5 text-[#E8D1B5]" />
                <span>4K Video Frame Reel</span>
              </button>
            </div>
          </div>

          {/* Right Column: Bridal Details & Interactive Customizer */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-stone-800 border border-stone-700 text-[#E8D1B5] text-xs font-bold uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5 text-[#E8D1B5]" />
              <span>Royal Bridal Studio</span>
            </div>

            <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
              Make Your Dream Wedding Look <span className="text-[#E8D1B5] italic">Come True</span>
            </h2>

            <p className="text-stone-300 text-sm sm:text-base font-medium leading-relaxed">
              From engagement to reception, our bridal experts create flawless HD and Airbrush makeup, hair extensions, and saree pleating that perfectly match your personality, outfit, and wedding theme in Visakhapatnam.
            </p>

            {/* Interactive Pre-Bridal Customizer Box */}
            <div className="p-6 rounded-3xl bg-stone-950/80 border-2 border-stone-800 shadow-2xl space-y-4 backdrop-blur-sm">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-playfair text-lg font-black text-white flex items-center gap-2">
                    <Heart className="w-4 h-4 text-[#E8D1B5] fill-rose-500" />
                    Custom Bridal Package Estimator
                  </h3>
                  <p className="text-xs text-stone-400 font-semibold">Select the bridal services you need for your event:</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                {bridalOptions.map((opt) => {
                  const isChecked = selectedItems.includes(opt.name);
                  return (
                    <div
                      key={opt.name}
                      onClick={() => toggleOption(opt.name)}
                      className={`p-3 rounded-xl border-2 text-left cursor-pointer transition-all flex items-start gap-2.5 ${
                        isChecked
                          ? 'bg-[#0A2317]/80 border-[#E8D1B5] text-white shadow-md'
                          : 'bg-stone-900/60 border-stone-800 text-stone-400 hover:border-stone-700 hover:text-stone-200'
                      }`}
                    >
                      <div className={`mt-0.5 p-0.5 rounded-full ${isChecked ? 'text-[#E8D1B5]' : 'text-stone-500'}`}>
                        <CheckCircle2 className="w-4 h-4" />
                      </div>
                      <div className="overflow-hidden flex-1">
                        <div className="text-xs font-black text-white flex justify-between items-center">
                          <span>{opt.name}</span>
                          <span className="text-[#E8D1B5]">₹{opt.price.toLocaleString('en-IN')}</span>
                        </div>
                        <p className="text-[11px] text-stone-400 font-medium truncate">{opt.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Total & Action */}
              <div className="pt-4 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <div className="text-xs text-stone-400 font-semibold">Estimated Custom Package:</div>
                  <div className="text-2xl font-playfair font-black text-white">
                    ₹{calculatedTotal.toLocaleString('en-IN')}{' '}
                    <span className="text-xs text-[#E8D1B5] font-bold">(Incl. Trial Session)</span>
                  </div>
                </div>

                <button
                  onClick={() =>
                    onOpenBooking(
                      `Custom Bridal Package (${selectedItems.join(', ')}) - Approx ₹${calculatedTotal.toLocaleString('en-IN')}`
                    )
                  }
                  className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#0A2317] hover:bg-[#123524] text-white border border-[#E8D1B5]/30 font-extrabold px-6 py-3.5 rounded-full text-sm shadow-xl transition-all"
                >
                  <Calendar className="w-4 h-4 text-[#E8D1B5]" />
                  <span>Book Bridal Package</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

