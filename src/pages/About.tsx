import React from 'react';
import { motion } from 'motion/react';
import { Target, Heart, Users, Globe } from 'lucide-react';
import Layout from '../components/Layout';

const About: React.FC = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-24 bg-black text-white overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-20">
          <img
            src="https://images.unsplash.com/photo-1552346154-21d32810aba3?q=80&w=1920"
            alt="About Background"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-black tracking-tighter mb-8"
          >
            WE ARE WALK<span className="text-blue-600">IN</span>
          </motion.h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Redefining the sneaker culture through innovation, style, and a relentless pursuit of perfection.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-blue-600 font-black text-xs uppercase tracking-widest mb-4 block">Our Story</span>
              <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-8">ELEVATING EVERYDAY MOVEMENT</h2>
              <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                <p>
                  WalkIn is a modern footwear brand focused on delivering stylish, comfortable, and high-quality sneakers for everyday life. Our approach combines contemporary design with practical functionality, ensuring every pair meets the demands of both comfort and style.
                </p>
                <p>
                  We prioritize material quality, attention to detail, and customer satisfaction in every product we create. WalkIn is built for individuals who value confidence, simplicity, and movement in their daily lifestyle.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative rounded-[3rem] overflow-hidden aspect-square"
            >
              <img
                src="https://images.unsplash.com/photo-1512374382149-4332c6c021f1?q=80&w=1000"
                alt="Brand Story"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black tracking-tighter mb-4">OUR CORE VALUES</h2>
            <p className="text-gray-500">The principles that drive everything we do.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Target className="text-blue-600" />, title: 'Innovation', desc: 'Constantly pushing the boundaries of sneaker technology.' },
              { icon: <Heart className="text-blue-600" />, title: 'Passion', desc: 'Driven by a deep love for sneaker culture and design.' },
              { icon: <Users className="text-blue-600" />, title: 'Community', desc: 'Building a global network of creators and enthusiasts.' },
              { icon: <Globe className="text-blue-600" />, title: 'Sustainability', desc: 'Committed to reducing our footprint on the planet.' },
            ].map((value, i) => (
              <div key={i} className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-gray-100 text-center">
                <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team / Culture */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-4xl font-black tracking-tighter mb-12 uppercase">Join the Movement</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              'https://images.unsplash.com/photo-1539185441755-769473a23570?q=80&w=600',
              'https://images.unsplash.com/photo-1560769629-975ec94e6a86?q=80&w=600',
              'https://images.unsplash.com/photo-1511556532299-8f662fc26c06?q=80&w=600',
              'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?q=80&w=600',
            ].map((img, i) => (
              <div key={i} className="aspect-square rounded-3xl overflow-hidden">
                <img src={img} alt="" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" referrerPolicy="no-referrer" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
