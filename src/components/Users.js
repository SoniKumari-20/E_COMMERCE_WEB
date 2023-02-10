import React from 'react'
import { MainContext } from './Context/MainProvider'
import { useEffect, useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { Loading } from '../Loading'
import  ReactPaginate from 'react-paginate'


export const Users = () => {
    const { getAllUser, users, loading } = useContext(MainContext)
    const [skip, setskip] = useState(0)

    useEffect(() => {
        getAllUser()
    }, [])

    const handleOnPage = (data) => {
        console.log(data)
        let PageNo = data.selected + 1;
       setskip(PageNo)
        getAllUser(PageNo)
    }

    return (
        <>
        {
            loading ? <>
            <Loading />
            </> :
            <div className='container'>
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
                                    <th scope="row">{e?.id}</th>
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
            <ReactPaginate 
                                        previousLabel={"previous"}
                                        nextLabel={'next'}
                                    
                                        pageCount = {5}
                                        pageRangeDisplayed={3}
                                        marginPagesDisplayed={3}
                                        onPageChange = {handleOnPage}
                                        containerClassName={"pagination justify-content-center "}
                                        pageClassName={"page-item "}
                                        pageLinkClassName={"page-link"}
                                        previousClassName = { "page-item " }
                                        previousLinkClassName = { "page-link" }
                                        nextClassName = {"page-item"}
                                        nextLinkClassName = { "page-link" }
                                        activeClassName = {"active"}
                                        activeLinkClassName={"active-link"}
                                        >
                                            
                                        </ReactPaginate>
        </div>
        }
        </>
    )
}
