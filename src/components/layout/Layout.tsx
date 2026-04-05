import { type ReactNode } from 'react'
import Header from './Header'
import Footer from './Footer'

type Props = {
  children: ReactNode
}

export default function Layout({ children }: Props) {
  return (
    <div className="min-h-screen bg-white relative overflow-x-hidden">

      {/* AppGradient.background: blue.opacity(0.12) → systemBackground → blue.opacity(0.06) */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: [
            'radial-gradient(ellipse 70% 60% at 0% 0%, rgba(59,130,246,0.10) 0%, transparent 55%)',
            'radial-gradient(ellipse 60% 50% at 100% 100%, rgba(59,130,246,0.06) 0%, transparent 55%)',
          ].join(', '),
        }}
      />

      <Header />

      <main className="relative mx-auto max-w-3xl px-4 py-10">
        {/* appGlassCardStyle: ultraThinMaterial + glassBorder + glassCard shadow */}
        <div
          className="relative backdrop-blur-md bg-white/85 rounded-[20px] px-8 py-10"
          style={{ boxShadow: '0 10px 20px rgba(0,0,0,0.07)' }}
        >
          {/* glassBorder: white 0.6 → white 0.2 */}
          <div
            className="absolute inset-0 rounded-[20px] pointer-events-none"
            style={{
              background: 'linear-gradient(135deg, rgba(255,255,255,0.8), rgba(255,255,255,0.3))',
              WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
              WebkitMaskComposite: 'destination-out',
              maskComposite: 'exclude',
              padding: '1px',
              borderRadius: '20px',
            }}
          />
          <div className="relative">{children}</div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
