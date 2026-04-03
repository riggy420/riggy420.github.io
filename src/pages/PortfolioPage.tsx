import { capabilities, projectFilters, projects } from '@/data/portfolio'
import { SectionTitle } from '@/components/ui/SectionTitle'

export function PortfolioPage() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-6 pb-16 pt-24">
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <span className="h-px w-12 bg-primary" />
            <span className="font-mono text-xs tracking-[0.3em] text-primary">STATUS: ONLINE // VER_4.0.2</span>
          </div>
          <h1 className="font-headline text-6xl font-black uppercase leading-none tracking-tight md:text-8xl">
            DIGITAL
            <br />
            ARCHITECT
          </h1>
          <p className="max-w-2xl text-lg leading-relaxed text-on-surface-variant">
            Building resilient platforms, high-fidelity interfaces, and deployment pipelines engineered for long-term scale.
          </p>
        </div>
      </section>

      <section className="mx-auto mb-12 max-w-7xl px-6">
        <div className="flex flex-wrap items-center gap-4 border-b border-outline-variant/20 pb-6">
          <span className="mr-4 font-mono text-xs uppercase tracking-widest text-outline">[FILTER_MODULE]:</span>
          {projectFilters.map((filter, index) => (
            <button
              key={filter}
              className={[
                'border px-4 py-1 font-mono text-xs transition-colors',
                index === 0
                  ? 'border-primary text-primary hover:bg-primary/10'
                  : 'border-outline-variant/30 text-outline hover:border-primary hover:text-primary',
              ].join(' ')}
              type="button"
            >
              {filter}
            </button>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="grid grid-cols-1 gap-px border border-outline-variant/20 bg-outline-variant/20 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.id}
              className="group flex h-full flex-col border border-transparent bg-surface p-8 transition-colors hover:border-primary/30 hover:bg-surface-container-high"
            >
              <div className="mb-10 flex items-start justify-between">
                <span className="font-mono text-xs text-primary">[{project.id}]</span>
                <span className="material-symbols-outlined text-outline transition-colors group-hover:text-primary">
                  {project.icon}
                </span>
              </div>

              <div className="mb-6 aspect-video border border-outline-variant/20 bg-surface-container-lowest" />
              <h3 className="mb-4 font-headline text-2xl font-bold uppercase tracking-tight">{project.title}</h3>
              <p className="mb-8 flex-grow text-sm text-on-surface-variant">{project.description}</p>

              <div className="mb-8 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="bg-surface-container-low px-2 py-1 font-mono text-[10px] text-tertiary">
                    {tag}
                  </span>
                ))}
              </div>

              <button className="w-full border border-outline-variant/30 py-3 font-mono text-xs uppercase tracking-widest transition-all group-hover:border-primary group-hover:text-primary">
                OPEN_PROJECT
              </button>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-40">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="flex flex-col gap-8 lg:col-span-4">
            <SectionTitle title="System Capabilities" />
            <div className="border-l-4 border-primary bg-surface-container-low p-6">
              <p className="font-mono text-xs leading-relaxed text-primary-container">
                Mission-ready engineering profile focused on architecture, UI systems, and long-horizon maintainability.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:col-span-8">
            {capabilities.map((capability) => (
              <div key={capability.id} className="flex flex-col gap-4">
                <span className="font-mono text-[10px] uppercase tracking-widest text-primary">
                  {capability.id} / {capability.title}
                </span>
                <p className="text-sm leading-relaxed text-on-surface">{capability.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
