import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const Home = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();
  return (
    <div className="bg-surface">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <img
            className="w-full h-full object-cover scale-105"
            src="https://firebasestorage.googleapis.com/v0/b/kylyoapp-8ec0b.firebasestorage.app/o/Ced%2Flanding%20JDM.jpeg?alt=media&token=2e5af903-2247-42f0-afd3-1ce9676450df"
            alt="Luxurious private jet and cargo ship"
          />
          <div className="absolute inset-0 hero-gradient"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 w-full py-20">
          <div className="max-w-4xl lg:max-w-5xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-bold tracking-widest uppercase mb-8">
              <span className="w-2 h-2 rounded-full bg-secondary animate-ping"></span>
              Global Concierge & Trade Leader
            </div>
            <h1 className="font-headline font-extrabold text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-[1.1] tracking-tight mb-8">
              {t('home.hero.gateway')} <span className="text-secondary">{t('home.hero.travel')}</span>{t('home.hero.comma')} <span className="text-secondary-fixed-dim">{t('home.hero.trade')}</span> {t('home.hero.and')} <span className="text-secondary">{t('home.hero.sports')}</span>
            </h1>
            <p className="text-white/80 text-lg sm:text-xl md:text-2xl mb-10 leading-relaxed max-w-3xl font-body">
              {t('home.hero.desc')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-secondary text-white px-8 py-5 rounded-2xl font-bold text-lg transition-all hover:scale-105 shadow-xl shadow-secondary/30 flex items-center justify-center gap-3 group" onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}>
                {t('home.hero.explore')}
                <span translate="no" className="material-symbols-outlined group-hover:translate-y-1 transition-transform">arrow_downward</span>
              </button>
              <button className="text-white hover:text-secondary font-bold text-lg transition-colors flex items-center gap-2 group py-3" onClick={() => navigate('/contact')}>
                {t('home.hero.started')} <span translate="no" className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section id="services" className="py-20 lg:py-32 bg-surface reveal-on-scroll">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-20 gap-6">
            <div className="max-w-2xl">
              <span className="text-secondary font-bold text-xs uppercase tracking-widest mb-3 block">Excellence & Sur-mesure</span>
              <h2 className="font-headline font-extrabold text-3xl md:text-4xl lg:text-5xl text-primary dark:text-white mb-6 tracking-tight">{t('home.services.title')}</h2>
              <p className="text-on-surface-variant dark:text-white/80 text-lg leading-relaxed font-body">{t('home.services.desc')}</p>
            </div>
            <div className="hidden lg:block h-px w-48 bg-outline-variant/30 mb-4"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {/* Travel Services */}
            <div className="md:col-span-8 group relative overflow-hidden rounded-[2.5rem] bg-surface-container-low dark:bg-surface-container/40 border border-outline-variant/10 modern-card p-6 md:p-10 flex flex-col justify-between reveal-on-scroll">
              <div className="relative overflow-hidden rounded-2xl bg-surface-container-low flex justify-center items-center h-[320px] sm:h-[400px] mb-8">
                <img
                  className="absolute inset-0 w-full h-full object-cover blur-lg opacity-40 scale-110"
                  src="https://firebasestorage.googleapis.com/v0/b/kylyoapp-8ec0b.firebasestorage.app/o/Ced%2Fvoyageur%20jdm.jpeg?alt=media&token=fcd6f2f3-47d5-4787-87df-a11e8829958f"
                  alt=""
                  aria-hidden="true"
                />
                <div className="absolute inset-0 bg-primary/10"></div>
                <img
                  className="relative z-10 w-full h-full object-contain transition-transform duration-700 group-hover:scale-105 p-4 drop-shadow-2xl"
                  src="https://firebasestorage.googleapis.com/v0/b/kylyoapp-8ec0b.firebasestorage.app/o/Ced%2FLAUREAT.jpeg?alt=media&token=d2d40788-f4ba-4107-bfc6-85bc97962005"
                  alt="LAUREAT"
                />
              </div>
              <div>
                <h3 className="font-headline font-bold text-2xl md:text-3xl mb-3 text-primary dark:text-white">{t('home.services.travel')}</h3>
                <p className="text-on-surface-variant dark:text-white/70 mb-8 max-w-xl text-base">{t('home.services.travelDesc')}</p>
                <button onClick={() => navigate('/travel')} className="inline-flex items-center gap-3 bg-primary text-on-primary px-6 py-3.5 rounded-xl font-bold text-sm hover:bg-secondary transition-colors group-hover:translate-x-1 duration-300">
                  {t('home.services.learnMore')} <span translate="no" className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </button>
              </div>
            </div>

            {/* Import/Export */}
            <div className="md:col-span-4 group relative overflow-hidden rounded-[2.5rem] bg-surface-container-low dark:bg-surface-container/40 border border-outline-variant/10 modern-card p-6 md:p-8 flex flex-col justify-between reveal-on-scroll">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden mb-6 relative">
                <img
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuC0vNoiqsCCERttN2W44FMoDMENJ7mj06EWtIBnSY_ccGsy6F05zLovZU-_gua35GqScaajS56R8iKV8AuMHPB5G-g0oDAw2ygw9t4Q3emxfHEMAbcr7G1pn0pXmW8ce80TkBHGleinZYtol2UergFE9T77jn3fLk-_JCbkQm1s-Cn-0__E3FPD6TxwqfMB4KguxJmljpGLddOwEiyZcC1ci2wtnPxVg5Ulcmbv2GJ2HXwJLvED7atkSjaguHhkGgqH9ZeQHIT6yEE"
                  alt="Shipping terminal at sunrise"
                />
              </div>
              <div>
                <h3 className="font-headline font-bold text-2xl mb-3 text-primary dark:text-white">{t('home.services.import')}</h3>
                <p className="text-on-surface-variant dark:text-white/70 mb-6 text-sm">{t('home.services.importDesc')}</p>
                <button onClick={() => navigate('/logistics')} className="inline-flex items-center gap-2 text-secondary font-bold hover:gap-3 transition-all text-sm">
                  {t('home.services.learnMore')} <span translate="no" className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </button>
              </div>
            </div>

            {/* Football Sport */}
            <div className="md:col-span-12 group relative overflow-hidden rounded-[2.5rem] bg-primary-container text-white flex flex-col md:flex-row items-center modern-card shadow-2xl reveal-on-scroll">
              <div className="w-full md:w-1/2 p-8 md:p-14 lg:p-16">
                <span className="inline-block px-4 py-1 bg-secondary rounded-full text-xs font-bold mb-6 tracking-widest">{t('home.services.premium')}</span>
                <h3 className="font-headline font-extrabold text-3xl md:text-4xl mb-6">{t('home.services.sport')}</h3>
                <p className="text-on-primary-container text-lg mb-8 leading-relaxed">{t('home.services.sportDesc')}</p>
                <button onClick={() => navigate('/sport')} className="bg-surface-container-lowest text-primary px-8 py-4 rounded-xl font-bold hover:bg-secondary hover:text-white transition-all shadow-lg flex items-center gap-3">
                  {t('home.services.shopCol')} <span translate="no" className="material-symbols-outlined">shopping_bag</span>
                </button>
              </div>
              <div className="w-full md:w-1/2 h-[350px] md:h-full relative overflow-hidden">
                <img
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  src="https://firebasestorage.googleapis.com/v0/b/kylyoapp-8ec0b.firebasestorage.app/o/Ced%2FSPORT%20RA.jpeg?alt=media&token=6d4343e0-9e0c-4180-ba24-88b4abbcfe11"
                  alt="equipement"
                />
                <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-primary-container via-transparent to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 lg:py-32 bg-surface-container-low dark:bg-surface-container/20 border-y border-outline-variant/10 reveal-on-scroll">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
            <span className="text-secondary font-bold text-xs uppercase tracking-widest mb-3 block">Valeurs Fondamentales</span>
            <h2 className="font-headline font-extrabold text-3xl md:text-4xl lg:text-5xl mb-6 text-primary dark:text-white">{t('home.why.title')}</h2>
            <p className="text-on-surface-variant dark:text-white/80 text-lg">{t('home.why.desc')}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-surface-container-lowest dark:bg-surface-container p-8 md:p-10 rounded-[2rem] border border-outline-variant/10 modern-card text-center reveal-on-scroll">
              <div className="w-20 h-20 bg-primary/10 dark:bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-8 text-primary dark:text-secondary-fixed">
                <span translate="no" className="material-symbols-outlined text-4xl">verified_user</span>
              </div>
              <h4 className="font-headline font-bold text-2xl mb-4 text-primary dark:text-white">{t('home.why.trust')}</h4>
              <p className="text-on-surface-variant dark:text-white/70 leading-relaxed text-base">{t('home.why.trustDesc')}</p>
            </div>
            <div className="bg-surface-container-lowest dark:bg-surface-container p-8 md:p-10 rounded-[2rem] border border-outline-variant/10 modern-card text-center reveal-on-scroll">
              <div className="w-20 h-20 bg-primary/10 dark:bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-8 text-primary dark:text-secondary-fixed">
                <span translate="no" className="material-symbols-outlined text-4xl">rocket_launch</span>
              </div>
              <h4 className="font-headline font-bold text-2xl mb-4 text-primary dark:text-white">{t('home.why.agility')}</h4>
              <p className="text-on-surface-variant dark:text-white/70 leading-relaxed text-base">{t('home.why.agilityDesc')}</p>
            </div>
            <div className="bg-surface-container-lowest dark:bg-surface-container p-8 md:p-10 rounded-[2rem] border border-outline-variant/10 modern-card text-center reveal-on-scroll">
              <div className="w-20 h-20 bg-primary/10 dark:bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-8 text-primary dark:text-secondary-fixed">
                <span translate="no" className="material-symbols-outlined text-4xl">support_agent</span>
              </div>
              <h4 className="font-headline font-bold text-2xl mb-4 text-primary dark:text-white">{t('home.why.support')}</h4>
              <p className="text-on-surface-variant dark:text-white/70 leading-relaxed text-base">{t('home.why.supportDesc')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 lg:py-32 bg-surface overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
            <div className="w-full lg:w-1/3">
              <span className="text-secondary font-bold text-xs uppercase tracking-widest mb-3 block">Témoignages clients</span>
              <h2 className="font-headline font-extrabold text-3xl md:text-4xl lg:text-5xl mb-6 text-primary dark:text-white">{t('home.testimonials.title')}</h2>
              <div className="flex gap-1.5 mb-6 text-secondary">
                {[...Array(5)].map((_, i) => (
                  <span key={i} translate="no" className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                ))}
              </div>
              <p className="text-on-surface-variant dark:text-white/70 leading-relaxed">Découvrez comment JDM SARL accompagne au quotidien ses partenaires à travers le monde avec rigueur et confiance.</p>
            </div>
            <div className="w-full lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-surface-container-lowest dark:bg-surface-container p-8 rounded-[2rem] border border-outline-variant/10 relative modern-card flex flex-col justify-between">
                <span translate="no" className="material-symbols-outlined text-secondary/30 text-5xl absolute top-6 right-6">format_quote</span>
                <p className="text-lg italic text-on-surface dark:text-white/90 mb-8 leading-relaxed">"{t('home.testimonials.t1')}"</p>
                <div className="flex items-center gap-4 pt-6 border-t border-outline-variant/10">
                  <div className="w-14 h-14 rounded-full overflow-hidden shadow-md">
                    <img
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuAdUKOIFL924g_ydSaP1KfmOFY_qK-ij61KTbuJ_C6T1X7dKnLso-FrbvtrcYMCy5X8zMmW6yi0D78ZNsfwh5BiMAFMhwPmr09g5m2AUGRdJFYYPo9ptbIxKf2xM_qcuDQsb724s_R2_gDXAv8hOWK1Oe2te5cqjcehwfwltfjko4l3U3v87Mn_shR8wm6rrFXxZwTQQCPkj_rv3jp2kk_XyfotbnxbUTtMPnCqIY0YcZUgfliEZpxUWSbZyL0KhakDvlJozRQ3Jbk"
                      alt="Henri Mvondo"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-bold text-primary dark:text-white text-base">Henri Mvondo</p>
                    <p className="text-xs text-on-surface-variant dark:text-white/60 font-medium">{t('home.testimonials.p1')}</p>
                  </div>
                </div>
              </div>
              <div className="bg-surface-container-lowest dark:bg-surface-container p-8 rounded-[2rem] border border-outline-variant/10 relative modern-card flex flex-col justify-between">
                <span translate="no" className="material-symbols-outlined text-secondary/30 text-5xl absolute top-6 right-6">format_quote</span>
                <p className="text-lg italic text-on-surface dark:text-white/90 mb-8 leading-relaxed">"{t('home.testimonials.t2')}"</p>
                <div className="flex items-center gap-4 pt-6 border-t border-outline-variant/10">
                  <div className="w-14 h-14 rounded-full overflow-hidden shadow-md">
                    <img
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuBndvEjLo1Ems4hWBC3fjgU1fi_1hT-Me-IYrAm6s_dlXt8o9osUz-cobgTSExQoIWQ-FQwusleUb16ikhQMNkuzPsAtwb9mBj0zLc3pP9VUOXOqHKdXSAV-Q_mqMfSKsd7DbhjVHzTvLDeuaQ0anUW6H5XH8r1iqlLKtGIDc-qtmAuJX78D7uNbHJboPtop73Yi83dRT-ipGnh2O29wN8ag5QAU8_qQxSKYYGrFM06Mk9LQ4iY5_NbKTa4RNUSn9CvJiyPk33IRKE"
                      alt="Nyemb Ghislain Valerie"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-bold text-primary dark:text-white text-base">Nyemb Ghislain Valerie</p>
                    <p className="text-xs text-on-surface-variant dark:text-white/60 font-medium">{t('home.testimonials.p2')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Preview */}
      <section className="py-16 lg:py-24 bg-primary-container relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          <div className="bg-white/5 backdrop-blur-xl rounded-[2.5rem] p-8 md:p-16 border border-white/10 flex flex-col md:flex-row justify-between items-center gap-8 shadow-2xl">
            <div className="max-w-xl">
              <span className="text-secondary font-bold text-xs uppercase tracking-widest mb-3 block">Prêt à démarrer ?</span>
              <h2 className="font-headline font-extrabold text-3xl md:text-4xl text-white mb-4">{t('home.cta.title')}</h2>
              <p className="text-on-primary-container text-lg">{t('home.cta.desc')}</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
              <a className="bg-secondary text-white px-8 py-4 rounded-xl font-bold text-center hover:scale-105 transition-all shadow-lg" href="mailto:concierge@jdmsarl.com">{t('home.cta.touch')}</a>
              <button onClick={() => navigate('/contact')} className="text-white hover:text-secondary font-bold text-center transition-colors flex items-center justify-center gap-2 group py-3">
                {t('home.cta.brochure')} <span translate="no" className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
