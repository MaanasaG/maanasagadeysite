type Props = { children: React.ReactNode }

export function SectionLabel({ children }: Props) {
  return (
    <div className="mb-10 flex items-center gap-3">
      <span className="rule" aria-hidden="true" />
      <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
        {children}
      </span>
    </div>
  )
}
