import { useState } from 'react'
import Sidebar from './components/Sidebar'
import Topbar from './components/Topbar'
import Overview from './components/Overview'
import Analytics from './components/Analytics'
import Orders from './components/Orders'
import Team from './components/Team'
import Settings from './components/Settings'
import './styles/layout.css'
import './styles/globals.css'

const views = { overview: Overview, analytics: Analytics, orders: Orders, team: Team, settings: Settings }

export default function App() {
  const [view, setView] = useState('overview')
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const View = views[view]

  return (
    <div className="dashboard">
      <Sidebar active={view} setView={setView} open={sidebarOpen} setOpen={setSidebarOpen} />
      <div className="dashboard-main">
        <Topbar view={view} onMenuClick={() => setSidebarOpen(o => !o)} />
        <main className="dashboard-content">
          <View />
        </main>
      </div>
    </div>
  )
}
