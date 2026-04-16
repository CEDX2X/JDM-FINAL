import React from 'react';

const Contact = () => {
  return (
    <main className="pt-32 pb-20 px-8 max-w-7xl mx-auto">
      <header className="mb-16 md:mb-24">
        <h1 className="text-6xl md:text-7xl font-extrabold tracking-tighter text-primary-container mb-4">Get in Touch</h1>
        <p className="text-on-surface-variant max-w-2xl text-lg leading-relaxed font-body">
          Experience the architectural precision of our global concierge services. Whether you require bespoke travel arrangements or complex logistics, our team is ready to architect your next journey.
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Contact Form Section */}
        <section className="lg:col-span-7 bg-surface-container-low rounded-[2rem] p-8 md:p-12 shadow-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-secondary-fixed/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <h2 className="text-3xl font-bold text-primary-container mb-8">Send a Message</h2>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant/60 ml-1">Full Name</label>
                <input className="w-full bg-surface-container-lowest border-none rounded-xl py-4 px-5 focus:ring-2 focus:ring-secondary/20 transition-all outline-none text-on-surface font-body border-b-2 border-transparent focus:border-primary-container" placeholder="John Doe" type="text" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant/60 ml-1">Email Address</label>
                <input className="w-full bg-surface-container-lowest border-none rounded-xl py-4 px-5 focus:ring-2 focus:ring-secondary/20 transition-all outline-none text-on-surface font-body border-b-2 border-transparent focus:border-primary-container" placeholder="john@jdmsarl.com" type="email" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant/60 ml-1">Subject</label>
              <select className="w-full bg-surface-container-lowest border-none rounded-xl py-4 px-5 focus:ring-2 focus:ring-secondary/20 transition-all outline-none text-on-surface font-body border-b-2 border-transparent focus:border-primary-container appearance-none">
                <option>Bespoke Travel Inquiry</option>
                <option>Global Logistics Support</option>
                <option>JDM SARL Shop Assistance</option>
                <option>Partnership Opportunities</option>
                <option>Other</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant/60 ml-1">Your Message</label>
              <textarea className="w-full bg-surface-container-lowest border-none rounded-xl py-4 px-5 focus:ring-2 focus:ring-secondary/20 transition-all outline-none text-on-surface font-body border-b-2 border-transparent focus:border-primary-container" placeholder="How can we assist you today?" rows="5"></textarea>
            </div>
            <button className="group relative bg-primary-container text-on-primary w-full md:w-auto px-10 py-4 rounded-xl font-bold flex items-center justify-center gap-3 hover:scale-[1.02] transition-all duration-300 shadow-xl shadow-primary-container/10" type="submit">
              Deliver Message
              <span className="material-symbols-outlined text-lg group-hover:translate-x-1 transition-transform">send</span>
            </button>
          </form>
        </section>

        {/* Sidebar Info */}
        <aside className="lg:col-span-5 space-y-8">
          {/* Address Card */}
          <div className="bg-surface-container-lowest rounded-[2rem] p-8 shadow-[0_12px_32px_rgba(11,29,58,0.04)] group">
            <div className="flex items-start gap-6">
              <div className="w-14 h-14 rounded-full bg-secondary-fixed flex items-center justify-center text-secondary">
                <span className="material-symbols-outlined text-2xl">location_on</span>
              </div>
              <div>
                <h3 className="text-sm font-bold uppercase tracking-widest text-on-surface-variant/60 mb-2">Global Headquarters</h3>
                <p className="text-xl font-bold text-primary-container leading-tight">1200 Avenue of the Americas,<br />New York, NY 10036</p>
              </div>
            </div>
          </div>
          {/* Contact Details Card */}
          <div className="bg-surface-container-low rounded-[2rem] p-8 space-y-6">
            <div className="flex items-center gap-6">
              <div className="w-12 h-12 rounded-full bg-primary-container flex items-center justify-center text-white">
                <span className="material-symbols-outlined text-xl">call</span>
              </div>
              <div>
                <h3 className="text-xs font-bold uppercase tracking-widest text-on-surface-variant/60">Direct Concierge</h3>
                <p className="font-bold text-primary-container">+1 (212) 555-0198</p>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div className="w-12 h-12 rounded-full bg-primary-container flex items-center justify-center text-white">
                <span className="material-symbols-outlined text-xl">mail</span>
              </div>
              <div>
                <h3 className="text-xs font-bold uppercase tracking-widest text-on-surface-variant/60">Inquiries</h3>
                <p className="font-bold text-primary-container">concierge@jdmsarl.com</p>
              </div>
            </div>
          </div>
          {/* Map Placeholder */}
          <div className="relative rounded-[2rem] overflow-hidden aspect-video shadow-lg group">
            <div className="absolute inset-0 bg-primary-container/10 backdrop-blur-sm z-10 flex items-center justify-center pointer-events-none group-hover:opacity-0 transition-opacity duration-500">
              <div className="bg-white/90 px-6 py-3 rounded-full flex items-center gap-2 shadow-xl">
                <span className="material-symbols-outlined text-secondary">explore</span>
                <span className="font-bold text-sm text-primary-container">Interactive View</span>
              </div>
            </div>
            <img
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuALHucCMCrL9EtIfLkx5VJOUPXXdDVOou6IF3m5gHIzd54eWFwEZGEGwF1z3v65Pc_2Ie92qQpzIXPGhddRjgsyj1gpOt7lIMYbfdf1IJjPs6YQqg5bWITuTQ6iNjficP_CUQgzrRmztI_wCq_O_8-NQuEFrKm_isWJ-IEAO657vr-Sm-NfzrhlFW39mxBSUV4Q5QRZgZv6Nqu-rCpgYmmx7MAZDJGOMDUgGe0tmbvCz0ioe-SYQyftobloclV4jOtuMS4Sj4e3VFo"
              alt="Map location"
            />
          </div>
        </aside>
      </div>

      {/* Secondary CTA Section */}
      <section className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-8 bg-white border-l-4 border-secondary rounded-xl">
          <h4 className="font-bold text-primary-container mb-2">Corporate Logistics</h4>
          <p className="text-sm text-on-surface-variant">Streamlined global distribution networks for high-value assets.</p>
        </div>
        <div className="p-8 bg-white border-l-4 border-primary-container rounded-xl">
          <h4 className="font-bold text-primary-container mb-2">Private Travel</h4>
          <p className="text-sm text-on-surface-variant">Bespoke itineraries crafted by our award-winning travel architects.</p>
        </div>
        <div className="p-8 bg-white border-l-4 border-secondary-container rounded-xl">
          <h4 className="font-bold text-primary-container mb-2">24/7 Support</h4>
          <p className="text-sm text-on-surface-variant">Round-the-clock availability for our JDM SARL members worldwide.</p>
        </div>
      </section>
    </main>
  );
};

export default Contact;
