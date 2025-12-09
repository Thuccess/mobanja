
import { Phone, Testimonial, FaqItem, NavLink } from './types';
import { Smartphone, CheckCircle, Clock, Shield, CreditCard, MapPin } from 'lucide-react';

export const NAV_LINKS: NavLink[] = [
  { label: 'Home', path: '/' },
  { label: 'How It Works', path: '/how-it-works' },
  { label: 'iPhones', path: '/phones' },
  { label: 'Shop Owners', path: '/shop-owners' },
  { label: 'About Us', path: '/about' },
  { label: 'FAQ', path: '/faq' },
  { label: 'Contact Us', path: '/contact' },
];

export const PHONES: Phone[] = [
  // --- iPhone 17 Series ---
  {
    id: 'iphone-17-pro-max',
    name: 'iPhone 17 Pro Max',
    brand: 'Apple',
    image: '/phones/iphone-17-pro-max.png',
    price: 4800000,
    monthlyPrice: 800000,
    durationMonths: 6,
    features: ['A19 Pro Chip', 'Advanced Camera Control', 'Titanium Design', '50% Down Payment']
  },
  {
    id: 'iphone-17-pro',
    name: 'iPhone 17 Pro',
    brand: 'Apple',
    image: '/phones/iphone-17-pro.png',
    price: 4200000,
    monthlyPrice: 700000,
    durationMonths: 6,
    features: ['A19 Pro Chip', 'Camera Control', 'ProMotion Display', '50% Down Payment']
  },
  {
    id: 'iphone-17',
    name: 'iPhone 17',
    brand: 'Apple',
    image: '/phones/iphone-17.png',
    price: 3600000,
    monthlyPrice: 600000,
    durationMonths: 6,
    features: ['A19 Chip', 'Dynamic Island', 'Advanced Cameras', '50% Down Payment']
  },

  // --- iPhone 16 Series ---
  {
    id: 'iphone-16-pro-max',
    name: 'iPhone 16 Pro Max',
    brand: 'Apple',
    image: '/phones/iphone-16-pro-max.png',
    price: 4400000,
    monthlyPrice: 733000,
    durationMonths: 6,
    features: ['A18 Pro Chip', 'Camera Control', 'Titanium', '50% Down Payment']
  },
  {
    id: 'iphone-16-128',
    name: 'iPhone 16 128GB',
    brand: 'Apple',
    image: '/phones/iphone-16-pro-max.png',
    price: 3900000,
    monthlyPrice: 650000,
    durationMonths: 6,
    features: ['A18 Chip', 'Action Button', 'Camera Control', '50% Down Payment']
  },

  // --- iPhone 15 Series ---
  {
    id: 'iphone-15-pro-max-256',
    name: 'iPhone 15 Pro Max 256GB',
    brand: 'Apple',
    image: '/phones/iphone-15-pro-max.png',
    price: 4500000,
    monthlyPrice: 750000,
    durationMonths: 6,
    features: ['Titanium Design', '5x Telephoto', 'A17 Pro', '50% Down Payment']
  },
  {
    id: 'iphone-15-pro',
    name: 'iPhone 15 Pro',
    brand: 'Apple',
    image: '/phones/iphone-15-pro-max.png',
    price: 2950000,
    monthlyPrice: 491000,
    durationMonths: 6,
    features: ['Titanium Body', 'Action Button', 'A17 Pro', '50% Down Payment']
  },
  {
    id: 'iphone-15-128',
    name: 'iPhone 15 128GB',
    brand: 'Apple',
    image: '/phones/iphone-15-pro-max.png',
    price: 2450000,
    monthlyPrice: 408000,
    durationMonths: 6,
    features: ['Dynamic Island', '48MP Camera', 'USB-C', '50% Down Payment']
  },

  // --- iPhone 14 Series ---
  {
    id: 'iphone-14-pro-max',
    name: 'iPhone 14 Pro Max',
    brand: 'Apple',
    image: '/phones/iphone-14-pro-max.png',
    price: 2500000,
    monthlyPrice: 416000,
    durationMonths: 6,
    features: ['Always-On Display', 'Dynamic Island', 'A16 Bionic', '50% Down Payment']
  },
  {
    id: 'iphone-14-pro',
    name: 'iPhone 14 Pro',
    brand: 'Apple',
    image: '/phones/iphone-14-pro.png',
    price: 2100000,
    monthlyPrice: 350000,
    durationMonths: 6,
    features: ['Dynamic Island', '48MP Pro Camera', 'A16 Bionic', '50% Down Payment']
  },
  {
    id: 'iphone-14-128',
    name: 'iPhone 14 128GB',
    brand: 'Apple',
    image: '/phones/iphone-14.png',
    price: 1800000,
    monthlyPrice: 300000,
    durationMonths: 6,
    features: ['Action Mode', 'Crash Detection', 'All-Day Battery', '40% Down Payment']
  },

  // --- iPhone 13 Series ---
  {
    id: 'iphone-13-pro-max',
    name: 'iPhone 13 Pro Max',
    brand: 'Apple',
    image: '/phones/iphone-13-pro-max.png',
    price: 1850000,
    monthlyPrice: 308000,
    durationMonths: 6,
    features: ['ProMotion 120Hz', 'Macro Photography', 'Cinematic Mode', '40% Down Payment']
  },
  {
    id: 'iphone-13-pro',
    name: 'iPhone 13 Pro',
    brand: 'Apple',
    image: '/phones/iphone-13-pro.png',
    price: 1650000,
    monthlyPrice: 275000,
    durationMonths: 6,
    features: ['ProMotion Display', 'Triple Camera', 'A15 Bionic', '40% Down Payment']
  },
  {
    id: 'iphone-13-128',
    name: 'iPhone 13 128GB',
    brand: 'Apple',
    image: '/phones/iphone-13.png',
    price: 1250000,
    monthlyPrice: 208000,
    durationMonths: 6,
    features: ['Dual Camera', 'Cinematic Mode', 'A15 Bionic', '40% Down Payment']
  },

  // --- iPhone 12 Series ---
  {
    id: 'iphone-12-pro-max-128',
    name: 'iPhone 12 Pro Max 128GB',
    brand: 'Apple',
    image: '/phones/iphone-12-pro-max.png',
    price: 1650000,
    monthlyPrice: 275000,
    durationMonths: 6,
    features: ['Super Retina XDR', 'LiDAR Scanner', 'A14 Bionic', '40% Down Payment']
  },
  {
    id: 'iphone-12-pro',
    name: 'iPhone 12 Pro',
    brand: 'Apple',
    image: '/phones/iphone-12-pro.png',
    price: 1250000,
    monthlyPrice: 208000,
    durationMonths: 6,
    features: ['Triple Camera', 'Steel Frame', 'A14 Bionic', '40% Down Payment']
  },
  {
    id: 'iphone-12-64',
    name: 'iPhone 12 64GB',
    brand: 'Apple',
    image: '/phones/iphone-12.png',
    price: 1050000,
    monthlyPrice: 175000,
    durationMonths: 6,
    features: ['OLED Display', 'MagSafe', '5G Capable', '40% Down Payment']
  },

  // --- iPhone 11 Series ---
  {
    id: 'iphone-11-pro-max-64',
    name: 'iPhone 11 Pro Max 64GB',
    brand: 'Apple',
    image: '/phones/iphone-11-pro-max.png',
    price: 1150000,
    monthlyPrice: 191000,
    durationMonths: 6,
    features: ['Triple Camera System', 'A13 Bionic', 'Super Retina XDR', '40% Down Payment']
  },
  {
    id: 'iphone-11-pro-64',
    name: 'iPhone 11 Pro 64GB',
    brand: 'Apple',
    image: '/phones/iphone-11-pro.png',
    price: 1000000,
    monthlyPrice: 166000,
    durationMonths: 6,
    features: ['Triple Camera', 'Compact Design', 'OLED Display', '40% Down Payment']
  },
  {
    id: 'iphone-11-64',
    name: 'iPhone 11 64GB',
    brand: 'Apple',
    image: '/phones/iphone-11.png',
    price: 850000,
    monthlyPrice: 141000,
    durationMonths: 6,
    features: ['Dual Camera', 'Night Mode', 'Liquid Retina LCD', '40% Down Payment']
  },

  // --- iPhone XR ---
  {
    id: 'iphone-xr-64',
    name: 'iPhone XR 64GB',
    brand: 'Apple',
    image: '/phones/iphone-xr.png',
    price: 700000,
    monthlyPrice: 116000,
    durationMonths: 6,
    features: ['Liquid Retina Display', 'Face ID', 'A12 Bionic', '40% Down Payment']
  }
];


