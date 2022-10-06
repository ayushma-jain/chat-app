import React from 'react';

const SignIn = () => {
    return (
        <div className='i-box'>
            <h3 className='text-success'>Sign In </h3>
            <div className='container-fluid h-custom'>
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-md-12 col-lg-12 col-xl-12 offset-xl-1">
                        <form action="">

                        <div className="form-outline mb-4">
                            <input type="email" id="form3Example3" className="form-control form-control-lg"
                            placeholder="Enter a valid email address" />
                            <label className="form-label" for="form3Example3">Email address</label>
                        </div>
                        <div className="form-outline mb-3">
                            <input type="password" id="form3Example4" className="form-control form-control-lg"
                            placeholder="Enter password" />
                            <label className="form-label" for="form3Example4">Password</label>
                        </div>
                        <div className="d-flex justify-content-between align-items-center">

                        <div className="form-check mb-0">
                            <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
                            <label className="form-check-label" for="form2Example3">
                                Remember me
                            </label>
                            </div>
                            <a href="#!" className="text-body">Forgot password?</a>
                        </div>
                        <div className="text-center text-lg-start mt-4 pt-2">
                            <button type="button" className="btn btn-primary btn-lg">Login</button>
                            <p className="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <a href="#!"
                                className="link-danger">Register</a></p>
                        </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default SignIn;