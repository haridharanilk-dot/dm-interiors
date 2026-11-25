interface Props { src?: string; alt: string; className?: string; label?: string; priority?: boolean }

/** Shows a real image when `src` is set; otherwise a neutral placeholder so layouts never break. */
export default function ImageSlot({ src, alt, className = '', label = 'Design inspiration image', priority = false }: Props) {
  if (src) {
    return <img src={src} alt={alt} loading={priority ? 'eager' : 'lazy'} decoding="async" className={`h-full w-full object-cover ${className}`} />;
  }
  return (
    <div role="img" aria-label={alt} className={`relative flex h-full w-full items-end overflow-hidden bg-beige/40 ${className}`}>
      <svg className="absolute inset-0 h-full w-full text-taupe/30" aria-hidden="true" preserveAspectRatio="none" viewBox="0 0 100 100">
        <path d="M0 78 L100 62 M0 22 L100 38 M30 0 L30 100 M70 0 L70 100" stroke="currentColor" strokeWidth=".3" fill="none" vectorEffect="non-scaling-stroke" />
      </svg>
      <span className="relative m-3 rounded-sm bg-paper/80 px-2 py-1 text-xs text-walnut/70">{label}</span>
    </div>
  );
}
