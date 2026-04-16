import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#f2f4f7] dark:bg-[#0b1d3a] w-full pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-1">
          <div className="text-xl font-bold text-[#0B1D3A] dark:text-white mb-4 font-headline">JDM SARL</div>
          <p className="text-[#0B1D3A]/60 dark:text-[#f7f9fc]/60 text-sm leading-relaxed mb-6">
            Redefining excellence in global services through innovation, trust, and absolute precision.
          </p>
          <div className="flex gap-4">
            <span className="material-symbols-outlined text-[#0B1D3A]/60 hover:text-secondary cursor-pointer">public</span>
            <span className="material-symbols-outlined text-[#0B1D3A]/60 hover:text-secondary cursor-pointer">share</span>
            <span className="material-symbols-outlined text-[#0B1D3A]/60 hover:text-secondary cursor-pointer">mail</span>
          </div>
        </div>
        <div>
          <h5 className="font-bold text-[#0B1D3A] dark:text-white mb-6 font-headline">Services</h5>
          <ul className="space-y-4">
            <li>
              <Link to="/travel" className="text-[#0B1D3A]/60 dark:text-[#f7f9fc]/60 text-sm hover:text-[#0B1D3A] dark:hover:text-white underline decoration-[#9b3f5a] decoration-2 underline-offset-4 transition-opacity">
                Private Aviation
              </Link>
            </li>
            <li>
              <Link to="/logistics" className="text-[#0B1D3A]/60 dark:text-[#f7f9fc]/60 text-sm hover:text-[#0B1D3A] dark:hover:text-white underline decoration-[#9b3f5a] decoration-2 underline-offset-4 transition-opacity">
                Global Logistics
              </Link>
            </li>
            <li>
              <Link to="/shop" className="text-[#0B1D3A]/60 dark:text-[#f7f9fc]/60 text-sm hover:text-[#0B1D3A] dark:hover:text-white underline decoration-[#9b3f5a] decoration-2 underline-offset-4 transition-opacity">
                Sports Apparel
              </Link>
            </li>
            <li>
              <Link to="/logistics" className="text-[#0B1D3A]/60 dark:text-[#f7f9fc]/60 text-sm hover:text-[#0B1D3A] dark:hover:text-white underline decoration-[#9b3f5a] decoration-2 underline-offset-4 transition-opacity">
                Trade Finance
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h5 className="font-bold text-[#0B1D3A] dark:text-white mb-6 font-headline">Company</h5>
          <ul className="space-y-4">
            <li>
              <Link to="#" className="text-[#0B1D3A]/60 dark:text-[#f7f9fc]/60 text-sm hover:text-[#0B1D3A] dark:hover:text-white underline decoration-[#9b3f5a] decoration-2 underline-offset-4 transition-opacity">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="#" className="text-[#0B1D3A]/60 dark:text-[#f7f9fc]/60 text-sm hover:text-[#0B1D3A] dark:hover:text-white underline decoration-[#9b3f5a] decoration-2 underline-offset-4 transition-opacity">
                Terms of Service
              </Link>
            </li>
            <li>
              <Link to="#" className="text-[#0B1D3A]/60 dark:text-[#f7f9fc]/60 text-sm hover:text-[#0B1D3A] dark:hover:text-white underline decoration-[#9b3f5a] decoration-2 underline-offset-4 transition-opacity">
                Careers
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-[#0B1D3A]/60 dark:text-[#f7f9fc]/60 text-sm hover:text-[#0B1D3A] dark:hover:text-white underline decoration-[#9b3f5a] decoration-2 underline-offset-4 transition-opacity">
                Support
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h5 className="font-bold text-[#0B1D3A] dark:text-white mb-6 font-headline">Office</h5>
          <p className="text-[#0B1D3A]/60 dark:text-[#f7f9fc]/60 text-sm leading-relaxed">
            1200 Avenue of the Americas<br />
            Level 45, JDM Tower<br />
            New York, NY 10036
          </p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-8 mt-16 pt-8 border-t border-[#0B1D3A]/5">
        <p className="text-[#0B1D3A]/60 dark:text-[#f7f9fc]/60 text-sm text-center">© 2024 JDM SARL Global Services. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
