type Props = { className?: string }

/**
 * DelLama quill mark — a single feather with a spine and barbs.
 */
export function Feather({ className }: Props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M19.1 2.9c2.4 5.1 1.7 10.6-2 13.9-2.7 2.4-6.4 3.1-9.9 2.2l-2 2.4a1 1 0 0 1-1.5-1.3l2-2.4C3.4 14.3 3.6 10.4 5.9 7.4 8.7 3.8 13.6 2.3 19.1 2.9Z"
        fill="currentColor"
      />
      <g stroke="#0b1000" strokeWidth="1.1" strokeLinecap="round" opacity="0.55">
        <path d="M17.8 4.2 7.4 17.1" />
        <path d="M15.9 5.4 12.3 5.1" />
        <path d="M14 7.8l-4.1-.5" />
        <path d="M12.2 10.2 7.4 9.9" />
        <path d="M10.4 12.6l-4-.1" />
        <path d="M16.9 7.6l.5 3.4" />
        <path d="M15.1 10.1l.4 3.4" />
        <path d="M13.2 12.6l.3 3.2" />
      </g>
    </svg>
  )
}
