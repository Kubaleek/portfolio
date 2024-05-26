import "./footer.css";
function Footer() {
    return (
<footer className="footer">
    <div className="container">
        <div className="footer-brand d-flex">KubalekWeb</div>
        <hr className="line" />
        <div className="d-flex justify-content-between flex-wrap align-items-center">
            <div className="col-lg d-flex align-items-center">
                <p>
                © 2024 Kuba "Kubalek" Król
                </p>
            </div>
            <div className="col-lg d-flex justify-content-end">
                <p>
                    <a href="https://github.com/Kubaleek" target='_blank' className="me-3" aria-label="Link to Github"> 
                        <i className="bi bi-github"></i>
                    </a>
                    <a href="https://www.instagram.com/kubalekweb/" target='_blank' className="me-3" aria-label="Link to Instagram">
                        <i className="bi bi-instagram"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/kuba-kr%C3%B3l-9b4946274/" target='_blank' aria-label="Link to Linkedin">
                        <i className="bi bi-linkedin mb-3"></i>
                     </a>
                </p>
            </div>
        </div>
    </div>
</footer>
    )
}

export default Footer