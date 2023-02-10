import React, { useContext, useEffect, useState } from 'react'
import { Loading } from '../Loading'
import { MainContext } from './Context/MainProvider'
import ReactPaginate from 'react-paginate'

export const Posts = () => {
    const { AllPosts, getAllpost, loading } = useContext(MainContext)
    const [skip, setskip] = useState(0);
    console.log(AllPosts)

    useEffect(() => {
        getAllpost()
    }, [])

    const handleOnPage = (data) => {
        // console.log(data)
        const PageNo = data.selected + 1;
        setskip(PageNo)
        getAllpost(PageNo)
    }


    return (
        <div>
            <h1 style={{ margin: '20px' }}>Posts</h1>
            {
                loading ? <>
                    <Loading />
                </> :
                    <>

                        <div className='container'>
                            <table className="table table-info" style={{ textAlign: 'left', border: "1px solid black" }}>
                                <thead  >
                                    <tr className='table-danger'  >
                                        <th scope="col" style={{ border: "2px solid black", boxShadow: " 1px 2px 8px 4px pink" }}>Id</th>
                                        <th scope="col" style={{ border: "2px solid black", boxShadow: " 1px 2px 8px 4px pink" }}>Title</th>
                                        <th scope="col" style={{ border: "2px solid black", boxShadow: " 1px 2px 8px 4px pink" }}>Posts</th>
                                        <th scope="col" style={{ border: "2px solid black", boxShadow: " 1px 2px 8px 4px pink" }}>Tags</th>
                                        <th scope="col" style={{ border: "2px solid black", boxShadow: " 1px 2px 8px 4px pink" }}>Reactions</th>

                                    </tr>
                                </thead>
                                <tbody >

                                    {
                                        AllPosts?.posts?.map((e, id) =>
                                            <>
                                                <tr className='table-primary' key={id}>
                                                    <th scope="row" style={{ border: "2px solid black", boxShadow: " 1px 1px 8px 2px pink" }}>{e?.id}</th>
                                                    <td style={{ border: "2px solid black", boxShadow: " 1px 1px 8px 2px pink" }}>{e?.title}</td>
                                                    <td style={{ border: "2px solid black", boxShadow: " 1px 1px 8px 2px pink" }}>{e?.body}</td>
                                                    <th scope="col" style={{ border: "2px solid black", boxShadow: " 1px 2px 8px 4px pink" }}>{e?.tags[0] + ", " + e?.tags[1] + ", " + e?.tags[2]}</th>
                                                    <th scope="col" style={{ border: "2px solid black", boxShadow: " 1px 2px 8px 4px pink" }}>{e?.reactions}</th>
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
                                pageRangeDisplayed={2}
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
                    </>



            }

        </div>
    )
}
