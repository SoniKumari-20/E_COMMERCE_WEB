import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { Loading } from '../Loading';
import { getSingleProduct } from './api';
import { useContext } from 'react';
import { MainContext } from './Context/MainProvider';
import { Carousel } from 'react-responsive-carousel';
import './style.css'

import "react-responsive-carousel/lib/styles/carousel.min.css";

import  img1 from './Screenshot (206).png'


export const About = () => {
    const [item, setItem] = useState(null);
    const [loading, setLoading] = useState(false);
    const { handleAddDataIntoCart } = useContext(MainContext);
    const { id } = useParams();

    console.log(id)

    useEffect(() => {
        setLoading(true);
        getSingleProduct(id).then((res) => { setItem(res.data); setLoading(false) }).catch((err => setItem([])))
    }, [])

    // function handleAddToCart(id) {
    //     handleAddDataIntoCart(id)

    // }




    return (
        <div >
            <h1>About</h1>
            {
                loading ?
                    <>
                        <Loading />
                    </> :
                    <div className='outerCrow' >
                            <div className='crrrr d-flex justify-content-center'>
                        <Carousel showArrows={true} style={{innerHeight:500}}  >
                        
   <div className='craousel'><img src={item?.images[0]} ></img></div>
   <div className='craousel'><img src={item?.thumbnail}></img></div>
   <div className='craousel'><img src={item?.images[1]}></img></div>

                        </Carousel>
                    </div>
                    </div>



            }



        </div>
    )
}
