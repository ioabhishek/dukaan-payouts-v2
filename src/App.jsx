import "./styles/app.css"
import Sidebar from "./components/sidebar/Sidebar"
import Dashboard from "./components/dashboard/Dashboard"

function App() {
  return (
    <main className="main_container">
      <Sidebar />
      <Dashboard />
    </main>
  )
}

export default App
