export function LDSLogo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Geometric LDS monogram mark */}
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* L stroke */}
        <rect x="4" y="4" width="2.5" height="18" fill="#D4AF37" />
        <rect x="4" y="20" width="10" height="2.5" fill="#D4AF37" />
        {/* D stroke */}
        <rect x="16" y="4" width="2.5" height="18" fill="#D4AF37" />
        <path
          d="M18.5 4 Q28 4 28 13 Q28 22 18.5 22"
          stroke="#D4AF37"
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
        />
        {/* S stroke — bottom-right area subtle */}
        <path
          d="M6 28 Q12 26 12 30"
          stroke="#D4AF37"
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
          opacity="0.5"
        />
      </svg>
      <div className="flex flex-col leading-none">
        <span className="text-sm font-bold tracking-[0.2em] text-foreground uppercase">LIKAM</span>
        <span className="text-[9px] font-medium tracking-[0.35em] text-primary uppercase">Digital Studio</span>
      </div>
    </div>
  )
}
