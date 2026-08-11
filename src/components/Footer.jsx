import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();
  return (
    <footer className="bg-surface-container-low dark:bg-surface-container/50 border-t border-outline-variant/10 w-full pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-1">
          <div className="text-xl font-black text-primary dark:text-white mb-4 font-headline flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-secondary"></span>
            JDM SARL
          </div>
          <p className="text-on-surface-variant dark:text-white/70 text-sm leading-relaxed mb-6 font-body">
            {t('footer.desc')}
          </p>
          <div className="flex gap-4 items-center">
            <a href="#" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-surface-container-lowest dark:bg-surface flex items-center justify-center text-primary dark:text-white hover:bg-secondary hover:text-white transition-all shadow-sm" aria-label="Facebook">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
              </svg>
            </a>
            <div className="w-10 h-10 rounded-xl bg-surface-container-lowest dark:bg-surface flex items-center justify-center text-primary dark:text-white hover:bg-secondary hover:text-white transition-all shadow-sm cursor-pointer">
              <span translate="no" className="material-symbols-outlined text-sm">public</span>
            </div>
            <div className="w-10 h-10 rounded-xl bg-surface-container-lowest dark:bg-surface flex items-center justify-center text-primary dark:text-white hover:bg-secondary hover:text-white transition-all shadow-sm cursor-pointer">
              <span translate="no" className="material-symbols-outlined text-sm">mail</span>
            </div>
          </div>
        </div>

        <div>
          <h5 className="font-bold text-primary dark:text-white mb-6 font-headline tracking-wide uppercase text-xs">{t('footer.services')}</h5>
          <ul className="space-y-3 font-body">
            <li>
              <Link to="/travel" className="text-on-surface-variant dark:text-white/70 text-sm hover:text-secondary dark:hover:text-secondary transition-colors">
                {t('footer.links.privateAviation')}
              </Link>
            </li>
            <li>
              <Link to="/logistics" className="text-on-surface-variant dark:text-white/70 text-sm hover:text-secondary dark:hover:text-secondary transition-colors">
                {t('footer.links.globalLogistics')}
              </Link>
            </li>
            <li>
              <Link to="/sport" className="text-on-surface-variant dark:text-white/70 text-sm hover:text-secondary dark:hover:text-secondary transition-colors">
                {t('footer.links.sportsApparel')}
              </Link>
            </li>
            <li>
              <Link to="/logistics" className="text-on-surface-variant dark:text-white/70 text-sm hover:text-secondary dark:hover:text-secondary transition-colors">
                {t('footer.links.tradeFinance')}
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h5 className="font-bold text-primary dark:text-white mb-6 font-headline tracking-wide uppercase text-xs">{t('footer.company')}</h5>
          <ul className="space-y-3 font-body">
            <li>
              <Link to="/contact" className="text-on-surface-variant dark:text-white/70 text-sm hover:text-secondary dark:hover:text-secondary transition-colors">
                {t('footer.links.privacy')}
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-on-surface-variant dark:text-white/70 text-sm hover:text-secondary dark:hover:text-secondary transition-colors">
                {t('footer.links.terms')}
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-on-surface-variant dark:text-white/70 text-sm hover:text-secondary dark:hover:text-secondary transition-colors">
                {t('footer.links.careers')}
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-on-surface-variant dark:text-white/70 text-sm hover:text-secondary dark:hover:text-secondary transition-colors">
                {t('footer.links.support')}
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h5 className="font-bold text-primary dark:text-white mb-6 font-headline tracking-wide uppercase text-xs">{t('footer.office')}</h5>
          <p className="text-on-surface-variant dark:text-white/70 text-sm leading-relaxed font-body space-y-2">
            Yaoundé (Texaco École de Police)<br />
            Douala, Cameroun / Chine<br />
            <br />
            <a href="tel:+237696464712" className="hover:text-secondary font-bold">+237 696464712</a><br />
            <a href="tel:+237657052145" className="hover:text-secondary font-bold">+237 657052145</a>
          </p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 md:px-8 mt-16 pt-8 border-t border-outline-variant/15">
        <p className="text-on-surface-variant dark:text-white/50 text-xs text-center font-body">{t('footer.rights')}</p>
      </div>
    </footer>
  );
};

export default Footer;
