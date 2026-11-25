import { navLinks } from './Nav';
import { site } from '../data/site';
import { FacebookIcon, InstagramIcon } from './Icons';
import { QuoteButton } from './WhatsAppButton';

export const SocialLinks = ({ className = '' }: { className?: string }) => (
  <ul className={`flex gap-3 ${className}`}>
    <li><a href={site.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="DM Interior on Instagram (opens in a new tab)"
      className="grid h-11 w-11 place-items-center rounded-full border border-current/40 transition-colors hover:bg-sand hover:text-walnut"><InstagramIcon /></a></li>
    <li><a href={site.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="DM Interior on Facebook (opens in a new tab)"
      className="grid h-11 w-11 place-items-center rounded-full border border-current/40 transition-colors hover:bg-sand hover:text-walnut"><FacebookIcon /></a></li>
  </ul>
);

export default function Footer() {
  return (
    <footer className="bg-charcoal text-paper/80">
      <div className="mx-auto grid max-w-[1440px] gap-14 px-5 py-20 md:px-10 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <img src="/brand/dm-interior-logo-light.png" alt="DM Interior" width={192} height={171} loading="lazy" className="h-20 w-auto" />
          <p className="mt-6 max-w-sm font-display text-2xl text-paper">{site.tagline}</p>
          <SocialLinks className="mt-8 text-paper" />
        </div>
        <nav aria-label="Footer">
          <h2 className="text-sm font-medium text-sand">Explore</h2>
          <ul className="mt-5 space-y-3 text-sm">
            {navLinks.map((l) => (
              <li key={l.id}><a href={`#${l.id}`} className="hover:text-paper">{l.label}</a></li>))}
          </ul>
        </nav>
        <div>
          <h2 className="text-sm font-medium text-sand">Visit</h2>
          <address className="mt-5 space-y-1 text-sm not-italic">{site.address.lines.map((l) => <p key={l}>{l}</p>)}<p className="pt-3">{site.hours}</p></address>
        </div>
        <div>
          <h2 className="text-sm font-medium text-sand">Talk to us</h2>
          <ul className="mt-5 space-y-3 text-sm">
            <li><a href={`tel:${site.phoneIntl}`} className="hover:text-paper">{site.phone}</a></li>
            <li><a href={`mailto:${site.email}`} className="break-all hover:text-paper">{site.email}</a></li>
          </ul>
          <QuoteButton variant="light" className="mt-6" />
        </div>
      </div>
      <div className="border-t border-paper/10 px-5 py-6 text-center text-xs text-paper/60 md:px-10">
        © {new Date().getFullYear()} {site.name}, Erode, Tamil Nadu. Established {site.established}.
      </div>
    </footer>
  );
}
