import React from 'react';

const Logistics = () => {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[921px] flex items-center overflow-hidden bg-surface">
        <div className="max-w-7xl mx-auto px-8 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 z-10">
            <span className="inline-block py-1 px-3 bg-secondary-fixed text-on-secondary-fixed-variant rounded-full text-xs font-bold tracking-widest mb-6 font-label">ESTABLISHED GLOBAL NETWORK</span>
            <h1 className="font-headline text-5xl md:text-7xl font-extrabold text-primary leading-[1.1] tracking-tight mb-8">
              Global Logistics &amp; <br /><span className="text-secondary">Trade Solutions</span>
            </h1>
            <p className="text-lg text-on-surface-variant max-w-xl leading-relaxed mb-10 font-body">
              Navigating the complexities of international commerce with architectural precision. We provide the infrastructure for your global expansion.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-primary-container text-on-primary px-8 py-4 rounded-xl font-headline font-bold text-lg hover:scale-105 transition-transform duration-300 shadow-xl shadow-primary-container/20">Request a Quote</button>
              <button className="flex items-center gap-3 px-8 py-4 text-primary font-headline font-bold border-2 border-primary/5 rounded-xl hover:bg-surface-container-low transition-colors">
                <span translate="no" className="material-symbols-outlined">play_circle</span>
                View Capabilities
              </button>
            </div>
          </div>
          <div className="lg:col-span-5 relative h-[500px] lg:h-[700px]">
            <div className="absolute inset-0 rounded-[2rem] overflow-hidden rotate-3 scale-105 shadow-2xl">
              <img
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCl3sh5g-CJrqDt74LeFjqLtesD_i8ueW04-A4nEQLtnikrU4UoxcL0izGbVIpRVkdumkwOx35qSEHyVyL7nrm1VHFEp8dR7peEnkfuek_fI7XODT5f1zYzHhT-EUdNsYaIgx_3N5pdgCjy3V19eEFiY2KlthM5uUQv9aUauZ-J_rufqxTejJRJxkflrOSd2dk71zU9zmP5c9pLnXsKEyA8n-lkft_OimWpfikBDwpAG-ngB2mfArknSHnR-O7pZoOfncaHrHwSh8g"
                alt="Cargo ship"
              />
            </div>
            <div className="absolute -bottom-12 -left-12 bg-white p-8 rounded-2xl shadow-2xl max-w-xs hidden md:block">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-secondary-fixed flex items-center justify-center rounded-full">
                  <span translate="no" className="material-symbols-outlined text-secondary">public</span>
                </div>
                <div>
                  <div className="text-sm font-bold font-headline">Live Tracking</div>
                  <div className="text-xs text-on-surface-variant">240+ Active Vessels</div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="h-2 bg-surface-container rounded-full overflow-hidden">
                  <div className="w-2/3 h-full bg-secondary"></div>
                </div>
                <div className="flex justify-between text-[10px] font-bold text-on-surface-variant">
                  <span>SHANGHAI</span>
                  <span>ROTTERDAM</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-32 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <div className="max-w-2xl">
              <h2 className="font-headline text-4xl font-bold text-primary mb-4">International Shipping</h2>
              <p className="text-on-surface-variant font-body">Our bespoke shipping routes and multimodal solutions ensure your cargo reaches any destination with maximum efficiency and minimal risk.</p>
            </div>
            <div className="flex gap-4">
              <span translate="no" className="material-symbols-outlined p-3 rounded-full border border-outline-variant/30 text-on-surface-variant cursor-pointer hover:bg-white transition-colors">arrow_back</span>
              <span translate="no" className="material-symbols-outlined p-3 rounded-full border border-outline-variant/30 text-on-surface-variant cursor-pointer hover:bg-white transition-colors">arrow_forward</span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Ocean Freight */}
            <div className="bg-surface-container-lowest p-8 rounded-[2rem] hover:shadow-2xl transition-all duration-500 group">
              <div className="w-16 h-16 bg-primary-fixed flex items-center justify-center rounded-2xl mb-8 group-hover:scale-110 transition-transform">
                <span translate="no" className="material-symbols-outlined text-primary text-3xl">directions_boat</span>
              </div>
              <h3 className="font-headline text-2xl font-bold mb-4">Ocean Freight</h3>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3 text-on-surface-variant text-sm">
                  <span translate="no" className="material-symbols-outlined text-secondary text-sm">check_circle</span> Full Container Load (FCL)
                </li>
                <li className="flex items-center gap-3 text-on-surface-variant text-sm">
                  <span translate="no" className="material-symbols-outlined text-secondary text-sm">check_circle</span> Less than Container Load (LCL)
                </li>
                <li className="flex items-center gap-3 text-on-surface-variant text-sm">
                  <span translate="no" className="material-symbols-outlined text-secondary text-sm">check_circle</span> Specialized Equipment Handling
                </li>
              </ul>
              <img
                className="w-full h-48 object-cover rounded-xl mt-4 opacity-80 group-hover:opacity-100 transition-opacity"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCck6JqDCYapkaaNe1QwLCR0-Kt0shCp52_s3r8bOcwaca830hxauA5Rpf8xqCQjpkNlYtR4K-u29RTxf7NR3matw9F1vfiB5pQumfGCFaCqzY2lvs1l3wGKdHbdEK2n9g9VsqwGeZpFyfTkEPoJ6oNcaZh3ROv6EOab5J8a04dr08lU7r0LVKLOqfu_CNQ8jbJysOKDclcayHFZChap2IOXa50UHfn4RwlwUklVA-8kV09-JyVOuLOl2ukkRrFEUOmBMcKFl-GylM"
                alt="Industrial port crane"
              />
            </div>
            {/* Air Freight */}
            <div className="bg-primary-container p-8 rounded-[2rem] text-on-primary relative overflow-hidden shadow-xl">
              <div className="relative z-10 h-full flex flex-col">
                <div className="w-16 h-16 bg-white/10 backdrop-blur-md flex items-center justify-center rounded-2xl mb-8">
                  <span translate="no" className="material-symbols-outlined text-white text-3xl">flight_takeoff</span>
                </div>
                <h3 className="font-headline text-2xl font-bold mb-4">Air Cargo</h3>
                <p className="text-on-primary-container mb-8 text-sm leading-relaxed">Time-critical delivery solutions for high-value goods, ensuring your supply chain never stops moving.</p>
                <ul className="space-y-4 mb-8 flex-grow">
                  <li className="flex items-center gap-3 text-sm">
                    <span translate="no" className="material-symbols-outlined text-secondary-container text-sm">bolt</span> Next Flight Out (NFO)
                  </li>
                  <li className="flex items-center gap-3 text-sm">
                    <span translate="no" className="material-symbols-outlined text-secondary-container text-sm">bolt</span> Global Air Charters
                  </li>
                </ul>
                <button className="w-full py-4 bg-white text-primary font-bold rounded-xl hover:bg-secondary-fixed transition-colors">Book Priority</button>
              </div>
            </div>
            {/* Ground Logistics */}
            <div className="bg-surface-container-lowest p-8 rounded-[2rem] hover:shadow-2xl transition-all duration-500 group">
              <div className="w-16 h-16 bg-secondary-fixed flex items-center justify-center rounded-2xl mb-8 group-hover:scale-110 transition-transform">
                <span translate="no" className="material-symbols-outlined text-secondary text-3xl">local_shipping</span>
              </div>
              <h3 className="font-headline text-2xl font-bold mb-4">Ground Network</h3>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3 text-on-surface-variant text-sm">
                  <span translate="no" className="material-symbols-outlined text-secondary text-sm">check_circle</span> Cross-border Trucking
                </li>
                <li className="flex items-center gap-3 text-on-surface-variant text-sm">
                  <span translate="no" className="material-symbols-outlined text-secondary text-sm">check_circle</span> Last-mile Distribution
                </li>
                <li className="flex items-center gap-3 text-on-surface-variant text-sm">
                  <span translate="no" className="material-symbols-outlined text-secondary text-sm">check_circle</span> Temperature Controlled
                </li>
              </ul>
              <div className="mt-4 p-4 bg-surface-container-low rounded-xl border border-outline-variant/10">
                <div className="text-[10px] font-bold text-on-surface-variant tracking-widest uppercase mb-2">Fleet Availability</div>
                <div className="flex gap-1 h-1.5">
                  <div className="flex-1 bg-secondary rounded-full"></div>
                  <div className="flex-1 bg-secondary rounded-full"></div>
                  <div className="flex-1 bg-secondary rounded-full"></div>
                  <div className="flex-1 bg-surface-variant rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Logistics Management */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <img
              className="w-full rounded-[3rem]"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB3Z25iS0NpiMxnYtnJId1tmRN7VuSpyXVfB3rO6m94ana1jCypclbMPz-yF65kWx3lT88dxC-t2S-h4W93JCNxPoeL7C5eCwkK1h_aXHvo9ULbMWNgztYzqPWgRc31BttOrk0UzZU8a9aQMHZnNbpIWSrGAw43YJMMdWiEQxYypUApFPBC5fWdcAUzlkruEf-PFtpdiLIINTXojURowJbLMAWMA4wSindI7qizzZQbIxlVvex-4W4hNo8f275GCQIwgi5YGKxiEmE"
              alt="Global shipping routes map"
            />
            <div className="absolute top-1/4 right-0 transform translate-x-1/2 bg-white p-6 rounded-2xl shadow-xl border border-outline-variant/20 max-w-[200px]">
              <div className="text-3xl font-black text-secondary font-headline">99.8%</div>
              <div className="text-xs font-bold text-on-surface-variant mt-1">Delivery Success Rate</div>
            </div>
          </div>
          <div>
            <span className="text-secondary font-bold tracking-widest text-xs uppercase mb-4 block">Logistics Management</span>
            <h2 className="font-headline text-4xl font-bold text-primary mb-8">Precision-Engineered Supply Chains</h2>
            <div className="space-y-12">
              <div className="flex gap-6 relative">
                <div className="flex flex-col items-center">
                  <div className="w-4 h-4 rounded-full bg-primary-fixed-dim ring-4 ring-primary-fixed-dim/20"></div>
                  <div className="w-0.5 h-20 bg-surface-variant mt-2"></div>
                </div>
                <div>
                  <h4 className="font-headline text-lg font-bold">Predictive Analytics</h4>
                  <p className="text-on-surface-variant text-sm leading-relaxed mt-2">AI-driven forecasting to anticipate demand fluctuations and route obstructions before they occur.</p>
                </div>
              </div>
              <div className="flex gap-6 relative">
                <div className="flex flex-col items-center">
                  <div className="w-4 h-4 rounded-full bg-secondary ring-4 ring-secondary/20"></div>
                  <div className="w-0.5 h-20 bg-surface-variant mt-2"></div>
                </div>
                <div>
                  <h4 className="font-headline text-lg font-bold">Warehouse Optimization</h4>
                  <p className="text-on-surface-variant text-sm leading-relaxed mt-2">Strategic positioning of stock in our global network of high-security, automated fulfillment centers.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-4 h-4 rounded-full bg-primary-fixed-dim ring-4 ring-primary-fixed-dim/20"></div>
                </div>
                <div>
                  <h4 className="font-headline text-lg font-bold">Customs Compliance</h4>
                  <p className="text-on-surface-variant text-sm leading-relaxed mt-2">Expert navigating of complex international trade laws and automated filing systems.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Partnerships */}
      <section className="py-24 bg-primary text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
          <img
            className="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAEoog5OX7mBnQRYkn7qLl3pOUmyS2doC8aztG2G5PMAyCulVOfisOrkLRV7-IcpytSywBfrc5E_68TGEq-Zdc8_l4v1qPVKAWhGj4s2S2DJHE-BaQMKy7yOM7dGESdSLoYv1cYpT6qTmjRD13p9jKW2qkLh_JJ8rrqhBo8Z3wFuggqsg6tznHBB85ZthhMRSAo66y7P7a3RTvXrLXlsd-01uNCz9AkBJsLQBGXBDzn0mjkaULOZU3F4oOAOsYT4AiHZkLw3-cZ0_Q"
            alt="Professionals shaking hands"
          />
        </div>
        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <div className="max-w-3xl">
            <h2 className="font-headline text-4xl font-extrabold mb-6">Elevate Your Enterprise with JDM SARL</h2>
            <p className="text-primary-fixed-dim text-lg mb-10 font-body leading-relaxed">
              We don't just move boxes; we build partnerships. Join a global elite of businesses who leverage our logistics architecture to dominate their markets.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <div className="flex-1 bg-white/5 backdrop-blur-lg border border-white/10 p-6 rounded-2xl">
                <div className="text-sm font-bold text-secondary-container mb-2">For Enterprises</div>
                <h3 className="text-xl font-bold mb-4">Dedicated Management</h3>
                <p className="text-sm text-on-primary-container mb-6">A personal logistics architect for your account, 24/7 priority support, and bespoke pricing models.</p>
                <button className="inline-flex items-center gap-2 text-white font-bold hover:underline">Inquire <span translate="no" className="material-symbols-outlined text-sm">arrow_forward</span></button>
              </div>
              <div className="flex-1 bg-white/5 backdrop-blur-lg border border-white/10 p-6 rounded-2xl">
                <div className="text-sm font-bold text-secondary-container mb-2">For SME's</div>
                <h3 className="text-xl font-bold mb-4">Scaleable Solutions</h3>
                <p className="text-sm text-on-primary-container mb-6">Pay-as-you-grow logistics, simplified customs dashboard, and access to our global carrier network.</p>
                <button className="inline-flex items-center gap-2 text-white font-bold hover:underline">Get Started <span translate="no" className="material-symbols-outlined text-sm">arrow_forward</span></button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Logistics;
