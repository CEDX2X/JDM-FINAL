import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const TopNavBar = () => {
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Travel', path: '/travel' },
    { name: 'Logistics', path: '/logistics' },
    { name: 'Sport', path: '/sport' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-[#00030f]/80 backdrop-blur-xl shadow-[0_12px_32px_rgba(11,29,58,0.06)]">
      <div className="max-w-7xl mx-auto px-8 flex justify-between items-center h-20">
        <Link to="/" className="flex items-center gap-3 text-2xl font-black tracking-tighter text-[#0B1D3A] dark:text-white font-headline">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/kylyoapp-8ec0b.firebasestorage.app/o/Ced%2FJDM.jpeg?alt=media&token=446b9ce2-8680-4102-9761-c2f125b43031"
            alt="JDM SARL Logo"
            className="h-10 w-auto rounded-lg object-contain"
          />
          <span>JDM SARL</span>
        </Link>
        <div className="hidden md:flex space-x-10 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`${
                location.pathname === link.path
                  ? 'text-[#9b3f5a] font-extrabold'
                  : 'text-[#0B1D3A]/70 dark:text-[#f7f9fc]/70 font-bold hover:text-[#9b3f5a]'
              } transition-colors duration-300 font-headline tracking-tight`}
            >
              {link.name}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-6">
          <button className="material-symbols-outlined text-[#0B1D3A]/70 dark:text-white">search</button>
          <button className="bg-primary-container text-on-primary px-6 py-2.5 rounded-xl font-bold transition-transform duration-300 hover:scale-102">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
};

export default TopNavBar;
