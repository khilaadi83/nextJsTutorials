import React from 'react'

const About = () => {
  return (
    <div className="container py-5">
        <div className="row">
            <div className="col-lg-8 mx-auto">
                <h1 className="text-center mb-4">About Us</h1>
                <div className="card shadow">
                    <div className="card-body">
                        <h5 className="card-title">Our Story</h5>
                        <p className="card-text">
                            Welcome to our company! We are dedicated to providing exceptional services and solutions to our valued customers.
                        </p>
                        <p className="card-text">
                            With years of experience in the industry, we strive to deliver innovative solutions that meet and exceed our clients' expectations.
                        </p>
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col-md-6">
                        <div className="card shadow h-100">
                            <div className="card-body">
                                <h5 className="card-title">Our Mission</h5>
                                <p className="card-text">
                                    To empower businesses and individuals through cutting-edge technology and outstanding service.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card shadow h-100">
                            <div className="card-body">
                                <h5 className="card-title">Our Vision</h5>
                                <p className="card-text">
                                    To become the leading provider of innovative solutions in our industry while maintaining the highest standards of quality.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>  )
}

export default About
    