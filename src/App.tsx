import './App.css'
import Navbar from './components/navbar/navbar'
import Footer from './components/footer/footer'
import { useEffect } from 'react';

function showPreLoader(){
  const loader = document.querySelector('#preloader');
  if (loader){
    loader.classList.add('show-preloader');
    document.body.style.overflow = 'hidden';
  }
}

function hidePreLoader() {
  const loader = document.querySelector('#preloader');
  if (loader) {
    setTimeout(() => {
      loader.classList.remove('show-preloader');
      document.body.style.overflow = '';
    }, 1000); 
  }
}

function App() {
  useEffect(() => {
    showPreLoader();
    window.addEventListener('load', hidePreLoader);

    return () => {
      window.removeEventListener('load', hidePreLoader);
    }
  })
  return (
    <>
        <div className="preloader" id='preloader'>
          <div className="spinner">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
        {/* Navbar */}
        <Navbar/>
        {/* Main */}
        <div className="side_left d-none d-lg-block">
          <div className="side">
              <a href="https://github.com/Kubaleek" target='_blank'>
                <i className="bi bi-github"></i>
              </a>
              <a href="https://www.instagram.com/kubalekweb/" target='_blank'>
                <i className="bi bi-instagram"></i>
              </a>
              <a href="https://www.linkedin.com/in/kuba-kr%C3%B3l-9b4946274/" target='_blank'>
                <i className="bi bi-linkedin mb-3"></i>
              </a>
          </div>
        </div>
        <div className="side_right d-none d-lg-block">
          <div className="side">
              <a href="mailto:kuba.krol.ldz@gmail.com">kuba.krol.ldz@gmail.com</a>
          </div>
        </div>
        {/* Footer */}
        <Footer/>
    </>
  )
}

export default App
