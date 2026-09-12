import { RoomType, AmenityItem, GalleryItem } from '../types';

export const PG_INFO = {
  name: 'Andhra Prince PG',
  tagline: 'Premium Homely Stay & Food',
  subtitle: 'Executive accommodation with authentic 3-time homely meals, high-speed WiFi, modern lift, laundry, and zero brokerage.',
  phone: '+91 93540 58916',
  altPhone: '+91 93540 58916',
  whatsapp: '919354058916',
  whatsappDisplay: '+91 93540 58916',
  email: 'contact@andhraprincepg.com',
  address: 'Andhra PG, Raipur Khadar, Sector 126 (Near Amity University), Noida, UP - 201313',
  city: 'Sector 126, Raipur Khadar, Noida',
  visitingHours: '8:00 AM - 9:30 PM (All 7 Days)',
  googleMapsEmbedUrl: 'https://maps.google.com/maps?q=Andhra+Pg+126+Raipur+khadar+noida&t=&z=16&ie=UTF8&iwloc=&output=embed',
  googleMapsDirectionsUrl: 'https://maps.app.goo.gl/3wHhDM9ifixp5dK38',
  stats: {
    happyResidents: '2,500+',
    rating: '4.9 ★',
    foodMeals: '3 Times Daily',
    brokerage: '0% Brokerage'
  }
};

