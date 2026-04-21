import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();
  return (
    <footer className="bg-[#f2f4f7] dark:bg-[#0b1d3a] w-full pt-12 pb-6 md:pt-16 md:pb-8">
      <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-4 gap-6 lg:gap-12">
        <div className="col-span-1 md:col-span-1">
          <div className="text-xl font-bold text-primary dark:text-white mb-4 font-headline">JDM SARL</div>
          <p className="text-primary/60 dark:text-[#f7f9fc]/60 text-sm leading-relaxed mb-6">
            {t('footer.desc')}
          </p>
          <div className="flex gap-4 items-center">
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-primary/60 hover:text-secondary cursor-pointer" aria-label="Facebook">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
              </svg>
            </a>
            <span translate="no" className="material-symbols-outlined text-primary/60 hover:text-secondary cursor-pointer">public</span>
            <span translate="no" className="material-symbols-outlined text-primary/60 hover:text-secondary cursor-pointer">share</span>
            <span translate="no" className="material-symbols-outlined text-primary/60 hover:text-secondary cursor-pointer">mail</span>
          </div>
        </div>
        <div>
          <h5 className="font-bold text-primary dark:text-white mb-6 font-headline">{t('footer.services')}</h5>
          <ul className="space-y-4">
            <li>
              <Link to="/travel" className="text-primary/60 dark:text-[#f7f9fc]/60 text-sm hover:text-primary dark:hover:text-white underline decoration-[#9b3f5a] decoration-2 underline-offset-4 transition-opacity">
                {t('footer.links.privateAviation')}
              </Link>
            </li>
            <li>
              <Link to="/logistics" className="text-primary/60 dark:text-[#f7f9fc]/60 text-sm hover:text-primary dark:hover:text-white underline decoration-[#9b3f5a] decoration-2 underline-offset-4 transition-opacity">
                {t('footer.links.globalLogistics')}
              </Link>
            </li>
            <li>
              <Link to="/sport" className="text-primary/60 dark:text-[#f7f9fc]/60 text-sm hover:text-primary dark:hover:text-white underline decoration-[#9b3f5a] decoration-2 underline-offset-4 transition-opacity">
                {t('footer.links.sportsApparel')}
              </Link>
            </li>
            <li>
              <Link to="/logistics" className="text-primary/60 dark:text-[#f7f9fc]/60 text-sm hover:text-primary dark:hover:text-white underline decoration-[#9b3f5a] decoration-2 underline-offset-4 transition-opacity">
                {t('footer.links.tradeFinance')}
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h5 className="font-bold text-primary dark:text-white mb-6 font-headline">{t('footer.company')}</h5>
          <ul className="space-y-4">
            <li>
              <Link to="/contact" className="text-primary/60 dark:text-[#f7f9fc]/60 text-sm hover:text-primary dark:hover:text-white underline decoration-[#9b3f5a] decoration-2 underline-offset-4 transition-opacity">
                {t('footer.links.privacy')}
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-primary/60 dark:text-[#f7f9fc]/60 text-sm hover:text-primary dark:hover:text-white underline decoration-[#9b3f5a] decoration-2 underline-offset-4 transition-opacity">
                {t('footer.links.terms')}
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-primary/60 dark:text-[#f7f9fc]/60 text-sm hover:text-primary dark:hover:text-white underline decoration-[#9b3f5a] decoration-2 underline-offset-4 transition-opacity">
                {t('footer.links.careers')}
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-primary/60 dark:text-[#f7f9fc]/60 text-sm hover:text-primary dark:hover:text-white underline decoration-[#9b3f5a] decoration-2 underline-offset-4 transition-opacity">
                {t('footer.links.support')}
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h5 className="font-bold text-primary dark:text-white mb-6 font-headline">{t('footer.office')}</h5>
          <p className="text-primary/60 dark:text-[#f7f9fc]/60 text-sm leading-relaxed">
            Yaoundé (Texaco École de Police)<br />
            Douala, Cameroun / Chine<br />
            <br />
            <a href="tel:+237696464712" className="hover:text-secondary">+237 696464712</a><br />
            <a href="tel:+237657052145" className="hover:text-secondary">+237 657052145</a>
          </p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 md:px-8 mt-8 md:mt-16 pt-8 border-t border-[#0B1D3A]/5">
        <p className="text-primary/60 dark:text-[#f7f9fc]/60 text-sm text-center">{t('footer.rights')}</p>
      </div>
    </footer>
  );
};

export default Footer;
