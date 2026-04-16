import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const FloatingActions = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === '/';

  return (
    <>
      <div className="fixed bottom-6 left-6 z-[100] flex flex-col gap-4">
        {!isHome && (
          <button 
            onClick={() => navigate(-1)}
            className="w-12 h-12 bg-surface-container-lowest border border-outline-variant/20 rounded-full shadow-[0_8px_24px_rgba(11,29,58,0.1)] flex items-center justify-center text-primary hover:bg-surface-container-low hover:scale-110 transition-all duration-300 group"
            aria-label="Retour"
          >
            <span translate="no" className="material-symbols-outlined text-2xl group-hover:-translate-x-1 transition-transform">arrow_back</span>
          </button>
        )}
      </div>
      
      <div className="fixed bottom-6 right-6 z-[100]">
        <a 
          href="https://wa.me/12125550198"
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 bg-[#25D366] text-white rounded-full shadow-[0_12px_32px_rgba(37,211,102,0.4)] flex items-center justify-center hover:scale-110 transition-transform duration-300"
          aria-label="WhatsApp"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
            <path d="M12.031 2C6.486 2 2 6.486 2 12.031c0 1.763.461 3.491 1.341 5L2 22l5.13-1.311c1.472.843 3.161 1.285 4.901 1.285 5.545 0 10.031-4.486 10.031-10.031S17.576 2 12.031 2zm5.405 14.505c-.253.715-1.503 1.341-2.091 1.411-.531.065-1.121.2-3.136-.632-2.428-1.002-3.956-3.486-4.076-3.646-.115-.16-1.01-1.341-1.01-2.67 0-1.332.695-1.986.946-2.25.253-.266.551-.331.731-.331.18 0 .36.005.52.015.176.01.411-.065.641.486.24.57 1.071 2.616 1.141 2.756.071.14.121.305.031.5-.091.19-.141.31-.291.485-.15.176-.321.385-.451.52-.15.15-.31.32-.141.606.171.286.761 1.251 1.636 2.031 1.131 1.006 2.081 1.311 2.371 1.451.291.141.461.121.631-.07.171-.19.731-.851.931-1.146.2-.295.391-.245.651-.145.261.1 1.641.776 1.921.916.281.14.471.21.541.331.07.121.07.696-.181 1.411z"/>
          </svg>
        </a>
      </div>
    </>
  );
};

export default FloatingActions;