export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Sa*** Namukasa',
    role: 'Business Owner, Kampala',
    text: 'Mobanja made it easy for me to get the iPhone 14 Pro for my content creation business. Paying in instalments helped me manage my cash flow.',
    avatar: 'Sarah-Namukasa.png',
  },
  {
    id: '2',
    name: 'I*** Omondi',
    role: 'Software Developer, Entebbe',
    text: 'I needed a reliable device for work. The approval process was super fast, and I picked up my phone from the Kampala office the same day.',
    avatar: 'Ivan-Omondi.png',
  },
  {
    id: '3',
    name: 'Gr*** Akello',
    role: 'Student, Makerere University',
    text: 'As a student, buying an iPhone cash is hard. Mobanja\'s student-friendly plan allowed me to get an iPhone 12 for my studies.',
    avatar: 'Grace-Akello.png',
  },
  {
    id: '4',
    name: 'N******* Sarah',
    role: 'Boutique Owner, Kampala',
    text: 'Mobanja helped me secure an iPhone 14 Pro for my fashion business. Paying in instalments made it easy to keep my business running without financial pressure.',
    avatar: 'Namatovu-Sarah.png',
  },
  {
    id: '5',
    name: 'M****** Isaac',
    role: 'Software Engineer, Entebbe',
    text: 'I needed a powerful device for coding and client meetings. The approval was quick, and I picked up my phone from the Kampala office the same afternoon.',
    avatar: 'Mugisha-Isaac.png',
  },
  {
    id: '6',
    name: 'A**** Grace',
    role: 'University Student, Makerere University',
    text: 'As a student, saving for a new iPhone is tough. Mobanja’s student-friendly plan helped me get an iPhone 12 to support my online classes and research.',
    avatar: 'Adoch-Grace.png',
  },
  {
    id: '7',
    name: 'J**** Kaggwa',
    role: 'Photographer, Jinja',
    text: 'Getting a new iPhone was never this easy. Mobanja’s flexible payment plan allowed me to upgrade my gear without straining my budget.',
    avatar: 'Julia-Kaggwa.png',
  },
  {
    id: '8',
    name: 'E*** Okello',
    role: 'Teacher, Gulu',
    text: 'As a teacher, I needed a reliable phone for online classes. Mobanja’s approval process was smooth, and I got my phone on the same day.',
    avatar: 'Emma-Okello.png',
  },
  {
    id: '9',
    name: 'D***** Ladu',
    role: 'Entrepreneur, Arua',
    text: 'Mobanja made it easy to get the latest iPhone. Paying in installments helped me manage my small business cash flow without stress.',
    avatar: 'Daniel-Ladu.png',
  },
  {
    id: '10',
    name: 'B******* Nanyonjo',
    role: 'Student, Kyambogo University',
    text: 'I always dreamed of owning an iPhone. Mobanja’s student-friendly plan finally made it possible, and I could focus on my studies.',
    avatar: 'Beatrice-Nanyonjo.png',
  },
  {
    id: '11',
    name: 'S***** Byaruhanga',
    role: 'Small Business Owner, Masaka',
    text: 'The entire process was simple and fast. I got my iPhone 13 for my shop, and paying in installments was stress-free.',
    avatar: 'Samuel-Byaruhanga.png',
  },
  {
    id: '12',
    name: 'R*** Namutebi',
    role: 'Content Creator, Kampala',
    text: 'Mobanja helped me get the perfect device for my social media content. The flexible payment plan really worked for me.',
    avatar: 'Rita-Namutebi.png',
  },
  {
    id: '13',
    name: 'P****** Ochieng',
    role: 'Web Developer, Kangsanga',
    text: 'I needed a fast, reliable phone for work. Mobanja’s quick approval and pickup service was exactly what I needed.',
    avatar: 'Patrick-Ochieng.png',
  },
];


