import { Outlet } from 'react-router-dom'

import { SiteFooter } from '@/components/layout/SiteFooter'
import { SiteHeader } from '@/components/layout/SiteHeader'

export function SiteLayout() {
  return (
    <div className="min-h-screen bg-background text-on-surface font-body selection:bg-primary-container/40 selection:text-on-primary">
      <div className="pointer-events-none fixed inset-0 bg-grid-overlay opacity-70" aria-hidden />
      <SiteHeader />
      <main className="relative z-10">
        <Outlet />
      </main>
      <SiteFooter />
    </div>
  )
}
