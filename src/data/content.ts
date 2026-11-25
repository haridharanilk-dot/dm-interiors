// Editable site content. Replace image paths with real files in /public/images when available.
export interface Service {
  slug: string; title: string; summary: string; points: string[]; image?: string; imageAlt: string;
}

export const services: Service[] = [
  { slug: 'modular-kitchen', title: 'Modular Kitchen Designs', summary: 'Kitchens planned around the way you cook, store and move.',
    points: ['Ergonomic layouts', 'Premium fittings', 'Smart cabinet solutions', 'Functional storage', 'Integrated lighting'], image: '/images/service/modular-kitchen.jpg',imageAlt: 'Modern modular kitchen with warm neutral cabinetry' },
  { slug: 'bedroom-wardrobe', title: 'Bedroom & Wardrobe Designs', summary: 'Calm bedrooms with storage that is made to fit.',
    points: ['Modern bedroom layouts', 'Custom wardrobes', 'Space-saving storage', 'Premium finishes'], image: '/images/service/bedroom-wardrobe.jpg',imageAlt: 'Contemporary bedroom with built-in wardrobe' },
  { slug: 'living-room', title: 'Living Room Interiors', summary: 'Living spaces that feel composed, comfortable and personal.',
    points: ['Contemporary layouts', 'Luxury living spaces', 'False ceilings', 'Feature walls'], image: '/images/service/living-room.jpg',imageAlt: 'Luxury living room in warm neutral tones' },
  { slug: 'false-ceiling-lighting', title: 'False Ceiling & Lighting', summary: 'Ceilings and light layered to set the mood of each room.',
    points: ['Modern false ceilings', 'Cove lighting', 'Decorative lighting', 'Ambient lighting'], image: '/images/service/false-ceiling-lighting.jpg',imageAlt: 'False ceiling with cove lighting' },
  { slug: 'tv-unit-wall-panelling', title: 'TV Unit & Wall Panelling', summary: 'Entertainment walls that combine storage with texture.',
    points: ['Custom TV units', 'Decorative wall panels', 'Modern entertainment walls'], image: '/images/service/tv-unit-wall-panelling.jpg',imageAlt: 'Wood-panelled TV unit wall' },
  { slug: 'custom-furniture', title: 'Custom Furniture', summary: 'Pieces designed for your room, not adapted to it.',
    points: ['Tailor-made furniture', 'Space-efficient designs', 'Contemporary furniture solutions'], image: '/images/service/custom-furniture.jpg',imageAlt: 'Tailor-made contemporary furniture' },
  { slug: 'home-office-interiors', title: 'Complete Home & Office Interiors', summary: 'One team from first plan to finished space.',
    points: ['Complete residential interiors', 'Office interiors', 'Functional workspace planning'],  image: '/images/service/home-office-interiors.jpg',imageAlt: 'Complete home interior with integrated design' },
  { slug: 'house-elevation', title: 'Modern House Elevation', summary: 'Facades with clean lines and considered proportion.',
    points: ['Luxury villa elevations', 'Contemporary exterior designs', 'Modern architectural facades'], image: '/images/service/house-elevation.jpg',imageAlt: 'Modern villa elevation' },
  { slug: 'exterior-landscaping', title: 'Exterior & Landscaping', summary: 'Compounds, balconies and terraces designed as outdoor rooms.',
    points: ['Compound wall designs', 'Balcony designs', 'Terrace designs', 'Exterior lighting', 'Landscaping concepts'], image: '/images/service/exterior-landscaping.jpg',imageAlt: 'Terrace and landscaped exterior' },
];

export const processSteps = [
  { title: 'Consultation', text: 'We listen to your needs, lifestyle, budget and the space you have.' },
  { title: 'Concept & planning', text: 'Layouts, materials and a design direction are shaped and shared with you.' },
  { title: 'Detailing', text: 'Joinery, lighting and finishes are detailed so everything fits and functions.' },
  { title: 'Execution', text: 'Work is carried out to the agreed design with regular updates.' },
  { title: 'Handover', text: 'We review the finished space with you before it becomes yours.' },
];

export const reasons = [
  { title: 'Designed around you', text: 'Every layout starts from how you live, not from a catalogue.' },
  { title: 'Interior and exterior', text: 'Rooms, facades, terraces and landscaping handled by one studio.' },
  { title: 'Detail that works', text: 'Storage, lighting and fittings planned so the space is as practical as it is beautiful.' },
  { title: 'Local and reachable', text: 'Based in Erode, available on WhatsApp from 10 AM to 10 PM.' },
];
