import './App.css'
import Navbar from './components/navbar/navbar'
import Footer from './components/footer/footer'
import Home from './pages/Home'
import {Route, Routes } from 'react-router-dom'
import Projects from './pages/Projects'

function App() {
  return (
    <>
    
        <Navbar/>
          <Routes>
            <Route index element={<Home />} />
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>

        <div className="side_left d-none d-lg-block">
          <div className="side">
              <a href="https://github.com/Kubaleek" target='_blank' title="Github">
                <i className="bi bi-github"></i>
              </a>
              <a href="https://www.instagram.com/kubalekweb/" target='_blank' title="Instagram">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="https://www.linkedin.com/in/kuba-kr%C3%B3l-9b4946274/"  target='_blank'  title="Linkedin">
                <i className="bi bi-linkedin mb-3"></i>
              </a>
          </div>
        </div>
        <div className="side_right d-none d-lg-block">
          <div className="side">
              <a href="mailto:kuba.krol.ldz@gmail.com">kuba.krol.ldz@gmail.com</a>
          </div>
        </div>
        <Footer/>
    </>
  )
}

export default App
