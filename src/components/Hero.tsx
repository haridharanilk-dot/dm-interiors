import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { QuoteButton } from './WhatsAppButton';
import { useRef } from 'react';

// Set to a real photo path (e.g. '/images/hero-living-room.webp') to replace the line drawing.
const HERO_IMAGE: string | undefined = '/images/hero.png';

function RoomDrawing() {
  // Architectural perspective of an interior: back wall, window, sofa and pendant. Drawn once on load (CSS).
  const paths = [
    'M120 120 H1080 V640 H120 Z', 'M0 0 L120 120 M1200 0 L1080 120 M0 800 L120 640 M1200 800 L1080 640',
    'M250 190 H560 V470 H250 Z', 'M405 190 V470 M250 330 H560', 'M700 520 H1000 V640 H700 Z', 'M700 560 H1000',
    'M720 520 V490 H980 V520', 'M880 120 V250', 'M0 800 H1200',
  ];
  return (
    <svg viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice" aria-hidden="true" className="absolute inset-0 h-full w-full">
      <g fill="none" stroke="#AC8968" strokeOpacity=".45" strokeWidth="1.2">
        {paths.map((d, i) => (
          <path key={i} d={d} pathLength={1} className="draw-line" style={{ animationDelay: `${0.3 + i * 0.12}s` }} vectorEffect="non-scaling-stroke" />
        ))}
      </g>
      <path d="M135 135 H1065" pathLength={1} fill="none" stroke="#865D36" strokeWidth="3" className="draw-line" style={{ animationDelay: '1.6s' }} />
      <circle cx="880" cy="285" r="34" fill="none" stroke="#AC8968" strokeWidth="1.4" className="fade-in-late" />
    </svg>
  );
}

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', reduce ? '0%' : '18%']);
  const rise = (d: number) => ({ initial: { opacity: 0, y: 28 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.9, delay: d, ease: [0.22, 1, 0.36, 1] as const } });

  return (
    <section id="home" ref={ref} aria-labelledby="hero-title" className="relative isolate flex min-h-[100svh] items-end overflow-hidden bg-walnut">
      <motion.div style={{ y }} className="absolute inset-0 -z-10">
        <div className="hero-zoom h-full w-full">
          {HERO_IMAGE ? <img src={HERO_IMAGE} alt="Luxury interior designed by DM Interior" className="h-full w-full object-cover" fetchPriority="high" /> : <RoomDrawing />}
        </div>
      </motion.div>
      <div className="absolute inset-x-0 top-0 -z-10 h-40 bg-gradient-to-b from-charcoal/60 to-transparent" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-charcoal/80 via-walnut/30 to-walnut/60" />
      <div className="mx-auto w-full max-w-[1440px] px-5 pb-24 pt-36 md:px-10 md:pb-28">
        <motion.p {...rise(0.2)} className="mb-6 max-w-md text-sm text-sand">Interior &amp; exterior design studio, Erode</motion.p>
        <motion.h1 id="hero-title" {...rise(0.35)} className="max-w-[16ch] font-display text-[clamp(3rem,9.5vw,9rem)] leading-[0.95] tracking-tightest text-paper">
          Spaces that inspire. Living that elevates.
        </motion.h1>
        <div className="mt-10 grid gap-10 md:grid-cols-[1fr_auto] md:items-end">
          <motion.p {...rise(0.55)} className="max-w-xl text-lg leading-relaxed text-paper/80">
            Thoughtfully designed interiors that bring together elegance, functionality and timeless craftsmanship.
          </motion.p>
          <motion.div {...rise(0.7)} className="flex flex-wrap gap-3">
            <a href="#our-works" className="inline-flex min-h-[48px] items-center rounded-full bg-paper px-7 text-sm font-medium text-walnut transition-colors hover:bg-sand">Explore Our Work</a>
            <QuoteButton variant="light" />
          </motion.div>
        </div>
      </div>
      <a href="#about" aria-label="Scroll to introduction" className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-xs text-paper/60 md:flex">
        Scroll<span className="h-10 w-px origin-top animate-pulse bg-paper/50" />
      </a>
    </section>
  );
}