export const FAQS: FaqItem[] = [
  {
    question: "What documents do I need to apply?",
    answer: "You need a valid National ID, and proof of income (Mobile Money statement or Bank statement for the last 3 months)."
  },
  {
    question: "Where do I make payments?",
    answer: "The initial 40% down payment must be made in person at our office (New Pioneer Mall, Shop PI 62). Monthly instalments can be paid via Mobile Money."
  },
  {
    question: "How do I apply?",
    answer: "You can apply online via WhatsApp by submitting your documents. Once pre-approved, you'll be invited to our office to finalize the deal."
  },
  {
    question: "Is the phone unlocked?",
    answer: "Yes, but it comes with remote management software. Once you complete your payments, the software is removed, and the device is fully yours."
  },
  {
    question: "What happens if I lose the phone?",
    answer: "We recommend insuring your device. While you are still paying for it, you are responsible for the balance even if the device is lost or stolen."
  }
];

export const FEATURES = [
  {
    title: 'Fast Approval',
    description: 'Get verified in minutes using your National ID.',
    icon: Clock
  },
  {
    title: 'Genuine Apple',
    description: 'We only sell authentic, brand new iPhones.',
    icon: Shield
  },
  {
    title: 'Pay In-Store',
    description: 'Safe and secure payments at our Kampala office.',
    icon: MapPin
  },
  {
    title: 'No Hidden Fees',
    description: 'The price you see is the price you pay.',
    icon: CheckCircle
  }
];
