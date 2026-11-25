import { site } from '../data/site';

export default function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="mx-auto max-w-[1440px] px-5 py-28 md:px-10 lg:py-40">
      <div className="grid gap-12 lg:grid-cols-12">
        <h2 id="about-title" className="font-display text-[clamp(2.2rem,5vw,4.5rem)] leading-[1.02] tracking-tightest lg:col-span-7">
          Experience the art of living.
        </h2>
        <div className="lg:col-span-5 lg:pt-4">
          <p className="text-lg leading-relaxed text-walnut/85">
            DM Interior was established in {site.established} with a vision to transform ordinary spaces into extraordinary living experiences. We combine thoughtful planning, contemporary aesthetics and functional design to create interiors that reflect each client&rsquo;s lifestyle.
          </p>
        </div>
      </div>
      <div className="mt-20 grid gap-10 border-t border-walnut/20 pt-12 md:grid-cols-3">
        <div>
          <h3 className="font-display text-2xl">Our story</h3>
          <p className="mt-3 leading-relaxed text-walnut/75">Based in Erode, Tamil Nadu, DM Interior is an interior designer for homes, villas, apartments and offices, from modular kitchens, bedrooms and living rooms to house elevations and exterior design.</p>
        </div>
        <div>
          <h3 className="font-display text-2xl">Design philosophy</h3>
          <p className="mt-3 leading-relaxed text-walnut/75">Elegant, functional and contemporary spaces, shaped by thoughtful planning, architectural detailing and customised solutions.</p>
        </div>
        <div>
          <h3 className="font-display text-2xl">Commitment to quality</h3>
          <p className="mt-3 leading-relaxed text-walnut/75">Careful material choices and precise detailing, so each space looks refined and works well every day.</p>
        </div>
      </div>
      <div className="mt-14 flex flex-wrap gap-x-16 gap-y-6">
        {site.founders.map((f) => (
          <div key={f.name}><p className="font-display text-3xl">{f.name}</p><p className="text-sm text-bronze">{f.role}</p></div>
        ))}
      </div>
    </section>
  );
}
