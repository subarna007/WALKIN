import { Product } from '../types';

export const products: Product[] = [
  {
    id: '1',
    name: 'WalkIn Air Max Pro',
    price: 189.99,
    category: 'Running',
    images: [
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1560769629-975ec94e6a86?q=80&w=1000&auto=format&fit=crop'
    ],
    description: 'The ultimate running companion with responsive cushioning and breathable mesh upper. Designed for high-performance athletes and daily joggers alike.',
    sizes: [7, 8, 9, 10, 11, 12],
    rating: 4.8,
    reviews: 124,
    details: ['Breathable mesh upper', 'Responsive air cushioning', 'Durable rubber outsole', 'Lightweight design']
  },
  {
    id: '2',
    name: 'Street Glide V2',
    price: 149.99,
    category: 'Streetwear',
    images: [
      'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1552346154-21d32810aba3?q=80&w=1000&auto=format&fit=crop'
    ],
    description: 'Sleek streetwear design that combines comfort with an edgy urban aesthetic. Perfect for navigating the city streets in style.',
    sizes: [6, 7, 8, 9, 10, 11],
    rating: 4.5,
    reviews: 89,
    details: ['Premium synthetic leather', 'Padded collar and tongue', 'Classic lace-up closure', 'Non-slip traction pattern']
  },
  {
    id: '3',
    name: 'Court Master Elite',
    price: 169.99,
    category: 'Sports',
    images: [
      'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1560769629-975ec94e6a86?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1511556532299-8f662fc26c06?q=80&w=1000&auto=format&fit=crop'
    ],
    description: 'Professional grade basketball shoes with superior ankle support and grip. Dominate the court with confidence and agility.',
    sizes: [8, 9, 10, 11, 12, 13],
    rating: 4.9,
    reviews: 210,
    details: ['High-top ankle support', 'Reinforced toe cap', 'Multi-directional grip', 'Impact-absorbing midsole']
  },
  {
    id: '4',
    name: 'Neon Pulse Limited',
    price: 249.99,
    category: 'Limited Edition',
    images: [
      'https://images.unsplash.com/photo-1552346154-21d32810aba3?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1560769629-975ec94e6a86?q=80&w=1000&auto=format&fit=crop'
    ],
    description: 'Exclusive limited edition drop featuring glow-in-the-dark accents and premium materials. A collector\'s piece for the true sneakerhead.',
    sizes: [9, 10, 11],
    rating: 5.0,
    reviews: 45,
    details: ['Reflective 3M details', 'Individually numbered', 'Premium suede overlays', 'Custom collector\'s box']
  },
  {
    id: '5',
    name: 'Urban Explorer X',
    price: 129.99,
    category: 'Streetwear',
    images: [
      'https://images.unsplash.com/photo-1512374382149-4332c6c021f1?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?q=80&w=1000&auto=format&fit=crop'
    ],
    description: 'Versatile sneakers for the modern urban explorer. Durable and stylish, built to handle any adventure the city throws your way.',
    sizes: [7, 8, 9, 10, 11, 12],
    rating: 4.3,
    reviews: 67,
    details: ['Water-resistant upper', 'Rugged outsole pattern', 'Quick-lace system', 'Comfort-fit sock liner']
  },
  {
    id: '6',
    name: 'Velocity Runner',
    price: 159.99,
    category: 'Running',
    images: [
      'https://images.unsplash.com/photo-1539185441755-769473a23570?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?q=80&w=1000&auto=format&fit=crop'
    ],
    description: 'Lightweight design optimized for speed and long-distance comfort. Push your limits with every stride.',
    sizes: [6, 7, 8, 9, 10, 11, 12],
    rating: 4.7,
    reviews: 156,
    details: ['Ultra-lightweight foam', 'Breathable knit upper', 'Flex grooves for natural motion', 'Heel pull tab']
  },
  {
    id: '7',
    name: 'Cyber Punk High',
    price: 299.99,
    category: 'Limited Edition',
    images: [
      'https://images.unsplash.com/photo-1560769629-975ec94e6a86?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1552346154-21d32810aba3?q=80&w=1000&auto=format&fit=crop'
    ],
    description: 'Futuristic high-top sneakers with modular parts and premium leather. A bold statement for those who live in the future.',
    sizes: [8, 9, 10, 11],
    rating: 4.9,
    reviews: 32,
    details: ['Modular strap system', 'Full-grain leather', 'Hidden stash pocket', 'Translucent sole']
  },
  {
    id: '8',
    name: 'Grip Pro Soccer',
    price: 139.99,
    category: 'Sports',
    images: [
      'https://images.unsplash.com/photo-1511556532299-8f662fc26c06?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1539185441755-769473a23570?q=80&w=1000&auto=format&fit=crop'
    ],
    description: 'Engineered for precision and control on the field. Superior traction for quick turns and explosive movements.',
    sizes: [7, 8, 9, 10, 11],
    rating: 4.6,
    reviews: 94,
    details: ['Textured upper for control', 'Conical studs for grip', 'Anatomical fit', 'Lightweight TPU plate']
  },
  {
    id: '9',
    name: 'Cloud Walker',
    price: 179.99,
    category: 'Running',
    images: [
      'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1539185441755-769473a23570?q=80&w=1000&auto=format&fit=crop'
    ],
    description: 'Experience walking on clouds with our patented air-cushion technology. Maximum comfort for long days on your feet.',
    sizes: [6, 7, 8, 9, 10, 11, 12],
    rating: 4.8,
    reviews: 178,
    details: ['Full-length air unit', 'Seamless upper construction', 'Plush foam collar', 'Flexible outsole']
  },
  {
    id: '10',
    name: 'Retro Wave 80s',
    price: 119.99,
    category: 'Streetwear',
    images: [
      'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1512374382149-4332c6c021f1?q=80&w=1000&auto=format&fit=crop'
    ],
    description: 'Classic 80s inspired design with a modern twist on comfort. Timeless style that never goes out of fashion.',
    sizes: [7, 8, 9, 10, 11, 12],
    rating: 4.4,
    reviews: 112,
    details: ['Vintage color palette', 'Durable canvas upper', 'Vulcanized rubber sole', 'Retro branding']
  }
];
