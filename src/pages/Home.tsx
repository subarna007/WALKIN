import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, Zap, Shield, Truck, Star } from 'lucide-react';
import Layout from '../components/Layout';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

const Home: React.FC = () => {
  const featuredProducts = products.slice(0, 4);

  const categories = [
    { name: 'Running', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1000', color: 'bg-blue-500' },
    { name: 'Streetwear', image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=1000', color: 'bg-purple-500' },
    { name: 'Sports', image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&w=1000', color: 'bg-orange-500' },
    { name: 'Limited Edition', image: 'https://images.unsplash.com/photo-1552346154-21d32810aba3?q=80&w=1000', color: 'bg-red-500' },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1556906781-9a412961c28c?q=80&w=1920&auto=format&fit=crop"
            alt="Hero Background"
            className="w-full h-full object-cover opacity-30"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="max-w-2xl"
          >
            <span className="inline-block px-4 py-1.5 bg-blue-100 text-blue-600 text-xs font-black uppercase tracking-widest rounded-full mb-6">
              New Collection 2026
            </span>
            <h1 className="text-6xl md:text-8xl font-black text-gray-900 leading-tight mb-6 tracking-tighter">
              STEP INTO <span className="text-blue-600">STYLE</span> WITH WALKIN
            </h1>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/shop"
                className="px-8 py-4 bg-gray-900 text-white rounded-2xl font-bold flex items-center gap-2 hover:bg-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-gray-200"
              >
                Shop Now <ArrowRight size={20} />
              </Link>
              <Link
                to="/about"
                className="px-8 py-4 bg-white text-gray-900 border-2 border-gray-100 rounded-2xl font-bold hover:bg-gray-50 transition-all duration-300"
              >
                Our Story
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Floating Sneaker Animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -15 }}
          animate={{ opacity: 1, scale: 1, rotate: -5 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="absolute right-[-10%] top-1/2 -translate-y-1/2 hidden lg:block w-1/2 pointer-events-none"
        >
          <img
            src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1000&auto=format&fit=crop"
            alt="Featured Sneaker"
            className="w-full drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]"
            referrerPolicy="no-referrer"
          />
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: <Shield className="text-blue-600" />, title: 'Premium Craftsmanship', desc: 'Designed with high-quality materials for durability, comfort, and everyday wear.' },
              { icon: <Zap className="text-blue-600" />, title: 'All-Day Comfort', desc: 'Lightweight cushioning and ergonomic design made for long walks and daily movement.' },
              { icon: <Truck className="text-blue-600" />, title: 'Fast Delivery', desc: 'Reliable and quick shipping to get your sneakers to your doorstep without delay.' },
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center text-center p-8 bg-white rounded-3xl shadow-sm border border-gray-100"
              >
                <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-500 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex justify-between items-end mb-12">
            <div>
              <span className="text-blue-600 font-black text-xs uppercase tracking-widest mb-2 block">Collections</span>
              <h2 className="text-4xl font-black tracking-tighter">SHOP BY CATEGORY</h2>
            </div>
            <Link to="/shop" className="text-sm font-bold flex items-center gap-2 text-gray-500 hover:text-blue-600 transition-colors">
              View All <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((cat, i) => (
              <Link
                key={i}
                to={`/shop?category=${cat.name}`}
                className="group relative h-80 rounded-3xl overflow-hidden"
              >
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute bottom-8 left-8">
                  <h3 className="text-2xl font-black text-white mb-2 tracking-tight uppercase">{cat.name}</h3>
                  <span className="text-white/70 text-xs font-bold flex items-center gap-2 group-hover:gap-4 transition-all">
                    Explore Now <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-black text-xs uppercase tracking-widest mb-2 block">Trending Now</span>
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-6">BEST SELLERS</h2>
            <p className="text-gray-500 max-w-xl mx-auto">Our most popular styles, loved by athletes and trendsetters worldwide.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link
              to="/shop"
              className="inline-flex items-center gap-2 px-10 py-4 bg-gray-900 text-white rounded-2xl font-bold hover:bg-blue-600 transition-all duration-300"
            >
              Explore Full Shop <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter / CTA */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="relative rounded-[3rem] overflow-hidden bg-blue-600 p-12 md:p-24 text-center text-white">
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
              <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-white rounded-full blur-[100px]"></div>
              <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-white rounded-full blur-[100px]"></div>
            </div>
            
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-8">JOIN THE WALK<span className="text-black">IN</span> CREW</h2>
              <p className="text-xl text-blue-100 mb-12">Get early access to drops, exclusive discounts, and invitations to local community events.</p>
              <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-grow px-6 py-4 bg-white/10 border border-white/20 rounded-2xl text-white placeholder:text-white/50 focus:outline-none focus:bg-white/20 transition-all"
                />
                <button className="px-10 py-4 bg-white text-blue-600 rounded-2xl font-black uppercase tracking-tighter hover:bg-gray-100 transition-all">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
