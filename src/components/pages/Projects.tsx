import '../../styles/styles.css';

function Projects() {
  return (
    <main className="main px-lg-5 px-0">
         <section className="projects d-flex justify-content-center align-items-center" id="projects">
              <div className="container">
                  <hr className="line" />
                  <h3 className="my-4">Projekty</h3>
                  <div className="row">
                      <div className="col-lg-6 d-flex flex-column align-items-start justify-content-center d-none d-lg-block">
                          <div className="project-image">
                              <img src="/src/assets/img/project1.jpg" alt="projekt" />
                          </div>
                      </div>
                      <div className="col-lg-6">
                          <p className="project-overline text-lg-end text-start">Projekt</p>
                          <h4 className="project-title text-lg-end text-start">KubalekWeb</h4>
                          <p className="project-description text-lg-end text-start">
                              Witaj! Stworzyłem własne portfolio które stanowi wizualne
                              i funkcjonalne zaplecze do prezentacji moich umiejętności i projektów, zwracając uwagę na
                              estetykę i resposywność. Cały projekt został wykonany od zera przeze mnie.
                          </p>
                          <ul className="project-techs justify-content-lg-end justify-content-start">
                              <li className="me-3">HTML</li>
                              <li className="me-3">CSS</li>
                              <li className="me-3">Bootstrap</li>
                              <li>React</li>
                          </ul>
                          <p className="project-link justify-content-lg-end justify-content-start">
                              <a href="https://github.com/Kubaleek/portfolio" target='_blank'>
                                  <i className="bi bi-github"></i>
                              </a>
                              <a href="" target='_blank' className="ms-3">
                                  <i className="bi bi-box-arrow-up-right"></i>
                              </a>
                          </p>
                      </div>
                  </div>
              </div>
          </section>
    </main>
  );
}

export default Projects