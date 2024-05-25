import './App.css';
import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer';
import { useEffect, useState } from 'react';
import Home from './components/pages/Home';
import { Route, Routes } from 'react-router-dom';
import Projects from './components/pages/projects';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const showPreLoader = () => setLoading(true);
    const hidePreLoader = () => setLoading(false);

    showPreLoader(); // Pokaż preloader na początku

    window.addEventListener('load', hidePreLoader);

    return () => {
      window.removeEventListener('load', hidePreLoader);
    };
  }, []);

  return (
    <>
      {loading && (
        <div className="preloader" id="preloader">
          <div className="spinner">
            {[...Array(6)].map((_, index) => (
              <div key={index}></div>
            ))}
          </div>
        </div>
      )}

      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>

      <div className="side_left d-none d-lg-block">
        <div className="side">
          <a href="https://github.com/Kubaleek" target="_blank">
            <i className="bi bi-github"></i>
          </a>
          <a href="https://www.instagram.com/kubalekweb/" target="_blank">
            <i className="bi bi-instagram"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/kuba-kr%C3%B3l-9b4946274/"
            target="_blank"
          >
            <i className="bi bi-linkedin mb-3"></i>
          </a>
        </div>
      </div>
      <div className="side_right d-none d-lg-block">
        <div className="side">
          <a href="mailto:kuba.krol.ldz@gmail.com">kuba.krol.ldz@gmail.com</a>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
