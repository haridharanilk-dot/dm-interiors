import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { QuoteButton } from './WhatsAppButton';

export const navLinks = [
  { id: 'home', label: 'Home' }, { id: 'about', label: 'About' }, { id: 'services', label: 'Services' },
  { id: 'our-works', label: 'Our Works' }, { id: 'contact', label: 'Contact' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('home');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' },
    );
    navLinks.forEach((l) => { const el = document.getElementById(l.id); if (el) io.observe(el); });
    return () => { window.removeEventListener('scroll', onScroll); io.disconnect(); };
  }, []);
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => { window.removeEventListener('keydown', onKey); document.body.style.overflow = ''; };
  }, [open]);

  return (
    <>
    <header className={`fixed inset-x-0 top-0 z-50 pt-[env(safe-area-inset-top)] transition-all duration-500 ${
      scrolled || open ? 'bg-walnut/95 shadow-[0_1px_0_rgba(247,244,239,.12)] backdrop-blur-md' : 'bg-transparent'}`}>
      <div className="mx-auto flex h-20 max-w-[1440px] items-center justify-between px-5 md:px-10">
        <a href="#home" aria-label="DM Interior – back to top"><img src="/brand/dm-interior-logo-light.png" alt="DM Interior" width={192} height={171} className="h-12 w-auto md:h-14" /></a>
        <nav aria-label="Primary" className="hidden items-center gap-9 lg:flex">
          {navLinks.map((l) => (
            <a key={l.id} href={`#${l.id}`} aria-current={active === l.id ? 'true' : undefined}
              className={`relative py-2 text-sm tracking-wide transition-colors after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:origin-left after:bg-sand after:transition-transform after:duration-300 ${
                active === l.id ? 'text-paper after:scale-x-100' : 'text-paper/75 after:scale-x-0 hover:text-paper hover:after:scale-x-100'}`}>{l.label}</a>
          ))}
          <QuoteButton variant="light" className="!min-h-[42px] !px-5" />
        </nav>
        <button type="button" onClick={() => setOpen((o) => !o)} aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? 'Close menu' : 'Open menu'}
          className="flex h-12 w-12 flex-col items-center justify-center gap-[6px] rounded-full border border-paper/40 bg-walnut/70 backdrop-blur-sm lg:hidden">
          <span className={`h-0.5 w-6 bg-paper transition-transform duration-300 ${open ? 'translate-y-[4px] rotate-45' : ''}`} />
          <span className={`h-0.5 w-6 bg-paper transition-transform duration-300 ${open ? '-translate-y-[4px] -rotate-45' : ''}`} />
        </button>
      </div>
    </header>
      <AnimatePresence>
        {open && (
          <motion.div id="mobile-menu" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 overflow-y-auto overscroll-contain bg-walnut px-5 pb-10 pt-[calc(5rem+env(safe-area-inset-top))] lg:hidden">
            <nav aria-label="Mobile" className="flex flex-col pt-6">
              {navLinks.map((l) => (
                <a key={l.id} href={`#${l.id}`} onClick={() => setOpen(false)}
                  className={`border-b border-paper/10 py-5 font-display text-4xl [@media(max-height:520px)]:py-3 [@media(max-height:520px)]:text-3xl ${active === l.id ? 'text-sand' : 'text-paper'}`}>{l.label}</a>
              ))}
              <QuoteButton className="mt-8 w-full" onClick={() => setOpen(false)} />
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
