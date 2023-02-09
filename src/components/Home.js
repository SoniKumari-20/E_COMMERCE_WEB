import React from 'react'
import './style.css'
import { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { MainContext } from './Context/MainProvider'
import { Loading } from '../Loading'
import { _ } from 'lodash'

import ReactPaginate from 'react-paginate'
import { getPageNo, getAllProductsData } from './api'

 
 export const Home = () => {
    
    const [skipNo, setSkipNo] = useState(0)
    let numberIs = 20
    const { allItems, loading, getProducts, productLoading } = useContext(MainContext);
    console.log(allItems)




    const handleOnPage = (data) => {
        console.log(data)
        let PageNo = data.selected + 1;
        
        getProducts(PageNo)
        setSkipNo(PageNo)
       
    }


    return (
        <div>
            <h1>
                HOME
            </h1>
            {
                productLoading ? <>
                    <Loading />
                </> :

                    <div className='margin '>
                        <div className="container-fluid  text-center">
                            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 ">
                                {
                                    allItems?.products?.map((items, id) =>
                                        <div className="col-sm my-4" key={id}>
                                            <div className="card  cart_item  box1 " key={id + 1} >
                                                <img className="card-img-top" src={items?.images[0]} alt="Card image cap" height={"200px"} />
                                                <div className="card-body text-center " height={"230px"} width={"230px"}>
                                                    <h5 className="card-title">{(items?.title).substring(0,18)}</h5>
                                                    <p className="card-text">{(items?.description).substring(0, 18)}...</p>
                                                    <h6>$ {items?.price}</h6>
                                                    <div className="d-grid gap-2">
                                                        <Link to={'/About/' + items?.id} style={{ display: "block" }} className='btn btn-primary fluid' >
                                                            Buy Now!!
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                            </div>
                        </div>
                                        <ReactPaginate 
                                        previousLabel={"previous"}
                                        nextLabel={'next'}
                                        pageCount = {5}
                                        pageRangeDisplayed={2}
                                        marginPagesDisplayed={2}
                                        onPageChange = {handleOnPage}
                                        containerClassName={"pagination justify-content-center"}
                                        pageClassName={"page-item"}
                                        pageLinkClassName={"page-link"}
                                        previousClassName = { "page-item " }
                                        previousLinkClassName = { "page-link" }
                                        nextClassName = {"page-item"}
                                        nextLinkClassName = { "page-link" }
                                        activeClassName = {"active"}
                                        >
                                            
                                        </ReactPaginate>
                    </div>
                    
            }

            
        </div>
    )
}
