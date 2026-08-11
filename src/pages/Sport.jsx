import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Sport = () => {
  const { t } = useLanguage();

  const products = [
    { 
      id: 1, 
      name: t('sport.kits.k1'), 
      team: t('sport.teams.madrid'), 
      price: '$120.00', 
      tag: t('sport.best'), 
      img: 'https://firebasestorage.googleapis.com/v0/b/kylyoapp-8ec0b.firebasestorage.app/o/Ced%2Fsport%2FWhatsApp%20Image%202026-04-20%20at%2011.44.26.jpeg?alt=media&token=6290fc23-e1ed-4739-90e7-f2253f780466' 
    },
    { 
      id: 2, 
      name: t('sport.kits.k2'), 
      team: t('sport.teams.brazil'), 
      price: '$115.00', 
      tag: t('sport.pre'), 
      img: 'https://firebasestorage.googleapis.com/v0/b/kylyoapp-8ec0b.firebasestorage.app/o/Ced%2Fsport%2FWhatsApp%20Image%202026-04-20%20at%2014.41.45%20(2).jpeg?alt=media&token=7c46ce54-db78-42e1-bdd0-1ef6c1fa2a19' 
    },
    { 
      id: 3, 
      name: t('sport.kits.k3'), 
      team: t('sport.teams.city'), 
      price: '$140.00', 
      img: 'https://firebasestorage.googleapis.com/v0/b/kylyoapp-8ec0b.firebasestorage.app/o/Ced%2Fsport%2FWhatsApp%20Image%202026-04-20%20at%2014.41.45%20(1).jpeg?alt=media&token=c908a1ba-8d18-4b8b-ba3d-223e31487270' 
    },
    { 
      id: 4, 
      name: t('sport.kits.k4'), 
      team: t('sport.teams.france'), 
      price: '$130.00', 
      img: 'https://firebasestorage.googleapis.com/v0/b/kylyoapp-8ec0b.firebasestorage.app/o/Ced%2Fsport%2FWhatsApp%20Image%202026-04-20%20at%2014.41.45.jpeg?alt=media&token=77520757-3511-49f6-8f31-f99ec028c193' 
    },
    { 
      id: 5, 
      name: t('sport.kits.k5'), 
      team: t('sport.teams.bayern'), 
      price: '$155.00', 
      tag: t('sport.ltd'), 
      img: 'https://firebasestorage.googleapis.com/v0/b/kylyoapp-8ec0b.firebasestorage.app/o/Ced%2Fsport%2FWhatsApp%20Image%202026-04-20%20at%2014.41.41.jpeg?alt=media&token=9dbfbfc9-45d5-4723-84b1-2c8c45e24c18' 
    },
    { 
      id: 6, 
      name: t('sport.kits.k6'), 
      team: t('sport.teams.argentina'), 
      price: '$125.00', 
      img: 'https://firebasestorage.googleapis.com/v0/b/kylyoapp-8ec0b.firebasestorage.app/o/Ced%2Fsport%2FWhatsApp%20Image%202026-04-20%20at%2014.41.42.jpeg?alt=media&token=c6f9a544-7cb8-4f23-8b4a-f374ce533ec1' 
    }
  ];

  return (
    <div className="bg-background min-h-screen">
      <header className="relative pt-32 pb-20 overflow-hidden bg-surface-container-low dark:bg-surface-container/20 border-b border-outline-variant/10">
        <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="z-10">
            <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest uppercase bg-secondary text-white rounded-full shadow-md">{t('sport.arrival')}</span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-tight text-primary dark:text-white leading-[1.1] mb-6 font-headline">
              {t('sport.official')} <br /><span className="text-secondary">{t('sport.fan')}</span>
            </h1>
            <p className="text-lg text-on-surface-variant dark:text-white/80 max-w-lg mb-10 leading-relaxed font-body">
              {t('sport.desc')}
            </p>
            <div className="flex space-x-4">
              <button 
                onClick={() => document.getElementById('kits')?.scrollIntoView({ behavior: 'smooth' })} 
                className="bg-primary text-on-primary px-8 py-4 rounded-2xl font-bold text-lg hover:scale-105 transition-transform shadow-xl shadow-primary/20"
              >
                {t('sport.explore')}
              </button>
            </div>
          </div>
          <div className="relative h-80 lg:h-[450px] hidden lg:block">
            <div className="absolute inset-0 bg-gradient-to-tr from-secondary/20 to-primary/20 rounded-[3rem] blur-2xl -z-10"></div>
            <img 
              className="w-full h-full object-cover rounded-[2.5rem] shadow-2xl border border-outline-variant/10" 
              src="https://firebasestorage.googleapis.com/v0/b/kylyoapp-8ec0b.firebasestorage.app/o/Ced%2FSPORT%20RA.jpeg?alt=media&token=6d4343e0-9e0c-4180-ba24-88b4abbcfe11" 
              alt="Professional football jersey" 
            />
            <div className="absolute -bottom-6 -left-6 bg-surface-container-lowest dark:bg-surface-container p-6 rounded-2xl shadow-2xl border border-outline-variant/10 max-w-[260px]">
              <div className="flex items-center space-x-3 mb-2">
                <span translate="no" className="material-symbols-outlined text-secondary text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>workspace_premium</span>
                <span className="font-bold text-sm tracking-tight text-primary dark:text-white">{t('sport.auth')}</span>
              </div>
              <p className="text-xs text-on-surface-variant dark:text-white/70 font-medium">{t('sport.auth_desc')}</p>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 md:px-8 py-16 lg:py-24">
        <div id="kits" className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-4">
          <div>
            <span className="text-secondary font-bold text-xs uppercase tracking-widest mb-2 block">Collection Exclusive</span>
            <h2 className="font-headline font-extrabold text-3xl md:text-4xl text-primary dark:text-white tracking-tight">{t('sport.featured')}</h2>
          </div>
          <div className="px-4 py-2 bg-surface-container-low dark:bg-surface-container rounded-xl text-sm font-bold text-on-surface-variant dark:text-white/80">
            {t('sport.showing')}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map(product => (
            <div key={product.id} className="group bg-surface-container-lowest dark:bg-surface-container rounded-[2.5rem] overflow-hidden modern-card border border-outline-variant/10 flex flex-col justify-between">
              <div className="aspect-[4/5] overflow-hidden relative bg-surface-container-low">
                <img src={product.img} alt={product.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                {product.tag && (
                  <div className={`absolute top-4 left-4 ${product.tag === t('sport.best') ? 'bg-surface/90 text-primary dark:bg-surface-container/90 dark:text-white' : 'bg-secondary text-white'} backdrop-blur px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-md`}>
                    {product.tag}
                  </div>
                )}
              </div>
              <div className="p-6 md:p-8 flex flex-col justify-between flex-grow">
                <div>
                  <h3 className="font-headline font-bold text-xl text-primary dark:text-white mb-2">{product.name}</h3>
                </div>
                <div className="pt-6 mt-6 border-t border-outline-variant/10">
                  <button onClick={() => window.location.href='https://yedrop.com/shop/6a37be3e91a2b2512f3e6730'} className="w-full bg-primary-container text-on-primary py-4 rounded-xl font-bold text-sm hover:bg-secondary transition-colors flex items-center justify-center gap-2 shadow-lg">
                    {t('home.services.learnMore')} <span translate="no" className="material-symbols-outlined text-[18px]">arrow_forward</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Sport;
