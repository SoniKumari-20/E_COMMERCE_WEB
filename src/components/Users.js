import React from 'react'
import { MainContext } from './Context/MainProvider'
import { useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'


export const Users = () => {
    const { getAllUser, users } = useContext(MainContext)

    useEffect(() => {
        getAllUser()
    }, [])
    return (
        <div>
            <h1>
                !!      All Users !!
            </h1>

            <table class="table table-light" style={{ textAlign: 'left' }}>
                <thead>
                    <tr className='table-dark'  >
                        <th scope="col">Id</th>
                        <th scope="col">Image</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">DOB</th>
                        <th scope="col">Phone No.</th>
                        <th scope="col">university</th>
                        <th scope='col'>City</th>
                        <th scope='col'> View </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users?.users?.map((e, id) =>
                            <>
                                <tr className='table-danger' key={id}>
                                    <th scope="row">{id + 1}</th>
                                    <td ><img src={e.image} alt='' height='60px' width='60px'></img></td>
                                    <td>{(e?.firstName) + " " + (e?.lastName)}</td>
                                    <td>{e?.email}</td>
                                    <td>{e?.birthDate}</td>
                                    <td>{e?.phone}</td>
                                    <td>{e?.university}</td>
                                    <td>{e?.address.city}</td>
                                    <td><Link to={'/Singleuser/'+ e?.id}><button className='btn btn-danger ' >View</button></Link></td>
                                </tr>
                            </>


                        )
                    }
                </tbody>
            </table>
        </div>
    )
}
