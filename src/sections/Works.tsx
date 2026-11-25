import { useEffect, useMemo, useRef, useState } from 'react';
import ImageSlot from '../components/ImageSlot';
import { categories, projects } from '../data/projects';

export default function Works() {
  const [filter, setFilter] = useState<string>('All');
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const shown = useMemo(() => (filter === 'All' ? projects : projects.filter((p) => p.category === filter)), [filter]);
  const chips = useMemo(() => ['All', ...categories.filter((c) => projects.some((p) => p.category === c))], []);
  const current = openIdx !== null ? shown[openIdx] : null;

  useEffect(() => {
    if (openIdx === null) return;
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpenIdx(null);
      if (e.key === 'ArrowRight') setOpenIdx((i) => (i === null ? i : (i + 1) % shown.length));
      if (e.key === 'ArrowLeft') setOpenIdx((i) => (i === null ? i : (i - 1 + shown.length) % shown.length));
    };
    window.addEventListener('keydown', onKey);
    return () => { window.removeEventListener('keydown', onKey); document.body.style.overflow = ''; };
  }, [openIdx, shown.length]);

  return (
    <section id="our-works" aria-labelledby="works-title" className="mx-auto max-w-[1440px] px-5 py-24 md:px-10 lg:py-36">
      <h2 id="works-title" className="font-display text-[clamp(2.2rem,5vw,4.5rem)] leading-none tracking-tightest">Our works</h2>
      <p className="mt-4 max-w-xl text-walnut/75">Design inspiration shown while we prepare our project photography. Completed DM Interior projects will replace these images.</p>

      <div role="group" aria-label="Filter projects by category" className="mt-10 flex flex-wrap gap-2">
        {chips.map((c) => (
          <button key={c} type="button" aria-pressed={filter === c} onClick={() => { setFilter(c); setOpenIdx(null); }}
            className={`min-h-[44px] rounded-full border px-5 text-sm transition-colors ${filter === c ? 'border-walnut bg-walnut text-paper' : 'border-walnut/30 hover:border-walnut'}`}>{c}</button>
        ))}
      </div>

      <ul className="mt-10 columns-1 gap-4 sm:columns-2 lg:columns-3">
        {shown.map((p, i) => (
          <li key={p.id} className="mb-4 break-inside-avoid">
            <button type="button" onClick={() => setOpenIdx(i)} className="group relative block w-full overflow-hidden text-left">
              <div className={`${p.ratio} transition-transform duration-700 group-hover:scale-105`}><ImageSlot src={p.image} alt={p.alt} label={p.demo ? 'Design inspiration (demo)' : p.title} /></div>
              <span className="absolute inset-x-0 bottom-0 translate-y-full bg-walnut/90 p-4 text-sm text-paper transition-transform duration-500 group-hover:translate-y-0 group-focus-visible:translate-y-0">
                {p.title}<span className="block text-xs text-sand">{p.category}</span>
              </span>
            </button>
          </li>
        ))}
      </ul>

      {current && (
        <div role="dialog" aria-modal="true" aria-label={current.title} className="fixed inset-0 z-[70] flex flex-col bg-charcoal/95 p-4 md:p-10" onClick={() => setOpenIdx(null)}>
          <div className="flex items-center justify-between text-paper" onClick={(e) => e.stopPropagation()}>
            <p><span className="font-display text-2xl">{current.title}</span><span className="ml-3 text-sm text-sand">{current.category}</span></p>
            <button ref={closeRef} type="button" onClick={() => setOpenIdx(null)} className="min-h-[44px] rounded-full border border-paper/40 px-5 text-sm hover:bg-paper hover:text-walnut">Close</button>
          </div>
          <div className="mx-auto my-4 min-h-0 w-full max-w-5xl flex-1" onClick={(e) => e.stopPropagation()}>
            <ImageSlot src={current.image} alt={current.alt} label={current.demo ? 'Design inspiration (demo)' : current.title} className="object-contain" />
          </div>
          <div className="flex justify-center gap-3 text-paper" onClick={(e) => e.stopPropagation()}>
            <button type="button" onClick={() => setOpenIdx((openIdx! - 1 + shown.length) % shown.length)} className="min-h-[44px] rounded-full border border-paper/40 px-5 text-sm hover:bg-paper hover:text-walnut">Previous</button>
            <button type="button" onClick={() => setOpenIdx((openIdx! + 1) % shown.length)} className="min-h-[44px] rounded-full border border-paper/40 px-5 text-sm hover:bg-paper hover:text-walnut">Next</button>
          </div>
        </div>
      )}
    </section>
  );
}
