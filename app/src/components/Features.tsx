import { motion } from 'framer-motion'

const ITEMS = [
  {
    title: 'Swap',
    body: 'Route any pair across the Robinhood Chain at the best available price, in one signature.',
    icon: (
      <>
        <path d="M4 8h13m0 0-4-4m4 4-4 4" />
        <path d="M20 16H7m0 0 4-4m-4 4 4 4" />
      </>
    ),
  },
  {
    title: 'Manage',
    body: 'Every position, vault and LP in a single view - with a terminal built for people who actually trade.',
    icon: (
      <>
        <path d="M3 20V10m6 10V4m6 16v-7m6 7V7" />
      </>
    ),
  },
  {
    title: 'Protect',
    body: 'MEV-aware execution, approval hygiene and risk alerts running quietly in the background.',
    icon: (
      <>
        <path d="M12 3 4.5 6v6c0 4.6 3.1 8.2 7.5 9.4 4.4-1.2 7.5-4.8 7.5-9.4V6L12 3Z" />
        <path d="m9 12 2.2 2.2L15.5 10" />
      </>
    ),
  },
]

export function Features() {
  return (
    <section className="mx-auto grid w-full max-w-[1000px] gap-4 px-5 sm:grid-cols-3">
      {ITEMS.map((item, i) => (
        <motion.article
          key={item.title}
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{
            duration: 0.7,
            delay: i * 0.1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="glass group rounded-3xl p-6 transition-transform duration-300 hover:-translate-y-1"
        >
          <span className="grid size-11 place-items-center rounded-2xl bg-ink text-rh transition-transform duration-300 group-hover:rotate-6">
            <svg
              viewBox="0 0 24 24"
              className="size-5.5"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.9"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {item.icon}
            </svg>
          </span>
          <h3 className="mt-4 text-[19px] font-extrabold tracking-[-0.02em] text-ink">
            {item.title}
          </h3>
          <p className="mt-1.5 text-[14px] leading-relaxed text-ink/60">
            {item.body}
          </p>
        </motion.article>
      ))}
    </section>
  )
}
