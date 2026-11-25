import ImageSlot from '../components/ImageSlot';
import { QuoteButton } from '../components/WhatsAppButton';
import { services } from '../data/content';

export default function Services() {
  return (
    <section id="services" aria-labelledby="services-title" className="bg-paper py-24 lg:py-32">
      <div className="mx-auto max-w-[1440px] px-5 md:px-10">
        <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
          <h2 id="services-title" className="font-display text-[clamp(2.2rem,5vw,4.5rem)] leading-none tracking-tightest lg:col-span-7">Our services</h2>
          <p className="max-w-md text-lg text-walnut/80 lg:col-span-5">We transform your spaces into beautiful, stylish and functional interiors.</p>
        </div>
        <ul className="mt-16 grid gap-x-6 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <li key={s.slug} id={s.slug} className={`group ${i % 3 === 1 ? 'lg:mt-14' : ''}`}>
              <div className="overflow-hidden"><div className="aspect-[4/3] transition-transform duration-700 group-hover:scale-105"><ImageSlot src={s.image} alt={s.imageAlt} label="Image placeholder" /></div></div>
              <h3 className="mt-5 font-display text-3xl tracking-tight">{s.title}</h3>
              <p className="mt-2 text-walnut/80">{s.summary}</p>
              <ul className="mt-4 space-y-1 border-t border-walnut/15 pt-4 text-sm text-walnut/70">{s.points.map((p) => <li key={p}>{p}</li>)}</ul>
              <QuoteButton variant="outline" label="Enquire" className="mt-6 !min-h-[44px]" service={s.title} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
