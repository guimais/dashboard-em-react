export default function AreaChart({ data, w = 500, h = 100, padX = 4, padY = 4, gradientId = 'ag', className }) {
  const min = Math.min(...data)
  const max = Math.max(...data)
  const range = max - min || 1
  const pts = data.map((v, i) => [
    padX + (i / (data.length - 1)) * (w - 2 * padX),
    h - padY - ((v - min) / range) * (h - 2 * padY),
  ])
  const line = pts.map(p => p.join(',')).join(' ')
  const area = `${pts[0][0]},${h - padY} ${line} ${pts[pts.length - 1][0]},${h - padY}`
  return (
    <svg viewBox={`0 0 ${w} ${h}`} preserveAspectRatio="none" className={className}>
      <defs>
        <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#aaff00" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#aaff00" stopOpacity="0" />
        </linearGradient>
      </defs>
      <polygon points={area} fill={`url(#${gradientId})`} />
      <polyline points={line} fill="none" stroke="#aaff00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
