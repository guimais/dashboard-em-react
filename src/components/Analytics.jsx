import '../styles/analytics.css'
import AreaChart from './AreaChart'

const monthlyRevenue = [210000, 290000, 255000, 335000, 360000, 325000, 405000, 390000, 450000, 430000, 475000, 510000]
const months = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez']

const categories = [
  { label: 'Empresarial', value: 42, color: 'var(--accent)' },
  { label: 'Plano Pro', value: 28, color: 'var(--success)' },
  { label: 'Iniciante', value: 18, color: 'var(--warning)' },
  { label: 'Complementos', value: 8, color: 'var(--purple)' },
  { label: 'Suporte', value: 4, color: 'var(--danger)' },
]

const channels = [
  { label: 'Direto', value: 45, color: 'var(--accent)' },
  { label: 'Parceiros', value: 35, color: 'var(--success)' },
  { label: 'Plataforma', value: 20, color: 'var(--warning)' },
]

const perfMetrics = [
  { label: 'Ticket Médio', value: 'R$ 1.140', change: '+5.3%', up: true },
  { label: 'Taxa de Churn', value: '2,1%', change: '-0,3%', up: true },
  { label: 'NPS', value: '74', change: '+6', up: true },
  { label: 'CAC', value: 'R$ 920', change: '-12.5%', up: true },
]

function DonutChart({ segments }) {
  const r = 54, cx = 70, cy = 70, sw = 18
  const circ = 2 * Math.PI * r
  const total = segments.reduce((s, x) => s + x.value, 0)
  const arcs = segments.reduce((acc, seg) => {
    const prev = acc[acc.length - 1]
    const offset = prev ? prev.offset + prev.dash : 0
    return [...acc, { ...seg, dash: (seg.value / total) * circ, offset }]
  }, [])
  return (
    <svg viewBox="0 0 140 140" className="donut-svg">
      <circle cx={cx} cy={cy} r={r} fill="none" stroke="var(--navy-light)" strokeWidth={sw} />
      {arcs.map(({ label, color, dash, offset }) => (
        <circle key={label} cx={cx} cy={cy} r={r} fill="none" stroke={color} strokeWidth={sw} strokeDasharray={`${dash} ${circ - dash}`} strokeDashoffset={-offset} />
      ))}
    </svg>
  )
}

export default function Analytics() {
  return (
    <div className="analytics">
      <div className="view-header">
        <h1>Análises</h1>
        <p>Desempenho detalhado — exercício de 2025.</p>
      </div>

      <div className="perf-grid">
        {perfMetrics.map(m => (
          <div key={m.label} className="card perf-card">
            <p className="kpi-label">{m.label}</p>
            <p className="kpi-value">{m.value}</p>
            <span className={`kpi-change ${m.up ? 'up' : 'down'}`}>{m.change}</span>
          </div>
        ))}
      </div>

      <div className="card an-chart-card">
        <div className="card-header">
          <div>
            <p className="card-title">Receita Anual</p>
            <p className="card-sub">Jan — Dez 2025</p>
          </div>
          <p className="chart-total">R$ 4.435.000</p>
        </div>
        <div className="an-chart-area">
          <AreaChart data={monthlyRevenue} w={700} h={140} padX={6} padY={10} gradientId="mg" className="area-svg" />
        </div>
        <div className="an-chart-labels">
          {months.map(m => <span key={m}>{m}</span>)}
        </div>
      </div>

      <div className="analytics-row">
        <div className="card bar-card">
          <div className="card-header">
            <p className="card-title">Pedidos por Categoria</p>
          </div>
          <div className="bar-list">
            {categories.map(c => (
              <div key={c.label} className="bar-item">
                <div className="bar-meta">
                  <span>{c.label}</span>
                  <span style={{ color: c.color }}>{c.value}%</span>
                </div>
                <div className="bar-track">
                  <div className="bar-fill" style={{ width: `${c.value}%`, background: c.color }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="card donut-card">
          <div className="card-header">
            <p className="card-title">Canais de Venda</p>
          </div>
          <div className="donut-wrap">
            <DonutChart segments={channels} />
            <div className="donut-legend">
              {channels.map(c => (
                <div key={c.label} className="legend-item">
                  <span className="legend-dot" style={{ background: c.color }} />
                  <span className="legend-label">{c.label}</span>
                  <span className="legend-val">{c.value}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
