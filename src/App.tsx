import './App.css'
import Navbar from './components/navbar/navbar'
import Footer from './components/footer/footer'
import {
  BrowserRouter as Router, Routes, Route,
} from "react-router-dom";
import Home from './pages/Home'
import Projects from './pages/Projects'

function App() {
  return (
    <>
      <main className="main px-lg-5 px-0">
        <Router>
            <Navbar/>
            <Routes>
              <Route path="/">
                <Home />
              </Route>
              <Route path="/projects">
                <Projects />
              </Route>
            </Routes>
        </Router>
      </main>

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
