import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const Logistics = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();
  const [activeSlide, setActiveSlide] = useState(0);

  const slideImages = [
    "https://firebasestorage.googleapis.com/v0/b/kylyoapp-8ec0b.firebasestorage.app/o/event-covers%2Fe5956621-8911-49c9-a1fa-fa0b32a7a591?alt=media&token=4e3ed39b-fdbf-4f7b-9d44-af2135956fd1",
    "https://firebasestorage.googleapis.com/v0/b/kylyoapp-8ec0b.firebasestorage.app/o/event-covers%2Fe3affd14-5f7c-40f8-892d-bc3243cb9a6a?alt=media&token=088310d6-9da0-4beb-b85f-4d149177e5c9",
    "https://firebasestorage.googleapis.com/v0/b/kylyoapp-8ec0b.firebasestorage.app/o/event-covers%2FBABI2.jpg?alt=media&token=8559baef-eb73-4fff-a3f6-c6516d71dbe7"
  ];

  const handleSlideChange = () => {
    setActiveSlide((prev) => (prev + 1) % slideImages.length);
  };

  return (
    <div className="bg-surface">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden border-b border-outline-variant/10">
        <div className="absolute inset-0 z-0">
          <img
            className="w-full h-full object-cover opacity-25"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuD8Q0z0a6s7k1K5z5c3O4R8i1C0k0e8d0w2V1T9j0a6f4F0h0Y5x2X6o4q2C1t6k2T1f7m8m6l6X1s7C8O7I6i1T6D2h1B8G6X6S6p4B0a6A5G5O6w2L5V7p4Q5"
            alt="Logistics network map"
          />
          <div className="absolute inset-0 bg-surface/90 backdrop-blur-md"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 text-center max-w-4xl py-12">
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest uppercase bg-secondary text-white rounded-full shadow-md">{t('log.badge')}</span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-tight text-primary dark:text-white leading-[1.1] mb-6 font-headline">
            {t('log.title')} <br /><span className="text-secondary">{t('log.title_sub')}</span>
          </h1>
          <p className="text-lg md:text-xl text-on-surface-variant dark:text-white/80 mb-10 leading-relaxed max-w-2xl mx-auto font-body">
            {t('log.desc')}
          </p>
          <div className="flex justify-center gap-4">
            <button onClick={() => navigate('/contact')} className="bg-primary text-on-primary px-8 py-4 rounded-2xl font-bold text-lg hover:scale-105 transition-transform shadow-xl shadow-primary/20">{t('log.quote')}</button>
            <button onClick={() => document.getElementById('capabilities')?.scrollIntoView({ behavior: 'smooth' })} className="text-primary dark:text-white hover:text-secondary font-bold text-lg transition-colors flex items-center gap-2 group py-3">
              {t('log.capa')} <span translate="no" className="material-symbols-outlined group-hover:translate-y-1 transition-transform">arrow_downward</span>
            </button>
          </div>
        </div>

        {/* Floating Quick Stats */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 md:px-8 mt-12">
          <div className="bg-surface-container-lowest dark:bg-surface-container rounded-[2rem] p-6 md:p-8 grid grid-cols-1 md:grid-cols-3 gap-6 shadow-2xl border border-outline-variant/10">
            <div className="text-center md:border-r border-outline-variant/20 last:border-none">
              <span className="block text-3xl lg:text-4xl font-headline font-black text-primary dark:text-white mb-2">120+</span>
              <span className="text-xs font-bold uppercase tracking-widest text-on-surface-variant dark:text-white/60">Countries Served</span>
            </div>
            <div className="text-center md:border-r border-outline-variant/20 last:border-none">
              <span className="block text-3xl lg:text-4xl font-headline font-black text-primary dark:text-white mb-2">Vision Cargo</span>
              <span className="text-xs font-bold uppercase tracking-widest text-on-surface-variant dark:text-white/60">Suivi personnalisé</span>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center gap-2 text-3xl lg:text-4xl font-headline font-black text-secondary mb-2">
                <span translate="no" className="material-symbols-outlined text-3xl">radar</span> {t('log.live')}
              </div>
              <span className="text-xs font-bold uppercase tracking-widest text-on-surface-variant dark:text-white/60 block">{t('log.live_desc')}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Core Capabilities */}
      <section id="capabilities" className="py-20 lg:py-32 bg-surface">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-surface-container-lowest dark:bg-surface-container p-10 rounded-[2.5rem] border border-outline-variant/10 modern-card flex flex-col justify-between">
              <div>
                <div className="w-16 h-16 bg-primary/10 dark:bg-white/10 text-primary dark:text-white rounded-2xl flex items-center justify-center mb-8">
                  <span translate="no" className="material-symbols-outlined text-3xl">currency_yuan</span>
                </div>
                <h3 className="font-headline font-bold text-2xl text-primary dark:text-white mb-4">{t('log.ocean')}</h3>
                <p className="text-on-surface-variant dark:text-white/70 leading-relaxed mb-6 pb-6 border-b border-outline-variant/10">{t('log.int_desc')}</p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-3 text-sm font-medium"><span translate="no" className="material-symbols-outlined text-secondary text-[18px]">done</span> {t('log.o1')}</li>
                  <li className="flex items-center gap-3 text-sm font-medium"><span translate="no" className="material-symbols-outlined text-secondary text-[18px]">done</span> {t('log.o2')}</li>
                  <li className="flex items-center gap-3 text-sm font-medium"><span translate="no" className="material-symbols-outlined text-secondary text-[18px]">done</span> {t('log.o3')}</li>
                </ul>
              </div>
              <button onClick={() => navigate('/contact')} className="w-full bg-surface-container-low dark:bg-surface-container-high py-3.5 rounded-xl font-bold text-sm hover:bg-secondary hover:text-white transition-colors">Commander</button>
            </div>

            <div className="bg-primary-container p-10 rounded-[2.5rem] text-white modern-card relative overflow-hidden flex flex-col justify-between shadow-2xl">
              <div className="absolute top-0 right-0 p-8 opacity-10">
                <span translate="no" className="material-symbols-outlined text-9xl">flight_takeoff</span>
              </div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-white/10 backdrop-blur text-white rounded-2xl flex items-center justify-center mb-8">
                  <span translate="no" className="material-symbols-outlined text-3xl">flight</span>
                </div>
                <h3 className="font-headline font-bold text-2xl mb-4">{t('log.air')}</h3>
                <p className="text-white/80 leading-relaxed mb-6 pb-6 border-b border-white/20">{t('log.air_desc')}</p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-3 text-sm font-medium text-white"><span translate="no" className="material-symbols-outlined text-secondary text-[18px]">done</span> {t('log.a1')}</li>
                  <li className="flex items-center gap-3 text-sm font-medium text-white"><span translate="no" className="material-symbols-outlined text-secondary text-[18px]">done</span> {t('log.a2')}</li>
                </ul>
              </div>
              <button onClick={() => navigate('/contact')} className="relative z-10 bg-secondary text-white w-full py-4 rounded-xl font-bold uppercase tracking-widest text-xs hover:bg-white hover:text-primary transition-colors shadow-lg">{t('log.book_pri')}</button>
            </div>

            <div className="bg-surface-container-lowest dark:bg-surface-container p-10 rounded-[2.5rem] border border-outline-variant/10 modern-card flex flex-col justify-between">
              <div>
                <div className="w-16 h-16 bg-primary/10 dark:bg-white/10 text-primary dark:text-white rounded-2xl flex items-center justify-center mb-8">
                  <span translate="no" className="material-symbols-outlined text-3xl">directions_boat</span>
                </div>
                <h3 className="font-headline font-bold text-2xl text-primary dark:text-white mb-4">{t('log.ground')}</h3>
                <p className="text-on-surface-variant dark:text-white/70 leading-relaxed mb-6 pb-6 border-b border-outline-variant/10">{t('log.fleet')} 99% {t('log.rate_title')}</p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-3 text-sm font-medium"><span translate="no" className="material-symbols-outlined text-secondary text-[18px]">done</span> {t('log.g1')}</li>
                  <li className="flex items-center gap-3 text-sm font-medium"><span translate="no" className="material-symbols-outlined text-secondary text-[18px]">done</span> {t('log.g2')}</li>
                  <li className="flex items-center gap-3 text-sm font-medium"><span translate="no" className="material-symbols-outlined text-secondary text-[18px]">done</span> {t('log.g3')}</li>
                </ul>
              </div>
              <button onClick={() => navigate('/contact')} className="w-full bg-surface-container-low dark:bg-surface-container-high py-3.5 rounded-xl font-bold text-sm hover:bg-secondary hover:text-white transition-colors">Découvrir</button>
            </div>
          </div>
        </div>
      </section>

      {/* Advanced Management Features */}
      <section className="py-20 lg:py-32 bg-surface-container-low dark:bg-surface-container/20">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <span className="text-secondary font-bold uppercase tracking-widest text-xs mb-3 block">{t('log.mgt')}</span>
              <h2 className="font-headline font-extrabold text-3xl md:text-4xl lg:text-5xl text-primary dark:text-white mb-8 leading-tight">{t('log.mgt_title')}</h2>
              <div className="space-y-8">
                <div className="flex gap-6 items-start">
                  <div className="w-14 h-14 rounded-2xl bg-surface-container-lowest dark:bg-surface-container flex items-center justify-center shadow-md flex-shrink-0 text-secondary border border-outline-variant/10">
                    <span translate="no" className="material-symbols-outlined text-2xl">network_node</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-xl text-primary dark:text-white mb-2">{t('log.m1')}</h4>
                    <p className="text-on-surface-variant dark:text-white/70 leading-relaxed">{t('log.m1_desc')}</p>
                  </div>
                </div>
                <div className="flex gap-6 items-start">
                  <div className="w-14 h-14 rounded-2xl bg-surface-container-lowest dark:bg-surface-container flex items-center justify-center shadow-md flex-shrink-0 text-secondary border border-outline-variant/10">
                    <span translate="no" className="material-symbols-outlined text-2xl">precision_manufacturing</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-xl text-primary dark:text-white mb-2">{t('log.m2')}</h4>
                    <p className="text-on-surface-variant dark:text-white/70 leading-relaxed">{t('log.m2_desc')}</p>
                  </div>
                </div>
                <div className="flex gap-6 items-start">
                  <div className="w-14 h-14 rounded-2xl bg-surface-container-lowest dark:bg-surface-container flex items-center justify-center shadow-md flex-shrink-0 text-secondary border border-outline-variant/10">
                    <span translate="no" className="material-symbols-outlined text-2xl">assured_workload</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-xl text-primary dark:text-white mb-2">{t('log.m3')}</h4>
                    <p className="text-on-surface-variant dark:text-white/70 leading-relaxed">{t('log.m3_desc')}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2 w-full relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-[3rem] opacity-20 blur-xl"></div>
              <div className="w-full h-80 md:h-[500px] relative z-10 cursor-pointer overflow-hidden rounded-[2.5rem] shadow-2xl group border border-outline-variant/20" onClick={handleSlideChange} title="Cliquez pour changer l'image">
                {slideImages.map((src, index) => (
                  <img
                    key={index}
                    src={src}
                    alt="Logistics hub"
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${index === activeSlide ? 'opacity-100 scale-105' : 'opacity-0 scale-100'}`}
                  />
                ))}
                <div className="absolute bottom-6 left-6 right-6 bg-surface/90 dark:bg-surface-container/90 backdrop-blur-xl p-4 rounded-2xl border border-outline-variant/10 flex justify-between items-center">
                  <span className="text-xs font-bold uppercase tracking-wider text-primary dark:text-white">Cliquez pour voir les hubs JDM</span>
                  <div className="flex gap-1.5">
                    {slideImages.map((_, i) => (
                      <span key={i} className={`h-2 rounded-full transition-all ${i === activeSlide ? 'w-6 bg-secondary' : 'w-2 bg-outline-variant/50'}`}></span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Logistics;
