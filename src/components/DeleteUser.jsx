import React from 'react'
import NavUser from './NavUser'

const DeleteUser = () => {
  return (
    <div>
        <NavUser/>
        <br />
       <h1 className="text-center">Delete User</h1>
      <div className="container">
        <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <div className="row g-3">
                    <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <label htmlFor="" className="form-label">Enter name of the user:</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="button btn btn-danger">Delete</div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default DeleteUser
