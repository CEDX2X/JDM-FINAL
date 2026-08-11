import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const Travel = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();

  return (
    <div className="bg-surface">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-20 border-b border-outline-variant/10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-8 w-full py-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="z-10">
            <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest uppercase bg-secondary/10 text-secondary border border-secondary/20 rounded-full">{t('travel.badge')}</span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight text-primary dark:text-white leading-[1.1] mb-6 font-headline">
              {t('travel.title')} <span className="text-secondary">{t('travel.title_sub')}</span>
            </h1>
            <p className="text-lg md:text-xl text-on-surface-variant dark:text-white/80 mb-10 leading-relaxed font-body">
              {t('travel.desc')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button onClick={() => navigate('/contact')} className="bg-primary text-on-primary px-8 py-5 rounded-2xl font-bold text-lg hover:scale-105 transition-all shadow-xl shadow-primary/20 flex items-center justify-center gap-3">
                {t('travel.book')} <span translate="no" className="material-symbols-outlined">flight_takeoff</span>
              </button>
              <button onClick={() => document.getElementById('destinations')?.scrollIntoView({ behavior: 'smooth' })} className="text-primary dark:text-white hover:text-secondary font-bold text-lg transition-colors flex items-center gap-2 group py-3">
                {t('travel.view')} <span translate="no" className="material-symbols-outlined group-hover:translate-y-1 transition-transform">arrow_downward</span>
              </button>
              <button onClick={() => window.location.href='https://airtable.com/appmY4Cf2FHn1gEd1/shrIibaZijGjCCzAB'} className="bg-secondary text-white px-8 py-5 rounded-2xl font-bold text-lg hover:bg-secondary/90 transition-all shadow-lg">
                Universités Partenaires
              </button>
            </div>
          </div>
          <div className="relative h-[400px] lg:h-[550px] w-full">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-[3rem] blur-2xl -z-10"></div>
            <img
              className="w-full h-full object-cover rounded-[2.5rem] shadow-2xl border border-outline-variant/10"
              src="https://firebasestorage.googleapis.com/v0/b/kylyoapp-8ec0b.firebasestorage.app/o/Ced%2FSTUD%20CHINA.jpeg?alt=media&token=486de072-4e32-4f92-a864-ba7df2927b69"
              alt="Private jet window view"
            />
          </div>
        </div>
      </section>

      {/* Flight & Visa Services */}
      <section className="py-20 lg:py-32 bg-surface">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="relative">
              <div className="grid grid-cols-2 gap-6">
                <img className="rounded-[2rem] w-full h-72 lg:h-96 object-cover mt-12 shadow-2xl modern-card" src="https://firebasestorage.googleapis.com/v0/b/kylyoapp-8ec0b.firebasestorage.app/o/Ced%2FVALISE%20BLEU.jpeg?alt=media&token=0c31fc6a-cd7d-47cf-9a01-894e9fad3ecb" alt="Business class seating" />
                <img className="rounded-[2rem] w-full h-72 lg:h-96 object-cover shadow-2xl modern-card" src="https://firebasestorage.googleapis.com/v0/b/kylyoapp-8ec0b.firebasestorage.app/o/Ced%2FSAC%20NOIR.jpeg?alt=media&token=248b44af-0f58-4590-a45e-c0a7f38bfa11" alt="Passport and tickets" />
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-surface-container-lowest/90 dark:bg-surface-container/90 backdrop-blur-xl p-6 rounded-2xl shadow-2xl flex items-center gap-4 border border-outline-variant/20">
                <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center text-white shadow-md">
                  <span translate="no" className="material-symbols-outlined">schedule</span>
                </div>
                <div>
                  <p className="text-xs text-on-surface-variant dark:text-white/70 uppercase tracking-widest font-bold">24/7 {t('travel.routes')}</p>
                </div>
              </div>
            </div>
            <div>
              <span className="text-secondary font-bold text-xs uppercase tracking-widest mb-3 block">Accompagnement VIP</span>
              <h2 className="font-headline font-extrabold text-3xl md:text-4xl text-primary dark:text-white mb-6 leading-tight">
                {t('travel.prec')} <br /> {t('travel.prec_sub')}
              </h2>
              <p className="text-on-surface-variant dark:text-white/80 text-lg mb-10 leading-relaxed">
                {t('travel.prec_desc')}
              </p>
              <div className="space-y-8">
                <div className="bg-surface-container-low dark:bg-surface-container/30 p-6 md:p-8 rounded-[2rem] border border-outline-variant/10 modern-card">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-primary text-white rounded-xl flex items-center justify-center shadow-md">
                      <span translate="no" className="material-symbols-outlined">airlines</span>
                    </div>
                    <h3 className="font-bold text-primary dark:text-white text-xl">{t('travel.elite')}</h3>
                  </div>
                  <ul className="text-on-surface-variant dark:text-white/80 space-y-2 mb-6 text-sm">
                    <li className="flex items-center gap-2"><span translate="no" className="material-symbols-outlined text-[16px] text-secondary">check_circle</span> {t('travel.f1')}</li>
                    <li className="flex items-center gap-2"><span translate="no" className="material-symbols-outlined text-[16px] text-secondary">check_circle</span> {t('travel.f2')}</li>
                    <li className="flex items-center gap-2"><span translate="no" className="material-symbols-outlined text-[16px] text-secondary">check_circle</span> {t('travel.f3')}</li>
                    <li className="flex items-center gap-2"><span translate="no" className="material-symbols-outlined text-[16px] text-secondary">check_circle</span> {t('travel.f4')}</li>
                  </ul>
                  <button onClick={() => navigate('/contact')} className="inline-flex items-center gap-2 text-secondary font-bold hover:gap-3 transition-all text-xs uppercase tracking-wider">
                    {t('travel.inquire')} <span translate="no" className="material-symbols-outlined text-[16px]">arrow_forward</span>
                  </button>
                </div>

                <div className="bg-surface-container-low dark:bg-surface-container/30 p-6 md:p-8 rounded-[2rem] border border-outline-variant/10 modern-card">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-primary text-white rounded-xl flex items-center justify-center shadow-md">
                      <span translate="no" className="material-symbols-outlined">fact_check</span>
                    </div>
                    <h3 className="font-bold text-primary dark:text-white text-xl">{t('travel.fast')} {t('travel.visa')}</h3>
                  </div>
                  <ul className="text-on-surface-variant dark:text-white/80 space-y-2 mb-6 text-sm">
                    <li className="flex items-center gap-2"><span translate="no" className="material-symbols-outlined text-[16px] text-secondary">check_circle</span> {t('travel.v1')}</li>
                    <li className="flex items-center gap-2"><span translate="no" className="material-symbols-outlined text-[16px] text-secondary">check_circle</span> {t('travel.v2')}</li>
                    <li className="flex items-center gap-2"><span translate="no" className="material-symbols-outlined text-[16px] text-secondary">check_circle</span> {t('travel.v3')}</li>
                    <li className="flex items-center gap-2"><span translate="no" className="material-symbols-outlined text-[16px] text-secondary">check_circle</span> {t('travel.v4')}</li>
                  </ul>
                  <button onClick={() => navigate('/contact')} className="inline-flex items-center gap-2 text-secondary font-bold hover:gap-3 transition-all text-xs uppercase tracking-wider">
                    {t('travel.check')} <span translate="no" className="material-symbols-outlined text-[16px]">arrow_forward</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tourism Packages Grid */}
      <section id="destinations" className="py-20 lg:py-32 bg-surface-container-low dark:bg-surface-container/20">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="mb-16">
            <span className="text-secondary font-bold text-xs uppercase tracking-widest mb-3 block">Destinations Phares</span>
            <h2 className="font-headline font-extrabold text-3xl md:text-4xl lg:text-5xl text-primary dark:text-white mb-4">{t('travel.curated')}</h2>
            <p className="text-on-surface-variant dark:text-white/80 text-lg max-w-2xl">{t('travel.curated_desc')}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group rounded-[2rem] overflow-hidden bg-surface-container-lowest dark:bg-surface-container relative h-[450px] modern-card border border-outline-variant/10">
              <img className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" src="https://firebasestorage.googleapis.com/v0/b/kylyoapp-8ec0b.firebasestorage.app/o/Ced%2Fingenieur.jpeg?alt=media&token=5d5c0428-d611-4ba7-8464-6add3fa323aa" alt="" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/30 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8 w-full">
                <span className="text-xs font-bold uppercase tracking-widest text-secondary mb-2 block">{t('travel.iconic')}</span>
                <h3 className="font-headline font-bold text-2xl text-white mb-2">{t('travel.amalfi')}</h3>
                <p className="text-white/80 text-sm mb-6 line-clamp-2">{t('travel.amalfi_desc')}</p>
                <button onClick={() => navigate('/contact')} className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur border border-white/20 flex items-center justify-center text-white hover:bg-secondary transition-colors">
                  <span translate="no" className="material-symbols-outlined">arrow_forward</span>
                </button>
              </div>
            </div>

            <div className="group rounded-[2rem] overflow-hidden bg-surface-container-lowest dark:bg-surface-container relative h-[450px] modern-card border border-outline-variant/10">
              <img className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" src="https://firebasestorage.googleapis.com/v0/b/kylyoapp-8ec0b.firebasestorage.app/o/Ced%2Fchimiste.jpeg?alt=media&token=98fe59de-4761-40df-a5e1-088e6183876e" alt="" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/30 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8 w-full">
                <span className="text-xs font-bold uppercase tracking-widest text-secondary mb-2 block">{t('travel.mod')}</span>
                <h3 className="font-headline font-bold text-2xl text-white mb-6">{t('travel.neon')}</h3>
                <button onClick={() => navigate('/contact')} className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur border border-white/20 flex items-center justify-center text-white hover:bg-secondary transition-colors">
                  <span translate="no" className="material-symbols-outlined">arrow_forward</span>
                </button>
              </div>
            </div>

            <div className="group rounded-[2rem] overflow-hidden bg-surface-container-lowest dark:bg-surface-container relative h-[450px] modern-card border border-outline-variant/10">
              <img className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" src="https://firebasestorage.googleapis.com/v0/b/kylyoapp-8ec0b.firebasestorage.app/o/Ced%2Finfo.jpeg?alt=media&token=00d78cec-88e8-4abb-8443-84c3a2150259" alt="" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/30 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8 w-full">
                <span className="text-xs font-bold uppercase tracking-widest text-secondary mb-2 block">{t('travel.wild')}</span>
                <h3 className="font-headline font-bold text-2xl text-white mb-6">{t('travel.safari')}</h3>
                <button onClick={() => navigate('/contact')} className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur border border-white/20 flex items-center justify-center text-white hover:bg-secondary transition-colors">
                  <span translate="no" className="material-symbols-outlined">arrow_forward</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Travel;
