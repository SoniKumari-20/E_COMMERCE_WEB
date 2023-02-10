import React, { useContext, useEffect, useState } from 'react'
import { Loading } from '../Loading'
import { MainContext } from './Context/MainProvider'
import ReactPaginate from 'react-paginate'

export const Todos = () => {
    const { AllTodos, getAllTodo, loading } = useContext(MainContext)
    // console.log(AllTodos)
    const [skip, setSkip] = useState(0)
    useEffect(() => {
        getAllTodo();
    }, [])

    const handleOnPage = (data) => {
        // console.log(data)
        const PageNo = data.selected + 1;
        // console.log(PageNo)
        setSkip(PageNo)
        getAllTodo(PageNo)

    }


    return (
        <div>
            <h1 style={{ marginTop: "25px", marginBottom: "25px" }}>
                TodoS List
            </h1>
            {
                loading ? <>
                    <Loading />
                </> :
                    <div className='container'>
                        <table className="table table-info" style={{ textAlign: 'center', border: "1px solid black" }}>
                            <thead  >
                                <tr className='table-info'  >
                                    <th scope="col" style={{ border: "2px solid black", boxShadow: " 1px 2px 8px 4px pink" }}>Id</th>
                                    <th scope="col" style={{ border: "2px solid black", boxShadow: " 1px 2px 8px 4px pink" }}>Todo</th>
                                    <th scope="col" style={{ border: "2px solid black", boxShadow: " 1px 2px 8px 4px pink" }}>User ID</th>
                                </tr>
                            </thead>
                            <tbody >

                                {
                                    AllTodos?.todos?.map((e, id) =>
                                        <>
                                            <tr className='table-primary' key={id}>
                                                <th scope="row" style={{ border: "2px solid black", boxShadow: " 1px 1px 8px 2px pink" }}>{e?.id}</th>
                                                <td style={{ border: "2px solid black", boxShadow: " 1px 1px 8px 2px pink" }}>{e?.todo}</td>
                                                <td style={{ border: "2px solid black", boxShadow: " 1px 1px 8px 2px pink" }}>{e?.userId}</td>
                                            </tr>
                                        </>
                                    )
                                }
                            </tbody>
                        </table>
                        <ReactPaginate
                            previousLabel={"previous"}
                            nextLabel={'next'}
                            pageCount={8}
                            pageRangeDisplayed={3}
                            marginPagesDisplayed={4}
                            onPageChange={handleOnPage}
                            containerClassName={"pagination justify-content-center"}
                            pageClassName={"page-item"}
                            pageLinkClassName={"page-link"}
                            previousClassName={"page-item "}
                            previousLinkClassName={"page-link"}
                            nextClassName={"page-item"}
                            nextLinkClassName={"page-link"}
                            activeClassName={"active"}
                        >

                        </ReactPaginate>
                    </div>

            }

        </div>
    )
}
