import { QuoteButton } from '../components/WhatsAppButton';
import { processSteps, reasons } from '../data/content';

export default function WhyProcessCta() {
  return (
    <>
      <section aria-labelledby="why-title" className="bg-walnut py-24 text-paper lg:py-32">
        <div className="mx-auto grid max-w-[1440px] gap-16 px-5 md:px-10 lg:grid-cols-[1fr_1.5fr]">
          <h2 id="why-title" className="font-display text-[clamp(2.2rem,5vw,4.5rem)] leading-none tracking-tightest">Why choose DM Interior</h2>
          <dl className="grid gap-x-12 gap-y-10 sm:grid-cols-2">
            {reasons.map((r) => (
              <div key={r.title} className="border-t border-paper/25 pt-5"><dt className="font-display text-2xl">{r.title}</dt><dd className="mt-3 leading-relaxed text-paper/75">{r.text}</dd></div>
            ))}
          </dl>
        </div>
      </section>
      <section id="process" aria-labelledby="process-title" className="mx-auto max-w-[1440px] px-5 py-24 md:px-10 lg:py-36">
        <h2 id="process-title" className="font-display text-[clamp(2.2rem,5vw,4.5rem)] leading-none tracking-tightest">How we work</h2>
        <ol className="mt-14 grid gap-px bg-walnut/20 md:grid-cols-5">
          {processSteps.map((s, i) => (
            <li key={s.title} className="bg-ivory p-6 md:pr-8"><span className="font-display text-5xl text-sand">{i + 1}</span><h3 className="mt-4 text-lg font-medium">{s.title}</h3><p className="mt-2 text-sm leading-relaxed text-walnut/75">{s.text}</p></li>
          ))}
        </ol>
      </section>
      <section aria-labelledby="cta-title" className="bg-bronze px-5 py-24 text-center text-paper md:px-10 lg:py-32">
        <h2 id="cta-title" className="mx-auto max-w-4xl font-display text-[clamp(2.4rem,6vw,5.5rem)] leading-[1] tracking-tightest">Your dream space, our perfect design.</h2>
        <p className="mx-auto mt-6 max-w-xl text-paper/85">Fill in the short enquiry form and we will take it from there on WhatsApp.</p>
        <div className="mt-10 flex justify-center"><QuoteButton variant="light" label="Get a Quote" /></div>
      </section>
    </>
  );
}
