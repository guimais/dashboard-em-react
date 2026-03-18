import { useState, useMemo } from 'react'
import '../styles/team.css'

const members = [
  { name: 'Fernanda Santos', role: 'Dev. Frontend', dept: 'Engenharia', online: true, initials: 'FS', color: '#3b82f6' },
  { name: 'Diego Rodrigues', role: 'Dev. Backend', dept: 'Engenharia', online: true, initials: 'DR', color: '#10b981' },
  { name: 'Beatriz Lima', role: 'Designer UI/UX', dept: 'Design', online: false, initials: 'BL', color: '#f59e0b' },
  { name: 'Thiago Barbosa', role: 'Gerente de Produto', dept: 'Produto', online: true, initials: 'TB', color: '#8b5cf6' },
  { name: 'Larissa Souza', role: 'Analista de Dados', dept: 'Produto', online: false, initials: 'LS', color: '#ef4444' },
  { name: 'Eduardo Carvalho', role: 'Engenheiro DevOps', dept: 'Engenharia', online: true, initials: 'EC', color: '#06b6d4' },
  { name: 'Patrícia Nunes', role: 'Designer Gráfico', dept: 'Design', online: true, initials: 'PN', color: '#f97316' },
  { name: 'Rafael Pereira', role: 'Analista de QA', dept: 'Engenharia', online: false, initials: 'RP', color: '#84cc16' },
  { name: 'Camila Monteiro', role: 'Gerente de Marketing', dept: 'Marketing', online: true, initials: 'CM', color: '#ec4899' },
  { name: 'Lucas Teixeira', role: 'Gerente de Vendas', dept: 'Marketing', online: false, initials: 'LT', color: '#a78bfa' },
]

const depts = ['Todos', 'Engenharia', 'Design', 'Produto', 'Marketing']

export default function Team() {
  const [dept, setDept] = useState('Todos')
  const filtered = useMemo(() => dept === 'Todos' ? members : members.filter(m => m.dept === dept), [dept])
  const online = useMemo(() => members.filter(m => m.online).length, [])

  return (
    <div className="team-view">
      <div className="view-header">
        <h1>Equipe</h1>
        <p>{members.length} membros · {online} online agora</p>
      </div>

      <div className="team-toolbar">
        {depts.map(d => (
          <button key={d} className={dept === d ? 'active' : ''} onClick={() => setDept(d)}>{d}</button>
        ))}
      </div>

      <div className="team-grid">
        {filtered.map(m => (
          <div key={m.name} className="member-card card">
            <div className="member-top">
              <div className="member-avatar" style={{ background: m.color + '22', color: m.color }}>
                {m.initials}
                <span className={`online-dot ${m.online ? 'online' : ''}`} />
              </div>
              <span className="member-dept">{m.dept}</span>
            </div>
            <p className="member-name">{m.name}</p>
            <p className="member-role">{m.role}</p>
            <div className="member-status">
              <span className={`status-badge ${m.online ? 'online' : 'offline'}`}>
                {m.online ? 'Ativo' : 'Inativo'}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
