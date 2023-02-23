import React, { useCallback } from 'react'
import './style.css'
import { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { MainContext } from './Context/MainProvider'
import { Loading } from '../Loading'
import { _ } from 'lodash'
import ReactPaginate from 'react-paginate'
import { getCategoryProducts, getFilterProducts } from './api/index'


export const Home = () => {
    const [skipNo, setSkipNo] = useState(0);
    const { allItems, getProducts, productLoading, category, setAllItems, cartItemData, alltypedata, setProductLoading} = useContext(MainContext);
    const [categoryObj,setCategoryObj] = useState({})

    const handleOnPage = (data) => {
        let PageNo = data.selected + 1;
        getProducts(PageNo)
        setSkipNo(PageNo)
    }

    const getFilterCategoryObjProducts = (items) => {
        if(items=== "ALL"){
            setAllItems(cartItemData)
        }else{
        let prodTemp = []
        Object.values(categoryObj).forEach((val)=>{
            prodTemp = [...prodTemp,...val]
        })
        // prodTemp.
        setAllItems({products:prodTemp.reverse()})}
    }

    useEffect(()=>{
        getFilterCategoryObjProducts()
    },[categoryObj])


    // useEffect(() => {
    //     FilterALLCategoryData()
    //    setFilterObj(filterobj)
    // }, [filter])

    

    useEffect(() => { }, [allItems])
    const getFilterProductsData = (productCategory) => {
        const { value } = productCategory.target;
        getFilterProducts(value).then((res) => { setAllItems(res.data) }).catch((err) => console.log(err))
    }


    const debounce = (fun, d) => {
        let timer;
        return function (...args) {
            let context = this;
            if (timer) clearTimeout(timer);
            timer = setTimeout(() => {
                timer = null
                fun.apply(context, args)
            }, d);
        }
    }
    const betterPerformance = useCallback(debounce(getFilterProductsData, 1000))

    const handleFetchCategory = async (itemName) => {
        setProductLoading(true)
        let categoryObjTemp = {...categoryObj};
        if(categoryObjTemp[itemName]){
            delete categoryObjTemp[itemName]
        }else{
            let response = await getCategoryProducts(itemName);
            categoryObjTemp[itemName] = response?.data?.products;
            setProductLoading(false)
        }
        setCategoryObj(categoryObjTemp)
    }

    console.log(categoryObj,"cate")

    return (
        <div>
            <h1>
                HOME
            </h1>
            <div className='d-flex justify-content-space-between'>
            <span className='AddProducts'>
                ADD Product
            <Link to="/addProducts">
            <i className='fa fa-plus'></i></Link>
            </span>
            

            <input type='text' className='searchBox' placeholder='search products' onChange={betterPerformance}></input>
            </div>
            <div className='d-flex justify-content-center'>
                <div className='CategoryBtns' style={{ width: "70%" }}>
                    <div style={{ margin: "4px" }}>
                        <button className={`btn ${categoryObj["ALL"] ?"btn-light" : "btn-outline-light" }`} style={{ width: "145px" }} onClick={() => getFilterCategoryObjProducts("ALL")}>ALL</button>
                    </div>
                    {
                        category.map((items) =>
                            <div style={{ margin: "4px" }}>
                                <button className={`btn ${categoryObj[items] ?"btn-light" : "btn-outline-light" }`}
                                    style={{ width: "145px" }}
                                    onClick={() => handleFetchCategory(items)}>{items}</button>
                            </div>
                        )
                    }
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
                                                    <h5 className="card-title">{(items?.title).substring(0, 18)}</h5>
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
                            pageCount={6}
                            pageRangeDisplayed={3}
                            marginPagesDisplayed={3}
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
