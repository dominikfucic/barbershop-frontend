import { Navigate } from 'react-router-dom'
import './App.css'

function App() {
  let user = null

  if (!user) return <Navigate to="/login" replace />

  return (
    <h1>
      Home Route
    </h1>
  )
}

export default App
