import '../styles/overview.css'
import AreaChart from './AreaChart'
import { statusColor, statusLabel } from '../utils/status'

const kpis = [
  { label: 'Receita Total', value: 'R$ 1.420.000', change: '+12.5%', up: true, sub: 'vs. mês anterior' },
  { label: 'Novos Pedidos', value: '1.247', change: '+8.7%', up: true, sub: 'vs. mês anterior' },
  { label: 'Usuários Ativos', value: '8.432', change: '+3.2%', up: true, sub: 'vs. mês anterior' },
  { label: 'Conversão', value: '3,42%', change: '-0,4%', up: false, sub: 'vs. mês anterior' },
]

const revenueData = [92000, 110500, 99000, 142500, 121500, 156000, 139000]
const days = ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom']

const recentOrders = [
  { id: '#2847', customer: 'Carlos Mendonça', product: 'Plano Enterprise', amount: 'R$ 11.990', status: 'completed' },
  { id: '#2846', customer: 'Ana Paula Ferreira', product: 'Plano Pro', amount: 'R$ 4.450', status: 'processing' },
  { id: '#2845', customer: 'Roberto Alves', product: 'Plano Iniciante', amount: 'R$ 1.490', status: 'pending' },
  { id: '#2844', customer: 'Juliana Costa', product: 'Plano Enterprise', amount: 'R$ 11.990', status: 'completed' },
  { id: '#2843', customer: 'Marcos Oliveira', product: 'Plano Pro', amount: 'R$ 4.450', status: 'cancelled' },
]

const activity = [
  { initials: 'CM', name: 'Carlos Mendonça', action: 'Novo pedido #2847', time: '2 min atrás', color: '#3b82f6' },
  { initials: 'AF', name: 'Ana Paula Ferreira', action: 'Conta atualizada para Pro', time: '15 min atrás', color: '#10b981' },
  { initials: 'RA', name: 'Roberto Alves', action: 'Ticket de suporte aberto', time: '1h atrás', color: '#f59e0b' },
  { initials: 'JC', name: 'Juliana Costa', action: 'Pagamento confirmado', time: '2h atrás', color: '#8b5cf6' },
]

export default function Overview() {
  return (
    <div className="overview">
      <div className="view-header">
        <h1>Visão Geral</h1>
        <p>Bem-vindo de volta, João. Aqui está o resumo de hoje.</p>
      </div>

      <div className="kpi-grid">
        {kpis.map(k => (
          <div key={k.label} className="kpi-card">
            <p className="kpi-label">{k.label}</p>
            <p className="kpi-value">{k.value}</p>
            <div className="kpi-footer">
              <span className={`kpi-change ${k.up ? 'up' : 'down'}`}>{k.change}</span>
              <span className="kpi-sub">{k.sub}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="overview-row">
        <div className="card chart-card">
          <div className="card-header">
            <div>
              <p className="card-title">Receita Semanal</p>
              <p className="card-sub">Últimos 7 dias</p>
            </div>
            <p className="chart-total">R$ 864.000</p>
          </div>
          <div className="chart-area">
            <AreaChart data={revenueData} className="area-svg" />
          </div>
          <div className="chart-labels">
            {days.map(d => <span key={d}>{d}</span>)}
          </div>
        </div>

        <div className="card activity-card">
          <div className="card-header">
            <p className="card-title">Atividade Recente</p>
          </div>
          <div className="activity-list">
            {activity.map(a => (
              <div key={a.name} className="activity-item">
                <div className="act-avatar" style={{ background: a.color + '22', color: a.color }}>{a.initials}</div>
                <div className="act-info">
                  <p className="act-name">{a.name}</p>
                  <p className="act-action">{a.action}</p>
                </div>
                <span className="act-time">{a.time}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="card orders-card">
        <div className="card-header">
          <p className="card-title">Pedidos Recentes</p>
          <span className="view-all">Ver todos →</span>
        </div>
        <table className="orders-table">
          <thead>
            <tr>
              <th>ID</th><th>Cliente</th><th>Produto</th><th>Valor</th><th>Status</th>
            </tr>
          </thead>
          <tbody>
            {recentOrders.map(o => (
              <tr key={o.id}>
                <td className="order-id">{o.id}</td>
                <td>{o.customer}</td>
                <td className="order-product">{o.product}</td>
                <td className="order-amount">{o.amount}</td>
                <td><span className={`badge badge-${statusColor[o.status]}`}>{statusLabel[o.status]}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
