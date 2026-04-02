import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Star, ShoppingCart, ArrowLeft, Truck, ShieldCheck, RotateCcw, Plus, Minus } from 'lucide-react';
import { motion } from 'motion/react';
import Layout from '../components/Layout';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  
  const product = products.find((p) => p.id === id);
  
  const [selectedSize, setSelectedSize] = useState<number | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);

  if (!product) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-24 text-center">
          <h1 className="text-4xl font-black mb-4">Product Not Found</h1>
          <button
            onClick={() => navigate('/shop')}
            className="px-8 py-3 bg-gray-900 text-white rounded-2xl font-bold"
          >
            Back to Shop
          </button>
        </div>
      </Layout>
    );
  }

  const handleAddToCart = () => {
    if (selectedSize === null) {
      alert('Please select a size');
      return;
    }
    addToCart(product, selectedSize, quantity);
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 md:px-6 py-12">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-gray-500 hover:text-black font-bold mb-12 transition-colors"
        >
          <ArrowLeft size={20} /> Back
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Image Gallery */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              key={activeImage}
              className="aspect-square rounded-[3rem] overflow-hidden bg-gray-100 border border-gray-100 shadow-inner"
            >
              <img
                src={product.images[activeImage]}
                alt={product.name}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            <div className="grid grid-cols-4 gap-4">
              {product.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImage(i)}
                  className={`aspect-square rounded-2xl overflow-hidden border-2 transition-all ${
                    activeImage === i ? 'border-blue-600 p-1' : 'border-transparent opacity-60 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover rounded-xl" referrerPolicy="no-referrer" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="flex flex-col">
            <div className="mb-8">
              <span className="text-blue-600 font-black text-xs uppercase tracking-widest mb-2 block">
                {product.category}
              </span>
              <h1 className="text-5xl font-black tracking-tighter mb-4 uppercase">{product.name}</h1>
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      className={i < Math.floor(product.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}
                    />
                  ))}
                </div>
                <span className="text-sm font-bold text-gray-500">
                  {product.rating} ({product.reviews} reviews)
                </span>
              </div>
              <p className="text-4xl font-black text-gray-900">${product.price}</p>
            </div>

            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              {product.description}
            </p>

            <div className="mb-10">
              <h3 className="font-black uppercase tracking-tight mb-4 text-sm">Key Features</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {product.details.map((detail, i) => (
                  <li key={i} className="flex items-center gap-2 text-gray-600 text-sm">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>

            {/* Size Selection */}
            <div className="mb-10">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-black uppercase tracking-tight">Select Size (US)</h3>
                <button className="text-sm font-bold text-blue-600 hover:underline">Size Guide</button>
              </div>
              <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`py-4 rounded-xl font-bold transition-all border-2 ${
                      selectedSize === size
                        ? 'bg-gray-900 text-white border-gray-900 shadow-lg shadow-gray-200'
                        : 'bg-white text-gray-900 border-gray-100 hover:border-gray-300'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity and Add to Cart */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <div className="flex items-center bg-gray-100 rounded-2xl p-2">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-12 h-12 flex items-center justify-center rounded-xl hover:bg-white transition-colors"
                >
                  <Minus size={20} />
                </button>
                <span className="w-12 text-center font-black text-lg">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-12 h-12 flex items-center justify-center rounded-xl hover:bg-white transition-colors"
                >
                  <Plus size={20} />
                </button>
              </div>
              <button
                onClick={handleAddToCart}
                className="flex-grow py-5 bg-blue-600 text-white rounded-2xl font-black uppercase tracking-tighter flex items-center justify-center gap-3 hover:bg-blue-700 transition-all shadow-xl shadow-blue-100 transform active:scale-95"
              >
                <ShoppingCart size={24} /> Add to Cart
              </button>
            </div>

            {/* Benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-10 border-t border-gray-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-50 rounded-full flex items-center justify-center text-green-600">
                  <Truck size={20} />
                </div>
                <span className="text-xs font-bold text-gray-600">Free Express Shipping</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center text-blue-600">
                  <ShieldCheck size={20} />
                </div>
                <span className="text-xs font-bold text-gray-600">2 Year Warranty</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-orange-50 rounded-full flex items-center justify-center text-orange-600">
                  <RotateCcw size={20} />
                </div>
                <span className="text-xs font-bold text-gray-600">30-Day Returns</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetail;
