import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const Home = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();
  return (
    <div className="bg-surface">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            className="w-full h-full object-cover"
            src="https://firebasestorage.googleapis.com/v0/b/kylyoapp-8ec0b.firebasestorage.app/o/Ced%2Flanding%20JDM.jpeg?alt=media&token=2e5af903-2247-42f0-afd3-1ce9676450df"
            alt="Luxurious private jet and cargo ship"
          />
          <div className="absolute inset-0 hero-gradient"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 w-full">
          <div className="max-w-4xl lg:max-w-5xl">
            <h1 className="font-headline font-extrabold text-white text-2xl md:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight tracking-tight mb-8">
              {t('home.hero.gateway')} <span className="text-secondary-container">{t('home.hero.travel')}</span>{t('home.hero.comma')} <span className="text-secondary-fixed-dim">{t('home.hero.trade')}</span> {t('home.hero.and')} <span className="text-secondary-container">{t('home.hero.sports')}</span>
            </h1>
            <p className="text-on-primary-container text-xl md:text-2xl mb-8 md:mb-12 leading-relaxed">
              {t('home.hero.desc')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-secondary text-white px-10 py-5 rounded-xl font-bold text-lg transition-all hover:scale-102 hover:shadow-xl" onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}>
                {t('home.hero.explore')}
              </button>
              <button className="border-2 border-white/30 text-white px-10 py-5 rounded-xl font-bold text-lg hover:bg-white/10 backdrop-blur-md transition-all" onClick={() => navigate('/contact')}>
                {t('home.hero.started')}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section id="services" className="py-16 lg:py-32 bg-surface">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-8 md:mb-16 gap-6 md:gap-8">
            <div className="max-w-2xl">
              <h2 className="font-headline font-bold text-2xl md:text-3xl md:text-4xl lg:text-5xl text-primary mb-6">{t('home.services.title')}</h2>
              <p className="text-on-surface-variant text-lg leading-relaxed font-body">{t('home.services.desc')}</p>
            </div>
            <div className="hidden md:block h-[2px] flex-grow bg-surface-variant mx-12 mb-4"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
            {/* Travel Services */}
            <div className="md:col-span-8 group relative overflow-hidden rounded-xl bg-surface-container-lowest transition-all hover:shadow-2xl">
              <div className="aspect-[16/9] overflow-hidden">
                <img
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCFyMNEr7ophOQPepI-x2L6ygmFL4TskbikTIrv9XwZme6PLRJXC483aJ-6S0R6WG_okpIfIR59SElljNft5D_5EXwva-HiyX14kGH5uelUg-rg3amP-tktaP4IpvLuleBIO88BBfbg_P0HmHAVdfk21mZm5cQLjY8xdHAfIgqzyBHOI2IVFlZ943fS-wpGLUFa7B1nv4e7zn5u-P95gBzl8FZaTtrMjWkH1gAnnhc-uk6LEOyx6nXsPfNvL044SKUBBwdP_Bx3rQ8"
                  alt="Luxury vehicle interior"
                />
              </div>
              <div className="p-5 md:p-8">
                <h3 className="font-headline font-bold text-2xl md:text-3xl mb-4">{t('home.services.travel')}</h3>
                <p className="text-on-surface-variant mb-8 max-w-xl">{t('home.services.travelDesc')}</p>
                <button onClick={() => navigate('/travel')} className="flex items-center gap-2 text-secondary font-bold hover:gap-4 transition-all">
                  {t('home.services.learnMore')} <span translate="no" className="material-symbols-outlined">arrow_forward</span>
                </button>
              </div>
            </div>
            {/* Import/Export */}
            <div className="md:col-span-4 group relative overflow-hidden rounded-xl bg-surface-container-lowest transition-all hover:shadow-2xl">
              <div className="aspect-square overflow-hidden">
                <img
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuC0vNoiqsCCERttN2W44FMoDMENJ7mj06EWtIBnSY_ccGsy6F05zLovZU-_gua35GqScaajS56R8iKV8AuMHPB5G-g0oDAw2ygw9t4Q3emxfHEMAbcr7G1pn0pXmW8ce80TkBHGleinZYtol2UergFE9T77jn3fLk-_JCbkQm1s-Cn-0__E3FPD6TxwqfMB4KguxJmljpGLddOwEiyZcC1ci2wtnPxVg5Ulcmbv2GJ2HXwJLvED7atkSjaguHhkGgqH9ZeQHIT6yEE"
                  alt="Shipping terminal at sunrise"
                />
              </div>
              <div className="p-5 md:p-8">
                <h3 className="font-headline font-bold text-2xl mb-4">{t('home.services.import')}</h3>
                <p className="text-on-surface-variant mb-8">{t('home.services.importDesc')}</p>
                <button onClick={() => navigate('/logistics')} className="flex items-center gap-2 text-secondary font-bold hover:gap-4 transition-all">
                  {t('home.services.learnMore')} <span translate="no" className="material-symbols-outlined">arrow_forward</span>
                </button>
              </div>
            </div>
            {/* Football Sport */}
            <div className="md:col-span-12 group relative overflow-hidden rounded-xl bg-primary-container text-white flex flex-col md:flex-row items-center">
              <div className="w-full md:w-1/2 p-12 lg:p-16">
                <span className="inline-block px-4 py-1 bg-secondary rounded-full text-xs font-bold mb-6 tracking-widest">{t('home.services.premium')}</span>
                <h3 className="font-headline font-bold text-2xl md:text-3xl lg:text-4xl mb-6">{t('home.services.sport')}</h3>
                <p className="text-on-primary-container text-lg mb-10 leading-relaxed">{t('home.services.sportDesc')}</p>
                <button onClick={() => navigate('/sport')} className="bg-white text-primary px-4 md:px-8 py-4 rounded-xl font-bold hover:bg-secondary hover:text-white transition-all">
                  {t('home.services.shopCol')}
                </button>
              </div>
              <div className="w-full md:w-1/2 h-[400px] md:h-full relative overflow-hidden">
                <img
                  className="w-full h-full object-cover grayscale brightness-75 transition-all group-hover:grayscale-0 group-hover:scale-105"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuC3j5Getj8TK7-HrGObUQueH5Wtc04Y--sKjEiBEmpsNL2aL1lAGtjdZ48fx4_8c6G8nhU-WqwVx2ES3q4PgyLH0VB9EPRqRNCBRBKsl_qgdJovWaNlNUbY1J3sgJsxCWCD0XR3JjlrsNkYSJzQfrl8C3GdIvTbW3nUXn1QUEEcgINQzmghrbP95hBmZ97LwIEA6z4gIQau8bSXItHZW9XhuTpmEC5wLTkbd_yMkz-Rvx0QjLyY7S3xPmrG0rN25d0hxMyNAfbnDU8"
                  alt="Football jersey in locker room"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 lg:py-32 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-10 md:mb-20">
            <h2 className="font-headline font-bold text-2xl md:text-3xl md:text-4xl lg:text-5xl mb-6">{t('home.why.title')}</h2>
            <p className="text-on-surface-variant text-xl max-w-2xl mx-auto">{t('home.why.desc')}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-12">
            <div className="text-center p-5 md:p-8">
              <div className="w-20 h-16 md:h-20 bg-white rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-sm">
                <span translate="no" className="material-symbols-outlined text-2xl md:text-3xl lg:text-4xl text-secondary">verified_user</span>
              </div>
              <h4 className="font-headline font-bold text-2xl mb-4">{t('home.why.trust')}</h4>
              <p className="text-on-surface-variant leading-relaxed">{t('home.why.trustDesc')}</p>
            </div>
            <div className="text-center p-5 md:p-8">
              <div className="w-20 h-16 md:h-20 bg-white rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-sm">
                <span translate="no" className="material-symbols-outlined text-2xl md:text-3xl lg:text-4xl text-secondary">rocket_launch</span>
              </div>
              <h4 className="font-headline font-bold text-2xl mb-4">{t('home.why.agility')}</h4>
              <p className="text-on-surface-variant leading-relaxed">{t('home.why.agilityDesc')}</p>
            </div>
            <div className="text-center p-5 md:p-8">
              <div className="w-20 h-16 md:h-20 bg-white rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-sm">
                <span translate="no" className="material-symbols-outlined text-2xl md:text-3xl lg:text-4xl text-secondary">support_agent</span>
              </div>
              <h4 className="font-headline font-bold text-2xl mb-4">{t('home.why.support')}</h4>
              <p className="text-on-surface-variant leading-relaxed">{t('home.why.supportDesc')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 lg:py-32 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative">
          <span className="absolute top-0 right-8 text-[12rem] font-headline font-black text-surface-container leading-none -z-10 opacity-50 select-none">{t('home.testimonials.bgtext')}</span>
          <div className="flex flex-col md:flex-row gap-6 md:gap-8 lg:gap-16 items-center">
            <div className="w-full md:w-1/3">
              <h2 className="font-headline font-bold text-2xl md:text-3xl md:text-4xl lg:text-5xl mb-8">{t('home.testimonials.title')}</h2>
              <div className="flex gap-2 mb-8">
                <span translate="no" className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span translate="no" className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span translate="no" className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span translate="no" className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span translate="no" className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              </div>
            </div>
            <div className="w-full md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              <div className="bg-surface-container-low p-6 md:p-10 rounded-xl relative">
                <span translate="no" className="material-symbols-outlined text-secondary opacity-30 text-2xl md:text-3xl md:text-4xl lg:text-5xl absolute top-6 right-6">format_quote</span>
                <p className="text-lg italic text-on-surface mb-8">{t('home.testimonials.t1')}</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden">
                    <img
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuAdUKOIFL924g_ydSaP1KfmOFY_qK-ij61KTbuJ_C6T1X7dKnLso-FrbvtrcYMCy5X8zMmW6yi0D78ZNsfwh5BiMAFMhwPmr09g5m2AUGRdJFYYPo9ptbIxKf2xM_qcuDQsb724s_R2_gDXAv8hOWK1Oe2te5cqjcehwfwltfjko4l3U3v87Mn_shR8wm6rrFXxZwTQQCPkj_rv3jp2kk_XyfotbnxbUTtMPnCqIY0YcZUgfliEZpxUWSbZyL0KhakDvlJozRQ3Jbk"
                      alt="Julian Vancore"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-bold">Julian Vancore</p>
                    <p className="text-xs text-on-surface-variant">{t('home.testimonials.p1')}</p>
                  </div>
                </div>
              </div>
              <div className="bg-surface-container-low p-6 md:p-10 rounded-xl relative">
                <span translate="no" className="material-symbols-outlined text-secondary opacity-30 text-2xl md:text-3xl md:text-4xl lg:text-5xl absolute top-6 right-6">format_quote</span>
                <p className="text-lg italic text-on-surface mb-8">{t('home.testimonials.t2')}</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden">
                    <img
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuBndvEjLo1Ems4hWBC3fjgU1fi_1hT-Me-IYrAm6s_dlXt8o9osUz-cobgTSExQoIWQ-FQwusleUb16ikhQMNkuzPsAtwb9mBj0zLc3pP9VUOXOqHKdXSAV-Q_mqMfSKsd7DbhjVHzTvLDeuaQ0anUW6H5XH8r1iqlLKtGIDc-qtmAuJX78D7uNbHJboPtop73Yi83dRT-ipGnh2O29wN8ag5QAU8_qQxSKYYGrFM06Mk9LQ4iY5_NbKTa4RNUSn9CvJiyPk33IRKE"
                      alt="Marcus Sterling"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-bold">Marcus Sterling</p>
                    <p className="text-xs text-on-surface-variant">{t('home.testimonials.p2')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Preview */}
      <section className="py-12 lg:py-24 bg-primary-container relative">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 md:p-12 lg:p-16 border border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 lg:gap-12">
            <div className="max-w-xl">
              <h2 className="font-headline font-bold text-2xl md:text-3xl lg:text-4xl text-white mb-6">{t('home.cta.title')}</h2>
              <p className="text-on-primary-container text-lg">{t('home.cta.desc')}</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-6 w-full md:w-auto">
              <a className="bg-secondary text-white px-4 md:px-8 py-4 rounded-xl font-bold text-center hover:scale-102 transition-transform" href="mailto:concierge@jdmsarl.com">{t('home.cta.touch')}</a>
              <button onClick={() => navigate('/contact')} className="border border-white/30 text-white px-4 md:px-8 py-4 rounded-xl font-bold text-center hover:bg-white/10 transition-all">{t('home.cta.brochure')}</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
