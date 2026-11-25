import { whatsappLink } from '../data/site';
import { WhatsAppIcon } from './Icons';

export default function FloatingWhatsApp() {
  return (
    <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" aria-label="Chat with DM Interior on WhatsApp (opens in a new tab)"
      className="fixed bottom-[calc(1.25rem+env(safe-area-inset-bottom))] right-5 z-40 grid h-14 w-14 place-items-center rounded-full bg-bronze text-paper shadow-lg shadow-charcoal/30 transition-transform duration-300 hover:scale-105 md:right-8">
      <WhatsAppIcon className="h-7 w-7" />
    </a>
  );
}
