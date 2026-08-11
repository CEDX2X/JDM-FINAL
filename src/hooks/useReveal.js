import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function useReveal() {
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const reveals = document.querySelectorAll('.reveal-on-scroll');
      reveals.forEach((el) => {
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;
        const elementVisible = 100;
        if (elementTop < windowHeight - elementVisible) {
          el.classList.add('is-revealed');
        }
      });
    };

    const timer = setTimeout(() => {
      handleScroll();
    }, 50);

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, [location.pathname]);
}
