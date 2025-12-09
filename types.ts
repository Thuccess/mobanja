
export interface Phone {
  id: string;
  name: string;
  brand: 'Apple' | 'Samsung' | 'Tecno' | 'Infinix' | 'Xiaomi';
  image: string;
  price: number;
  monthlyPrice: number;
  durationMonths: number;
  features: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  text: string;
  avatar: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface NavLink {
  label: string;
  path: string;
}
