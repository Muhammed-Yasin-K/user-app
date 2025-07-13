import React from 'react'
import NavUser from './NavUser'

const Adduser = () => {
    return (
        <div>
            <NavUser/>
            <br />
            <div className="container">
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="container">
                            <div className="row g-3">
                                <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                    <label htmlFor="" className="form-label">Id</label>
                                    <input type="number" className="form-control" />
                                </div>
                                <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                    <label htmlFor="" className="form-label">Name</label>
                                    <input type="text" className="form-control" />
                                </div>
                                <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                    <label htmlFor="" className="form-label">Username</label>
                                    <input type="text" className="form-control" />
                                </div>
                                <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                    <label htmlFor="" className="form-label">Email</label>
                                    <input type="email" className="form-control" />
                                </div>
                                <h5>ADDRESS</h5>
                                <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                    <label htmlFor="" className="form-label">Street</label>
                                    <input type="text" className="form-control" />
                                </div>
                                <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                    <label htmlFor="" className="form-label">Suite</label>
                                    <input type="text" className="form-control" />
                                </div>
                                <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                    <label htmlFor="" className="form-label">City</label>
                                    <input type="text" className="form-control" />
                                </div>
                                <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                    <label htmlFor="" className="form-label">Zipcode</label>
                                    <input type="number" className="form-control" />
                                </div>
                                <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                    <label htmlFor="" className="form-label">Latitude</label>
                                    <input type="number" className="form-control" />
                                </div>
                                <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                    <label htmlFor="" className="form-label">Longitude</label>
                                    <input type="number" className="form-control" />
                                </div>
                                <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                    <label htmlFor="" className="form-label">Phone</label>
                                    <input type="number" className="form-control" />
                                </div>
                                <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                    <label htmlFor="" className="form-label">Website</label>
                                    <input type="text" className="form-control" />
                                </div>
                                <h3>Company</h3>
                                <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                    <label htmlFor="" className="form-label">Name</label>
                                    <input type="text" className="form-control" />
                                </div>
                                <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                    <label htmlFor="" className="form-label">CatchPhrase</label>
                                    <textarea name="" id="" className="form-control"></textarea>
                                </div>
                                <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                    <label htmlFor="" className="form-label">bs</label>
                                    <input type="text" className="form-control" />
                                </div>
                                <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                    <button className="btn btn-success">SUBMIT</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Adduser
