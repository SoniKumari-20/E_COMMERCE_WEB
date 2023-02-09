import React, { useContext, useEffect } from 'react'
import { Loading } from '../Loading';


import { MainContext } from './Context/MainProvider'

export const Comments = () => {
    const { AllComments, getAllComment, loading } = useContext(MainContext);
    console.log(AllComments)
    useEffect(() => {
        getAllComment()
    }, [])


    return (
        <div>
            <h1>Comments</h1>
            {
                loading ? <>
                    <Loading />
                </> :
                <>
        
                        <div className='container'>
                            <table class="table table-info" style={{ textAlign: 'center', border: "1px solid black" }}>
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
                        </div>
                </>
            
                
                    
}
                    </div>

  )
}
