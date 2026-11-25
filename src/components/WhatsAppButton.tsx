import { whatsappLink } from '../data/site';
import { WhatsAppIcon } from './Icons';

interface Props { label?: string; message?: string; variant?: 'solid' | 'outline' | 'light'; className?: string; icon?: boolean }

const styles = {
  solid: 'bg-bronze text-paper hover:bg-walnut',
  outline: 'border border-walnut text-walnut hover:bg-walnut hover:text-paper',
  light: 'border border-paper/60 text-paper hover:bg-paper hover:text-walnut',
};

/** Every "Get a Quote" button in the site uses this, so the WhatsApp link stays consistent. */
export default function WhatsAppButton({ label = 'Get a Quote', message, variant = 'solid', className = '', icon = true }: Props) {
  return (
    <a href={whatsappLink(message)} target="_blank" rel="noopener noreferrer"
      className={`inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full px-7 text-sm font-medium tracking-wide transition-colors duration-300 ${styles[variant]} ${className}`}>
      {icon && <WhatsAppIcon className="h-4 w-4" />}{label}<span className="sr-only"> on WhatsApp (opens in a new tab)</span>
    </a>
  );
}

interface QuoteProps { label?: string; variant?: 'solid' | 'outline' | 'light'; className?: string; service?: string; onClick?: () => void }

/** "Get a Quote" / "Enquire": scrolls to the enquiry form. WhatsApp opens only when the form is submitted. */
export function QuoteButton({ label = 'Get a Quote', variant = 'solid', className = '', service, onClick }: QuoteProps) {
  return (
    <a href="#contact" onClick={() => { if (service) window.dispatchEvent(new CustomEvent('dm:service', { detail: service })); onClick?.(); }}
      className={`inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full px-7 text-sm font-medium tracking-wide transition-colors duration-300 ${styles[variant]} ${className}`}>
      {label}
    </a>
  );
}
