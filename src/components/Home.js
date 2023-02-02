import React from 'react'
import './style.css'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { MainContext } from './Context/MainProvider'

export const Home = () => {

    const { allItems } = useContext(MainContext);
    console.log(allItems)


    return (
        <div>
            <h1>
                HOME
            </h1>
            <div className='margin '>
                <div className="container-fluid  text-center">
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 ">
                        {
                            allItems?.products?.map((items, id) =>
                                <div className="col-sm my-4" key={id}>
                                    <div className="card  cart_item  box1 " key={id + 1} >
                                        <img className="card-img-top" src={items?.images[0]} alt="Card image cap" height={"200px"} />
                                        <div className="card-body text-center " height={"230px"} width={"230px"}>
                                            <h5 className="card-title">{items?.category}</h5>
                                            <p className="card-text">{(items?.title).substring(0, 18)}...</p>
                                            <div className="d-grid gap-2">
                                                <Link to='/About' style={{ display: "block" }} className='btn btn-primary fluid' >
                          Bye Now!!
                        </Link>
                        
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                    </div>
                </div>
            </div>
        </div>
    )
}
