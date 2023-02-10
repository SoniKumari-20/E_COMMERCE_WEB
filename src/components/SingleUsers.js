import React from 'react'
import './AboutPage.css'
import { useState, useEffect } from 'react'
import { getSingleUser } from './api'
import { useParams } from 'react-router-dom'

export const SingleUsers = () => {
    const [singleUser, setSingleUser] = useState(null);
    const { id } = useParams();
    console.log(id)

    useEffect(() => {
        getSingleUser(id).then((res) => setSingleUser(res.data)).catch((err) => setSingleUser("error"))
    }, [])



    return (

        <div style={{ marginTop: "40px" }}>
            <h1>
                Single User
            </h1>
            <div className='d-flex justify-content-center'>
                <div class="wrapper ">
                    <div class="card front-face">
                        <img src={singleUser?.image} alt="" />
                    </div>
                    <div class="card back-face">
                        <img src={singleUser?.image} alt="" />
                        <div class="info">
                            <div class="title">{(singleUser?.firstName) + " " + (singleUser?.lastName)}</div>
                            <hr></hr>
                        </div>
                        <div className='d-flex  justify-content-space-evenly ' >
                            <div style={{ width: "25px"}} >
                                <ul className={"d-flex flex-wrap"} > 
                                    <li><i class="fa-solid fa-envelope"></i></li>
                                    <li><i class="fa-solid fa-phone"></i></li>
                                    <li><i class="fa-solid fa-graduation-cap"></i> </li>
                                    <li><i class="fa-solid fa-address-book"></i></li>
                                    <li> <i class="fa-solid fa-building-columns"></i></li>
                                    <li><i class="fa-solid fa-circle-info"></i></li>

                                </ul>
                            </div>
                            <div style={{marginLeft: "5px",width: "230px",height:"180px"}}>
                                <ul className={"d-flex flex-wrap"}>
                                    <li> <u> {singleUser?.email}</u></li>
                                    <li>{singleUser?.phone}</li>
                                    <li>{singleUser?.university}</li>
                                    <li>{singleUser?.address?.address}</li>
                                    <li>{(singleUser?.bank?.cardNumber)}</li>
                                    <li>{(singleUser?.birthDate) + " , " + (singleUser?.bloodGroup) + " , " +(singleUser?.gender) + " , " + (singleUser?.height) + "cm  ,  " +(singleUser?.age) + " Years" }</li>

                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
