import React from 'react'
import './style.css'
import { useState, useEffect } from 'react'
import { getSingleUser } from './api'
import { useParams } from 'react-router-dom'
 
export const SingleUsers = () => {
    const [ singleUser, setSingleUser] = useState({});
    const {  id } = useParams;
    console.log(id)

    useEffect(() => {
    getSingleUser(id).then((res) => console.log(res.data)).catch((err) => setSingleUser("error"))
    },[])



    return (
        <div>Users
            <div class="content">
                <div class="card one">
                    <div class="top">
                        <div class="title">Basic</div>
                        <div class="price-sec">
                            <img src={singleUser?.users?.image} alt=''></img>
                        </div>
                    </div>
                    <div class="info">Limited features you will get on this package or plan</div>
                    <div class="details">
                        <div class="one">
                            <span>One Addons Domain</span>
                            <i class="fas fa-check"></i>
                        </div>
                        <div class="one">
                            <span>100GB Local Storage</span>
                            <i class="fas fa-check"></i>
                        </div>
                        <div class="one">
                            <span>Lifetime Tech Support</span>
                            <i class="fas fa-times"></i>
                        </div>
                        <div class="one">
                            <span>Unlimited Data Transfer</span>
                            <i class="fas fa-times"></i>
                        </div>
                        <button>Purchase</button>
                    </div>
                </div>

            </div>
        </div>

    )
}
