import '../../styles/styles.css';
import logo from "../../assets/img/Logo.png";
import Project1 from "../../assets/img/project1.jpg";

function Home() {
    return (
        <main className="main px-lg-5 px-0">
            <section className="hero d-flex justify-content-center align-items-center" id="hero">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 d-flex flex-column align-items-start justify-content-center">
                            <hr className="line" />
                            <h1>Kuba "Kubalek" Król</h1>
                            <h2>Junior Frontend Developer</h2>
                            <p>
                                Cześć! Witaj na mojej stronie portfolio. Jestem programistą Frontend, specjalizuję się w tworzeniu stron internetowych.
                            </p>
                        </div>
                        <div className="col-lg-6 d-flex justify-content-center align-items-center d-lg-block d-none">
                            <img src={logo} alt="logo" width={"400px"} height={"400px"} className="logo-anim img-fluid" />
                        </div>
                    </div>
                </div>
            </section>
            <section className="about d-flex justify-content-center align-items-center" id="about">
                <div className="container">
                    <hr className="line" />
                    <h2 className="my-4">O Mnie</h2>
                    <p>
                        Uczę się w Technikum Programistycznym. Moją wielką pasją jest projektowanie nowoczesnych, responsywnych i estetycznych stron internetowych.
                        Każdy nowy projekt to dla mnie nie tylko okazja do zdobycia doświadczenia, ale także szansa na rozwijanie mojego portfolio.
                        Aktualnie stawiam sobie za cel dalszą naukę, zdobywanie nowej wiedzy i rozwijanie umiejętności
                    </p>
                    <p>
                        Oto kilka technologii, które nimi pracuje:
                    </p>
                    <ul className="skills-list">
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>Javascript</li>
                        <li>Bootstrap</li>
                        <li>Git</li>
                        <li>React</li>
                        <li>Typescript</li>
                    </ul>
                    <p>
                        Oraz Inne:
                    </p>
                    <ul className="skills-list">
                        <li>PHP</li>
                        <li>MySQL</li>
                        <li>C#</li>
                        <li>Figma</li>
                        <li>Wordpress</li>
                    </ul>
                </div>
            </section>
            <section className="projects d-flex justify-content-center align-items-center" id="projects">
                <div className="container">
                    <hr className="line" />
                    <h3 className="my-4">Ostatnie Projekty</h3>
                    <div className="row">
                        <div className="col-lg-6 d-flex flex-column align-items-start justify-content-center d-none d-lg-block">
                            <div className="project-image">
                                <img src={Project1} alt="projekt" />
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

export default Home