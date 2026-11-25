// Gallery data. To add a real project: put the photo in /public/images and set `image`, then set demo to false.
export const categories = [
  'Living Room', 'Bedroom', 'Modular Kitchen', 'Wardrobe', 'False Ceiling', 'TV Units',
  'Residential Interiors', 'Office Interiors', 'House Elevation', 'Exterior Design',
] as const;
export type Category = (typeof categories)[number];

export interface Project { id: string; title: string; category: Category; image?: string; alt: string; ratio: string; demo: boolean }

export const projects: Project[] = [
  { id: 'p1', title: 'Warm neutral living room', category: 'Living Room', alt: 'Living room design inspiration in warm neutral tones', ratio: 'aspect-[4/5]', demo: true,image : '/images/project/living-room.jpg'},
  { id: 'p2', title: 'Handleless modular kitchen', category: 'Modular Kitchen', alt: 'Modular kitchen design inspiration', ratio: 'aspect-[4/3]', demo: true, image : '/images/project/modular-kitchen.jpg'},
  { id: 'p3', title: 'Villa elevation concept', category: 'House Elevation', alt: 'Modern villa elevation design inspiration', ratio: 'aspect-[3/4]', demo: true, image : '/images/project/house-elevation.jpg'},
  { id: 'p4', title: 'Master bedroom with headboard wall', category: 'Bedroom', alt: 'Bedroom design inspiration', ratio: 'aspect-[4/3]', demo: true, image : '/images/project/bedroom.jpg'},
  { id: 'p5', title: 'Floor-to-ceiling wardrobe', category: 'Wardrobe', alt: 'Wardrobe design inspiration', ratio: 'aspect-[3/4]', demo: true, image : '/images/project/wardrobe.jpg'},
  { id: 'p6', title: 'Cove-lit false ceiling', category: 'False Ceiling', alt: 'False ceiling with cove lighting design inspiration', ratio: 'aspect-square', demo: true, image : '/images/project/false-ceiling.jpg'},
  { id: 'p7', title: 'Panelled TV wall', category: 'TV Units', alt: 'TV unit and wall panelling design inspiration', ratio: 'aspect-[4/5]', demo: true, image : '/images/project/tv-unit.jpg'},
  { id: 'p8', title: 'Complete apartment interior', category: 'Residential Interiors', alt: 'Residential interior design inspiration', ratio: 'aspect-[4/3]', demo: true, image : '/images/project/apartment.jpg'},
  { id: 'p9', title: 'Open-plan office', category: 'Office Interiors', alt: 'Office interior design inspiration', ratio: 'aspect-[4/3]', demo: true, image : '/images/project/office.jpg'},
  { id: 'p10', title: 'Terrace and landscape concept', category: 'Exterior Design', alt: 'Terrace and exterior design inspiration', ratio: 'aspect-[4/5]', demo: true, image : '/images/project/exterior.jpg'},
];
