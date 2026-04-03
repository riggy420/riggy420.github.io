type SectionTitleProps = {
  title: string
  subtitle?: string
}

export function SectionTitle({ title, subtitle }: SectionTitleProps) {
  return (
    <div className="space-y-2">
      <h2 className="font-headline text-3xl font-bold uppercase tracking-tight md:text-4xl">{title}</h2>
      {subtitle ? <p className="font-mono text-xs uppercase tracking-[0.2em] text-outline">{subtitle}</p> : null}
    </div>
  )
}
