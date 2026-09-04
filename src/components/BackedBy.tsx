import type { ReactNode } from 'react'

/**
 * Investor strip. Every mark is drawn inline as SVG so the row stays crisp,
 * monochrome and dependency-free.
 */
type Backer = {
  name: string
  mark: ReactNode
  lines: string[]
  /** smaller line rendered under the wordmark */
  sub?: string
  /** wordmark styling variant */
  variant?: 'single' | 'stack'
}

const Hash3Mark = (
  <svg viewBox="0 0 24 24" className="size-6" fill="currentColor">
    <path d="M6.6 3h3.1L6.4 10.9H3.3L6.6 3Zm5.2 0h3.1l-3.3 7.9H8.5L11.8 3ZM4.9 13.1H8L4.7 21H1.6l3.3-7.9Zm5.2 0h3.1L9.9 21H6.8l3.3-7.9Z" />
    <path d="M17.4 3.4c2.4 0 4.1 1.2 4.1 3 0 1.2-.7 2.1-1.8 2.5 1.3.4 2.1 1.4 2.1 2.8 0 2-1.8 3.3-4.4 3.3-1.6 0-3-.5-3.9-1.3l1.2-1.9c.7.6 1.6 1 2.6 1 1.1 0 1.8-.5 1.8-1.3s-.7-1.2-1.9-1.2h-1.1V8.5h1c1.1 0 1.7-.4 1.7-1.2 0-.7-.6-1.1-1.5-1.1-.9 0-1.7.3-2.4.9l-1.1-1.9c1-.6 2.2-.8 3.6-.8Z" />
  </svg>
)

const BrainMark = (
  <svg viewBox="0 0 24 24" className="size-6" fill="none" stroke="currentColor">
    <circle cx="12" cy="12" r="9.2" strokeWidth="1.4" />
    <path
      strokeWidth="1.1"
      strokeLinecap="round"
      d="M12 3.2v17.6M8.4 4.1c-1.4 2.3-1.4 5.1 0 7.4s1.4 5.1 0 7.4M15.6 4.1c1.4 2.3 1.4 5.1 0 7.4s-1.4 5.1 0 7.4M3.3 9.6h17.4M3.3 14.4h17.4M5.4 6.2c2.2 1.3 4.4 1.3 6.6 0M12 17.8c2.2-1.3 4.4-1.3 6.6 0"
    />
  </svg>
)

const CogitentMark = (
  <svg viewBox="0 0 24 24" className="size-6" fill="currentColor">
    <path d="M2.4 4.6h2.4l2 9.1-1.1 5.7-3.3-14.8Zm4.6 0h2.4l1.6 9.6-1.2 5.2L7 4.6Zm4.8 0h2.4l1.1 10.2-1.4 4.6-2.1-14.8Zm4.9 0h2.4l.4 10.6-1.6 4.2-1.2-14.8Zm4.9 0h2.3l-.3 10.9-1.5 3.9-.5-14.8Z" />
  </svg>
)

const SyndicateMark = (
  <svg viewBox="0 0 24 24" className="size-6" fill="none" stroke="currentColor">
    <circle cx="12" cy="12" r="9.4" strokeWidth="1.3" />
  </svg>
)

const StakeholderMark = (
  <svg viewBox="0 0 24 24" className="size-6" fill="currentColor">
    <rect x="2.4" y="2.4" width="8.2" height="8.2" rx="1" />
    <rect x="13.4" y="2.4" width="8.2" height="8.2" rx="1" opacity="0.55" />
    <rect x="2.4" y="13.4" width="8.2" height="8.2" rx="1" opacity="0.55" />
    <rect x="13.4" y="13.4" width="8.2" height="8.2" rx="1" />
  </svg>
)

const WormholeMark = (
  <svg viewBox="0 0 24 24" className="size-6" fill="none" stroke="currentColor">
    <circle cx="12" cy="12" r="9.4" strokeWidth="1.3" />
    <ellipse cx="12" cy="12" rx="5.6" ry="9.1" strokeWidth="1.1" opacity="0.8" />
    <circle cx="12" cy="12" r="2.4" strokeWidth="1.3" />
  </svg>
)

