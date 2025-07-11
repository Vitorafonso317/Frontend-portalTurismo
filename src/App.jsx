import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from "./pages/home"
import Servicepage from "./pages/servicepages"
import ContactPage from "./pages/ContactPage"
import AboutPage from "./pages/AboutPage"
import LoginPage from "./pages/loginPage"
import RegisterPage from "./pages/registerPage"
import SaibaMais from "./pages/SaibaMais"

function App() {
  return (
    <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/service" element={<Servicepage />} />
            <Route path="/contact" element={<ContactPage/>} />
            <Route path="/about" element={<AboutPage/>} />
            <Route path="/login" element={<LoginPage/>} />  
            <Route path="/register" element={<RegisterPage/>} />  
            <Route path="/sobre" element={<SaibaMais/>} />  
                            
          </Routes>
    </Router>
  )
}

export default App
