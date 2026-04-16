import React from 'react';

const Travel = () => {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[870px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            className="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuB5UIPXw65dZxOjuAewn8tkJ_Yvc2h4i1AyQrjglbfrxeaNKtG-kTjQxpLG_tWSLbZJmcAj48ibYbUNbF7lCkF49LeyLeJqXQYbtP5d2NiWA3uRUETUSyDka9MVybPmI-2yht61so6XQQiE1YFL6XHIfWEpx8-MFHVSV3HiZfN_ZUmRJgW7ETfOWoo3g40c9VCg0waM5hhPZ7_lMlaNQuSmN--v4KdfdEIe55ZElxHPQ2MulakXWWMkWMKhsuHsrBnCwmd8JpWYTp0"
            alt="Airplane at sunrise"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/40 to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-8 w-full">
          <div className="max-w-2xl">
            <span className="inline-block px-4 py-1.5 bg-secondary text-on-secondary text-xs font-bold tracking-widest mb-6 rounded-full uppercase">World-Class Concierge</span>
            <h1 className="text-white font-headline font-extrabold text-6xl md:text-7xl leading-[1.1] tracking-tighter mb-8">
              Premium Travel <br />Experiences
            </h1>
            <p className="text-white/80 text-lg leading-relaxed mb-10 font-body max-w-lg">
              Architecting seamless journeys across the globe. From bespoke itineraries to elite logistics, we redefine the art of the voyage.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-secondary text-on-secondary px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-transform duration-300 shadow-xl shadow-secondary/20">
                Book Now
              </button>
              <button className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/20 transition-all duration-300">
                View Destinations
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-surface-container-low py-24">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-end mb-20">
            <div className="md:col-span-7">
              <h2 className="font-headline text-4xl md:text-5xl font-extrabold text-primary-container tracking-tight leading-tight">
                Precision Flight &amp; <br />Visa Logistics
              </h2>
            </div>
            <div className="md:col-span-5">
              <p className="text-on-surface-variant font-body leading-relaxed text-lg">
                We manage the complexities of international travel so you can focus on the destination. Our elite team handles every nuance of your transit.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Flight Booking Module */}
            <div className="bg-surface-container-lowest p-10 rounded-[2rem] shadow-[0_12px_32px_rgba(11,29,58,0.04)] group hover:shadow-xl transition-all duration-500">
              <div className="flex justify-between items-start mb-8">
                <div className="bg-primary-container/5 p-4 rounded-2xl">
                  <span translate="no" className="material-symbols-outlined text-4xl text-primary-container">flight_takeoff</span>
                </div>
                <span className="text-sm font-bold text-secondary tracking-widest uppercase">Global Routes</span>
              </div>
              <h3 className="font-headline text-2xl font-bold text-primary-container mb-4">Elite Flight Booking</h3>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3 text-on-surface-variant">
                  <span translate="no" className="material-symbols-outlined text-secondary text-xl">check_circle</span>
                  <span>First &amp; Business Class exclusivity</span>
                </li>
                <li className="flex items-center gap-3 text-on-surface-variant">
                  <span translate="no" className="material-symbols-outlined text-secondary text-xl">check_circle</span>
                  <span>Private charter arrangements</span>
                </li>
                <li className="flex items-center gap-3 text-on-surface-variant">
                  <span translate="no" className="material-symbols-outlined text-secondary text-xl">check_circle</span>
                  <span>24/7 dynamic rescheduling</span>
                </li>
              </ul>
              <button className="inline-flex items-center gap-2 font-bold text-primary-container hover:text-secondary transition-colors duration-300">
                Inquire Now <span translate="no" className="material-symbols-outlined">arrow_forward</span>
              </button>
            </div>
            {/* Visa Assistance Module */}
            <div className="bg-surface-container-lowest p-10 rounded-[2rem] shadow-[0_12px_32px_rgba(11,29,58,0.04)] group hover:shadow-xl transition-all duration-500">
              <div className="flex justify-between items-start mb-8">
                <div className="bg-primary-container/5 p-4 rounded-2xl">
                  <span translate="no" className="material-symbols-outlined text-4xl text-primary-container">description</span>
                </div>
                <span className="text-sm font-bold text-secondary tracking-widest uppercase">Fast Track</span>
              </div>
              <h3 className="font-headline text-2xl font-bold text-primary-container mb-4">Visa &amp; Documentation</h3>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3 text-on-surface-variant">
                  <span translate="no" className="material-symbols-outlined text-secondary text-xl">check_circle</span>
                  <span>Expedited embassy processing</span>
                </li>
                <li className="flex items-center gap-3 text-on-surface-variant">
                  <span translate="no" className="material-symbols-outlined text-secondary text-xl">check_circle</span>
                  <span>Luxury document courier services</span>
                </li>
                <li className="flex items-center gap-3 text-on-surface-variant">
                  <span translate="no" className="material-symbols-outlined text-secondary text-xl">check_circle</span>
                  <span>Global diplomatic network access</span>
                </li>
              </ul>
              <button className="inline-flex items-center gap-2 font-bold text-primary-container hover:text-secondary transition-colors duration-300">
                Check Requirements <span translate="no" className="material-symbols-outlined">arrow_forward</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Tourism Packages */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-8">
          <div className="mb-16 text-center">
            <h2 className="font-headline text-4xl md:text-5xl font-extrabold text-primary-container tracking-tight">Curated Tourism Packages</h2>
            <p className="mt-4 text-on-surface-variant max-w-xl mx-auto">Explore our signature collections, designed for the most discerning travelers.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-[800px]">
            {/* Amalfi Coast Large Card */}
            <div className="md:col-span-8 relative rounded-3xl overflow-hidden group shadow-2xl">
              <img
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAj4uYbG83RI-1d0wbupztd9UVZO2LCM0H8-1e5B5GJmK7OQoZqWRtR_dNjaVwIEtF5VanhFbN5MM1fyFf7k-y_l79FWzLewazhuO97qChH0by4LmN3oLK38R9rbv7mDmsIfYVIGf5gKIUGrtk8yQOxZQb2qUO74fiOd89nuICTAbPy1KabIhOpNMazAt3NP4TTCdWqDcPdZE18dM6vC2SejAfSgrLRCsaNpk5gA8M2tQ-mqFBjisS2xs7hv5Tg5fEeDxesyOMD17c"
                alt="Amalfi Coast"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-12 w-full">
                <div className="flex justify-between items-end">
                  <div>
                    <span className="text-secondary-fixed font-bold tracking-widest text-sm uppercase mb-2 block">Iconic Italy</span>
                    <h3 className="text-white font-headline text-4xl font-bold mb-4">Amalfi Coast Private Escape</h3>
                    <p className="text-white/70 max-w-md mb-6">7 nights in a clifftop estate with private yacht access and Michelin-starred dining.</p>
                  </div>
                  <div className="text-right">
                    <p className="text-white/50 text-xs uppercase font-bold tracking-widest mb-1">Starting from</p>
                    <p className="text-white font-headline text-3xl font-bold">$12,500</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Tokyo Card */}
            <div className="md:col-span-4 relative rounded-3xl overflow-hidden group shadow-lg">
              <img
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAyZLQ-Y03f_gHft1BTd1qZqBwQcfK2j1RmmEvq5OrEIaIzaUXhGFYtGIyhbpq4n8P4V0c-RBLxMvlHqb4yWhozhDd9NR8JcTfXlw_fEv6yfdnL-FGv-HZ68qEZFSzQ-337ndEHkadHhTmiVO40rl7gf2jxlN8Lr5IKM2LVcFPUBv53phKa_KSQ8E_wdNdYiB81o0xu_Dclx6oIy21HXavqthWDWR45ZBGDPZPVN6K75vYD9t2mg0hhmVYpL2I_IalbU0QqycWhUjU"
                alt="Tokyo"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8">
                <span className="text-secondary-fixed font-bold tracking-widest text-xs uppercase mb-2 block">Modern Orient</span>
                <h3 className="text-white font-headline text-2xl font-bold mb-2">Neon Spirits: Tokyo</h3>
                <p className="text-white text-lg font-bold">$8,200</p>
              </div>
            </div>

            {/* Safari Card */}
            <div className="md:col-span-4 relative rounded-3xl overflow-hidden group shadow-lg">
              <img
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAAo6S1G6uLhm1qVc6SNHL-913wrcVpPn8G9yde_qBvH6cFL1RyZwwNIQfQgei6-KrPLiKQOBvTbuvXhXuW1PHgxnHoCkymAjtr9Exbm9-T7ESyJT1_t-zlqTeVdEKOvO8YiptIxiIdTZpE6eHNg4CGwRB6KaZVRK8G3HxenT0ZJ7soFPxAjqT5ImTXU_Bgl-2ZkeU7Pu3mlGbZiS0jHYjX6sHI-3X8Q-uaTWBpGzS1S52hnkn-zMweFclDVeCDHIc2aj6K7qjigys"
                alt="Safari"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8">
                <span className="text-secondary-fixed font-bold tracking-widest text-xs uppercase mb-2 block">Wild Luxury</span>
                <h3 className="text-white font-headline text-2xl font-bold mb-2">Serengeti Sky-Safari</h3>
                <p className="text-white text-lg font-bold">$15,900</p>
              </div>
            </div>

            {/* Swiss Alps Card */}
            <div className="md:col-span-8 relative rounded-3xl overflow-hidden group shadow-lg">
              <img
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAsXbQJzegJdiTrVU24CtslfSqUK1ulf1d5KhbrA8E1Y0zbFFz7ijZlGfyfuzU_3Gu48vluhOMIwvMH93ORNVo3bbhqWcxJ4clGLIfZKavveEBHXRWzcrn79yjDBMcyhWGxnQtgRARV69CS66kGRbmv0qug6tzz4RpLWEkM_jQW5Hlwcp8j_ZyRwHzwwD0iUcM5b-P3Op54G04a7HitqSYPYu-4Et0nFon152CwOenGoIjSBnANKOhbu39TmeVta8FFZVLdT1jGqHk"
                alt="Swiss Alps"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-12 w-full flex justify-between items-end">
                <div>
                  <span className="text-secondary-fixed font-bold tracking-widest text-sm uppercase mb-2 block">Alpine Elite</span>
                  <h3 className="text-white font-headline text-3xl font-bold mb-2">The Grand Alpine Express</h3>
                  <p className="text-white text-xl font-bold">$9,800</p>
                </div>
                <button className="bg-secondary text-on-secondary px-6 py-3 rounded-xl font-bold hover:scale-105 transition-transform">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary-container overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <div className="bg-surface-container-lowest/10 backdrop-blur-2xl rounded-[3rem] p-16 text-center border border-white/10">
            <h2 className="font-headline text-4xl md:text-6xl font-extrabold text-white mb-8">Ready for your next journey?</h2>
            <p className="text-white/60 text-xl max-w-2xl mx-auto mb-12 font-body">
              Contact our senior consultants to begin architecting your bespoke travel experience.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <button className="bg-secondary text-on-secondary px-12 py-5 rounded-xl font-bold text-xl hover:shadow-[0_0_40px_rgba(155,63,90,0.5)] transition-all">
                Book Now
              </button>
              <button className="bg-white text-primary-container px-12 py-5 rounded-xl font-bold text-xl hover:bg-surface-variant transition-colors">
                Talk to an Agent
              </button>
            </div>
          </div>
        </div>
        {/* Decorative texture */}
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 pointer-events-none">
          <img
            className="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDpzpnyMGkknJPgZ8viog5oR0PYnmdf_kEdZ6F2BnB1ZTvWcMJDnLoiaFrCrGXyKcqhiA_qwf3L_Lxiq75xJWSJNl-bpYipfs_F1dM6VYZu_O94Pp4Zu3alQeUfzNoZ2MD3L53YoVylLEh5a7uI_HUWla_Ae8YXU4MzyO2vWyC5vBQio6v7kaA-q1QFiNhV0TRqa9H7WW3IR5Kj9CgRz41hnbMHh1uJZU7V9wUeNT_NeCPGfy16zbQRSk0iaNG3WhA4izw5rX2I-vs"
            alt="Topographical texture"
          />
        </div>
      </section>
    </main>
  );
};

export default Travel;
