export default function NotFound() {
  return (
    <main
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '4rem 2rem',
        maxWidth: '36rem',
        margin: '0 auto',
      }}
    >
      <p
        style={{
          fontFamily: 'var(--font-mono), ui-monospace, monospace',
          fontSize: '11px',
          textTransform: 'uppercase',
          letterSpacing: '0.18em',
          color: 'var(--muted)',
          marginBottom: '1.5rem',
        }}
      >
        404
      </p>

      <h1
        style={{
          fontFamily: 'var(--font-serif), ui-serif, Georgia, serif',
          fontSize: 'clamp(1.875rem, 3.4vw, 2.25rem)',
          lineHeight: 1.18,
          letterSpacing: '-0.012em',
          color: 'var(--ink)',
          fontWeight: 400,
          marginBottom: '1.5rem',
        }}
      >
        This page is also out of my system.
      </h1>

      <p
        style={{
          fontSize: '1.0625rem',
          lineHeight: 1.7,
          color: 'var(--muted)',
          marginBottom: '2.5rem',
        }}
      >
        Whatever you were looking for, it&rsquo;s not here. Might have moved,
        might have never existed — hard to say.{' '}
        <em style={{ fontStyle: 'normal' }}>
          (I&rsquo;m investigating.)
        </em>
      </p>

      <a
        href="/"
        style={{
          fontFamily: 'var(--font-mono), ui-monospace, monospace',
          fontSize: '11px',
          textTransform: 'uppercase',
          letterSpacing: '0.16em',
          color: 'var(--sage-dark)',
          textDecoration: 'none',
        }}
      >
        ← Back to the actual site
      </a>
    </main>
  )
}
