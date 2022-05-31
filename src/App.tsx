import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Order } from './pages/Order/Order'

function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Order />} />
        </Routes>
      </Router>

    </div>
  )
}

export default App
