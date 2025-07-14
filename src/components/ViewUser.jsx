import React, { useEffect, useState } from 'react'
import NavUser from './NavUser'
import axios from 'axios';

const ViewUser = () => {
    const [users, setUsers] = useState(
        []
    );
 const fetchdata=()=>{
    axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
        setUsers(response.data)
    }
    ).catch()
}

useEffect(() => {
    fetchdata()
}, [])
    return (
        <div>
            <NavUser />
            <br />
            <div className="container-fluid px-5">
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <table className="table table-striped table-bordered">
                            <thead className="table-dark">
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Street</th>
                                    <th>Suite</th>
                                    <th>City</th>
                                    <th>Zipcode</th>
                                    <th>Lat</th>
                                    <th>Lng</th>
                                    <th>Phone</th>
                                    <th>Website</th>
                                    <th>Company</th>
                                    <th>CatchPhrase</th>
                                    <th>BS</th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.map((value, index) => (
                                    <tr key={index}>
                                        <td>{value.id}</td>
                                        <td>{value.name}</td>
                                        <td>{value.email}</td>
                                        <td>{value.address.street}</td>
                                        <td>{value.address.suite}</td>
                                        <td>{value.address.city}</td>
                                        <td>{value.address.zipcode}</td>
                                        <td>{value.address.geo.lat}</td>
                                        <td>{value.address.geo.lng}</td>
                                        <td>{value.phone}</td>
                                        <td>{value.website}</td>
                                        <td>{value.company.name}</td>
                                        <td>{value.company.catchPhrase}</td>
                                        <td>{value.company.bs}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        </div>
         </div>
    )
}

export default ViewUser
