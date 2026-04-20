import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const Sport = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();
  const products = [
    {
      id: 1,
      name: t('sport.kits.k1'),
      team: t('sport.teams.madrid'),
      price: '$120.00',
      tag: t('sport.best'),
      img: 'https://firebasestorage.googleapis.com/v0/b/kylyoapp-8ec0b.firebasestorage.app/o/Ced%2FSPORT%20RA.jpeg?alt=media&token=6d4343e0-9e0c-4180-ba24-88b4abbcfe11'
    },
    {
      id: 2,
      name: t('sport.kits.k2'),
      team: t('sport.teams.brazil'),
      price: '$115.00',
      tag: t('sport.pre'),
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAnNaLqhYHJFrN01zwksAHa8koBq3xYCyB1c0p4UFZZmA1V0A59rvg72y3sSIHj0j4yFEtNj0ECyE2FrBiKw4036E9qFrOlnQbe4NTbVVBz4xDFOCeFn5PeVzM3mHXfmbWMM9d4XD-txOBiOHyHKFvPa5q7LXOcTzx9iusSJvAJtupIo6sgJJz9ZtUttOfoVk4Qklajs9tJa5Zt6KFIkY2OwakfcTsJWgBihFOdpTOz8NavqtHJYFoCbHIa5J6sek5wY-4Zg68thno'
    },
    {
      id: 3,
      name: t('sport.kits.k3'),
      team: t('sport.teams.city'),
      price: '$140.00',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAMqnenOuJq0Fqc7NzBuLzDi8Qbq4SgEy0gLnIQ_ngXXJenp70m-eZ44133Aq1KMT4rcQZ43ZH-MjDJDr7zvksONS6AwK0Y4bQvRJNE6bH5DmIKCV5hEYwUTG-V2_yUuK1GVuRinG2fsC0PJJ4xAe6XDqA4CabOie_RI01UBf9RFeHoZ7sltdAorTLK-OhfQ_fIqDl3FGW_YfMR0SThLMvaFuVVpfztqMJ_HL3jWQybzs6miKRiX_CWu0Urzl9Gcue8d2eD8Y5rCH8'
    },
    {
      id: 4,
      name: t('sport.kits.k4'),
      team: t('sport.teams.france'),
      price: '$130.00',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAOzLPf3g0iLY8SgLxnk_Xh1j8PrhlXpOR9feDiSDInk9ie8Kn8hF15M3cB3leC5T_DUpe8OAQjdjExq6pxzjcidJS6OBqG853xVySxXN4HrEvYevpwFtouELY9wolLIS9fNxyFKOpCCXNF_WNJzamPm4HB1R0IovQnXK_bZdW9W7C6SVcvHgf1oVIpLvbHQDz5YTmLca2bAiiHHjZMtavuNCL77uD-mwDhIXkv0u0W-w59Wqu6fKIsLW4AUjGbWLAaXfvgsfA_G3U'
    },
    {
      id: 5,
      name: t('sport.kits.k5'),
      team: t('sport.teams.bayern'),
      price: '$155.00',
      tag: t('sport.ltd'),
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC08tzQZbPA5FhtQCdJrZoFoUpgWnRYEF-L0Dy-oCYm3u5oc_BF3vErGsHrYXA9Agfoug-Pgu3bxMd8y1SyqZCERIaNdPcMqds06mkF53kOJYb6L0080xoC2AgSxXSaP5g-3K4lnmFiLRE8nN205q7BERda6A-mkMLbnLEj0DQbrA4q_Q0spwJk0y6c1s7CBrQElWUKmZyS_elMouEmmbZACOfHt9V7v4XIL4mHHIuUaApImIuJeXS_9OnrZKk9Xx7oSd_ayHX1NK8'
    },
    {
      id: 6,
      name: t('sport.kits.k6'),
      team: t('sport.teams.argentina'),
      price: '$125.00',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAmySrsWCAt2DrOMSJ-hUNLqJcqbN2PTnpXugs-fzHm8Vo1ovifFKvXVPJxzxvH6TrvuUyitsGgoLhCbVhG4O9obm_9fnkZEgPJ9SaDdVcVrvsNr58-1B9g9jbDdlozhx1UiTBvL1e2zaI4hHnnjjbapRrj7RxtlZwl6u9nDTZM-L4C6JZNLKYg5bGTAUMm_eb5-VsurDPTa7T56TcvB6ZtupUeOwYkYVR4jJ1KEQw1aU4LUdDXVzmlEyiWhuvqNjEeE2v4A257ido'
    }
  ];

  return (
    <div className="bg-background">
      <header className="relative pt-32 pb-20 overflow-hidden bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center">
          <div className="z-10">
            <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest uppercase bg-secondary text-on-secondary rounded-full">{t('sport.arrival')}</span>
            <h1 className="text-2xl md:text-3xl md:text-4xl lg:text-5xl lg:text-7xl font-extrabold tracking-tighter text-primary leading-[1.1] mb-8">
              {t('sport.official')} <br /><span className="text-secondary">{t('sport.fan')}</span>
            </h1>
            <p className="text-lg text-on-surface-variant max-w-lg mb-10 leading-relaxed font-body">
              {t('sport.desc')}
            </p>
            <div className="flex space-x-4">
              <button onClick={() => document.getElementById('kits')?.scrollIntoView({ behavior: 'smooth' })} className="bg-primary-container text-on-primary px-4 md:px-8 py-4 rounded-xl font-bold text-lg scale-102 transition-transform shadow-lg">{t('sport.explore')}</button>
              <button onClick={() => document.getElementById('filters')?.scrollIntoView({ behavior: 'smooth' })} className="border-2 border-outline-variant/30 text-primary px-4 md:px-8 py-4 rounded-xl font-bold text-lg hover:bg-surface transition-colors">{t('sport.clubs')}</button>
            </div>
          </div>
          <div className="relative h-64 md:h-80 lg:h-[500px] hidden lg:block">
            <img
              className="w-full h-full object-cover rounded-2xl md:rounded-3xl shadow-2xl"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAhBIPBUShbWIVooFv6BTAc2KPqQ-THTHK7s6On1LjcoGXLDA-3IEBhk3pMxQcFpPy0M-lbBljJT6mBVWW7uOgHM67nik168IKrBcNnlqejTe3qgB8KWjGfgDzOF1w0uzcA_kG32yMIt_vx-i0x5QPubT-_dtrCO4cVwJjkG6kW94Ah6Fx0Z_vaIxpr1cUXRkf7S4nzRJFKwzG8Zz5K9LJOd9EP9DTRSI9AcYl2xLDMZf5z1LWTWzEr3jmpialkeWgAOzYjLXk8LxA"
              alt="Professional football jersey"
            />
            <div className="absolute -bottom-6 -left-6 bg-surface-container-lowest p-6 rounded-2xl shadow-xl border border-outline-variant/10 max-w-[240px]">
              <div className="flex items-center space-x-3 mb-2">
                <span translate="no" className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>workspace_premium</span>
                <span className="font-bold text-sm tracking-tight">{t('sport.auth')}</span>
              </div>
              <p className="text-xs text-on-surface-variant font-medium">{t('sport.auth_desc')}</p>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 md:px-8 py-10 lg:py-20 flex flex-col md:flex-row gap-6 lg:gap-12">
        <div className="flex-1 w-full mx-auto">
          <div id="kits" className="flex justify-between items-center mb-10">
            <h2 className="font-headline font-extrabold text-2xl md:text-3xl tracking-tight">{t('sport.featured')}</h2>
            <div className="flex items-center gap-4 text-sm font-medium">
              <span className="text-on-surface-variant font-bold px-4 py-2 bg-surface-container-low rounded-xl">{t('sport.showing')}</span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
            {products.map(product => (
              <div key={product.id} className="group bg-surface-container-lowest rounded-[2rem] overflow-hidden transition-all duration-500 hover:shadow-[0_24px_48px_rgba(11,29,58,0.12)]">
                <div className="aspect-[4/5] overflow-hidden relative">
                  <img src={product.img} alt={product.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  {product.tag && (
                    <div className={`absolute ${product.tag === t('sport.best') ? 'top-4 left-4 bg-white/90' : 'bottom-4 left-4 bg-secondary text-on-secondary'} backdrop-blur px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest ${product.tag === t('sport.best') ? 'text-primary' : ''}`}>
                      {product.tag}
                    </div>
                  )}
                  {product.name.includes('Stadium') && (
                    <div className="absolute top-4 right-4 bg-primary text-on-primary px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">{t('sport.pre')}</div>
                  )}
                </div>
                <div className="p-5 md:p-8">
                  <div className="mb-4">
                    <p className="text-xs font-bold text-secondary uppercase tracking-widest mb-1">{product.team}</p>
                    <h3 className="font-headline font-bold text-xl text-primary">{product.name}</h3>
                  </div>
                  <div className="flex gap-2 mt-4">
                    <button onClick={() => navigate('/contact')} className="w-full bg-surface-container-low text-primary border border-primary/10 py-3.5 rounded-xl font-bold text-sm hover:bg-secondary hover:text-white hover:border-secondary transition-colors flex items-center justify-center gap-2">
                      {t('home.services.learnMore')} <span translate="no" className="material-symbols-outlined text-[18px]">arrow_forward</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </main>
    </div>
  );
};

export default Sport;
