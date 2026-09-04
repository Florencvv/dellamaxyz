const WORDS = [
  'SWAP',
  'MANAGE',
  'PROTECT',
  'ROBINHOOD CHAIN',
  'DELLAMA',
  'EARLY ACCESS',
]

/** One half of the loop: the word list repeated until it outruns any viewport. */
function Half() {
  return (
    <div className="flex shrink-0 items-center">
      {[0, 1, 2].map((pass) =>
        WORDS.map((word) => (
          <span
            key={`${pass}-${word}`}
            className="flex shrink-0 items-center gap-7 pr-7 text-[12px] font-bold tracking-[0.28em] whitespace-nowrap text-ink/45"
          >
            {word}
            <span className="size-1.5 shrink-0 rounded-full bg-ink/30" />
          </span>
        )),
      )}
    </div>
  )
}

export function Marquee() {
  return (
    <div className="relative flex w-full overflow-hidden border-y border-ink/10 bg-ink/[0.04] py-2.5">
      <div className="animate-marquee flex w-max items-center">
        <Half />
        <Half />
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-rh to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-rh to-transparent" />
    </div>
  )
}
