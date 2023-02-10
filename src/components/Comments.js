import React, { useContext, useEffect, useState } from 'react'
import { Loading } from '../Loading';
import ReactPaginate from 'react-paginate'


import { MainContext } from './Context/MainProvider'

export const Comments = () => {
    const { AllComments, getAllComment, loading } = useContext(MainContext);
    console.log(AllComments)
    const [skip, setSkip] = useState(0);


    useEffect(() => {
        getAllComment()
    }, [])

    const handleOnPage = (data) => {
        // console.log(data)
        const PageNo = data.selected + 1;
        setSkip(PageNo)
        getAllComment(PageNo)
    }


    return (
        <div>
            <h1>Comments</h1>
            {
                loading ? <>
                    <Loading />
                </> :
                    <>

                        <div className='container'>
                            <table className="table table-info" style={{ textAlign: 'center', border: "1px solid black" }}>
                                <thead  >
                                    <tr className='table-info'  >
                                        <th scope="col" style={{ border: "2px solid black", boxShadow: " 1px 2px 8px 4px pink" }}>Id</th>
                                        <th scope="col" style={{ border: "2px solid black", boxShadow: " 1px 2px 8px 4px pink" }}>User's Name</th>
                                        <th scope="col" style={{ border: "2px solid black", boxShadow: " 1px 2px 8px 4px pink" }}>Comment</th>
                                        <th scope="col" style={{ border: "2px solid black", boxShadow: " 1px 2px 8px 4px pink" }}>Post ID</th>

                                    </tr>
                                </thead>
                                <tbody >

                                    {
                                        AllComments?.comments?.map((e, id) =>
                                            <>
                                                <tr className='table-primary' key={id}>
                                                    <th scope="row" style={{ border: "2px solid black", boxShadow: " 1px 1px 8px 2px pink" }}>{e?.id}</th>
                                                    <td style={{ border: "2px solid black", boxShadow: " 1px 1px 8px 2px pink" }}>{e?.user?.username}</td>
                                                    <td style={{ border: "2px solid black", boxShadow: " 1px 1px 8px 2px pink" }}>{e?.body}</td>
                                                    <th scope="col" style={{ border: "2px solid black", boxShadow: " 1px 2px 8px 4px pink" }}>{e?.postId}</th>

                                                </tr>
                                            </>
                                        )
                                    }
                                </tbody>
                            </table>
                            <ReactPaginate
                                previousLabel={"previous"}
                                nextLabel={'next'}
                                pageCount={17}
                                pageRangeDisplayed={2}
                                marginPagesDisplayed={8}
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
