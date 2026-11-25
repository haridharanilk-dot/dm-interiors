type P = { className?: string };
const svg = (className?: string) => ({ width: 20, height: 20, viewBox: '0 0 24 24', className, 'aria-hidden': true as const });

export const WhatsAppIcon = ({ className }: P) => (
  <svg {...svg(className)} fill="currentColor">
    <path d="M12.04 2a9.93 9.93 0 0 0-8.4 15.2L2 22l4.9-1.6A9.93 9.93 0 1 0 12.04 2Zm0 18.1a8.1 8.1 0 0 1-4.13-1.13l-.3-.18-2.9.94.95-2.83-.2-.3a8.1 8.1 0 1 1 6.58 3.5Zm4.44-6.07c-.24-.12-1.44-.71-1.66-.8-.22-.08-.38-.12-.54.12s-.62.8-.76.96c-.14.16-.28.18-.52.06a6.6 6.6 0 0 1-1.95-1.2 7.3 7.3 0 0 1-1.35-1.68c-.14-.24-.02-.37.1-.5.11-.1.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.2-.46-.4-.4-.54-.4h-.46c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.7 2.6 4.1 3.64.58.24 1.04.4 1.4.5.58.18 1.1.16 1.52.1.46-.08 1.44-.58 1.64-1.16.2-.58.2-1.06.14-1.16-.06-.1-.22-.16-.46-.28Z" />
  </svg>
);
export const InstagramIcon = ({ className }: P) => (
  <svg {...svg(className)} fill="none" stroke="currentColor" strokeWidth={1.7}>
    <rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.3" cy="6.7" r="1" fill="currentColor" stroke="none" />
  </svg>
);
export const FacebookIcon = ({ className }: P) => (
  <svg {...svg(className)} fill="currentColor"><path d="M13.5 22v-8.2h2.8l.4-3.3h-3.2V8.4c0-.9.3-1.6 1.6-1.6h1.7V3.9c-.3 0-1.3-.1-2.5-.1-2.5 0-4.1 1.5-4.1 4.2v2.5H7.4v3.3h2.8V22h3.3Z" /></svg>
);
export const ArrowIcon = ({ className }: P) => (
  <svg {...svg(className)} fill="none" stroke="currentColor" strokeWidth={1.5}><path d="M5 12h14M13 6l6 6-6 6" /></svg>
);
