
import React, { useState, useEffect } from 'react';
import { PRODUCTS, APP_CONFIG } from '../constants';
import { optimizeOrderMessage } from '../services/geminiService';

interface OrderFormProps {
  initialProductId?: string;
}

const OrderForm: React.FC<OrderFormProps> = ({ initialProductId }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    productId: initialProductId || '',
    quantity: 1,
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isOptimizing, setIsOptimizing] = useState(false);

  useEffect(() => {
    if (initialProductId) {
      setFormData(prev => ({ ...prev, productId: initialProductId }));
    }
  }, [initialProductId]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleOptimize = async () => {
    if (!formData.message.trim()) return;
    setIsOptimizing(true);
    const optimized = await optimizeOrderMessage(formData.message);
    setFormData(prev => ({ ...prev, message: optimized }));
    setIsOptimizing(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        fullName: '',
        companyName: '',
        email: '',
        phone: '',
        productId: '',
        quantity: 1,
        message: ''
      });
    }, 1500);
  };

  if (isSubmitted) {
    return (
      <div className="py-24 bg-slate-50 min-h-screen flex items-center justify-center">
        <div className="max-w-md w-full bg-white p-12 rounded-lg shadow-xl text-center">
          <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-4xl mx-auto mb-6">✓</div>
          <h2 className="text-3xl font-oswald font-bold text-slate-900 mb-4">ORDER REQUEST SENT</h2>
          <p className="text-slate-600 mb-8 leading-relaxed">
            Thank you for reaching out to {APP_CONFIG.companyName}. Our sales engineering team from the Kolkata office will contact you within 4-6 business hours with a formal quotation.
          </p>
          <button 
            onClick={() => setIsSubmitted(false)}
            className="w-full bg-slate-900 text-white font-bold py-4 rounded hover:bg-slate-800 transition-colors"
          >
            BOOK ANOTHER ORDER
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="py-20 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Column: Info */}
          <div>
            <h1 className="text-4xl md:text-5xl font-oswald font-bold text-slate-900 mb-6 uppercase">Book Your Order</h1>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed">
              Ready to scale your industrial operations? Fill out the Request for Quotation (RFQ) form. Our experts provide custom pricing for bulk orders and special requirements.
            </p>
            
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-white rounded shadow-sm flex items-center justify-center shrink-0">📞</div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Direct Sales Hotline</h4>
                  <p className="text-slate-500">{APP_CONFIG.phone}</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-white rounded shadow-sm flex items-center justify-center shrink-0">📍</div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Main Trade Hub</h4>
                  <p className="text-slate-500">12, Strand Road, Near Fairley Place, Kolkata 700001</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-white rounded shadow-sm flex items-center justify-center shrink-0">⚡</div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Fast Processing</h4>
                  <p className="text-slate-500">Average response time: &lt; 4 hours for RFQs.</p>
                </div>
              </div>
            </div>

            <div className="mt-12 p-8 bg-slate-900 text-white rounded-lg">
              <p className="text-orange-500 font-bold uppercase tracking-widest text-xs mb-4">Trusted By Leaders</p>
              <p className="italic text-slate-300 leading-relaxed">"RM Industrial Corporation has been our primary supplier for over two decades. Their service in the Kolkata market is unmatched."</p>
              <p className="mt-4 font-bold">— Head of Procurement, WB State Power Corp.</p>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="bg-white rounded-xl shadow-2xl p-8 md:p-12 border border-slate-100">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">Contact Person</label>
                  <input 
                    required 
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all"
                    placeholder="E.g. Rajesh Kumar"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">Company Name</label>
                  <input 
                    required 
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all"
                    placeholder="E.g. Tata Projects"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">Email Address</label>
                  <input 
                    required 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all"
                    placeholder="rajesh@company.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">Phone Number</label>
                  <input 
                    required 
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all"
                    placeholder="+91-XXXXXXXXXX"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">Select Product Category</label>
                <select 
                  name="productId"
                  value={formData.productId}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all"
                >
                  <option value="">-- Choose an item --</option>
                  {PRODUCTS.map(p => (
                    <option key={p.id} value={p.id}>{p.name}</option>
                  ))}
                  <option value="other">Other / Custom Requirement</option>
                </select>
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-sm font-bold text-slate-700 uppercase tracking-wide">Specific Requirements</label>
                  <button 
                    type="button"
                    onClick={handleOptimize}
                    disabled={isOptimizing || !formData.message}
                    className="text-xs font-bold text-orange-600 uppercase hover:underline disabled:opacity-30"
                  >
                    {isOptimizing ? 'Refining...' : 'Refine with AI'}
                  </button>
                </div>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4} 
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all"
                  placeholder="Mention quantity, sizing, or any specific grades needed..."
                />
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-orange-600 text-white font-bold py-5 rounded shadow-lg hover:bg-orange-700 transition-all uppercase tracking-widest disabled:opacity-50"
              >
                {isSubmitting ? 'SENDING REQUEST...' : 'SUBMIT RFQ'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderForm;
