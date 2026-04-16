import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const Logistics = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();
  return (
    <div className="bg-surface">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden border-b border-outline-variant/10">
        <div className="absolute inset-0 z-0">
          <img
            className="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuD8Q0z0a6s7k1K5z5c3O4R8i1C0k0e8d0w2V1T9j0a6f4F0h0Y5x2X6o4q2C1t6k2T1f7m8m6l6X1s7C8O7I6i1T6D2h1B8G6X6S6p4B0a6A5G5O6w2L5V7p4Q5"
            alt="Logistics network map"
          />
          <div className="absolute inset-0 bg-surface/90 backdrop-blur-sm"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 text-center max-w-4xl">
          <span className="inline-block px-4 py-1.5 mb-8 text-xs font-bold tracking-widest uppercase bg-secondary text-on-secondary rounded-full">{t('log.badge')}</span>
          <h1 className="text-2xl md:text-3xl md:text-4xl lg:text-5xl lg:text-7xl font-extrabold tracking-tighter text-primary leading-[1.1] mb-8 font-headline">
            {t('log.title')} <br /><span className="text-secondary">{t('log.title_sub')}</span>
          </h1>
          <p className="text-xl text-on-surface-variant mb-8 md:mb-12 leading-relaxed max-w-2xl mx-auto font-body">
            {t('log.desc')}
          </p>
          <div className="flex justify-center gap-4">
            <button className="bg-primary-container text-on-primary px-4 md:px-8 py-4 rounded-xl font-bold text-lg hover:scale-102 transition-transform shadow-xl">{t('log.quote')}</button>
            <button className="border-2 border-outline-variant/30 text-primary px-4 md:px-8 py-4 rounded-xl font-bold text-lg hover:bg-surface-container-low transition-colors">{t('log.capa')}</button>
          </div>
        </div>

        {/* Floating Quick Stats */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 md:px-8 mt-10 md:mt-20">
          <div className="bg-white rounded-2xl md:rounded-3xl p-5 md:p-8 flex flex-col md:flex-row justify-between items-center shadow-2xl border border-outline-variant/10 divide-y md:divide-y-0 md:divide-x divide-outline-variant/20">
            <div className="px-4 md:px-8 py-4 md:py-0 text-center w-full">
              <span className="block text-2xl md:text-3xl lg:text-4xl font-headline font-black text-primary mb-2">120+</span>
              <span className="text-sm font-bold uppercase tracking-widest text-on-surface-variant/70">Countries Served</span>
            </div>
            <div className="px-4 md:px-8 py-4 md:py-0 text-center w-full">
              <span className="block text-2xl md:text-3xl lg:text-4xl font-headline font-black text-primary mb-2">24h</span>
              <span className="text-sm font-bold uppercase tracking-widest text-on-surface-variant/70">Customs Clearance</span>
            </div>
            <div className="px-4 md:px-8 py-4 md:py-0 text-center w-full">
              <div className="inline-flex items-center gap-2 text-2xl md:text-3xl lg:text-4xl font-headline font-black text-secondary mb-2">
                <span translate="no" className="material-symbols-outlined text-2xl md:text-3xl">radar</span> {t('log.live')}
              </div>
              <span className="text-sm font-bold uppercase tracking-widest text-on-surface-variant/70 block">{t('log.live_desc')}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Core Capabilities */}
      <section id="capabilities" className="py-16 lg:py-32 bg-surface">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {/* Ocean */}
            <div className="bg-surface-container-lowest p-10 rounded-[2rem] border border-outline-variant/10 hover:shadow-xl transition-shadow group">
              <div className="w-16 h-16 bg-primary-container text-on-primary rounded-2xl flex items-center justify-center mb-8 group-hover:-translate-y-2 transition-transform">
                <span translate="no" className="material-symbols-outlined text-2xl md:text-3xl">directions_boat</span>
              </div>
              <h3 className="font-headline font-bold text-2xl text-primary mb-4">{t('log.ocean')}</h3>
              <p className="text-on-surface-variant leading-relaxed mb-6 block border-b border-outline-variant/10 pb-6">{t('log.int_desc')}</p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-sm font-medium"><span translate="no" className="material-symbols-outlined text-secondary text-[18px]">done</span> {t('log.o1')}</li>
                <li className="flex items-center gap-3 text-sm font-medium"><span translate="no" className="material-symbols-outlined text-secondary text-[18px]">done</span> {t('log.o2')}</li>
                <li className="flex items-center gap-3 text-sm font-medium"><span translate="no" className="material-symbols-outlined text-secondary text-[18px]">done</span> {t('log.o3')}</li>
              </ul>
            </div>
            {/* Air */}
            <div className="bg-primary-container p-10 rounded-[2rem] text-white hover:shadow-xl transition-shadow group relative overflow-hidden">
              <div className="absolute top-0 right-0 p-6 opacity-10">
                <span translate="no" className="material-symbols-outlined text-9xl">flight_takeoff</span>
              </div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-white/10 backdrop-blur text-white rounded-2xl flex items-center justify-center mb-8 group-hover:-translate-y-2 transition-transform">
                  <span translate="no" className="material-symbols-outlined text-2xl md:text-3xl">flight</span>
                </div>
                <h3 className="font-headline font-bold text-2xl mb-4">{t('log.air')}</h3>
                <p className="text-white/80 leading-relaxed mb-6 block border-b border-white/20 pb-6">{t('log.air_desc')}</p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-3 text-sm font-medium text-white"><span translate="no" className="material-symbols-outlined text-secondary text-[18px]">done</span> {t('log.a1')}</li>
                  <li className="flex items-center gap-3 text-sm font-medium text-white"><span translate="no" className="material-symbols-outlined text-secondary text-[18px]">done</span> {t('log.a2')}</li>
                </ul>
                <button onClick={() => navigate('/contact')} className="bg-secondary text-white w-full py-3 rounded-xl font-bold uppercase tracking-widest text-xs hover:bg-white hover:text-primary transition-colors">{t('log.book_pri')}</button>
              </div>
            </div>
            {/* Ground */}
            <div className="bg-surface-container-lowest p-10 rounded-[2rem] border border-outline-variant/10 hover:shadow-xl transition-shadow group">
              <div className="w-16 h-16 bg-primary-container text-on-primary rounded-2xl flex items-center justify-center mb-8 group-hover:-translate-y-2 transition-transform">
                <span translate="no" className="material-symbols-outlined text-2xl md:text-3xl">local_shipping</span>
              </div>
              <h3 className="font-headline font-bold text-2xl text-primary mb-4">{t('log.ground')}</h3>
              <p className="text-on-surface-variant leading-relaxed mb-6 block border-b border-outline-variant/10 pb-6">{t('log.fleet')} 99% {t('log.rate_title')}</p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-sm font-medium"><span translate="no" className="material-symbols-outlined text-secondary text-[18px]">done</span> {t('log.g1')}</li>
                <li className="flex items-center gap-3 text-sm font-medium"><span translate="no" className="material-symbols-outlined text-secondary text-[18px]">done</span> {t('log.g2')}</li>
                <li className="flex items-center gap-3 text-sm font-medium"><span translate="no" className="material-symbols-outlined text-secondary text-[18px]">done</span> {t('log.g3')}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Advanced Management Features */}
      <section className="py-16 lg:py-32 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex flex-col lg:flex-row gap-6 md:gap-8 lg:gap-16 items-center">
            <div className="lg:w-1/2">
              <span className="text-secondary font-bold uppercase tracking-widest text-xs mb-4 block">{t('log.mgt')}</span>
              <h2 className="font-headline font-bold text-2xl md:text-3xl md:text-4xl lg:text-5xl text-primary mb-8 leading-tight">{t('log.mgt_title')}</h2>
              
              <div className="space-y-8 mt-10">
                <div className="flex gap-6">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm flex-shrink-0 text-secondary border border-outline-variant/10">
                    <span translate="no" className="material-symbols-outlined">network_node</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-xl text-primary mb-2">{t('log.m1')}</h4>
                    <p className="text-on-surface-variant leading-relaxed">{t('log.m1_desc')}</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm flex-shrink-0 text-secondary border border-outline-variant/10">
                    <span translate="no" className="material-symbols-outlined">precision_manufacturing</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-xl text-primary mb-2">{t('log.m2')}</h4>
                    <p className="text-on-surface-variant leading-relaxed">{t('log.m2_desc')}</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm flex-shrink-0 text-secondary border border-outline-variant/10">
                    <span translate="no" className="material-symbols-outlined">assured_workload</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-xl text-primary mb-2">{t('log.m3')}</h4>
                    <p className="text-on-surface-variant leading-relaxed">{t('log.m3_desc')}</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2 w-full relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-container to-primary transform rotate-3 rounded-[3rem] opacity-20"></div>
              <img
                className="w-full h-[600px] object-cover rounded-[3rem] shadow-2xl relative z-10"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCHXbZ00p44m0h4v2fB4Nf-cK-i8D8635s3lU2dI7u15C0TXYQxGvP_1yts2302N_xYkGvWzLhT-r15469nZJk6xP5t84P3QvLzLp8LmsNlExH0M9A6JvIqQ16Bf6h1XW71gZtVn_C2K6Hh7vKjVn5w92z_V8WnO-CIt2sWqWbT86DItR1WfUqSjWqZ2uT1A71K"
                alt="Automated logistics facility"
              />
              {/* Overlay Stat */}
              <div className="absolute top-1/2 right-0 translate-x-1/4 -translate-y-1/2 bg-white p-6 rounded-2xl shadow-2xl z-20 w-48 text-center border border-outline-variant/10">
                <span translate="no" className="material-symbols-outlined text-secondary text-2xl md:text-3xl lg:text-4xl mb-2">dashboard_customize</span>
                <span className="block font-bold text-xl text-primary mb-1 mt-2">API Ready</span>
                <span className="text-xs font-medium text-on-surface-variant">Seamless ERP Integration</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Partner Section */}
      <section className="py-12 lg:py-24 bg-surface relative overflow-hidden">
        <div className="absolute top-0 left-0 w-1/2 h-full bg-surface-container-lowest -skew-x-12 -translate-x-32 hidden lg:block"></div>
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          <div className="bg-primary text-white rounded-[3rem] p-6 md:p-12 lg:p-20 flex flex-col lg:flex-row justify-between items-center gap-6 lg:gap-12 overflow-hidden relative">
            <div className="absolute -top-64 -right-64 w-[800px] h-[800px] border border-white/10 rounded-full"></div>
            <div className="absolute -top-64 -right-64 w-[600px] h-[600px] border border-white/10 rounded-full"></div>
            
            <div className="max-w-2xl relative z-10">
              <h2 className="font-headline font-bold text-2xl md:text-3xl md:text-4xl lg:text-5xl mb-6 leading-tight">{t('log.elevate')}</h2>
              <p className="text-white/80 text-lg">
                {t('log.elevate_desc')}
              </p>
            </div>
            
            <div className="w-full lg:w-auto flex flex-col sm:flex-row gap-4 relative z-10">
              <div className="bg-white text-primary p-5 md:p-8 rounded-2xl flex-1 md:min-w-[280px]">
                <h4 className="font-bold text-xl mb-2">{t('log.ent')}</h4>
                <p className="text-sm font-medium opacity-80 mb-6">{t('log.ent_title')}</p>
                <ul className="text-xs space-y-3 mb-8 opacity-70">
                  <li>• {t('log.ent_desc')}</li>
                </ul>
                <button onClick={() => navigate('/contact')} className="w-full py-3 bg-secondary text-white rounded-xl font-bold hover:scale-105 transition-transform">{t('log.inq')}</button>
              </div>
              <div className="bg-primary-container text-white p-5 md:p-8 rounded-2xl flex-1 md:min-w-[280px] border border-white/20">
                <h4 className="font-bold text-xl mb-2">{t('log.sme')}</h4>
                <p className="text-sm font-medium opacity-80 mb-6">{t('log.sme_title')}</p>
                <ul className="text-xs space-y-3 mb-8 opacity-70 list-disc ml-3">
                  <li>{t('log.sme_desc')}</li>
                </ul>
                <button onClick={() => navigate('/contact')} className="w-full py-3 bg-white text-primary rounded-xl font-bold hover:scale-105 transition-transform">{t('log.start')}</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Logistics;
