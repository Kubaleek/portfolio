import '../../styles/styles.css';
import Project1 from "../../assets/img/project1.jpg";

function Projects() {
  return (
    <main className="main px-lg-5 px-0">
         <section className="projects d-flex justify-content-center align-items-center" id="projects">
              <div className="container">
                  <hr className="line" />
                  <h1 className="my-4">Projekty</h1>
                  <div className="row">
                      <div className="col-lg-6 d-flex flex-column align-items-start justify-content-center d-none d-lg-block">
                          <div className="project-image">
                            <img src={Project1} alt="projekt" />
                          </div>
                      </div>
                      <div className="col-lg-6">
                          <p className="project-overline text-lg-end text-start">Projekt</p>
                          <h2 className="project-title text-lg-end text-start">KubalekWeb</h2>
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
                                <a href="https://github.com/Kubaleek/portfolio" target='_blank' aria-label="Link to Github">
                                    <i className="bi bi-github"></i>
                                </a>
                              <a href="https://kubaleek.github.io/portfolio/" className="ms-3" aria-label="Link to Portfolio">
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