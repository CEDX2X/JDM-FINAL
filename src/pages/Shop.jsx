import React from 'react';

const Shop = () => {
  const products = [
    {
      id: 1,
      name: '24/25 Home Jersey',
      team: 'Real Madrid',
      price: '$120.00',
      tag: 'Best Seller',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBCDY3i4_6MWzZ89hoTrf4r4zkKqPAjUhO7iV55r9aNtF9Ncxfx6hl27zqc8IH2TQCFOKMOpbMBqXtrBTHBXdKh0S7jrJN5kqlsVpmtgtsOs5sbrfSm6d2nOzPbjfR2iPoxAKO2UXWi3YiBJoBzzLuHDckoVGfyoE6Q0cSjroeulbqQ3TF636gSzT-b0gl4QeCRQqHxNKjUlGEaFV6jq4ubKpX_oFXuXQrTmt8uEhMrkhSpI41C7K1nxHcqXeD8XUWujEWyDGP9YIQ'
    },
    {
      id: 2,
      name: 'Stadium Home Jersey',
      team: 'Brazil',
      price: '$115.00',
      tag: 'Pre-Order',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAnNaLqhYHJFrN01zwksAHa8koBq3xYCyB1c0p4UFZZmA1V0A59rvg72y3sSIHj0j4yFEtNj0ECyE2FrBiKw4036E9qFrOlnQbe4NTbVVBz4xDFOCeFn5PeVzM3mHXfmbWMM9d4XD-txOBiOHyHKFvPa5q7LXOcTzx9iusSJvAJtupIo6sgJJz9ZtUttOfoVk4Qklajs9tJa5Zt6KFIkY2OwakfcTsJWgBihFOdpTOz8NavqtHJYFoCbHIa5J6sek5wY-4Zg68thno'
    },
    {
      id: 3,
      name: 'Elite Match Jersey',
      team: 'Manchester City',
      price: '$140.00',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAMqnenOuJq0Fqc7NzBuLzDi8Qbq4SgEy0gLnIQ_ngXXJenp70m-eZ44133Aq1KMT4rcQZ43ZH-MjDJDr7zvksONS6AwK0Y4bQvRJNE6bH5DmIKCV5hEYwUTG-V2_yUuK1GVuRinG2fsC0PJJ4xAe6XDqA4CabOie_RI01UBf9RFeHoZ7sltdAorTLK-OhfQ_fIqDl3FGW_YfMR0SThLMvaFuVVpfztqMJ_HL3jWQybzs6miKRiX_CWu0Urzl9Gcue8d2eD8Y5rCH8'
    },
    {
      id: 4,
      name: 'Away Vapor Jersey',
      team: 'France',
      price: '$130.00',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAOzLPf3g0iLY8SgLxnk_Xh1j8PrhlXpOR9feDiSDInk9ie8Kn8hF15M3cB3leC5T_DUpe8OAQjdjExq6pxzjcidJS6OBqG853xVySxXN4HrEvYevpwFtouELY9wolLIS9fNxyFKOpCCXNF_WNJzamPm4HB1R0IovQnXK_bZdW9W7C6SVcvHgf1oVIpLvbHQDz5YTmLca2bAiiHHjZMtavuNCL77uD-mwDhIXkv0u0W-w59Wqu6fKIsLW4AUjGbWLAaXfvgsfA_G3U'
    },
    {
      id: 5,
      name: 'Anniversary Kit',
      team: 'Bayern Munich',
      price: '$155.00',
      tag: 'Limited Edition',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC08tzQZbPA5FhtQCdJrZoFoUpgWnRYEF-L0Dy-oCYm3u5oc_BF3vErGsHrYXA9Agfoug-Pgu3bxMd8y1SyqZCERIaNdPcMqds06mkF53kOJYb6L0080xoC2AgSxXSaP5g-3K4lnmFiLRE8nN205q7BERda6A-mkMLbnLEj0DQbrA4q_Q0spwJk0y6c1s7CBrQElWUKmZyS_elMouEmmbZACOfHt9V7v4XIL4mHHIuUaApImIuJeXS_9OnrZKk9Xx7oSd_ayHX1NK8'
    },
    {
      id: 6,
      name: '3-Star World Kit',
      team: 'Argentina',
      price: '$125.00',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAmySrsWCAt2DrOMSJ-hUNLqJcqbN2PTnpXugs-fzHm8Vo1ovifFKvXVPJxzxvH6TrvuUyitsGgoLhCbVhG4O9obm_9fnkZEgPJ9SaDdVcVrvsNr58-1B9g9jbDdlozhx1UiTBvL1e2zaI4hHnnjjbapRrj7RxtlZwl6u9nDTZM-L4C6JZNLKYg5bGTAUMm_eb5-VsurDPTa7T56TcvB6ZtupUeOwYkYVR4jJ1KEQw1aU4LUdDXVzmlEyiWhuvqNjEeE2v4A257ido'
    }
  ];

  return (
    <div className="bg-background">
      <header className="relative pt-32 pb-20 overflow-hidden bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="z-10">
            <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest uppercase bg-secondary text-on-secondary rounded-full">New Season Arrival</span>
            <h1 className="text-6xl md:text-7xl font-extrabold tracking-tighter text-primary leading-[1.1] mb-8">
              The Official <br /><span className="text-secondary">Fan Shop</span>
            </h1>
            <p className="text-lg text-on-surface-variant max-w-lg mb-10 leading-relaxed font-body">
              Architected for the elite fan. Discover authentic kits from the world's most prestigious clubs and national teams, crafted for performance and loyalty.
            </p>
            <div className="flex space-x-4">
              <button className="bg-primary-container text-on-primary px-8 py-4 rounded-xl font-bold text-lg scale-102 transition-transform shadow-lg">Explore Kits</button>
              <button className="border-2 border-outline-variant/30 text-primary px-8 py-4 rounded-xl font-bold text-lg hover:bg-surface transition-colors">Clubs</button>
            </div>
          </div>
          <div className="relative h-[500px] hidden lg:block">
            <img
              className="w-full h-full object-cover rounded-3xl shadow-2xl"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAhBIPBUShbWIVooFv6BTAc2KPqQ-THTHK7s6On1LjcoGXLDA-3IEBhk3pMxQcFpPy0M-lbBljJT6mBVWW7uOgHM67nik168IKrBcNnlqejTe3qgB8KWjGfgDzOF1w0uzcA_kG32yMIt_vx-i0x5QPubT-_dtrCO4cVwJjkG6kW94Ah6Fx0Z_vaIxpr1cUXRkf7S4nzRJFKwzG8Zz5K9LJOd9EP9DTRSI9AcYl2xLDMZf5z1LWTWzEr3jmpialkeWgAOzYjLXk8LxA"
              alt="Professional football jersey"
            />
            <div className="absolute -bottom-6 -left-6 bg-surface-container-lowest p-6 rounded-2xl shadow-xl border border-outline-variant/10 max-w-[240px]">
              <div className="flex items-center space-x-3 mb-2">
                <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>workspace_premium</span>
                <span className="font-bold text-sm tracking-tight">Authentic Gear</span>
              </div>
              <p className="text-xs text-on-surface-variant font-medium">Certified merchandise direct from club manufacturers.</p>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-8 py-20 flex flex-col md:flex-row gap-12">
        <aside className="w-full md:w-64 flex-shrink-0">
          <div className="sticky top-28 space-y-10">
            <div>
              <h3 className="font-headline font-bold text-xl mb-6 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">filter_list</span> Categories
              </h3>
              <div className="space-y-6">
                <div className="space-y-3">
                  <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant/60 block">Club Teams</label>
                  <div className="space-y-2">
                    {['Real Madrid', 'Manchester City', 'Bayern Munich'].map(team => (
                      <label key={team} className="flex items-center group cursor-pointer">
                        <input className="w-5 h-5 rounded-lg border-outline-variant text-primary focus:ring-secondary mr-3" type="checkbox" />
                        <span className="text-sm font-medium group-hover:text-secondary transition-colors">{team}</span>
                      </label>
                    ))}
                  </div>
                </div>
                <div className="space-y-3">
                  <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant/60 block">National Teams</label>
                  <div className="space-y-2">
                    {['Brazil', 'France', 'Argentina'].map(team => (
                      <label key={team} className="flex items-center group cursor-pointer">
                        <input className="w-5 h-5 rounded-lg border-outline-variant text-primary focus:ring-secondary mr-3" type="checkbox" />
                        <span className="text-sm font-medium group-hover:text-secondary transition-colors">{team}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="p-6 bg-primary-container rounded-2xl text-on-primary">
              <p className="text-sm font-headline font-bold mb-4">Member Exclusive</p>
              <p className="text-xs text-on-primary/70 leading-relaxed mb-4">Get 15% off your first purchase when you sign up for JDM SARL Rewards.</p>
              <button className="w-full py-2 bg-secondary rounded-xl text-xs font-bold hover:bg-secondary-container transition-colors">Join Now</button>
            </div>
          </div>
        </aside>

        <div className="flex-1">
          <div className="flex justify-between items-center mb-10">
            <h2 className="font-headline font-extrabold text-3xl tracking-tight">Featured Kits</h2>
            <div className="flex items-center gap-4 text-sm font-medium">
              <span className="text-on-surface-variant">Showing 6 products</span>
              <select className="bg-surface-container-low border-none rounded-xl text-sm font-bold focus:ring-2 focus:ring-primary py-2 px-4">
                <option>Sort by: Popularity</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
              </select>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {products.map(product => (
              <div key={product.id} className="group bg-surface-container-lowest rounded-[2rem] overflow-hidden transition-all duration-500 hover:shadow-[0_24px_48px_rgba(11,29,58,0.12)]">
                <div className="aspect-[4/5] overflow-hidden relative">
                  <img src={product.img} alt={product.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  {product.tag && (
                    <div className={`absolute ${product.tag === 'Best Seller' ? 'top-4 left-4 bg-white/90' : 'bottom-4 left-4 bg-secondary text-on-secondary'} backdrop-blur px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest ${product.tag === 'Best Seller' ? 'text-primary' : ''}`}>
                      {product.tag}
                    </div>
                  )}
                  {product.name.includes('Stadium') && (
                    <div className="absolute top-4 right-4 bg-primary text-on-primary px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">Pre-Order</div>
                  )}
                </div>
                <div className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <p className="text-xs font-bold text-secondary uppercase tracking-widest mb-1">{product.team}</p>
                      <h3 className="font-headline font-bold text-xl text-primary">{product.name}</h3>
                    </div>
                    <p className="font-bold text-lg text-primary">{product.price}</p>
                  </div>
                  <div className="flex gap-2">
                    <button className="flex-1 bg-primary-container text-on-primary py-3.5 rounded-xl font-bold text-sm scale-102 transition-all flex items-center justify-center gap-2">
                      <span className="material-symbols-outlined text-[18px]">add_shopping_cart</span> Add to Cart
                    </button>
                    <button className="w-12 h-12 flex items-center justify-center border border-outline-variant/30 rounded-xl hover:bg-surface-container-low transition-colors">
                      <span className="material-symbols-outlined">favorite</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* Pagination */}
          <div className="mt-20 flex justify-center gap-2">
            <button className="w-12 h-12 rounded-xl bg-surface-container-low flex items-center justify-center hover:bg-secondary hover:text-on-secondary transition-colors font-bold">1</button>
            <button className="w-12 h-12 rounded-xl bg-surface-container-lowest flex items-center justify-center hover:bg-secondary hover:text-on-secondary transition-colors font-bold">2</button>
            <button className="w-12 h-12 rounded-xl bg-surface-container-lowest flex items-center justify-center hover:bg-secondary hover:text-on-secondary transition-colors font-bold">3</button>
            <button className="w-12 h-12 rounded-xl bg-surface-container-lowest flex items-center justify-center hover:bg-secondary hover:text-on-secondary transition-colors font-bold">
              <span className="material-symbols-outlined">chevron_right</span>
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Shop;
