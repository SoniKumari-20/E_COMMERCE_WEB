import React , { useContext, useEffect } from 'react'
import { Loading } from '../Loading'
import { MainContext } from './Context/MainProvider'

export const Todos = () => {
    const {AllTodos,  getAllTodo, loading } = useContext(MainContext)
    console.log(AllTodos)
useEffect(() => {
    getAllTodo();
}, [])

  return (
    <div>
        <h1 style={{marginTop:"25px", marginBottom: "25px"}}>
            TodoS List
        </h1>
        {
            loading ? <>
            <Loading />
            </>:
            <div className='container'>
                <table class="table table-info" style={{ textAlign: 'center', border:"1px solid black" }}>
                <thead  >
                    <tr className='table-info'  >
                        <th scope="col"  style={{border: "2px solid black", boxShadow: " 1px 2px 8px 4px pink"}}>Id</th>
                        <th scope="col"  style={{border: "2px solid black", boxShadow: " 1px 2px 8px 4px pink"}}>Todo</th>
                        <th scope="col"  style={{border: "2px solid black", boxShadow: " 1px 2px 8px 4px pink"}}>User ID</th>
                    </tr>
                </thead>
                <tbody >

                    {
                        AllTodos?.todos?.map((e, id) => 
                        <>
                                <tr className='table-primary' key={id}>
                                    <th scope="row"  style={{border: "2px solid black", boxShadow: " 1px 1px 8px 2px pink"}}>{id + 1}</th>
                                    <td  style={{border: "2px solid black", boxShadow: " 1px 1px 8px 2px pink"}}>{e?.todo}</td>
                                    <td  style={{border: "2px solid black" , boxShadow: " 1px 1px 8px 2px pink"}}>{e?.userId}</td>
                                </tr>
                            </>
                        )
                    }
</tbody>
            </table>
            </div>
        }

    </div>
  )
}
