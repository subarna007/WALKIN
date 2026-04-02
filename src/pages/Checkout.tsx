import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CreditCard, Truck, ShieldCheck, ArrowLeft, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';
import Layout from '../components/Layout';
import { useCart } from '../context/CartContext';

const Checkout: React.FC = () => {
  const { cart, subtotal, clearCart } = useCart();
  const navigate = useNavigate();
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const shipping = subtotal > 150 ? 0 : 15;
  const total = subtotal + shipping;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
      clearCart();
    }, 2000);
  };

  if (isSuccess) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-24 text-center max-w-2xl">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8"
          >
            <CheckCircle2 size={48} />
          </motion.div>
          <h1 className="text-5xl font-black mb-6 tracking-tighter">ORDER CONFIRMED!</h1>
          <p className="text-gray-500 text-lg mb-12 leading-relaxed">
            Thank you for your purchase. Your order #WALK-98234 has been placed and is being processed. We'll send you a confirmation email shortly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate('/shop')}
              className="px-10 py-4 bg-gray-900 text-white rounded-2xl font-bold hover:bg-blue-600 transition-all"
            >
              Continue Shopping
            </button>
            <button
              onClick={() => navigate('/')}
              className="px-10 py-4 bg-white text-gray-900 border-2 border-gray-100 rounded-2xl font-bold hover:bg-gray-50 transition-all"
            >
              Go Home
            </button>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="bg-gray-50 py-12">
        <div className="container mx-auto px-4 md:px-6">
          <button
            onClick={() => navigate('/cart')}
            className="flex items-center gap-2 text-gray-500 hover:text-black font-bold mb-12 transition-colors"
          >
            <ArrowLeft size={20} /> Back to Cart
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Checkout Form */}
            <div className="space-y-12">
              <section>
                <h2 className="text-3xl font-black mb-8 tracking-tight uppercase flex items-center gap-4">
                  <span className="w-10 h-10 bg-gray-900 text-white rounded-full flex items-center justify-center text-lg">1</span>
                  Shipping Details
                </h2>
                <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="md:col-span-2">
                    <label className="block text-sm font-bold text-gray-700 mb-2">Full Name</label>
                    <input
                      required
                      type="text"
                      placeholder="John Doe"
                      className="w-full px-6 py-4 bg-white border border-gray-200 rounded-2xl focus:outline-none focus:border-blue-600 shadow-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Email Address</label>
                    <input
                      required
                      type="email"
                      placeholder="john@example.com"
                      className="w-full px-6 py-4 bg-white border border-gray-200 rounded-2xl focus:outline-none focus:border-blue-600 shadow-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Phone Number</label>
                    <input
                      required
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      className="w-full px-6 py-4 bg-white border border-gray-200 rounded-2xl focus:outline-none focus:border-blue-600 shadow-sm"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-bold text-gray-700 mb-2">Shipping Address</label>
                    <input
                      required
                      type="text"
                      placeholder="123 Sneaker St, Urban City"
                      className="w-full px-6 py-4 bg-white border border-gray-200 rounded-2xl focus:outline-none focus:border-blue-600 shadow-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">City</label>
                    <input
                      required
                      type="text"
                      placeholder="New York"
                      className="w-full px-6 py-4 bg-white border border-gray-200 rounded-2xl focus:outline-none focus:border-blue-600 shadow-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Zip Code</label>
                    <input
                      required
                      type="text"
                      placeholder="10001"
                      className="w-full px-6 py-4 bg-white border border-gray-200 rounded-2xl focus:outline-none focus:border-blue-600 shadow-sm"
                    />
                  </div>
                </form>
              </section>

              <section>
                <h2 className="text-3xl font-black mb-8 tracking-tight uppercase flex items-center gap-4">
                  <span className="w-10 h-10 bg-gray-900 text-white rounded-full flex items-center justify-center text-lg">2</span>
                  Payment Method
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  <button className="p-6 bg-white border-2 border-blue-600 rounded-[2rem] flex flex-col items-center gap-4 shadow-lg shadow-blue-50">
                    <CreditCard className="text-blue-600" size={32} />
                    <span className="font-black uppercase tracking-tighter">Credit Card</span>
                  </button>
                  <button className="p-6 bg-white border-2 border-gray-100 rounded-[2rem] flex flex-col items-center gap-4 hover:border-gray-300 transition-all">
                    <div className="flex items-center gap-2">
                      <span className="text-blue-600 font-black italic text-xl">Pay</span>
                      <span className="text-blue-400 font-black italic text-xl">Pal</span>
                    </div>
                    <span className="font-black uppercase tracking-tighter text-gray-400">PayPal</span>
                  </button>
                </div>

                <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100">
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">Card Number</label>
                      <input
                        type="text"
                        placeholder="0000 0000 0000 0000"
                        className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:border-blue-600"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">Expiry Date</label>
                        <input
                          type="text"
                          placeholder="MM/YY"
                          className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:border-blue-600"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">CVV</label>
                        <input
                          type="text"
                          placeholder="123"
                          className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:border-blue-600"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>

            {/* Order Summary Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white p-8 rounded-[3rem] shadow-sm border border-gray-100 sticky top-28">
                <h3 className="text-2xl font-black mb-8 tracking-tight uppercase">Your Order</h3>
                
                <div className="max-h-80 overflow-y-auto pr-2 space-y-6 mb-8 custom-scrollbar">
                  {cart.map((item) => (
                    <div key={`${item.id}-${item.selectedSize}`} className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-gray-100 rounded-xl overflow-hidden flex-shrink-0">
                        <img src={item.images[0]} alt={item.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                      </div>
                      <div className="flex-grow">
                        <h4 className="font-bold text-sm line-clamp-1">{item.name}</h4>
                        <p className="text-xs text-gray-500">Size: {item.selectedSize} | Qty: {item.quantity}</p>
                      </div>
                      <span className="font-black text-sm">${(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                  ))}
                </div>

                <div className="space-y-4 pt-8 border-t border-gray-100 mb-8">
                  <div className="flex justify-between text-gray-600 text-sm">
                    <span>Subtotal</span>
                    <span className="font-bold">${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-gray-600 text-sm">
                    <span>Shipping</span>
                    <span className="font-bold">{shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`}</span>
                  </div>
                  <div className="flex justify-between text-xl font-black pt-4 border-t border-gray-100">
                    <span>Total</span>
                    <span className="text-blue-600">${total.toFixed(2)}</span>
                  </div>
                </div>

                <button
                  onClick={handleSubmit}
                  disabled={isProcessing}
                  className="w-full py-5 bg-blue-600 text-white rounded-2xl font-black uppercase tracking-tighter hover:bg-blue-700 transition-all shadow-xl shadow-blue-100 flex items-center justify-center gap-3 disabled:opacity-70"
                >
                  {isProcessing ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      Processing...
                    </>
                  ) : (
                    <>Pay Now <CheckCircle2 size={20} /></>
                  )}
                </button>

                <div className="mt-8 grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-2 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                    <ShieldCheck size={14} /> Secure Payment
                  </div>
                  <div className="flex items-center gap-2 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                    <Truck size={14} /> Tracking Included
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Checkout;
