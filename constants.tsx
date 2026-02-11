
import { Product } from './types';

export const PRODUCTS: Product[] = [
  {
    id: 'brg-001',
    name: 'Precision Ball Bearings',
    category: 'Power Transmission',
    description: 'High-speed, low-friction bearings designed for heavy industrial machinery.',
    image: 'https://picsum.photos/seed/bearing/800/600',
    specs: ['ISO 9001 Certified', 'Chrome Steel Material', 'High Heat Resistance']
  },
  {
    id: 'vlv-001',
    name: 'Cast Steel Gate Valve',
    category: 'Piping & Valves',
    description: 'Heavy-duty gate valves for oil, gas, and steam applications in harsh environments.',
    image: 'https://picsum.photos/seed/valve/800/600',
    specs: ['Class 150/300/600', 'Flanged Ends', 'Durable Seating']
  },
  {
    id: 'pmp-001',
    name: 'Centrifugal Industrial Pump',
    category: 'Fluid Management',
    description: 'Energy-efficient pumps for large-scale water and chemical transfer.',
    image: 'https://picsum.photos/seed/pump/800/600',
    specs: ['Cast Iron Body', 'Continuous Duty', 'Up to 5000 LPM']
  },
  {
    id: 'bel-001',
    name: 'Heavy Duty V-Belts',
    category: 'Power Transmission',
    description: 'Static conducting, oil-resistant belts for industrial drive systems.',
    image: 'https://picsum.photos/seed/belt/800/600',
    specs: ['Reinforced Polyester Cord', 'High Flexibility', 'Long Service Life']
  },
  {
    id: 'met-001',
    name: 'Industrial Flow Meter',
    category: 'Instrumentation',
    description: 'Digital ultrasonic flow meters for precise liquid measurement.',
    image: 'https://picsum.photos/seed/meter/800/600',
    specs: ['Digital Display', '±0.5% Accuracy', 'Battery/AC Power']
  },
  {
    id: 'sft-001',
    name: 'Premium Safety Harness',
    category: 'Industrial Safety',
    description: 'Full-body protection for construction and industrial maintenance teams.',
    image: 'https://picsum.photos/seed/harness/800/600',
    specs: ['Dorsal D-Ring', 'Adjustable Straps', 'CE Certified']
  }
];

export const APP_CONFIG = {
  companyName: 'RM Industrial Corporation',
  tagline: 'Empowering Industry Since 1984',
  location: 'Kolkata, West Bengal, India',
  yearsOfLegacy: 40,
  phone: '+91-33-2222-XXXX',
  email: 'sales@rmindustrial.com'
};
