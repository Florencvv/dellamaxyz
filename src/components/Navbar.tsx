import { motion } from 'framer-motion'
import { Feather } from './Feather'
import { XIcon, X_URL } from './XIcon'
import avatar from '../assets/llama-avatar.jpg'

const LINKS = ['Swap', 'Trade', 'Terminal', 'Portfolio']

export function Navbar() {
  return (
    <motion.header
      initial={{ y: -28, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-5"
    >
      <nav className="glass relative mx-auto flex max-w-[1180px] flex-wrap items-center justify-between gap-x-4 gap-y-2 rounded-[20px] px-3.5 py-2.5 sm:px-5">
        {/* wordmark */}
        <a href="#" className="flex shrink-0 items-center gap-2.5">
          <span className="grid size-7 shrink-0 place-items-center overflow-hidden rounded-full ring-2 ring-ink/85">
            <img
              src={avatar}
              alt="DelLama"
              className="size-full object-cover"
            />
          </span>
          <span className="text-[16px] font-extrabold tracking-[-0.03em] text-ink">
            DelLama
          </span>
        </a>

        {/* center menu */}
        <div className="order-3 flex w-full flex-col items-center border-t border-white/45 pt-2 md:absolute md:left-1/2 md:order-none md:w-auto md:-translate-x-1/2 md:border-0 md:pt-0">
          <ul className="flex items-center gap-1">
            {LINKS.map((link) => (
              <li key={link}>
                <span className="group relative flex cursor-default select-none items-center rounded-full px-2.5 py-1 text-[12.5px] font-semibold sm:px-3 sm:text-[13px] text-ink/75 transition-colors hover:text-ink">
                  <span className="absolute inset-0 scale-90 rounded-full bg-white/0 opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:bg-white/55 group-hover:opacity-100" />
                  <span className="relative">{link}</span>
                </span>
              </li>
            ))}
          </ul>
          <p className="mt-0.5 text-[9.5px] font-medium tracking-[0.22em] text-ink/45 uppercase">
            is coming
            <span className="inline-flex tracking-normal">
              {[0, 1, 2].map((i) => (
                <motion.span
                  key={i}
                  animate={{ opacity: [0.2, 1, 0.2] }}
                  transition={{
                    duration: 1.6,
                    repeat: Infinity,
                    delay: i * 0.25,
                  }}
                >
                  .
                </motion.span>
              ))}
            </span>
          </p>
        </div>

        {/* social + brand mark */}
        <div className="flex shrink-0 items-center gap-2">
          <a
            href={X_URL}
            target="_blank"
            rel="noreferrer"
            aria-label="DelLama on X"
            className="group grid size-9 place-items-center rounded-full border border-ink/15 bg-white/40 text-ink transition-all duration-300 hover:-translate-y-0.5 hover:bg-ink hover:text-rh active:scale-95"
          >
            <XIcon className="size-4" />
          </a>
          <span
            aria-hidden="true"
            className="group relative grid size-9 place-items-center rounded-full bg-ink transition-transform duration-300 hover:-rotate-6 hover:scale-105"
          >
            <Feather className="relative size-5 text-white drop-shadow" />
          </span>
        </div>
      </nav>
    </motion.header>
  )
}
