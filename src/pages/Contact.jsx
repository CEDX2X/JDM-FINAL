import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

const Contact = () => {
  const { t } = useLanguage();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = formData.subject || t('contact.sub_travel');
    const text = `Nouveau message (JDM):\n\nNom: ${formData.name}\nEmail: ${formData.email}\nSujet: ${subject}\n\nMessage:\n${formData.message}`;
    window.open(`https://wa.me/237696464712?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <main className="pt-32 pb-24 px-4 md:px-8 max-w-7xl mx-auto">
      <header className="mb-12 md:mb-20 text-center max-w-3xl mx-auto">
        <span className="text-secondary font-bold text-xs uppercase tracking-widest mb-3 block">Service Concierge & Support</span>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-primary dark:text-white mb-6 font-headline">{t('contact.title')}</h1>
        <p className="text-on-surface-variant dark:text-white/80 text-lg leading-relaxed font-body">
          {t('contact.desc')}
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        {/* Contact Form Section */}
        <section className="lg:col-span-7 bg-surface-container-low dark:bg-surface-container/30 rounded-[2.5rem] p-8 md:p-12 border border-outline-variant/10 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
          <h2 className="text-2xl md:text-3xl font-bold text-primary dark:text-white mb-8 font-headline">{t('contact.msg')}</h2>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant dark:text-white/70 ml-1">{t('contact.name')}</label>
                <input required name="name" value={formData.name} onChange={handleChange} className="w-full bg-surface-container-lowest dark:bg-surface border border-outline-variant/20 rounded-2xl py-4 px-5 focus:ring-2 focus:ring-secondary/20 transition-all outline-none text-on-surface dark:text-white font-body" placeholder={t('contact.ph_name')} type="text" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant dark:text-white/70 ml-1">{t('contact.email')}</label>
                <input required name="email" value={formData.email} onChange={handleChange} className="w-full bg-surface-container-lowest dark:bg-surface border border-outline-variant/20 rounded-2xl py-4 px-5 focus:ring-2 focus:ring-secondary/20 transition-all outline-none text-on-surface dark:text-white font-body" placeholder="john@jdmsarl.com" type="email" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant dark:text-white/70 ml-1">{t('contact.subject')}</label>
              <select name="subject" value={formData.subject} onChange={handleChange} className="w-full bg-surface-container-lowest dark:bg-surface border border-outline-variant/20 rounded-2xl py-4 px-5 focus:ring-2 focus:ring-secondary/20 transition-all outline-none text-on-surface dark:text-white font-body appearance-none cursor-pointer">
                <option value={t('contact.sub_travel')}>{t('contact.sub_travel')}</option>
                <option value={t('contact.sub_logistics')}>{t('contact.sub_logistics')}</option>
                <option value={t('contact.sub_sport')}>{t('contact.sub_sport')}</option>
                <option value={t('contact.sub_partner')}>{t('contact.sub_partner')}</option>
                <option value={t('contact.sub_other')}>{t('contact.sub_other')}</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant dark:text-white/70 ml-1">{t('contact.your_msg')}</label>
              <textarea required name="message" value={formData.message} onChange={handleChange} className="w-full bg-surface-container-lowest dark:bg-surface border border-outline-variant/20 rounded-2xl py-4 px-5 focus:ring-2 focus:ring-secondary/20 transition-all outline-none text-on-surface dark:text-white font-body" placeholder={t('contact.ph_msg')} rows="5"></textarea>
            </div>
            <button className="group relative bg-secondary text-white w-full md:w-auto px-10 py-5 rounded-2xl font-bold flex items-center justify-center gap-3 hover:scale-105 transition-all duration-300 shadow-xl shadow-secondary/30" type="submit">
              {t('contact.deliver')}
              <span translate="no" className="material-symbols-outlined text-lg group-hover:translate-x-1 transition-transform">send</span>
            </button>
          </form>
        </section>

        {/* Sidebar Info */}
        <aside className="lg:col-span-5 space-y-8">
          {/* Address Card */}
          <div className="bg-surface-container-lowest dark:bg-surface-container rounded-[2.5rem] p-8 border border-outline-variant/10 modern-card">
            <div className="flex items-start gap-6">
              <div className="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary flex-shrink-0">
                <span translate="no" className="material-symbols-outlined text-2xl">location_on</span>
              </div>
              <div>
                <h3 className="text-xs font-bold uppercase tracking-widest text-on-surface-variant dark:text-white/60 mb-2">{t('contact.hq')}</h3>
                <p className="text-lg font-bold text-primary dark:text-white leading-snug" dangerouslySetInnerHTML={{ __html: t('contact.hq_addr') }}></p>
              </div>
            </div>
          </div>

          {/* Contact Details Card */}
          <div className="bg-surface-container-low dark:bg-surface-container/30 rounded-[2.5rem] p-8 space-y-6 border border-outline-variant/10">
            <div className="flex items-center gap-6">
              <div className="w-12 h-12 rounded-2xl bg-primary text-white flex items-center justify-center flex-shrink-0 shadow-md">
                <span translate="no" className="material-symbols-outlined text-xl">call</span>
              </div>
              <div>
                <h3 className="text-xs font-bold uppercase tracking-widest text-on-surface-variant dark:text-white/60">{t('contact.concierge')}</h3>
                <p className="font-bold text-primary dark:text-white text-sm md:text-base">+237 696464712<br />+237 657052145</p>
              </div>
            </div>
            <div className="h-px w-full bg-outline-variant/20"></div>
            <div className="flex items-center gap-6">
              <div className="w-12 h-12 rounded-2xl bg-primary text-white flex items-center justify-center flex-shrink-0 shadow-md">
                <span translate="no" className="material-symbols-outlined text-xl">mail</span>
              </div>
              <div>
                <h3 className="text-xs font-bold uppercase tracking-widest text-on-surface-variant dark:text-white/60">{t('contact.inquiries')}</h3>
                <p className="font-bold text-primary dark:text-white text-sm md:text-base">jdmtravel@outlook.com</p>
              </div>
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="relative rounded-[2.5rem] overflow-hidden aspect-video shadow-2xl border border-outline-variant/10 group">
            <div className="absolute inset-0 bg-primary/20 backdrop-blur-sm z-10 flex items-center justify-center pointer-events-none group-hover:opacity-0 transition-opacity duration-500">
              <div className="bg-surface/90 dark:bg-surface-container/90 px-6 py-3 rounded-2xl flex items-center gap-2 shadow-2xl border border-outline-variant/20">
                <span translate="no" className="material-symbols-outlined text-secondary">explore</span>
                <span className="font-bold text-sm text-primary dark:text-white">{t('contact.interactive')}</span>
              </div>
            </div>
            <img
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuALHucCMCrL9EtIfLkx5VJOUPXXdDVOou6IF3m5gHIzd54eWFwEZGEGwF1z3v65Pc_2Ie92qQpzIXPGhddRjgsyj1gpOt7lIMYbfdf1IJjPs6YQqg5bWITuTQ6iNjficP_CUQgzrRmztI_wCq_O_8-NQuEFrKm_isWJ-IEAO657vr-Sm-NfzrhlFW39mxBSUV4Q5QRZgZv6Nqu-rCpgYmmx7MAZDJGOMDUgGe0tmbvCz0ioe-SYQyftobloclV4jOtuMS4Sj4e3VFo"
              alt="Map location"
            />
          </div>
        </aside>
      </div>

      {/* Secondary CTA Section */}
      <section className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-8 bg-surface-container-lowest dark:bg-surface-container border-l-4 border-secondary rounded-2xl shadow-sm border border-outline-variant/10">
          <h4 className="font-bold text-primary dark:text-white text-lg mb-2">{t('contact.corp')}</h4>
          <p className="text-sm text-on-surface-variant dark:text-white/70 leading-relaxed">{t('contact.corp_desc')}</p>
        </div>
        <div className="p-8 bg-surface-container-lowest dark:bg-surface-container border-l-4 border-primary rounded-2xl shadow-sm border border-outline-variant/10">
          <h4 className="font-bold text-primary dark:text-white text-lg mb-2">{t('contact.priv')}</h4>
          <p className="text-sm text-on-surface-variant dark:text-white/70 leading-relaxed">{t('contact.priv_desc')}</p>
        </div>
        <div className="p-8 bg-surface-container-lowest dark:bg-surface-container border-l-4 border-secondary-fixed-dim rounded-2xl shadow-sm border border-outline-variant/10">
          <h4 className="font-bold text-primary dark:text-white text-lg mb-2">{t('contact.sup')}</h4>
          <p className="text-sm text-on-surface-variant dark:text-white/70 leading-relaxed">{t('contact.sup_desc')}</p>
        </div>
      </section>
    </main>
  );
};

export default Contact;
