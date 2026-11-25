import { useEffect, useState } from 'react';
import { SocialLinks } from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import { services } from '../data/content';
import { site, whatsappLink } from '../data/site';

const fields = { name: '', phone: '', email: '', service: '', location: '', details: '' };
type Form = typeof fields;
type Errors = Partial<Record<keyof Form, string>>;

function validate(f: Form): Errors {
  const e: Errors = {};
  if (f.name.trim().length < 2) e.name = 'Enter your full name.';
  const digits = f.phone.replace(/[\s()-]/g, '').replace(/^(\+91|91|0)/, '');
  if (!/^[6-9]\d{9}$/.test(digits)) e.phone = 'Enter a valid 10-digit Indian mobile number.';
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(f.email.trim())) e.email = 'Enter a valid email address.';
  if (!f.service) e.service = 'Choose the service you need.';
  if (f.location.trim().length < 2) e.location = 'Enter the project location.';
  if (f.details.trim().length < 10) e.details = 'Describe your project in at least 10 characters.';
  return e;
}

// const mapsEmbed = import.meta.env.VITE_MAPS_EMBED_URL as string | undefined;
//const mapsSearch = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent('DM Interior, ' + site.address.street + ', Erode, Tamil Nadu')}`;
const inputCls = (bad?: string) => `mt-2 w-full rounded-none border-b bg-transparent py-3 text-base outline-none transition-colors placeholder:text-walnut/40 focus:border-bronze ${bad ? 'border-red-700' : 'border-walnut/40'}`;

export default function Contact() {
  const [f, setF] = useState<Form>(fields);
  const [errors, setErrors] = useState<Errors>({});
  const [opened, setOpened] = useState(false);
  useEffect(() => {
    const onService = (e: Event) => { setF((p) => ({ ...p, service: (e as CustomEvent<string>).detail })); setErrors((p) => ({ ...p, service: undefined })); };
    window.addEventListener('dm:service', onService);
    return () => window.removeEventListener('dm:service', onService);
  }, []);
  const set = (k: keyof Form) => (ev: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => setF((p) => ({ ...p, [k]: ev.target.value }));

  const submit = (ev: React.FormEvent) => {
    ev.preventDefault();
    const found = validate(f);
    setErrors(found);
    setOpened(false);
    if (Object.keys(found).length) { document.getElementById(`f-${Object.keys(found)[0]}`)?.focus(); return; }
    const msg = ['Hello DM Interior, I would like to get a quotation.', '', `Name: ${f.name.trim()}`, `Phone: ${f.phone.trim()}`, `Email: ${f.email.trim()}`,
      `Service: ${f.service}`, `Location: ${f.location.trim()}`, `Project details: ${f.details.trim()}`].join('\n');
    window.open(whatsappLink(msg), '_blank', 'noopener,noreferrer');
    setOpened(true);
  };

  const Err = ({ k }: { k: keyof Form }) => (errors[k] ? <p id={`e-${k}`} role="alert" className="mt-1 text-sm text-red-700">{errors[k]}</p> : null);
  const aria = (k: keyof Form) => ({ id: `f-${k}`, 'aria-invalid': !!errors[k], 'aria-describedby': errors[k] ? `e-${k}` : undefined });

  return (
    <section id="contact" aria-labelledby="contact-title" className="mx-auto max-w-[1440px] px-5 py-24 md:px-10 lg:py-32">
      <h2 id="contact-title" className="font-display text-[clamp(2.2rem,5vw,4.5rem)] leading-none tracking-tightest">Get a quote</h2>
      <div className="mt-14 grid gap-16 lg:grid-cols-[1fr_1.2fr]">
        <div className="space-y-8">
          <address className="space-y-1 text-lg not-italic text-walnut/85">{site.address.lines.map((l) => <p key={l}>{l}</p>)}</address>
          <p className="text-walnut/75">Open {site.hours}</p>
          <p><a href={`tel:${site.phoneIntl}`} className="font-display text-3xl hover:text-bronze">{site.phone}</a></p>
          <p><a href={`mailto:${site.email}`} className="break-all hover:text-bronze">{site.email}</a></p>
          <p className="text-sm text-walnut/75">WhatsApp: <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="underline hover:text-bronze">{site.whatsappDisplay}</a></p>
          <div className="flex flex-wrap items-center gap-6"><WhatsAppButton label="Chat on WhatsApp" variant="outline" /><SocialLinks /></div>
          {/*<div className="aspect-[4/3] w-full overflow-hidden bg-beige/15">
            {mapsEmbed ? <iframe title="DM Interior location on Google Maps" src={mapsEmbed} loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="h-full w-full border-0" />
              : <div className="flex h-full flex-col items-start justify-end gap-3 p-6"><p className="text-walnut">Find us at {site.address.street}, Erode.</p>
                <a href={mapsSearch} target="_blank" rel="noopener noreferrer" className="border-b border-bronze pb-1 text-sm font-medium text-bronze hover:text-walnut">Open in Google Maps<span className="sr-only"> (opens in a new tab)</span></a></div>}
          </div>*/}
        </div>

        <form onSubmit={submit} noValidate className="grid gap-8 sm:grid-cols-2" aria-label="Quote enquiry form">
          <div><label htmlFor="f-name" className="text-sm font-medium">Full name</label><input {...aria('name')} value={f.name} onChange={set('name')} autoComplete="name" className={inputCls(errors.name)} /><Err k="name" /></div>
          <div><label htmlFor="f-phone" className="text-sm font-medium">Phone number</label><input {...aria('phone')} value={f.phone} onChange={set('phone')} type="tel" inputMode="tel" autoComplete="tel" className={inputCls(errors.phone)} /><Err k="phone" /></div>
          <div><label htmlFor="f-email" className="text-sm font-medium">Email</label><input {...aria('email')} value={f.email} onChange={set('email')} type="email" autoComplete="email" className={inputCls(errors.email)} /><Err k="email" /></div>
          <div><label htmlFor="f-service" className="text-sm font-medium">Service required</label>
            <select {...aria('service')} value={f.service} onChange={set('service')} className={inputCls(errors.service)}><option value="">Select a service</option>{services.map((s) => <option key={s.slug}>{s.title}</option>)}</select><Err k="service" /></div>
          <div className="sm:col-span-2"><label htmlFor="f-location" className="text-sm font-medium">Project location</label><input {...aria('location')} value={f.location} onChange={set('location')} autoComplete="address-level2" className={inputCls(errors.location)} /><Err k="location" /></div>
          <div className="sm:col-span-2"><label htmlFor="f-details" className="text-sm font-medium">Project description</label><textarea {...aria('details')} value={f.details} onChange={set('details')} rows={4} className={inputCls(errors.details)} /><Err k="details" /></div>
          <div className="sm:col-span-2">
            <button type="submit" className="inline-flex min-h-[52px] items-center rounded-full bg-bronze px-9 text-sm font-medium text-paper transition-colors hover:bg-walnut">Send enquiry on WhatsApp</button>
            <p className="mt-4 text-sm text-walnut/70" role="status">
              {opened ? 'WhatsApp has opened with your details. Your enquiry reaches us only after you press send there.' : 'This opens WhatsApp with your details filled in. Your enquiry reaches us only when you press send in WhatsApp.'}
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}
