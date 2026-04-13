export default function GoldDivider({ className = '' }: { className?: string }) {
  return (
    <div className={`w-14 h-px mx-auto bg-gradient-to-r from-transparent via-gold-DEFAULT to-transparent ${className}`} />
  )
}
