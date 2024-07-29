import { Link } from "react-router-dom"

const Navigation = () => {
    return (
        <div className="container-fluid bg-dark px-0">
            <div className="row gx-0">
                <div className="col-lg-3 bg-dark d-none d-lg-block">
                    <Link to="/" className="navbar-brand w-100 h-100 m-0 p-0 d-flex align-items-center justify-content-center">
                        <h1 className="m-0 display-4 text-primary text-uppercase">Gymster</h1>
                    </Link>
                </div>
                <div className="col-lg-9">
                    <div className="row gx-0 bg-secondary d-none d-lg-flex">
                        <div className="col-lg-7 px-5 text-start">
                            <div className="h-100 d-inline-flex align-items-center py-2 me-4">
                                <i className="bi bi-envelope text-primary me-2"></i>
                                <h6 className="mb-0">info@example.com</h6>
                            </div>
                            <div className="h-100 d-inline-flex align-items-center py-2">
                                <i className="bi bi-telephone text-primary me-2"></i>
                                <h6 className="mb-0">+012 345 6789</h6>
                            </div>
                        </div>
                        <div className="col-lg-5 px-5 text-end">
                            <div className="d-inline-flex align-items-center py-2">
                                <Link className="btn btn-light btn-square rounded-circle me-2" to="">
                                    <i className="bi bi-facebook"></i>
                                </Link>
                                <Link className="btn btn-light btn-square rounded-circle me-2" to="">
                                    <i className="bi bi-twitter"></i>
                                </Link>
                                <Link className="btn btn-light btn-square rounded-circle me-2" to="">
                                    <i className="bi bi-linkedin"></i>
                                </Link>
                                <Link className="btn btn-light btn-square rounded-circle me-2" to="">
                                    <i className="bi bi-instagram"></i>
                                </Link>
                                <Link className="btn btn-light btn-square rounded-circle" to="">
                                    <i className="bi bi-youtube"></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <nav className="navbar navbar-expand-lg bg-dark navbar-dark p-3 p-lg-0 px-lg-5">
                        <Link to="/" className="navbar-brand d-block d-lg-none">
                            <h1 className="m-0 display-4 text-primary text-uppercase">Gymster</h1>
                        </Link>
                        <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                            <div className="navbar-nav mr-auto py-0">
                                <Link to="/" className="nav-item nav-link active">Home</Link>
                                <Link to="/about" className="nav-item nav-link">About</Link>
                                <Link to="/class" className="nav-item nav-link">Classes</Link>
                                <Link to="/trainers" className="nav-item nav-link">Trainers</Link>
                                <div className="nav-item dropdown">
                                    <Link to="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</Link>
                                    <div className="dropdown-menu rounded-0 m-0">
                                        <Link to="/blog" className="dropdown-item">Blog Grid</Link>
                                        <Link to="/detail" className="dropdown-item">Blog Detail</Link>
                                        <Link to="/testimonial" className="dropdown-item">Testimonial</Link>
                                    </div>
                                </div>
                                <Link to="/contact" className="nav-item nav-link">Contact</Link>
                            </div>
                            <Link to="/signin" className="btn btn-primary py-md-3 px-md-5 d-none d-lg-block">Join Us</Link>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default Navigation
