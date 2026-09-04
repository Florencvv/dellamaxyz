# DelLama — landing page

Landing page for **DelLama**, a protocol on the Robinhood Chain that enables
swapping, managing and protecting digital assets.

Stack: Vite + React 19 + TypeScript + Tailwind v4 + Framer Motion.

## Run

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in dist/
npm run preview
```

Deploys as-is on Vercel: the Vite app lives at the repository root, so the
default detection (build `npm run build`, output `dist`) is correct — no Root
Directory override needed.

## Notes

- The early-access form has **no backend**: emails are validated in the browser
  and then discarded (`EarlyAccess.tsx` — a timeout flips the UI to the success
  state, nothing is sent or stored).
- Images: `lamawithoutfon.png` is the source cut-out (its white sticker outline
  is eroded away in `src/assets/llama.png`), `lamaforicon.jpg` is cropped to
  the round avatar used in the navbar, footer and favicon.
- The two marquees (`Marquee.tsx`, `BackedBy.tsx`) render the list twice and
  translate by -50%, so the loop is seamless at any viewport width.
- `src/components/ui/almoayyed.tsx` is the 21st.dev Gradient Builder export,
  recolored from plum to the Robinhood green ramp. `@/*` is aliased to
  `src/*` in `vite.config.ts` + `tsconfig.app.json`.
- Brand colour: Robinhood green `#ccff00`, ink `#0b1000` (defined as Tailwind
  theme tokens in `src/index.css`).
