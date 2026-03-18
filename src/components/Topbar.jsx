import '../styles/topbar.css'

const labels = { overview: 'Visão Geral', analytics: 'Análises', orders: 'Pedidos', team: 'Equipe', settings: 'Configurações' }

export default function Topbar({ view, onMenuClick }) {
  return (
    <header className="topbar">
      <div className="topbar-left">
        <button className="menu-btn" onClick={onMenuClick} aria-label="Menu">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/>
          </svg>
        </button>
        <div className="breadcrumb">
          <span>Nexus Corp</span>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6"/></svg>
          <span className="breadcrumb-active">{labels[view]}</span>
        </div>
      </div>
      <div className="topbar-center">
        <div className="search-wrap">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
          <input placeholder="Buscar..." aria-label="Buscar" />
        </div>
      </div>
      <div className="topbar-right">
        <button className="icon-btn" aria-label="Notificações">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>
          <span className="notif-dot" />
        </button>
        <div className="topbar-avatar">JS</div>
      </div>
    </header>
  )
}
