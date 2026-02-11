
import React from 'react';
import { APP_CONFIG } from '../constants';

interface HomeProps {
  onNavigate: (page: string) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center overflow-hidden bg-slate-900">
        <div className="absolute inset-0 opacity-40">
          <img 
            src="https://picsum.photos/seed/industrial-hero/1920/1080" 
            alt="Industrial Background" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 bg-orange-600 text-white text-xs font-bold uppercase tracking-widest mb-6 rounded">
              Est. 1984 | Kolkata, India
            </span>
            <h1 className="text-5xl md:text-7xl font-oswald font-bold text-white mb-6 leading-tight">
              40 YEARS OF <br/>
              <span className="text-orange-500">INDUSTRIAL TRUST</span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed max-w-2xl">
              From precision bearings to heavy-duty piping systems, RM Industrial Corporation has been the backbone of Bengal's industrial growth for four decades.
            </p>
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={() => onNavigate('products')}
                className="px-8 py-4 bg-orange-600 hover:bg-orange-700 text-white font-bold rounded shadow-lg transition-all"
              >
                VIEW PRODUCTS
              </button>
              <button 
                onClick={() => onNavigate('order')}
                className="px-8 py-4 bg-transparent border-2 border-white hover:bg-white hover:text-slate-900 text-white font-bold rounded transition-all"
              >
                BOOK AN ORDER
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: 'Years Experience', value: '40+' },
              { label: 'Happy Clients', value: '5000+' },
              { label: 'Products Catalog', value: '2500+' },
              { label: 'Kolkata Offices', value: '3' },
            ].map((stat, idx) => (
              <div key={idx} className="text-center">
                <p className="text-4xl md:text-5xl font-oswald font-bold text-slate-900 mb-2">{stat.value}</p>
                <p className="text-slate-500 uppercase tracking-widest text-xs font-semibold">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
            <div>
              <h2 className="text-4xl font-oswald font-bold text-slate-900 uppercase tracking-tight">Our Core Specialties</h2>
              <div className="w-20 h-1 bg-orange-600 mt-4"></div>
            </div>
            <button onClick={() => onNavigate('products')} className="text-orange-600 font-bold hover:underline">Explore Full Catalog &rarr;</button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Power Transmission', img: 'https://picsum.photos/seed/trans/600/400', desc: 'Bearings, belts, and chains for seamless mechanical motion.' },
              { title: 'Flow Control', img: 'https://picsum.photos/seed/flow/600/400', desc: 'Industrial valves and high-pressure piping solutions.' },
              { title: 'Safety Gear', img: 'https://picsum.photos/seed/safety/600/400', desc: 'Protecting your workforce with certified protective equipment.' },
            ].map((cat, idx) => (
              <div key={idx} className="group relative overflow-hidden bg-white rounded shadow-sm hover:shadow-xl transition-all">
                <div className="h-64 overflow-hidden">
                  <img src={cat.img} alt={cat.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="p-8">
                  <h3 className="font-oswald text-2xl font-bold mb-3">{cat.title}</h3>
                  <p className="text-slate-600 mb-6">{cat.desc}</p>
                  <button onClick={() => onNavigate('products')} className="px-4 py-2 border-2 border-slate-900 text-slate-900 font-bold text-sm hover:bg-slate-900 hover:text-white transition-colors">LEARN MORE</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Quote */}
      <section className="bg-slate-900 py-24 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <svg className="w-12 h-12 text-orange-600 mx-auto mb-8 opacity-50" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H16.017C14.9124 8 14.017 7.10457 14.017 6V5C14.017 3.89543 14.9124 3 16.017 3H19.017C21.2261 3 23.017 4.79086 23.017 7V15C23.017 18.866 19.883 22 16.017 22H14.017V21ZM1 15V7C1 4.79086 2.79086 3 5 3H8C9.10457 3 10 3.89543 10 5V6C10 7.10457 9.10457 8 8 8H5C4.44772 8 4 8.44772 4 9V15C4 15.5523 4.44772 16 5 16H8C9.10457 16 10 16.8954 10 18V21H8C4.13401 22 1 18.866 1 15Z" />
          </svg>
          <p className="text-3xl md:text-4xl font-light italic leading-relaxed mb-8">
            "Reliability isn't just a word for us; it's a legacy we've built over 40 years in the heart of Kolkata. Every part we sell carries our promise of quality."
          </p>
          <p className="font-oswald text-xl font-bold text-orange-500 uppercase tracking-widest">R.M. Agrawal, Managing Director</p>
        </div>
      </section>
    </div>
  );
};

export default Home;
