import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const Travel = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();

  return (
    <div className="bg-surface">
      {/* Hero Section */}
      <section className="relative h-screen flex border-b border-outline-variant/20">
        <div className="w-full lg:w-1/2 flex items-center px-4 md:px-8 lg:px-20 relative z-10 bg-surface/90 backdrop-blur-sm lg:bg-transparent lg:backdrop-blur-none">
          <div className="max-w-xl">
            <span className="inline-block px-4 py-1.5 mb-8 text-xs font-bold tracking-widest uppercase bg-secondary/10 text-secondary dark:text-secondary-fixed border border-secondary/20 rounded-full">{t('travel.badge')}</span>
            <h1 className="text-4xl md:text-5xl lg:text-7xl xl:text-8xl font-extrabold tracking-tighter text-primary dark:text-white leading-[1.1] mb-8 font-headline uppercase">
              {t('travel.title')} <span className="text-secondary dark:text-secondary-fixed opacity-90">{t('travel.title_sub')}</span>
            </h1>
            <p className="text-xl text-on-surface-variant dark:text-white mb-8 md:mb-12 leading-relaxed font-body">
              {t('travel.desc')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button onClick={() => navigate('/contact')} className="bg-primary text-on-primary px-4 md:px-8 py-5 rounded-xl font-bold text-lg hover:scale-102 transition-transform shadow-xl flex items-center justify-center gap-3">
                {t('travel.book')} <span translate="no" className="material-symbols-outlined">flight_takeoff</span>
              </button>
              <button onClick={() => document.getElementById('destinations')?.scrollIntoView({ behavior: 'smooth' })} className="border-2 border-primary/20 text-primary dark:text-white px-4 md:px-8 py-5 rounded-xl font-bold text-lg hover:bg-surface-container-low transition-colors">
                {t('travel.view')}
              </button>
              <button onClick={() => window.location.href='https://airtable.com/appmY4Cf2FHn1gEd1/shrIibaZijGjCCzAB'} className="bg-secondary text-on-secondary px-4 md:px-8 py-5 rounded-xl font-bold text-lg hover:bg-primary hover:text-white transition-colors">
    Universités Partenaires
  </button>
            </div>
          </div>
        </div>
        <div className="absolute lg:relative inset-0 lg:w-1/2 h-full z-0">
          <img
            className="w-full h-full object-cover rounded-bl-[4rem]"
            src="https://firebasestorage.googleapis.com/v0/b/kylyoapp-8ec0b.firebasestorage.app/o/Ced%2FSTUD%20CHINA.jpeg?alt=media&token=486de072-4e32-4f92-a864-ba7df2927b69"
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
                <img className="rounded-2xl md:rounded-3xl w-full h-80 object-cover mt-12 shadow-xl" src="https://firebasestorage.googleapis.com/v0/b/kylyoapp-8ec0b.firebasestorage.app/o/Ced%2FVALISE%20BLEU.jpeg?alt=media&token=0c31fc6a-cd7d-47cf-9a01-894e9fad3ecb" alt="Business class seating" />
                <img className="rounded-2xl md:rounded-3xl w-full h-80 object-cover shadow-xl" src="https://firebasestorage.googleapis.com/v0/b/kylyoapp-8ec0b.firebasestorage.app/o/Ced%2FSAC%20NOIR.jpeg?alt=media&token=248b44af-0f58-4590-a45e-c0a7f38bfa11" alt="Passport and tickets" />
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-surface-container-lowest/90 backdrop-blur p-6 rounded-2xl shadow-2xl flex items-center gap-4 border border-outline-variant/20">
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-on-secondary">
                  <span translate="no" className="material-symbols-outlined">schedule</span>
                </div>
                <div>
                  <p className="text-xs text-on-surface-variant dark:text-white uppercase tracking-widest font-bold">24/7 {t('travel.routes')}</p>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="font-headline font-bold text-2xl md:text-3xl lg:text-4xl text-primary dark:text-white mb-6 leading-tight">
                {t('travel.prec')} <br className="hidden lg:block" /> {t('travel.prec_sub')}
              </h2>
              <p className="text-on-surface-variant dark:text-white text-lg mb-10 leading-relaxed">
                {t('travel.prec_desc')}
              </p>
              <ul className="space-y-8">
                <li className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-surface-container-low rounded-xl flex items-center justify-center flex-shrink-0 text-secondary dark:text-secondary-fixed mt-1">
                    <span translate="no" className="material-symbols-outlined">airlines</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-primary dark:text-white text-xl mb-2">{t('travel.elite')}</h3>
                    <ul className="text-on-surface-variant dark:text-white space-y-2 list-none">
                      <li className="flex items-center gap-2"><span translate="no" className="material-symbols-outlined text-[16px] text-secondary dark:text-secondary-fixed">check_circle</span> {t('travel.f1')}</li>
                      <li className="flex items-center gap-2"><span translate="no" className="material-symbols-outlined text-[16px] text-secondary dark:text-secondary-fixed">check_circle</span> {t('travel.f2')}</li>
                      <li className="flex items-center gap-2"><span translate="no" className="material-symbols-outlined text-[16px] text-secondary dark:text-secondary-fixed">check_circle</span> {t('travel.f3')}</li>
                      <li className="flex items-center gap-2"><span translate="no" className="material-symbols-outlined text-[16px] text-secondary dark:text-secondary-fixed">check_circle</span> {t('travel.f4')}</li>
                    </ul>
                    <button onClick={() => navigate('/contact')} className="inline-flex items-center gap-2 mt-4 text-secondary dark:text-secondary-fixed font-bold hover:gap-3 transition-all text-sm uppercase tracking-widest">
                      {t('travel.inquire')} <span translate="no" className="material-symbols-outlined text-[18px]">arrow_forward</span>
                    </button>
                  </div>
                </li>
                <div className="h-px w-full bg-outline-variant/20"></div>
                <li className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-surface-container-low rounded-xl flex items-center justify-center flex-shrink-0 text-secondary dark:text-secondary-fixed mt-1">
                    <span translate="no" className="material-symbols-outlined">fact_check</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-primary dark:text-white text-xl mb-2">{t('travel.fast')} {t('travel.visa')}</h3>
                    <ul className="text-on-surface-variant dark:text-white space-y-2 list-none">
                      <li className="flex items-center gap-2"><span translate="no" className="material-symbols-outlined text-[16px] text-secondary dark:text-secondary-fixed">check_circle</span> {t('travel.v1')}</li>
                      <li className="flex items-center gap-2"><span translate="no" className="material-symbols-outlined text-[16px] text-secondary dark:text-secondary-fixed">check_circle</span> {t('travel.v2')}</li>
                      <li className="flex items-center gap-2"><span translate="no" className="material-symbols-outlined text-[16px] text-secondary dark:text-secondary-fixed">check_circle</span> {t('travel.v3')}</li>
                      <li className="flex items-center gap-2"><span translate="no" className="material-symbols-outlined text-[16px] text-secondary dark:text-secondary-fixed">check_circle</span> {t('travel.v4')}</li>
                    </ul>
                    <button onClick={() => navigate('/contact')} className="inline-flex items-center gap-2 mt-4 text-secondary dark:text-secondary-fixed font-bold hover:gap-3 transition-all text-sm uppercase tracking-widest">
                      {t('travel.check')} <span translate="no" className="material-symbols-outlined text-[18px]">arrow_forward</span>
                    </button>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Tourism Packages Grid */}
      <section id="destinations" className="py-16 lg:py-32 bg-surface-container-lowest">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center md:text-left flex flex-col md:flex-row justify-between items-end mb-8 md:mb-16 gap-6 md:gap-8">
            <div className="max-w-2xl">
              <h2 className="font-headline font-bold text-2xl md:text-3xl md:text-4xl lg:text-5xl text-primary dark:text-white mb-6">{t('travel.curated')}</h2>
              <p className="text-on-surface-variant dark:text-white text-lg">{t('travel.curated_desc')}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {/* Package 1 */}
            <div className="group rounded-2xl md:rounded-3xl overflow-hidden bg-surface relative h-[450px]">
              <img className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" src="https://firebasestorage.googleapis.com/v0/b/kylyoapp-8ec0b.firebasestorage.app/o/Ced%2Fingenieur.jpeg?alt=media&token=5d5c0428-d611-4ba7-8464-6add3fa323aa" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-5 md:p-8 w-full">
                <span className="text-xs font-bold uppercase tracking-widest text-secondary dark:text-secondary-fixed mb-2 block">{t('travel.iconic')}</span>
                <h3 className="font-headline font-bold text-2xl text-white mb-2">{t('travel.amalfi')}</h3>
                <p className="text-white/80 text-sm mb-4 line-clamp-2">{t('travel.amalfi_desc')}</p>
                <div className="flex justify-end items-center text-white mt-auto">
                  <button onClick={() => navigate('/contact')} className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center hover:bg-surface-container-lowest hover:text-primary dark:text-white transition-colors">
                    <span translate="no" className="material-symbols-outlined">arrow_forward</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Package 2 */}
            <div className="group rounded-2xl md:rounded-3xl overflow-hidden bg-surface relative h-[450px]">
              <img className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" src="https://firebasestorage.googleapis.com/v0/b/kylyoapp-8ec0b.firebasestorage.app/o/Ced%2Fchimiste.jpeg?alt=media&token=98fe59de-4761-40df-a5e1-088e6183876e" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-5 md:p-8 w-full">
                <span className="text-xs font-bold uppercase tracking-widest text-secondary dark:text-secondary-fixed mb-2 block">{t('travel.mod')}</span>
                <h3 className="font-headline font-bold text-2xl text-white mb-2">{t('travel.neon')}</h3>
                <div className="flex justify-end items-center text-white mt-8">
                  <button onClick={() => navigate('/contact')} className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center hover:bg-surface-container-lowest hover:text-primary dark:text-white transition-colors">
                    <span translate="no" className="material-symbols-outlined">arrow_forward</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Package 3 */}
            <div className="group rounded-2xl md:rounded-3xl overflow-hidden bg-surface relative h-[450px]">
              <img className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" src="https://firebasestorage.googleapis.com/v0/b/kylyoapp-8ec0b.firebasestorage.app/o/Ced%2Finfo.jpeg?alt=media&token=00d78cec-88e8-4abb-8443-84c3a2150259" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-5 md:p-8 w-full">
                <span className="text-xs font-bold uppercase tracking-widest text-secondary dark:text-secondary-fixed mb-2 block">{t('travel.wild')}</span>
                <h3 className="font-headline font-bold text-2xl text-white mb-2">{t('travel.safari')}</h3>
                <div className="flex justify-end items-center text-white mt-8">
                  <button onClick={() => navigate('/contact')} className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center hover:bg-surface-container-lowest hover:text-primary dark:text-white transition-colors">
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
                <span className="text-xs font-bold uppercase tracking-widest text-secondary dark:text-secondary-fixed mb-4 block">{t('travel.alpine')}</span>
                <h3 className="font-headline font-bold text-2xl md:text-3xl lg:text-4xl lg:text-5xl text-white mb-6 leading-tight">{t('travel.grand')}</h3>
                <div className="flex items-center gap-6 mt-8">
                  <button onClick={() => navigate('/contact')} className="bg-surface-container-lowest text-primary dark:text-white px-4 md:px-8 py-4 rounded-xl font-bold hover:bg-secondary hover:text-white transition-colors">
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
          <button onClick={() => navigate('/contact')} className="bg-secondary text-on-secondary px-10 py-5 rounded-xl font-bold text-lg hover:bg-surface-container-lowest hover:text-primary dark:text-white transition-all inline-flex items-center gap-3">
            <span translate="no" className="material-symbols-outlined">support_agent</span>
            {t('travel.talk')}
          </button>
        </div>
      </section>
    </div>
  );
};

export default Travel;
