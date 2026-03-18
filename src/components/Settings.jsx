import { useState, useEffect } from 'react'
import '../styles/settings.css'

function Toggle({ checked, onChange }) {
  return (
    <button className={`toggle ${checked ? 'on' : ''}`} onClick={() => onChange(!checked)} role="switch" aria-checked={checked}>
      <span className="toggle-thumb" />
    </button>
  )
}

export default function Settings() {
  const [company, setCompany] = useState({ name: 'Nexus Corp', website: 'nexuscorp.com.br', email: 'contato@nexuscorp.com.br', timezone: 'America/Sao_Paulo' })
  const [notifs, setNotifs] = useState({ email: true, orders: true, reports: false, security: true })
  const [saved, setSaved] = useState(false)

  useEffect(() => {
    if (!saved) return
    const timer = setTimeout(() => setSaved(false), 2500)
    return () => clearTimeout(timer)
  }, [saved])

  const save = e => {
    e.preventDefault()
    setSaved(true)
  }

  return (
    <div className="settings-view">
      <div className="view-header">
        <h1>Configurações</h1>
        <p>Gerencie as preferências da sua empresa.</p>
      </div>

      <div className="settings-grid">
        <form className="card settings-card" onSubmit={save}>
          <h2 className="settings-section-title">Informações da Empresa</h2>
          <div className="form-grid">
            <div className="field">
              <label>Nome da empresa</label>
              <input value={company.name} onChange={e => setCompany(c => ({ ...c, name: e.target.value }))} />
            </div>
            <div className="field">
              <label>Website</label>
              <input value={company.website} onChange={e => setCompany(c => ({ ...c, website: e.target.value }))} />
            </div>
            <div className="field">
              <label>Email de contato</label>
              <input type="email" value={company.email} onChange={e => setCompany(c => ({ ...c, email: e.target.value }))} />
            </div>
            <div className="field">
              <label>Fuso horário</label>
              <select value={company.timezone} onChange={e => setCompany(c => ({ ...c, timezone: e.target.value }))}>
                <option value="America/Sao_Paulo">América/São Paulo (GMT-3)</option>
                <option value="America/New_York">América/Nova York (GMT-5)</option>
                <option value="Europe/London">Europa/Londres (GMT+0)</option>
                <option value="Asia/Tokyo">Ásia/Tóquio (GMT+9)</option>
              </select>
            </div>
          </div>
          <div className="form-actions">
            <button type="submit" className="btn-save">{saved ? 'Salvo!' : 'Salvar alterações'}</button>
          </div>
        </form>

        <div className="card settings-card">
          <h2 className="settings-section-title">Notificações</h2>
          <div className="notif-list">
            {[
              { key: 'email', label: 'Notificações por email', desc: 'Receba resumos diários por email' },
              { key: 'orders', label: 'Alertas de pedidos', desc: 'Seja notificado a cada novo pedido' },
              { key: 'reports', label: 'Relatórios semanais', desc: 'Envio automático toda segunda-feira' },
              { key: 'security', label: 'Alertas de segurança', desc: 'Logins suspeitos e acessos novos' },
            ].map(({ key, label, desc }) => (
              <div key={key} className="notif-item">
                <div className="notif-text">
                  <p className="notif-label">{label}</p>
                  <p className="notif-desc">{desc}</p>
                </div>
                <Toggle checked={notifs[key]} onChange={v => setNotifs(n => ({ ...n, [key]: v }))} />
              </div>
            ))}
          </div>
        </div>

        <div className="card settings-card">
          <h2 className="settings-section-title">Conta</h2>
          <div className="account-info">
            <div className="account-avatar">JS</div>
            <div>
              <p className="account-name">João Silva</p>
              <p className="account-email">joao@nexuscorp.com.br</p>
              <span className="badge badge-accent account-badge">Administrador</span>
            </div>
          </div>
          <div className="account-actions">
            <button className="btn-outline">Alterar senha</button>
            <button className="btn-outline danger">Sair da conta</button>
          </div>
        </div>
      </div>
    </div>
  )
}
