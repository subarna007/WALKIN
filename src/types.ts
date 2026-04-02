export interface Product {
  id: string;
  name: string;
  price: number;
  category: 'Running' | 'Streetwear' | 'Sports' | 'Limited Edition';
  images: string[];
  description: string;
  sizes: number[];
  rating: number;
  reviews: number;
  details: string[];
}

export interface CartItem extends Product {
  selectedSize: number;
  quantity: number;
}
