import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import About from "./pages/about"
import Home from "./pages/Home"
import Login from "./pages/Login"

function App() {
  return (
    <Router>
      <div className="min-h-svh p-4 flex flex-col items-center justify-center">
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App