export const ROOMS_DATA: RoomType[] = [
  // ================= PREMIUM STAY (2 OPTIONS) =================
  {
    id: 'premium-single',
    name: 'Premium Single Sharing',
    tier: 'premium',
    category: 'single',
    title: 'Executive Private Luxury Suite',
    sharingCount: 1,
    tagline: '100% Private Luxury & Dedicated Workstation',
    description: 'An elite private master room crafted for senior working professionals and executives. Features a plush orthopaedic bed, ergonomic study desk with high-back chair, 2-door wardrobe with full mirror, attached modern bathroom with 24/7 hot water geyser, and whisper-silent inverter split AC.',
    sizeSqFt: 190,
    hasAC: true,
    badge: '👑 Executive Luxury',
    images: [
      '/premium 1.jpg',
      '/premium 2.jpg',
      '/premium 3.jpeg'
    ],
    features: [
      '100% Private Room (Zero Roommates)',
      'Plush King-Single Bed & Orthopaedic Mattress',
      'Executive Work Desk & Ergonomic Chair',
      'Spacious 2-Door Wardrobe with Locker',
      'Attached Premium Tiled Bath with 24/7 Geyser',
      'Inverter Split AC & Remote Ceiling Fan',
      'Dedicated 300 Mbps Ultra-Fast Fiber WiFi',
      '3-Times Homely North & South Indian Meals',
      'Daily Room Housekeeping & Sanitization'
    ],
    keyAmenities: ['100% Private', 'Luxury Attached Bath', 'Inverter Split AC', '2-Door Wardrobe', '3 Meals Included', '300 Mbps WiFi']
  },
  {
    id: 'premium-double',
    name: 'Premium Double Sharing',
    tier: 'premium',
    category: 'double',
    title: 'Deluxe Twin Executive Suite',
    sharingCount: 2,
    tagline: 'Spacious & High-End Executive Twin Living',
    description: 'A spacious, premium twin-sharing room with extra walking space, two separate solid-wood beds with spine-support mattresses, 2 sides new wooden wardrobes with personal keys, twin study stations, and an attached luxury bathroom.',
    sizeSqFt: 230,
    hasAC: true,
    badge: '⭐ Premium Twin',
    images: [
      '/premium 4.jpeg',
      '/premium 5.jpeg',
      '/premium 6.jpeg'
    ],
    features: [
      '2 Separate Solid-Wood Beds with Ortho Mattresses',
      '2 Sides New Wooden Wardrobes with Keys',
      'Dual Study Desks & Dedicated Reading Lights',
      'Attached Designer Washroom with 24/7 Geyser',
      'High-Efficiency Split Inverter AC',
      'Balcony / Large Sunlit French Windows',
      '3-Times Homely Andhra & North Indian Meals',
      'Daily Cleaning & Dedicated Laundry Service'
    ],
    keyAmenities: ['Twin Sharing', 'Attached Luxury Bath', 'Split Inverter AC', '2 Wooden Wardrobes', '3 Meals Included', 'Laundry Access']
  },

  // ================= BUDGET FRIENDLY (3 OPTIONS) =================
  {
    id: 'budget-single',
    name: 'Budget Single Sharing',
    tier: 'budget',
    category: 'single',
    title: 'Smart Solo Budget Room',
    sharingCount: 1,
    tagline: 'Affordable Private Room with Homely Meals',
    description: 'A cost-effective private single room providing complete privacy at an economical monthly rate. Comes with a single bed, personal wardrobe, study table, clean attached washroom with geyser, and full access to food and amenities.',
    sizeSqFt: 150,
    hasAC: true,
    badge: '💡 Pocket Friendly Solo',
    images: [
      '/budget-pg/1.webp',
      '/budget-pg/2.webp',
      '/budget-pg/3.webp'
    ],
    features: [
      'Private Single Room at Budget-Friendly Rate',
      'Single Bed with Comfortable Mattress',
      'Personal Lockable Steel/Wood Wardrobe',
      'Attached Clean Washroom with Hot Water Geyser',
      'Study Table & Chair Setup',
      'AC & Air Cooler / Ventilation Options',
      '3-Times Unlimited Homely Meals Included',
      'Automatic Lift & Washing Machine Access'
    ],
    keyAmenities: ['Private Budget Room', 'Attached Washroom', 'AC / Cooler', 'Study Table', '3 Homely Meals', 'Lift & WiFi']
  },
  {
    id: 'budget-double',
    name: 'Budget Double Sharing',
    tier: 'budget',
    category: 'double',
    title: 'Standard Twin Sharing Room',
    sharingCount: 2,
    tagline: 'High-Value Twin Sharing for Students & Employees',
    description: 'Our most popular budget choice for Amity students and Noida professionals. Offers two comfortable beds with mattresses, separate wardrobes with keys, study desks, attached bathroom with geyser, and 3-time hot meals.',
    sizeSqFt: 200,
    hasAC: true,
    badge: '🔥 Best Budget Value',
    images: [
      '/budget-pg/4.webp',
      '/budget-pg/5.webp',
      '/budget-pg/2.webp',
      '/budget-pg/1.webp'
    ],
    features: [
      '2 Individual Beds with Cushioned Mattresses',
      '2 Separate Lockable Storage Wardrobes',
      'Attached Clean Washroom with 24/7 Geyser',
      'AC / High Airflow Ventilation System',
      'High-Speed 300 Mbps Fiber WiFi Included',
      '3-Times Daily Homely North & South Indian Food',
      'RO Drinking Water on Every Floor',
      'Zero Brokerage & Transparent Rent'
    ],
    keyAmenities: ['Twin Sharing', 'Attached Bath', 'AC / Ventilation', '2 Lockers', '3 Meals Included', 'Zero Brokerage']
  },
  {
    id: 'budget-triple',
    name: 'Budget Triple Sharing',
    tier: 'budget',
    category: 'triple',
    title: 'Classic Triple Sharing Room',
    sharingCount: 3,
    tagline: 'Maximum Cost Savings with Full Amenities',
    description: 'An economical, well-ventilated 3-sharing room designed for budget-conscious students and trainees. Features 3 separate beds with storage, individual lockable wardrobe units, attached bathroom with geyser, and 3-time home-style meals.',
    sizeSqFt: 250,
    hasAC: true,
    badge: '💰 Maximum Savings',
    images: [
      '/budget-pg/6.webp',
      '/budget-pg/7.webp',
      '/budget-pg/3.webp',
      '/budget-pg/5.webp'
    ],
    features: [
      '3 Separate Single Beds with Storage Mattresses',
      '3 Independent Lockable Wardrobe Units',
      'Attached Clean Bathroom with 24/7 Hot Water Geyser',
      'AC / High-Airflow Ceiling Fans',
      'Dedicated Power Points for Each Bed',
      '300 Mbps Dual-Band WiFi & Lift Access',
      '3-Times Unlimited Homely Andhra & North Indian Meals',
      'Daily Cleaning & Free Laundry Usage'
    ],
    keyAmenities: ['Triple Sharing', 'Attached Bath', 'AC / Ventilation', '3 Lockers', '3 Meals Included', 'Super Fast WiFi']
  }
];

