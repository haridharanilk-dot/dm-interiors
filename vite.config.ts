import { defineConfig, loadEnv, type Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import { site } from './src/data/site';
import { services } from './src/data/content';

// Injects canonical/OG URL, JSON-LD, optional Search Console + Analytics, and builds sitemap.xml/robots.txt.
// Set VITE_SITE_URL (e.g. https://www.yourdomain.com) in .env before the production build.
function seo(env: Record<string, string>): Plugin {
  const url = (env.VITE_SITE_URL || '').replace(/\/$/, '');
  const ld = {
    '@context': 'https://schema.org',
    '@type': 'HomeAndConstructionBusiness',
    name: site.name,
    description: 'Interior design, architecture and exterior design studio in Erode, Tamil Nadu.',
    ...(url && { url, image: `${url}/og-image.png`, logo: `${url}/icon-512.png` }),
    telephone: [site.phoneIntl, `+${site.whatsappNumber}`],
    email: site.email,
    foundingDate: String(site.established),
    founder: site.founders.map((f) => ({ '@type': 'Person', name: f.name, jobTitle: f.role })),
    address: { '@type': 'PostalAddress', streetAddress: site.address.street, addressLocality: site.address.city, addressRegion: site.address.region, addressCountry: site.address.country },
    areaServed: { '@type': 'City', name: 'Erode' },
    sameAs: [site.social.instagram, site.social.facebook],
    hasOfferCatalog: { '@type': 'OfferCatalog', name: 'Interior and exterior design services',
      itemListElement: services.map((s) => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name: s.title, description: s.summary, areaServed: 'Erode, Tamil Nadu' } })) },
  };
  return {
    name: 'dm-seo',
    transformIndexHtml(html) {
      const tags: string[] = [];
      if (url) tags.push(`<link rel="canonical" href="${url}/" />`, `<meta property="og:url" content="${url}/" />`,
        `<meta property="og:image" content="${url}/og-image.png" />`, `<meta name="twitter:image" content="${url}/og-image.png" />`);
      if (env.VITE_GSC_VERIFICATION) tags.push(`<meta name="google-site-verification" content="${env.VITE_GSC_VERIFICATION}" />`);
      tags.push(`<script type="application/ld+json">${JSON.stringify(ld)}</script>`);
      if (env.VITE_GA_ID) tags.push(`<script async src="https://www.googletagmanager.com/gtag/js?id=${env.VITE_GA_ID}"></script>`,
        `<script>window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','${env.VITE_GA_ID}');</script>`);
      return html.replace('<!-- SEO_INJECT -->', tags.join('\n    '));
    },
    generateBundle() {
      this.emitFile({ type: 'asset', fileName: 'robots.txt', source: `User-agent: *\nAllow: /\n${url ? `\nSitemap: ${url}/sitemap.xml\n` : ''}` });
      if (url) this.emitFile({ type: 'asset', fileName: 'sitemap.xml',
        source: `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n  <url><loc>${url}/</loc><changefreq>monthly</changefreq><priority>1.0</priority></url>\n</urlset>\n` });
    },
  };
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), 'VITE_');
  return {
    base: '/',
    plugins: [react(), seo(env)],
    build: { target: 'es2020', rollupOptions: { output: { manualChunks: { react: ['react', 'react-dom'], motion: ['framer-motion'] } } } },
  };
});
