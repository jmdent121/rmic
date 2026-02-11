
import React, { useState } from 'react';
import { PRODUCTS } from '../constants';
import { getProductAdvice } from '../services/geminiService';

interface ProductsProps {
  onOrderNow: (productId: string) => void;
}

const Products: React.FC<ProductsProps> = ({ onOrderNow }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [aiAdvice, setAiAdvice] = useState<string | null>(null);
  const [isAskingAi, setIsAskingAi] = useState(false);

  const categories = ['All', ...Array.from(new Set(PRODUCTS.map(p => p.category)))];

  const filteredProducts = PRODUCTS.filter(p => {
    const matchesCat = activeCategory === 'All' || p.category === activeCategory;
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         p.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  const handleAskAI = async () => {
    if (!searchQuery.trim()) return;
    setIsAskingAi(true);
    const advice = await getProductAdvice(searchQuery);
    setAiAdvice(advice);
    setIsAskingAi(false);
  };

  return (
    <div className="py-20 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-oswald font-bold text-slate-900 mb-4 uppercase">Industrial Catalog</h1>
          <p className="text-slate-500 max-w-2xl mx-auto">Explore our range of thousands of high-precision components. If you can't find what you're looking for, use our AI Assistant below.</p>
        </div>

        {/* Search and AI Section */}
        <div className="bg-white p-6 rounded-lg shadow-sm mb-12 border border-slate-200">
          <div className="flex flex-col md:flex-row gap-4 items-stretch">
            <div className="flex-grow relative">
              <input 
                type="text" 
                placeholder="Search products or describe your requirement..." 
                className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-200 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">🔍</span>
            </div>
            <button 
              onClick={handleAskAI}
              disabled={isAskingAi}
              className="bg-slate-900 text-white px-8 py-4 rounded font-bold hover:bg-slate-800 transition-colors disabled:opacity-50"
            >
              {isAskingAi ? 'CONSULTING AI...' : 'ASK AI ASSISTANT'}
            </button>
          </div>

          {aiAdvice && (
            <div className="mt-6 p-6 bg-orange-50 border border-orange-100 rounded-lg text-slate-800 animate-fade-in">
              <div className="flex items-start gap-4">
                <span className="text-2xl">🤖</span>
                <div>
                  <p className="font-bold text-orange-800 mb-1">AI Recommendation:</p>
                  <p className="leading-relaxed">{aiAdvice}</p>
                  <button onClick={() => setAiAdvice(null)} className="mt-2 text-xs text-orange-600 font-bold uppercase">Dismiss</button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 mb-12">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${
                activeCategory === cat 
                  ? 'bg-orange-600 text-white' 
                  : 'bg-white text-slate-600 border border-slate-200 hover:border-orange-500'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map(product => (
            <div key={product.id} className="bg-white rounded-lg border border-slate-200 overflow-hidden hover:shadow-lg transition-all group">
              <div className="h-56 relative overflow-hidden">
                <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-4 right-4 px-3 py-1 bg-white/90 backdrop-blur rounded text-xs font-bold text-slate-900 shadow-sm">
                  {product.category}
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-oswald text-xl font-bold mb-2 group-hover:text-orange-600 transition-colors">{product.name}</h3>
                <p className="text-slate-600 text-sm mb-4 line-clamp-2">{product.description}</p>
                <div className="space-y-2 mb-6">
                  {product.specs.slice(0, 3).map((spec, i) => (
                    <div key={i} className="flex items-center text-xs text-slate-500">
                      <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-2"></span>
                      {spec}
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">SKU: {product.id}</span>
                  <button 
                    onClick={() => onOrderNow(product.id)}
                    className="text-orange-600 font-bold hover:text-orange-700 text-sm"
                  >
                    INQUIRE NOW &rarr;
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {filteredProducts.length === 0 && (
          <div className="text-center py-20 bg-white rounded border border-dashed border-slate-300">
            <p className="text-slate-400">No products found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