export const AMENITIES_LIST: AmenityItem[] = [
  {
    id: 'lift',
    title: 'Automatic Lift / Elevator',
    description: 'Smooth and fast 8-passenger automatic elevator with automatic rescue device connecting all residential floors.',
    iconName: 'ArrowUpDown',
    badge: 'Convenience'
  },
  {
    id: 'laundry',
    title: 'Laundry & Washing Machine',
    description: 'Fully automatic top & front-load washing machines with dedicated terrace drying area and iron station.',
    iconName: 'Shirt',
    badge: 'Included'
  },
  {
    id: 'food',
    title: '3 Times Homely Food',
    description: 'Unlimited authentic Andhra Mess & North Indian home-style breakfast, lunch, and dinner, plus special Sunday feasts.',
    iconName: 'Utensils',
    badge: 'Authentic Taste'
  },
  {
    id: 'furnished',
    title: 'Fully Furnished Rooms',
    description: 'Solid wooden beds, orthopaedic mattresses, wardrobes with lockers, study tables, curtains, and attached clean bathrooms.',
    iconName: 'Bed',
    badge: 'Ready to Move'
  },
  {
    id: 'ro-water',
    title: 'RO Water Dispenser',
    description: 'Multi-stage commercial RO + UV water purification system with instant hot, cold, and normal water dispensers on every floor.',
    iconName: 'Droplets',
    badge: '100% Pure'
  },
  {
    id: 'wifi',
    title: 'High-Speed Fiber WiFi',
    description: 'Commercial 300 Mbps dual-band optical fiber WiFi with dedicated access points on every floor for lag-free WFH and streaming.',
    iconName: 'Wifi',
    badge: '300 Mbps'
  },
  {
    id: 'security',
    title: '24/7 CCTV & Security',
    description: 'Comprehensive CCTV surveillance across all corridors, biometric entry access, and round-the-clock security guard.',
    iconName: 'ShieldCheck',
    badge: 'Safe & Secure'
  },
  {
    id: 'power-backup',
    title: '24/7 Power Backup',
    description: 'Heavy duty diesel generator (DG) for seamless power backup to ensure lights, fans, and WiFi never stop during outages.',
    iconName: 'Zap',
    badge: 'Uninterrupted'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: '1',
    title: 'Budget Friendly PG Room Photo 1',
    category: 'Budget Stay',
    url: '/budget-pg/1.webp'
  },
  {
    id: '2',
    title: 'Budget Friendly PG Room Photo 2',
    category: 'Budget Stay',
    url: '/budget-pg/2.webp'
  },
  {
    id: '3',
    title: 'Budget Friendly PG Room Photo 3',
    category: 'Budget Stay',
    url: '/budget-pg/3.webp'
  },
  {
    id: '4',
    title: 'Budget Friendly PG Room Photo 4',
    category: 'Budget Stay',
    url: '/budget-pg/4.webp'
  },
  {
    id: '5',
    title: 'Budget Friendly PG Room Photo 5',
    category: 'Budget Stay',
    url: '/budget-pg/5.webp'
  },
  {
    id: '6',
    title: 'Budget Friendly PG Room Photo 6',
    category: 'Budget Stay',
    url: '/budget-pg/6.webp'
  },
  {
    id: '7',
    title: 'Budget Friendly PG Room Photo 7',
    category: 'Budget Stay',
    url: '/budget-pg/7.webp'
  },
  {
    id: '8',
    title: 'Premium Executive Master Bedroom',
    category: 'Premium Stay',
    url: '/premium 1.jpg'
  },
  {
    id: '9',
    title: 'Premium Executive Bedroom Setup',
    category: 'Premium Stay',
    url: '/premium 2.jpg'
  },
  {
    id: '10',
    title: 'Premium Suite Room Interior',
    category: 'Premium Stay',
    url: '/premium 3.jpeg'
  },
  {
    id: '11',
    title: 'Premium Twin Sharing Bedroom',
    category: 'Premium Stay',
    url: '/premium 4.jpeg'
  },
  {
    id: '12',
    title: 'Premium Deluxe Living Room',
    category: 'Premium Stay',
    url: '/premium 5.jpeg'
  },
  {
    id: '13',
    title: 'Premium Executive Suite',
    category: 'Premium Stay',
    url: '/premium 6.jpeg'
  }
];
