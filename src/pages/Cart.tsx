import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Trash2, Plus, Minus, ArrowRight, ShoppingBag, ArrowLeft } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import Layout from '../components/Layout';
import { useCart } from '../context/CartContext';

const Cart: React.FC = () => {
  const { cart, removeFromCart, updateQuantity, subtotal, totalItems } = useCart();
  const navigate = useNavigate();

  const shipping = subtotal > 150 ? 0 : 15;
  const total = subtotal + shipping;

  if (cart.length === 0) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-24 text-center">
          <div className="w-24 h-24 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-8">
            <ShoppingBag size={40} className="text-gray-300" />
          </div>
          <h1 className="text-4xl font-black mb-4 tracking-tighter">YOUR CART IS EMPTY</h1>
          <p className="text-gray-500 mb-12 max-w-md mx-auto">Looks like you haven't added any sneakers to your cart yet. Start exploring our collection!</p>
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 px-10 py-4 bg-gray-900 text-white rounded-2xl font-bold hover:bg-blue-600 transition-all shadow-xl shadow-gray-200"
          >
            Start Shopping <ArrowRight size={20} />
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="bg-gray-50 py-12 min-h-[calc(100vh-80px)]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between mb-12">
            <h1 className="text-5xl font-black tracking-tighter">SHOPPING CART</h1>
            <span className="text-gray-500 font-bold">{totalItems} Items</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-6">
              <AnimatePresence>
                {cart.map((item) => (
                  <motion.div
                    key={`${item.id}-${item.selectedSize}`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    className="bg-white p-6 rounded-[2rem] shadow-sm border border-gray-100 flex flex-col sm:flex-row items-center gap-6"
                  >
                    <div className="w-32 h-32 bg-gray-100 rounded-2xl overflow-hidden flex-shrink-0">
                      <img src={item.images[0]} alt={item.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                    </div>
                    
                    <div className="flex-grow text-center sm:text-left">
                      <h3 className="text-xl font-black mb-1">{item.name}</h3>
                      <p className="text-gray-500 text-sm mb-4">Size: US {item.selectedSize} | {item.category}</p>
                      <div className="flex items-center justify-center sm:justify-start bg-gray-50 rounded-xl p-1 w-fit mx-auto sm:mx-0">
                        <button
                          onClick={() => updateQuantity(item.id, item.selectedSize, item.quantity - 1)}
                          className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-white transition-colors"
                        >
                          <Minus size={16} />
                        </button>
                        <span className="w-10 text-center font-bold">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.selectedSize, item.quantity + 1)}
                          className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-white transition-colors"
                        >
                          <Plus size={16} />
                        </button>
                      </div>
                    </div>

                    <div className="text-center sm:text-right flex flex-col items-center sm:items-end gap-4">
                      <span className="text-2xl font-black">${(item.price * item.quantity).toFixed(2)}</span>
                      <button
                        onClick={() => removeFromCart(item.id, item.selectedSize)}
                        className="p-3 text-red-500 hover:bg-red-50 rounded-xl transition-colors"
                      >
                        <Trash2 size={20} />
                      </button>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
              
              <Link to="/shop" className="inline-flex items-center gap-2 text-gray-500 hover:text-black font-bold transition-colors">
                <ArrowLeft size={20} /> Continue Shopping
              </Link>
            </div>

            {/* Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-gray-100 sticky top-28">
                <h3 className="text-2xl font-black mb-8 tracking-tight uppercase">Order Summary</h3>
                
                <div className="space-y-4 mb-8">
                  <div className="flex justify-between text-gray-600">
                    <span>Subtotal</span>
                    <span className="font-bold">${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Shipping</span>
                    <span className="font-bold">{shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`}</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Estimated Tax</span>
                    <span className="font-bold">$0.00</span>
                  </div>
                  <div className="border-t border-gray-100 pt-4 flex justify-between text-xl font-black">
                    <span>Total</span>
                    <span className="text-blue-600">${total.toFixed(2)}</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <button
                    onClick={() => navigate('/checkout')}
                    className="w-full py-5 bg-gray-900 text-white rounded-2xl font-black uppercase tracking-tighter hover:bg-blue-600 transition-all shadow-xl shadow-gray-200 transform active:scale-95"
                  >
                    Checkout Now
                  </button>
                  <p className="text-center text-gray-400 text-xs">
                    Taxes and shipping calculated at checkout
                  </p>
                </div>

                {/* Promo Code */}
                <div className="mt-10 pt-10 border-t border-gray-100">
                  <p className="text-sm font-bold mb-4">Have a promo code?</p>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="Code"
                      className="flex-grow px-4 py-3 bg-gray-50 border border-gray-100 rounded-xl text-sm focus:outline-none focus:border-blue-600"
                    />
                    <button className="px-6 py-3 bg-gray-100 text-gray-900 rounded-xl font-bold text-sm hover:bg-gray-200 transition-colors">
                      Apply
                    </button>
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

export default Cart;
