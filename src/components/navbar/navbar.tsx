import "./navbar.css";
import "../../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
function Navbar() {
    return (
        <header className="header py-4">
            <nav className="navbar navbar-expand-lg">
                <div className="container d-flex align-items-center">
                    <a className="navbar-brand">
                        KubalekWEB
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mt-lg-0 mt-3">
                            <li className="nav-item">
                                <a className="nav-link py-2 px-3 me-lg-3  me-0 mb-lg-0 mb-3" aria-current="page">
                                    Home
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link py-2 px-3 me-lg-3 me-0 mb-lg-0 mb-3" aria-current="page">
                                    Projekty
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Navbar