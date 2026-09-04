import { useState, type FormEvent } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import llama from '../assets/llama.png'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

export function EarlyAccess() {
  const [email, setEmail] = useState('')
  const [state, setState] = useState<'idle' | 'loading' | 'done' | 'error'>(
    'idle',
  )

  function onSubmit(e: FormEvent) {
    e.preventDefault()
    if (!EMAIL_RE.test(email.trim())) {
      setState('error')
      return
    }
    setState('loading')
    // Requests intentionally go nowhere — no backend, no storage.
    window.setTimeout(() => setState('done'), 900)
  }

  return (
    <div className="relative mx-auto w-full max-w-[560px]">
      {/* llama peeking out from behind the glass card */}
      <motion.img
        src={llama}
        alt=""
        aria-hidden="true"
        initial={{ y: 60, opacity: 0, scale: 0.94 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className="animate-float pointer-events-none absolute bottom-[calc(100%-149px)] left-1/2 z-0 w-[180px] -translate-x-1/2 select-none sm:bottom-[calc(100%-188px)] sm:w-[260px]"
        style={{
          maskImage:
            'linear-gradient(to bottom, #000 58%, rgba(0,0,0,0.35) 76%, transparent 92%)',
          WebkitMaskImage:
            'linear-gradient(to bottom, #000 58%, rgba(0,0,0,0.35) 76%, transparent 92%)',
        }}
      />

      {/* glow behind card */}
      <div className="pointer-events-none absolute -inset-8 -z-10 rounded-[48px] bg-white/25 blur-3xl" />

      <motion.form
        onSubmit={onSubmit}
        noValidate
        initial={{ y: 34, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        className="glass relative z-10 overflow-hidden rounded-[26px] p-5 sm:p-6"
      >
        <div className="shimmer pointer-events-none absolute inset-x-0 -top-px h-px" />

        <div className="flex items-center justify-center gap-2">
          <span className="relative flex size-2">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-ink/50" />
            <span className="relative inline-flex size-2 rounded-full bg-ink" />
          </span>
          <span className="text-[10px] font-bold tracking-[0.2em] text-ink/60 uppercase">
            Early access · limited
          </span>
        </div>

        <h2 className="mt-2 text-center text-[22px] leading-[1.1] font-extrabold tracking-[-0.03em] text-ink sm:text-[26px]">
          Get on the list
        </h2>
        <p className="mx-auto mt-1.5 max-w-[360px] text-center text-[13px] leading-relaxed text-ink/60">
          The first llamas through the gate get early access to swaps, vaults
          and the DelLama terminal.
        </p>

        <div className="mt-4">
          <AnimatePresence mode="wait" initial={false}>
            {state === 'done' ? (
              <motion.div
                key="done"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="flex h-[50px] items-center justify-center gap-2.5 rounded-2xl bg-ink px-5 text-rh"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="size-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m4 12.5 5 5L20 6.5" />
                </svg>
                <span className="text-[15px] font-bold">
                  You&rsquo;re on the list
                </span>
              </motion.div>
            ) : (
              <motion.div
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, y: -10 }}
                className="flex flex-col gap-2.5 sm:flex-row"
              >
                <div className="relative flex-1">
                  <svg
                    viewBox="0 0 24 24"
                    className="pointer-events-none absolute top-1/2 left-4 size-5 -translate-y-1/2 text-ink/35"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  >
                    <rect x="2.5" y="4.5" width="19" height="15" rx="3" />
                    <path d="m3.5 7 8.5 6 8.5-6" />
                  </svg>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value)
                      if (state === 'error') setState('idle')
                    }}
                    placeholder="you@wallet.xyz"
                    aria-label="Email address"
                    className={`h-[50px] w-full rounded-2xl border bg-white/65 pr-4 pl-12 text-[15px] font-medium text-ink outline-none transition placeholder:text-ink/35 focus:bg-white/85 ${
                      state === 'error'
                        ? 'border-red-500/70 focus:border-red-500'
                        : 'border-white/70 focus:border-ink/30'
                    }`}
                  />
                </div>
                <button
                  type="submit"
                  disabled={state === 'loading'}
                  className="group relative h-[50px] shrink-0 overflow-hidden rounded-2xl bg-ink px-7 text-[15px] font-bold text-rh transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70"
                >
                  <span className="absolute inset-0 translate-y-full bg-white/10 transition-transform duration-300 group-hover:translate-y-0" />
                  <span className="relative">
                    {state === 'loading' ? 'Sending…' : 'Request access'}
                  </span>
                </button>
              </motion.div>
            )}
          </AnimatePresence>

          <AnimatePresence>
            {state === 'error' && (
              <motion.p
                key="err"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="overflow-hidden pt-2 text-center text-[12.5px] font-semibold text-red-700"
              >
                That email doesn&rsquo;t look right.
              </motion.p>
            )}
          </AnimatePresence>
        </div>
      </motion.form>
    </div>
  )
}
