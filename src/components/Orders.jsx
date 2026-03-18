import { useState, useMemo } from 'react'
import '../styles/orders.css'
import { statusColor, statusLabel } from '../utils/status'

const allOrders = [
  { id: '#2847', customer: 'Carlos Mendonça', product: 'Plano Enterprise', amount: 'R$ 11.990', status: 'completed', date: '15 mar 2025' },
  { id: '#2846', customer: 'Ana Paula Ferreira', product: 'Plano Pro', amount: 'R$ 4.450', status: 'processing', date: '15 mar 2025' },
  { id: '#2845', customer: 'Roberto Alves', product: 'Plano Iniciante', amount: 'R$ 1.490', status: 'pending', date: '14 mar 2025' },
  { id: '#2844', customer: 'Juliana Costa', product: 'Plano Enterprise', amount: 'R$ 11.990', status: 'completed', date: '14 mar 2025' },
  { id: '#2843', customer: 'Marcos Oliveira', product: 'Plano Pro', amount: 'R$ 4.450', status: 'cancelled', date: '13 mar 2025' },
  { id: '#2842', customer: 'Fernanda Santos', product: 'Plano Iniciante', amount: 'R$ 1.490', status: 'completed', date: '13 mar 2025' },
  { id: '#2841', customer: 'Diego Rodrigues', product: 'Plano Enterprise', amount: 'R$ 11.990', status: 'processing', date: '12 mar 2025' },
  { id: '#2840', customer: 'Beatriz Lima', product: 'Plano Pro', amount: 'R$ 4.450', status: 'completed', date: '12 mar 2025' },
  { id: '#2839', customer: 'Thiago Barbosa', product: 'Complemento: Análises', amount: 'R$ 750', status: 'completed', date: '11 mar 2025' },
  { id: '#2838', customer: 'Larissa Souza', product: 'Plano Iniciante', amount: 'R$ 1.490', status: 'pending', date: '11 mar 2025' },
  { id: '#2837', customer: 'Eduardo Carvalho', product: 'Plano Enterprise', amount: 'R$ 11.990', status: 'completed', date: '10 mar 2025' },
  { id: '#2836', customer: 'Patrícia Nunes', product: 'Plano Pro', amount: 'R$ 4.450', status: 'cancelled', date: '10 mar 2025' },
  { id: '#2835', customer: 'Rafael Pereira', product: 'Complemento: Armazenamento', amount: 'R$ 390', status: 'completed', date: '09 mar 2025' },
  { id: '#2834', customer: 'Camila Monteiro', product: 'Plano Enterprise', amount: 'R$ 11.990', status: 'processing', date: '09 mar 2025' },
  { id: '#2833', customer: 'Lucas Teixeira', product: 'Plano Iniciante', amount: 'R$ 1.490', status: 'completed', date: '08 mar 2025' },
]

const filters = ['Todos', 'Concluído', 'Processando', 'Pendente', 'Cancelado']
const filterMap = { 'Todos': null, 'Concluído': 'completed', 'Processando': 'processing', 'Pendente': 'pending', 'Cancelado': 'cancelled' }

export default function Orders() {
  const [search, setSearch] = useState('')
  const [filter, setFilter] = useState('Todos')

  const filtered = useMemo(() => allOrders.filter(o => {
    const matchSearch = o.customer.toLowerCase().includes(search.toLowerCase()) || o.id.includes(search)
    const matchFilter = !filterMap[filter] || o.status === filterMap[filter]
    return matchSearch && matchFilter
  }), [search, filter])

  return (
    <div className="orders-view">
      <div className="view-header">
        <h1>Pedidos</h1>
        <p>{allOrders.length} pedidos no total</p>
      </div>

      <div className="card">
        <div className="orders-toolbar">
          <div className="orders-search">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
            <input placeholder="Buscar por cliente ou ID..." value={search} onChange={e => setSearch(e.target.value)} />
          </div>
          <div className="orders-filters">
            {filters.map(f => (
              <button key={f} className={filter === f ? 'active' : ''} onClick={() => setFilter(f)}>{f}</button>
            ))}
          </div>
        </div>

        <table className="orders-table full">
          <thead>
            <tr>
              <th>ID</th><th>Cliente</th><th>Produto</th><th>Valor</th><th>Status</th><th>Data</th>
            </tr>
          </thead>
          <tbody>
            {filtered.length === 0 ? (
              <tr><td colSpan={6} className="no-results">Nenhum pedido encontrado.</td></tr>
            ) : filtered.map(o => (
              <tr key={o.id}>
                <td className="order-id">{o.id}</td>
                <td className="order-customer">{o.customer}</td>
                <td className="order-product">{o.product}</td>
                <td className="order-amount">{o.amount}</td>
                <td><span className={`badge badge-${statusColor[o.status]}`}>{statusLabel[o.status]}</span></td>
                <td className="order-date">{o.date}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="table-footer">
          <span>{filtered.length} de {allOrders.length} pedidos</span>
        </div>
      </div>
    </div>
  )
}
