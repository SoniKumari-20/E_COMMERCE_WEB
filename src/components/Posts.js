import React, { useContext, useEffect } from 'react'
import { Loading } from '../Loading'
import { MainContext } from './Context/MainProvider'

export const Posts = () => {
const { AllPosts,  getAllpost, loading } = useContext(MainContext)
console.log(AllPosts)

useEffect(() => {
    getAllpost()
},[])



  return (
    <div>
        <h1 style={{margin:'20px'}}>Posts</h1>
            {
                loading ? <>
                    <Loading />
                </> :
                <>
        
                        <div className='container'>
                            <table class="table table-info" style={{ textAlign: 'left', border: "1px solid black" }}>
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
                                                    <th scope="col" style={{ border: "2px solid black", boxShadow: " 1px 2px 8px 4px pink" }}>{e?.tags[0]+ ", "  + e?.tags[1] + ", " + e?.tags[2]}</th>
                                                    <th scope="col" style={{ border: "2px solid black", boxShadow: " 1px 2px 8px 4px pink" }}>{e?.reactions}</th>
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
