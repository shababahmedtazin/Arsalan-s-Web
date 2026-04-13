import { cn } from '../../lib/utils'

interface MediaPlaceholderProps {
  label: string
  instruction: string
  aspectRatio?: string
  className?: string
  icon?: string
}

export default function MediaPlaceholder({
  label,
  instruction,
  aspectRatio = 'aspect-video',
  className = '',
  icon = '📷',
}: MediaPlaceholderProps) {
  return (
    <div
      className={cn(
        aspectRatio,
        'relative bg-bg-secondary border border-dashed border-gold-dim rounded-3xl overflow-hidden',
        'flex flex-col items-center justify-center gap-3 text-center p-6',
        className,
      )}
    >
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(rgba(200,137,42,1) 1px, transparent 1px), linear-gradient(90deg, rgba(200,137,42,1) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />
      <span className="text-3xl relative z-10">{icon}</span>
      <div className="relative z-10">
        <p className="font-body text-[0.8rem] font-medium text-cream-dim">{label}</p>
        <p className="font-body text-[0.65rem] text-gold-DEFAULT mt-1 tracking-wide leading-relaxed max-w-[200px]">
          {instruction}
        </p>
      </div>
    </div>
  )
}
