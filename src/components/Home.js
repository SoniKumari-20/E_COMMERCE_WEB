import React from 'react'
import './style.css'
import { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { MainContext } from './Context/MainProvider'
import { Loading } from '../Loading'
import { _ } from 'lodash'
import ReactPaginate from 'react-paginate'
import { getCategoryProducts  } from './api/index'


export const Home = () => {
    const [skipNo, setSkipNo] = useState(0);
    
    const [ProductsCategory, setProductsCategory] = useState("ALL")
    const { allItems, getProducts, productLoading, category } = useContext(MainContext);
     
    // console.log(allItems)

   

    const handleOnPage = (data) => {
        // console.log(data)
        let PageNo = data.selected + 1;
        getProducts(PageNo)
        setSkipNo(PageNo)
    }

const handleFetchCategory = (category) => {
    console.log(category)
    if(category === "ALL"){
        console.log(allItems)
    }
    else{
        getCategoryProducts(category).then((res) => console.log(res.data)).catch((err) => console.log([]))
    }
   console.log(category)
}


    return (
        <div>
            <h1>
                HOME
            </h1>
            <div className="container" style={{ width: "300px" }}>
          <div className="dropdown"  >
            <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  {ProductsCategory}
            </button>
            <ul className="dropdown-menu">
              <li className="btn btn-light  " style={{ height: 40, width: 250, margin: 2 }}  onClick={ () => handleFetchCategory("ALL")}>ALL</li>
              {category.map((item) => (
                <li className="btn btn-light  " style={{ height: 40, width: 250, margin: 2 }} onClick={ () => handleFetchCategory(item)} >{item}</li>
              ))}
            </ul>
          </div>
        </div>
    
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
