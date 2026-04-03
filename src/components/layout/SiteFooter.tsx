import { Link } from 'react-router-dom'

const footerLinks = [
  { label: 'SOURCE_CODE', href: 'http://github.com/riggy420', external: true },
  { label: 'CONTACT', href: 'mailto:riggyatwork@gmail.com', external: true },
  { label: 'LEETCODE', href: 'https://leetcode.com/riggy420/', external: true },
  { label: 'STATUS', href: '#', external: true },
]

export function SiteFooter() {
  return (
    <footer className="relative z-10 border-t border-outline-variant/15 bg-surface-container-lowest/70">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-4 px-6 py-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-sm text-primary">terminal</span>
            <span className="font-headline text-sm font-bold uppercase tracking-tight text-primary">ARCHITECT_RICKY</span>
          </div>

          <nav className="flex flex-wrap items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-outline md:text-xs">
            {footerLinks.map((item, index) => (
              <div key={item.label} className="flex items-center gap-2">
                {item.external ? (
                  <a className="transition-colors hover:text-primary" href={item.href}>
                    {item.label}
                  </a>
                ) : (
                  <Link className="transition-colors hover:text-primary" to={item.href}>
                    {item.label}
                  </Link>
                )}
                {index < footerLinks.length - 1 ? <span className="text-outline-variant">//</span> : null}
              </div>
            ))}
          </nav>
        </div>

        <div className="h-px w-full bg-outline-variant/20" />

        <div className="flex flex-col justify-between gap-2 font-mono text-[10px] uppercase tracking-[0.16em] text-outline md:flex-row md:items-center">
          <span>© 2026 DIGITAL_ARCHITECT // ALL RIGHTS RESERVED</span>
          <span className="text-outline-variant">SYSTEM_READY // BUILD_4.0.2</span>
        </div>
      </div>
    </footer>
  )
}
