import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Loading } from '../Loading';
import { getSingleProduct } from './api';
import { useContext } from 'react';
import { MainContext } from './Context/MainProvider';
import { Carousel } from 'react-responsive-carousel';
import './AboutPage.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";



export const About = () => {
    const [item, setItem] = useState(null);
    const [loading, setLoading] = useState(false);
    const { handleAddDataIntoCart } = useContext(MainContext);
    const { id } = useParams();

    // console.log(id)

    useEffect(() => {
        setLoading(true);
        getSingleProduct(id).then((res) => { setItem(res.data); setLoading(false) }).catch((err => setItem([])))
    }, [])

    function handleAddToCart(id) {
        handleAddDataIntoCart(id)

    }




    return (
        <div >
            <h1> 
            <Link to='/home'> <i class="fa-solid fa-home"></i></Link>
                About</h1>
            {
                loading ?
                    <>
                        <Loading />
                    </> : <>
                        <div className='d-flex justify-content-center' style={{marginTop:"20px"}}>
                            <div class="Container">
                                <div class="box one">
                                    <div class="details">
                                        <div class="topic">Description</div>
                                        <p>{item?.description}</p>
                                        <div class="rating">
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <h5>{item?.rating}</h5>
                                        </div>
                                        <div class="price-box">
                                            <div class="discount">{item?.discountPercentage} % </div>
                                            <div class="price">${item?.price}</div>
                                        </div>
                                    </div>
                                    <div class="button1">
                                        <button onClick={() => handleAddToCart(item?.id)}>Add To Cart</button>
                                        <Link to={`/updateProducts/${item?.id}`   } ><button >UpdateProducts</button></Link>
                                    </div>
                                </div>
                                <div class="box two">
                                    <div class="image-box">
                                        <div class="image">


                                            <Carousel showArrows={true} style={{ width: "300px" }} >
                                                <div className='craousel'><img src={item?.images[0]} height='150px'  ></img></div>
                                                <div className='craousel'><img src={item?.thumbnail} height='150px'></img></div>
                                                <div className='craousel'><img src={item?.images[1]} height='150px'></img></div>

                                            </Carousel>

                                            {/* <!---<img src="images/camera.png" alt="">----> */}
                                        </div>
                                        <div class="info">
                                            <div class="brand">{item?.brand}</div>
                                            <div class="name">{item?.title}</div>
                                            <div class="shipping">FREE SHIPPING</div>
                                            <div class="button2">
                                                <Link to='/cartitems'><button>Go To Cart  <i class="fa-solid fa-arrow-right"></i></button></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>



                        </div>
                    </>



            }




        </div>
    )
}
