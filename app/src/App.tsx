import { motion } from 'framer-motion'
import { GradientBackground } from '@/components/ui/almoayyed'
import { Navbar } from './components/Navbar'
import { EarlyAccess } from './components/EarlyAccess'
import { BackedBy } from './components/BackedBy'
import { Features } from './components/Features'
import { Marquee } from './components/Marquee'
import { Feather } from './components/Feather'
import { XIcon, X_URL } from './components/XIcon'
import avatar from './assets/llama-avatar.jpg'

const ease = [0.22, 1, 0.36, 1] as const

export default function App() {
  return (
    <div className="relative min-h-full overflow-hidden bg-rh">
      {/* ambient background */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <GradientBackground className="absolute inset-0" />
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(11,16,0,.6) 1px, transparent 1px), linear-gradient(90deg, rgba(11,16,0,.6) 1px, transparent 1px)',
            backgroundSize: '64px 64px',
            maskImage:
              'radial-gradient(ellipse 80% 60% at 50% 40%, #000 30%, transparent 75%)',
          }}
        />
      </div>

      <Navbar />

      <main className="relative flex flex-col items-center">
        {/* first screen: hero + both marquees, no scrolling needed */}
        <div className="flex min-h-svh w-full flex-col">
          <section className="flex flex-1 flex-col items-center px-5 pt-[136px] pb-5 sm:pt-[118px]">
            <motion.a
              href="#"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease }}
              className="glass flex items-center gap-2 rounded-full py-1.5 pr-4 pl-1.5 text-[12.5px] font-semibold text-ink/70"
            >
              <span className="grid size-6 place-items-center rounded-full bg-ink">
                <Feather className="size-3.5 text-rh" />
              </span>
              Built on the Robinhood Chain
            </motion.a>

            <motion.h1
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.06, ease }}
              className="mt-4 text-center text-[clamp(46px,8.6vw,104px)] leading-[0.88] font-black tracking-[-0.055em] text-ink"
            >
              DelLama
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.16, ease }}
              className="mt-3 max-w-[560px] text-center text-[15px] leading-relaxed font-medium text-ink/65 sm:text-[16.5px]"
            >
              A protocol on the Robinhood Chain that enables{' '}
              <span className="font-semibold text-ink">swapping</span>,{' '}
              <span className="font-semibold text-ink">managing</span> and{' '}
              <span className="font-semibold text-ink">protecting</span>{' '}
              digital assets.
            </motion.p>

            <div className="mt-[126px] w-full sm:mt-[206px]">
              <EarlyAccess />
            </div>
          </section>

          <Marquee />
          <BackedBy />
        </div>

        <section className="w-full py-16 sm:py-20">
          <Features />
        </section>

        <footer className="w-full px-5 pb-10">
          <div className="mx-auto flex max-w-[1000px] flex-col items-center justify-between gap-4 border-t border-ink/10 pt-8 sm:flex-row">
            <div className="flex items-center gap-2.5">
              <span className="grid size-8 shrink-0 place-items-center overflow-hidden rounded-full ring-2 ring-ink/85">
                <img src={avatar} alt="" className="size-full object-cover" />
              </span>
              <span className="text-[15px] font-extrabold tracking-[-0.02em] text-ink">
                DelLama
              </span>
            </div>
            <p className="text-[12.5px] font-medium text-ink/45">
              Swap · Manage · Protect - coming to the Robinhood Chain.
            </p>
            <div className="flex items-center gap-3">
              <a
                href={X_URL}
                target="_blank"
                rel="noreferrer"
                aria-label="DelLama on X"
                className="grid size-9 place-items-center rounded-xl border border-ink/20 text-ink/70 transition-all duration-300 hover:-translate-y-0.5 hover:border-ink hover:bg-ink hover:text-rh"
              >
                <XIcon className="size-4" />
              </a>
              <p className="text-[12.5px] font-medium text-ink/45">
                © {new Date().getFullYear()} DelLama
              </p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  )
}
