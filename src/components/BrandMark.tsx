// PLACEHOLDER LOGO MARK: replace with official party logo art once available.
export default function BrandMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      <circle cx="32" cy="32" r="30" fill="#0d1b4c" stroke="#c9a827" strokeWidth="2.5" />
      <path
        d="M32 16c0 8-6 12-14 13 8 1 14 5 14 13 0-8 6-12 14-13-8-1-14-5-14-13z"
        fill="#c9a827"
      />
      <circle cx="32" cy="29" r="2.5" fill="#0d1b4c" />
    </svg>
  );
}
