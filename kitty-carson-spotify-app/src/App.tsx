import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import About from "./pages/About"
import Home from "./pages/Home"
import Login from "./pages/Login"

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
    </Router>
  )
}

export default App