import { Link } from "react-router-dom"
import Navigation from "../components/Navigation"

function Signup() {
    return (
        <>
            <Navigation />
            <div className="row">
                <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                    <div className="card border-1 shadow rounded-3 my-5">
                        <div className="card-body p-4 p-sm-5">
                            <h5 className="card-title text-center mb-5 fw-bold fs-3 text-dark">Sign up</h5>
                            <form>
                                <div className="d-flex gap-3">
                                    <div className="form-floating mb-3">
                                        <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                                        <label for="floatingInput">First Name</label>
                                    </div>
                                    <div className="form-floating mb-3">
                                        <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                                        <label for="floatingInput">Last Name</label>
                                    </div>
                                </div>
                                <div className="form-floating mb-3">
                                    <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                                    <label for="floatingInput">Email address</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                                    <label for="floatingPassword">Password</label>
                                </div>

                                <div className="form-check mb-3">
                                    <input className="form-check-input" type="checkbox" value="" id="rememberPasswordCheck" />
                                    <label className="form-check-label" for="rememberPasswordCheck">
                                        Remember password
                                    </label>
                                </div>
                                <div className="d-grid">
                                    <button className="btn btn-primary btn-login text-uppercase fw-bold" type="submit">Sign
                                        up</button>
                                </div>
                                <hr className="my-4" />
                                <div className="d-grid mb-2">
                                    <button className="btn btn-google btn-login text-uppercase fw-bold" type="submit">
                                        <i class="bi bi-google"></i> Sign up with Google
                                    </button>
                                </div>
                                <div className="d-flex mt-3 align-items-center gap-2">
                                    <p className="m-0">Already have an account?</p>
                                    <Link to='/signin'>sign in</Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signup
