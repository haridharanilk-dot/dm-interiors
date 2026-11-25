// SINGLE SOURCE OF TRUTH for business details. Edit here and the whole site updates.
const waNumber = '919342562082'; // international format, digits only
const waMessage =
  'Hello DM Interior, I am interested in your interior design services. I would like to discuss my project and get a quotation.';

export const site = {
  name: 'DM Interior',
  tagline: 'Your Dream Space, Our Perfect Design.',
  established: 2023,
  email: 'dminteriorero@gmail.com',
  phone: '6380340857',
  phoneIntl: '+916380340857',
  whatsappDisplay: '+91 93425 62082',
  whatsappNumber: waNumber,
  hours: '10:00 AM – 10:00 PM',
  address: {
    lines: ['Srinivasa Complex', 'Surampatti 4 Road', 'Erode, Tamil Nadu, India'],
    street: 'Srinivasa Complex, Surampatti 4 Road',
    city: 'Erode',
    region: 'Tamil Nadu',
    country: 'IN',
  },
  social: {
    instagram: 'https://www.instagram.com/dm__interior_33/',
    facebook: 'https://www.facebook.com/share/1EhhBgRDNc/?mibextid=wwXIfr',
  },
  founders: [
    { name: 'Prince', role: 'Founder' },
    { name: 'Allen', role: 'Co-Founder' },
  ],
  // Set after you deploy, e.g. 'https://www.yourdomain.com' (no trailing slash). Used for canonical/sitemap/schema.
  siteUrl: '',
} as const;

export const whatsappLink = (message: string = waMessage) =>
  `https://wa.me/${waNumber}?text=${encodeURIComponent(message)}`;
export const defaultWhatsappMessage = waMessage;
