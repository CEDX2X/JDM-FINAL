import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Travel = () => {
  const { t } = useLanguage();
  return (
    <div className="bg-surface">
      {/* Hero Section */}
      <section className="relative h-screen flex border-b border-outline-variant/20">
        <div className="w-full lg:w-1/2 flex items-center px-4 md:px-8 lg:px-20 relative z-10 bg-surface/90 backdrop-blur-sm lg:bg-transparent lg:backdrop-blur-none">
          <div className="max-w-xl">
            <span className="inline-block px-4 py-1.5 mb-8 text-xs font-bold tracking-widest uppercase bg-secondary/10 text-secondary border border-secondary/20 rounded-full">{t('travel.badge')}</span>
            <h1 className="text-2xl md:text-3xl md:text-4xl lg:text-5xl lg:text-7xl font-extrabold tracking-tighter text-primary leading-[1.1] mb-8 font-headline">
              {t('travel.title')} <br /><span className="text-secondary opacity-90">{t('travel.title_sub')}</span>
            </h1>
            <p className="text-xl text-on-surface-variant mb-8 md:mb-12 leading-relaxed font-body">
              {t('travel.desc')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-primary text-on-primary px-4 md:px-8 py-5 rounded-xl font-bold text-lg hover:scale-102 transition-transform shadow-xl flex items-center justify-center gap-3">
                {t('travel.book')} <span translate="no" className="material-symbols-outlined">flight_takeoff</span>
              </button>
              <button className="border-2 border-primary/20 text-primary px-4 md:px-8 py-5 rounded-xl font-bold text-lg hover:bg-surface-container-low transition-colors">
                {t('travel.view')}
              </button>
            </div>
          </div>
        </div>
        <div className="absolute lg:relative inset-0 lg:w-1/2 h-full z-0">
          <img
            className="w-full h-full object-cover rounded-bl-[4rem]"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCHXbZ00p44m0h4v2fB4Nf-cK-i8D8635s3lU2dI7u15C0TXYQxGvP_1yts2302N_xYkGvWzLhT-r15469nZJk6xP5t84P3QvLzLp8LmsNlExH0M9A6JvIqQ16Bf6h1XW71gZtVn_C2K6Hh7vKjVn5w92z_V8WnO-CIt2sWqWbT86DItR1WfUqSjWqZ2uT1A71K"
            alt="Private jet window view"
          />
        </div>
      </section>

      {/* Flight & Visa Services */}
      <section className="py-16 lg:py-32 bg-surface">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="grid grid-cols-2 gap-4">
                <img
                  className="rounded-2xl md:rounded-3xl w-full h-80 object-cover mt-12 shadow-xl"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuB2v_jVqV_d8T97l0I5L5XzOq0B7c56J1iZ0P7vKXgO_R1WJ5aWn6kQ4qI9Z3mXv4_cE3hJ0v88wQh6A1Q-B5_Kk5hWz_K5r1TjS2_i7sR9X8wH67A9X9Z2n8w9p2qK1tL1S5A4R9J6K1M9v9w9Z2Y5X2Z7b8P2v1qR5G9B9M8J5k0jX9B5T8h1N4qQ1r6N4X"
                  alt="Business class seating"
                />
                <img
                  className="rounded-2xl md:rounded-3xl w-full h-80 object-cover shadow-xl"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuB9W7hW2v4A9k6A9qI5Z1D0J9X8R5A5M7M9Z9J4Z1R9Z5Y3T9J5b5P9Q9L7J3R9c2K4X4j9R5T2T8T2p4T0I9c2I3T3r0j0p5c0d6J3V9Q4G"
                  alt="Passport and tickets"
                />
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/90 backdrop-blur p-6 rounded-2xl shadow-2xl flex items-center gap-4 border border-outline-variant/20">
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-on-secondary">
                  <span translate="no" className="material-symbols-outlined">schedule</span>
                </div>
                <div>
                  <p className="text-xs text-on-surface-variant uppercase tracking-widest font-bold">24/7 {t('travel.routes')}</p>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="font-headline font-bold text-2xl md:text-3xl lg:text-4xl text-primary mb-6 leading-tight">
                {t('travel.prec')} <br className="hidden lg:block" /> {t('travel.prec_sub')}
              </h2>
              <p className="text-on-surface-variant text-lg mb-10 leading-relaxed">
                {t('travel.prec_desc')}
              </p>
              
              <ul className="space-y-8">
                <li className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-surface-container-low rounded-xl flex items-center justify-center flex-shrink-0 text-secondary mt-1">
                    <span translate="no" className="material-symbols-outlined">airlines</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-primary text-xl mb-2">{t('travel.elite')}</h3>
                    <ul className="text-on-surface-variant space-y-2 list-none">
                      <li className="flex items-center gap-2"><span translate="no" className="material-symbols-outlined text-[16px] text-secondary">check_circle</span> {t('travel.f1')}</li>
                      <li className="flex items-center gap-2"><span translate="no" className="material-symbols-outlined text-[16px] text-secondary">check_circle</span> {t('travel.f2')}</li>
                      <li className="flex items-center gap-2"><span translate="no" className="material-symbols-outlined text-[16px] text-secondary">check_circle</span> {t('travel.f3')}</li>
                    </ul>
                    <a href="#" className="inline-flex items-center gap-2 mt-4 text-secondary font-bold hover:gap-3 transition-all text-sm uppercase tracking-widest">
                      {t('travel.inquire')} <span translate="no" className="material-symbols-outlined text-[18px]">arrow_forward</span>
                    </a>
                  </div>
                </li>
                <div className="h-px w-full bg-outline-variant/20"></div>
                <li className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-surface-container-low rounded-xl flex items-center justify-center flex-shrink-0 text-secondary mt-1">
                    <span translate="no" className="material-symbols-outlined">fact_check</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-primary text-xl mb-2">{t('travel.fast')} {t('travel.visa')}</h3>
                    <ul className="text-on-surface-variant space-y-2 list-none">
                      <li className="flex items-center gap-2"><span translate="no" className="material-symbols-outlined text-[16px] text-secondary">check_circle</span> {t('travel.v1')}</li>
                      <li className="flex items-center gap-2"><span translate="no" className="material-symbols-outlined text-[16px] text-secondary">check_circle</span> {t('travel.v2')}</li>
                      <li className="flex items-center gap-2"><span translate="no" className="material-symbols-outlined text-[16px] text-secondary">check_circle</span> {t('travel.v3')}</li>
                    </ul>
                    <a href="#" className="inline-flex items-center gap-2 mt-4 text-secondary font-bold hover:gap-3 transition-all text-sm uppercase tracking-widest">
                      {t('travel.check')} <span translate="no" className="material-symbols-outlined text-[18px]">arrow_forward</span>
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Tourism Packages Grid */}
      <section className="py-16 lg:py-32 bg-surface-container-lowest">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center md:text-left flex flex-col md:flex-row justify-between items-end mb-8 md:mb-16 gap-6 md:gap-8">
            <div className="max-w-2xl">
              <h2 className="font-headline font-bold text-2xl md:text-3xl md:text-4xl lg:text-5xl text-primary mb-6">{t('travel.curated')}</h2>
              <p className="text-on-surface-variant text-lg">{t('travel.curated_desc')}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {/* Package 1 */}
            <div className="group rounded-2xl md:rounded-3xl overflow-hidden bg-surface relative h-[450px]">
              <img className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC9pWl9bM9H24b4cO8S_2tVjI4Z6wE7B9dG3z1R5F5J8T2T9W7p6j6L9s5w1V2Q8N4c9r7o0y2H2c2H0N9v3U5P90bJ4j4M8Z0N4o9Z6w5J8w8E6C" alt="Amalfi Coast" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-5 md:p-8 w-full">
                <span className="text-xs font-bold uppercase tracking-widest text-secondary mb-2 block">{t('travel.iconic')}</span>
                <h3 className="font-headline font-bold text-2xl text-white mb-2">{t('travel.amalfi')}</h3>
                <p className="text-white/80 text-sm mb-4 line-clamp-2">{t('travel.amalfi_desc')}</p>
                <div className="flex justify-between items-center text-white">
                  <div>
                    <span className="text-xs opacity-70 block">{t('travel.start')}</span>
                    <span className="font-bold text-xl">$12,500</span>
                  </div>
                  <button className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center hover:bg-white hover:text-primary transition-colors">
                    <span translate="no" className="material-symbols-outlined">arrow_forward</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Package 2 */}
            <div className="group rounded-2xl md:rounded-3xl overflow-hidden bg-surface relative h-[450px]">
              <img className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD9R2s6V6l8Z3W1v9A7L3S4y0U6b1I8N2T5c3F4R8Q3E2O0v1E2A3y8F2k6P1C0H7B6j2H2m4Y7T3z2X4D2r0L8D9c0r3I4Z7P2W3L8E9M8U3J5J2Y8N4A" alt="Tokyo City" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-5 md:p-8 w-full">
                <span className="text-xs font-bold uppercase tracking-widest text-secondary mb-2 block">{t('travel.mod')}</span>
                <h3 className="font-headline font-bold text-2xl text-white mb-2">{t('travel.neon')}</h3>
                <div className="flex justify-between items-center text-white mt-8">
                  <div>
                    <span className="text-xs opacity-70 block">{t('travel.start')}</span>
                    <span className="font-bold text-xl">$8,900</span>
                  </div>
                  <button className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center hover:bg-white hover:text-primary transition-colors">
                    <span translate="no" className="material-symbols-outlined">arrow_forward</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Package 3 */}
            <div className="group rounded-2xl md:rounded-3xl overflow-hidden bg-surface relative h-[450px]">
              <img className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA2Q8n5Y7Z0H4V3x8J2R5l8c7U3o9Y1P7K2o1A3R4A2Y8M0q9f6c7E1V4N4F5O4A1L5S1e8q8I4a8z1F4F9g3E5q8v5V9P0L7p3p2z9T8y9p6P2H8S" alt="African Safari" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-5 md:p-8 w-full">
                <span className="text-xs font-bold uppercase tracking-widest text-secondary mb-2 block">{t('travel.wild')}</span>
                <h3 className="font-headline font-bold text-2xl text-white mb-2">{t('travel.safari')}</h3>
                <div className="flex justify-between items-center text-white mt-8">
                  <div>
                    <span className="text-xs opacity-70 block">{t('travel.start')}</span>
                    <span className="font-bold text-xl">$15,200</span>
                  </div>
                  <button className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center hover:bg-white hover:text-primary transition-colors">
                    <span translate="no" className="material-symbols-outlined">arrow_forward</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Package 4 - Wide */}
            <div className="md:col-span-2 lg:col-span-3 group rounded-2xl md:rounded-3xl overflow-hidden bg-surface relative h-[450px]">
              <img className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 object-center" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB3M8g1I9Y4O8N9i2V4l4m6d2y1W0I0Q7Q5L5d2Y5z3D8W1F3C4Q5Q2x0V9m8X1s9C5K3I7U6g0B8q3E7s2Q9o1Q8p1Y6s5R1M3P9D8J7e3L2h3T2K2X3" alt="Swiss Alps Train" />
              <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-primary/95 via-primary/60 to-transparent"></div>
              <div className="absolute bottom-0 md:top-1/2 left-0 md:-translate-y-1/2 p-5 md:p-8 md:p-16 w-full md:w-2/3">
                <span className="text-xs font-bold uppercase tracking-widest text-secondary mb-4 block">{t('travel.alpine')}</span>
                <h3 className="font-headline font-bold text-2xl md:text-3xl lg:text-4xl lg:text-5xl text-white mb-6 leading-tight">{t('travel.grand')}</h3>
                <div className="flex items-center gap-6 mt-8">
                  <div>
                    <span className="text-xs text-secondary font-bold block mb-1">{t('travel.start')}</span>
                    <span className="font-bold text-2xl md:text-3xl text-white">$18,500</span>
                  </div>
                  <div className="h-8 md:h-10 w-px bg-white/20"></div>
                  <button className="bg-white text-primary px-4 md:px-8 py-4 rounded-xl font-bold hover:bg-secondary hover:text-white transition-colors">
                    {t('travel.view')}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Concierge CTA */}
      <section className="py-12 lg:py-24 bg-primary text-white border-b border-primary-container">
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
          <h2 className="font-headline font-bold text-2xl md:text-3xl lg:text-4xl mb-6">{t('travel.cta_title')}</h2>
          <p className="text-white/70 text-lg mb-10 max-w-2xl mx-auto">
            {t('travel.cta_desc')}
          </p>
          <button className="bg-secondary text-on-secondary px-10 py-5 rounded-xl font-bold text-lg hover:bg-white hover:text-primary transition-all inline-flex items-center gap-3">
            <span translate="no" className="material-symbols-outlined">support_agent</span> {t('travel.talk')}
          </button>
        </div>
      </section>
    </div>
  );
};

export default Travel;