const ArringtonMark = (
  <svg viewBox="0 0 24 24" className="size-6" fill="currentColor">
    <path d="M12 2.6 22 21.4h-3.6L12 9.2 5.6 21.4H2L12 2.6Z" />
  </svg>
)

const BACKERS: Backer[] = [
  { name: 'Hash3', mark: Hash3Mark, lines: ['Hash3'], variant: 'single' },
  {
    name: 'Big Brain Holdings',
    mark: BrainMark,
    lines: ['BIG BRAIN', 'HOLDINGS'],
  },
  {
    name: 'Arrington Capital',
    mark: ArringtonMark,
    lines: ['arrington'],
    sub: 'C A P I T A L',
    variant: 'single',
  },
  {
    name: 'Cogitent Ventures',
    mark: CogitentMark,
    lines: ['COGITENT', 'VENTURES'],
  },
  {
    name: 'Syndicate',
    mark: SyndicateMark,
    lines: ['Syndicate'],
    sub: 'by BOOGLE',
    variant: 'single',
  },
  {
    name: 'Stakeholder Ventures',
    mark: StakeholderMark,
    lines: ['STAKEHOLDER', 'VENTURES'],
  },
  {
    name: 'Wormhole Cross-Chain Ecosystem Fund',
    mark: WormholeMark,
    lines: ['WORMHOLE'],
    sub: 'CROSS-CHAIN ECOSYSTEM FUND',
    variant: 'single',
  },
]

function Logo({ backer }: { backer: Backer }) {
  return (
    <div
      className="flex shrink-0 items-center gap-2.5 text-white/85 transition-colors duration-300 hover:text-white"
      title={backer.name}
    >
      {backer.mark}
      <div className="leading-none">
        {backer.variant === 'single' ? (
          <>
            <span
              className={
                backer.name === 'Arrington Capital'
                  ? 'block text-[19px] font-bold tracking-[-0.03em] lowercase'
                  : backer.name === 'Syndicate'
                    ? 'block text-[19px] font-semibold tracking-[-0.02em]'
                    : 'block text-[19px] font-bold tracking-[-0.01em]'
              }
            >
              {backer.lines[0]}
            </span>
            {backer.sub && (
              <span className="mt-1 block text-[8.5px] font-semibold tracking-[0.16em] text-white/55 uppercase">
                {backer.sub}
              </span>
            )}
          </>
        ) : (
          <>
            <span className="block text-[13px] font-extrabold tracking-[0.02em] uppercase">
              {backer.lines[0]}
            </span>
            <span className="mt-1 block text-[13px] font-medium tracking-[0.02em] text-white/60 uppercase">
              {backer.lines[1]}
            </span>
          </>
        )}
      </div>
    </div>
  )
}

/** One seamless half of the marquee: the list repeated until it is wider than any viewport. */
function Half() {
  return (
    <div className="flex shrink-0 items-center gap-12 pr-12 sm:gap-16 sm:pr-16">
      {[0, 1].map((pass) =>
        BACKERS.map((backer) => (
          <Logo key={`${pass}-${backer.name}`} backer={backer} />
        )),
      )}
    </div>
  )
}

export function BackedBy() {
  return (
    <section className="relative flex w-full items-center gap-5 overflow-hidden bg-ink py-5 pl-5 sm:gap-8 sm:pl-8">
      <p className="shrink-0 text-[11px] leading-[1.3] font-bold tracking-[0.3em] text-white/45 uppercase">
        Backed
        <br className="hidden sm:block" /> by
      </p>
      <span className="hidden h-9 w-px shrink-0 bg-white/15 sm:block" />
      <div className="relative flex flex-1 overflow-hidden">
        <div className="animate-marquee flex w-max items-center">
          <Half />
          <Half />
        </div>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-14 bg-gradient-to-r from-ink to-transparent sm:w-20" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-ink to-transparent sm:w-24" />
      </div>
    </section>
  )
}
