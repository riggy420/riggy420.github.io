import { NavLink } from 'react-router-dom'

import { navItems } from '@/data/portfolio'

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-outline-variant/15 bg-surface/85 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-3">
          <span className="material-symbols-outlined text-primary">terminal</span>
          <span className="font-headline text-xl font-black uppercase tracking-tight text-primary">ARCHITECT_RICKY</span>
        </div>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.href}
              className={({ isActive }) =>
                [
                  'font-mono text-sm uppercase transition-all',
                  isActive
                    ? 'border-l-2 border-primary pl-2 text-primary'
                    : 'text-outline hover:text-primary hover:drop-shadow-glow',
                ].join(' ')
              }
              to={item.href}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <a
          className="bg-gradient-primary px-5 py-2 font-mono text-xs font-bold tracking-widest text-on-primary transition-all hover:drop-shadow-glow"
          href="mailto:riggyatwork@gmail.com"
        >
          {'>'} CONTACT
        </a>
      </div>
    </header>
  )
}
