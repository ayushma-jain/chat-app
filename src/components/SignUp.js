import React from 'react';

const SignUp = () => {
    return (
        <div className='i-box'>
            <h3 className='text-success'>Sign Up </h3>
            <div>
                <div>
                    <div>
                        <form action="">
                        <div className="form-outline mb-4">
                            <input type="text" id="form3Example3" className="form-control form-control-lg text-success"
                            placeholder="Enter a username" />
                            <label className="form-label" for="form3Example3">Username</label>
                            </div>
                        <div className="form-outline mb-4">
                            <input type="email" id="form3Example3" className="form-control form-control-lg text-success"
                            placeholder="Enter a Email Address" />
                            <label className="form-label" for="form3Example3">Email Address</label>
                            </div>
                        <div className="form-outline mb-4">
                            <input type="password" id="form3Example3" className="form-control form-control-lg text-success"
                            placeholder="Enter a Password" />
                            <label className="form-label" for="form3Example3">Password</label>
                            </div>
                        <div className="form-outline mb-4">
                           <input type="password" id="form3Example3" className="form-control form-control-lg text-success"
                            placeholder="Enter a Confirm Password" />
                            <label className="form-label" for="form3Example3">Confirm Password</label>
                        </div>
                        <div className="text-center text-lg-start mt-4 pt-2">
                         <button type="button" className="btn btn-success btn-lg">Submit</button>
                            <p className="small fw-bold mt-2 pt-1 mb-0">Already have an account? <a href="#!"
                                className="link-danger text-success">Login</a></p>
                        </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default SignUp;