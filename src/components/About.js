import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { Loading } from '../Loading';
import { getSingleProduct } from './api';

export const About = () => {
    const [item, setItem] = useState("");
    const [loading, setLoading] = useState(false)
    const { id } = useParams();
    console.log(id)

    useEffect(() => {
        setLoading(true)
        getSingleProduct(id).then((res) => { setItem(res.data); setLoading(false) }).catch((err => setItem([])))
    }, [])




    return (
        <div>
            <h1>About</h1>
            {
                loading ?
                    <>
                        <Loading />
                    </> :
                    <div class="container">
                        <div class="box one">
                            <div class="details">
                                <div class="topic">Description</div>
                                <p>{item?.description}</p>
                                <div class="rating">
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>


                                </div>
                                <div class="price-box">
                                    <div class="discount">{item?.discountPercentage}</div>
                                    <div class="price">{item?.price}</div>
                                </div>
                            </div>
                            <div class="button1">
                                <button>Add To Cart</button>
                            </div>
                        </div>
                        <div class="box two">
                            <div class="image-box">
                                <div class="image">
                                    <img src={item?.thumbnail} alt="" />
                                </div>
                                <div class="info">
                                    <div class="brand">{item?.brand}</div>
                                    <div class="name">{item?.title}</div>
                                    <div class="shipping">FREE SHIPPING</div>
                                    <div class="button2">
                                        <button>Go To Cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>



            }



        </div>
    )
}
