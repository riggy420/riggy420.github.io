import { milestones, persistence, stackGroups } from '@/data/about'
import { SectionTitle } from '@/components/ui/SectionTitle'

export function AboutPage() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-12">
          <div className="space-y-10 md:col-span-8">
            <div className="space-y-4">
              <span className="font-mono text-sm uppercase tracking-widest text-tertiary">&gt; INITIALIZING_STORY</span>
              <h1 className="font-headline text-5xl font-bold leading-tight tracking-tight md:text-7xl">
                SYSTEM THINKER.
                <br />
                PIXEL CRAFTER.
              </h1>
            </div>

            <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
              <div className="space-y-6">
                <p className="text-body-md leading-relaxed text-on-surface-variant">
                  I design and ship software architecture that holds under pressure, from distributed backends to high-fidelity frontend systems.
                </p>
                <p className="text-body-md leading-relaxed text-on-surface-variant">
                  My workflow blends engineering rigor with visual precision so products remain coherent from first prototype to production scale.
                </p>
              </div>

              <div className="space-y-6 border-l border-outline-variant/30 pl-8">
                <div className="space-y-2">
                  <h3 className="font-mono text-xs uppercase text-primary">CURRENT_COORDINATES</h3>
                  <p className="font-mono text-sm text-on-surface-variant">22.332825° N, 114.267586° W Hong Kong</p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-mono text-xs uppercase text-primary">PRIMARY_FOCUS</h3>
                  <p className="font-mono text-sm text-on-surface-variant">System Architecture &amp; Robust Backend</p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-mono text-xs uppercase text-primary">OPERATING_SINCE</h3>
                  <p className="font-mono text-sm text-on-surface-variant">2026.03.12</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative md:col-span-4">
            <div className="relative aspect-[3/4] overflow-hidden border border-outline-variant/20 bg-surface-container-lowest">
              <div className="absolute inset-0 bg-gradient-to-b from-primary/20 via-transparent to-background" />
              <div className="absolute bottom-4 left-4 font-mono text-[10px] text-primary/60">SYSTEM_IMAGE_01.RAW</div>
            </div>
            <div className="absolute -right-4 -top-4 h-24 w-24 border-r border-t border-primary/40" />
          </div>
        </div>
      </section>

      <section className="bg-surface-container-low px-6 py-20">
        <div className="mx-auto max-w-7xl space-y-12">
          <div className="flex items-end justify-between">
            <SectionTitle title="Technological Stack" subtitle="Validated toolset for mission-critical deployments" />
            <span className="font-mono text-sm text-primary">v2.4.0_STABLE</span>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-4 md:grid-rows-2">
            {stackGroups.map((group, index) => (
              <div
                key={group.id}
                className={[
                  'border border-outline-variant/15 p-8 transition-colors hover:border-primary/40',
                  index === 0 ? 'md:col-span-2 bg-surface-container' : '',
                  group.highlight ? 'bg-surface-container-high' : 'bg-surface-container-lowest',
                ].join(' ')}
              >
                <div className="mb-12 flex items-start justify-between">
                  <span className="material-symbols-outlined text-3xl text-primary">{group.icon}</span>
                  <span className="font-mono text-[10px] text-outline">{group.id}</span>
                </div>
                <h3 className="mb-3 font-headline text-lg font-bold">{group.title}</h3>
                <p className="text-sm leading-relaxed text-on-surface-variant">{group.description}</p>
              </div>
            ))}

            <div className="bg-surface-container-highest p-8 md:col-span-1">
              <h3 className="mb-2 font-headline text-lg font-bold uppercase tracking-tight">Persistence</h3>
              <ul className="space-y-2 font-mono text-[11px] text-primary">
                {persistence.map((item) => (
                  <li key={item}>+ {item}</li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col items-center justify-between gap-8 border border-outline-variant/15 bg-surface p-8 md:col-span-3 md:flex-row">
              <div className="max-w-md space-y-4">
                <h3 className="font-headline text-xl font-bold">Hardware Integrity</h3>
                <p className="text-sm leading-relaxed text-on-surface-variant">
                  Optimization across the stack, from low-level firmware constraints to browser rendering and delivery efficiency.
                </p>
              </div>
              <div className="h-32 w-full border border-outline-variant/20 bg-surface-container-lowest md:w-64" />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl overflow-hidden px-6 py-24">
        <div className="mb-16">
          <SectionTitle title="Milestones" />
          <div className="mt-4 h-1 w-24 bg-primary" />
        </div>

        <div className="grid grid-cols-1 gap-16 md:grid-cols-3">
          {milestones.map((milestone, index) => (
            <div key={milestone.period} className={['relative space-y-6 pt-8', index === 1 ? 'md:mt-24' : ''].join(' ')}>
              <div className="absolute left-0 top-0 h-px w-8 bg-primary" />
              <span className="font-mono text-sm text-tertiary">{milestone.period}</span>
              <h3 className="font-headline text-2xl font-bold text-on-surface">{milestone.role}</h3>
              <p className="text-body-md text-on-surface-variant">{milestone.summary}</p>
              <div className="flex gap-2">
                {milestone.tags.map((tag) => (
                  <span key={tag} className="bg-surface-container px-2 py-1 font-mono text-[10px] text-primary">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="relative flex flex-col items-center space-y-8 overflow-hidden border border-outline-variant/10 bg-surface-container-high p-12 text-center md:p-20">
          <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-primary via-primary-container to-primary" />
          <h2 className="font-headline text-3xl font-bold tracking-tight md:text-5xl">READY_TO_COLLABORATE OR INTERESTED?</h2>
          <p className="max-w-2xl text-on-surface-variant">
            Let&apos;s design robust systems and high-precision interfaces that are ready for real users and real scale.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-center">
            <a
              className="bg-gradient-primary px-8 py-3 font-mono text-xs font-bold uppercase tracking-[0.18em] text-on-primary transition-all hover:drop-shadow-glow"
              href="mailto:riggyatwork@gmail.com"
            >
              {'>'} OPEN_CHANNEL
            </a>
            <a
              className="border border-primary px-8 py-3 font-mono text-xs font-bold uppercase tracking-[0.18em] text-primary transition-all hover:bg-primary/10 hover:drop-shadow-glow"
              href="/cv.pdf"
              download
            >
              {'↓'} DOWNLOAD_CV
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
