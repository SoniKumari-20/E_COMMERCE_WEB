import React from 'react'
import './AboutPage.css'
import { useState, useEffect } from 'react'
import { getSingleComment, getSinglepost, getSingleQuote, getSingleTodo, getSingleUser } from './api'
import { useParams } from 'react-router-dom'

export const SingleUsers = () => {
    const [singleUser, setSingleUser] = useState(null);
    const [SingleTodo, setSingleTodo] = useState(null);
    const [singleComment, setSingleComment] = useState(null);
    const [singlePost, setSinglePost] = useState(null);
    const [singleQuote, setSingleQuote] = useState(null);

    console.log(SingleTodo)


    const { id } = useParams();
    console.log(id)

    useEffect(() => {
        getSingleUser(id).then((res) => setSingleUser(res.data)).catch((err) => setSingleUser("error"))
        getSinglepost(id).then((res) => setSinglePost(res.data)).catch((err) => console.log("err"))
        getSingleTodo(id).then((res) => setSingleTodo(res.data)).catch((err) => console.log("err"))
        getSingleComment(id).then((res) => setSingleComment(res.data)).catch((err) => console.log("err"))
        getSingleQuote(id).then((res) => setSingleQuote(res.data)).catch((err) => console.log("err"))
    }, [])



    return (

        <div style={{ marginTop: "40px" }}>
            <h1>
                Single User
            </h1>
            <div className=' d-flex justify-content-space-between'>
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
                            <div style={{ width: "25px" }} >
                                <ul className={"d-flex flex-wrap"} >
                                    <li><i class="fa-solid fa-envelope"></i></li>
                                    <li><i class="fa-solid fa-phone"></i></li>
                                    <li><i class="fa-solid fa-graduation-cap"></i> </li>
                                    <li><i class="fa-solid fa-address-book"></i></li>
                                    <li> <i class="fa-solid fa-building-columns"></i></li>
                                    <li><i class="fa-solid fa-circle-info"></i></li>
                                </ul>
                            </div>
                            <div style={{ marginLeft: "5px", width: "230px", height: "180px" }}>
                                <ul className={"d-flex flex-wrap"}>
                                    <li> <u> {singleUser?.email}</u></li>
                                    <li>{singleUser?.phone}</li>
                                    <li>{singleUser?.university}</li>
                                    <li>{singleUser?.address?.address}</li>
                                    <li>{(singleUser?.bank?.cardNumber)}</li>
                                    <li>{(singleUser?.birthDate) + " , " + (singleUser?.bloodGroup) + " , " + (singleUser?.gender) + " , " + (singleUser?.height) + "cm  ,  " + (singleUser?.age) + " Years"}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='d-flex justify-content-space-evenly flex-wrap' style={{marginTop: "20px", marginLeft:"50px"}} >
                    <div class="card " style={{ width: "280px", margin:"10px"}} >
                        <div class="card-body" >
                            <h5 class="card-title">Todos</h5>
                            <p class="card-text">{SingleTodo?.todo}</p>

                        </div>
                    </div>
                    <div class="card" style={{ width: "280px", margin:"10px" }}>
                        <div class="card-body">
                            <h5 class="card-title">Quotes</h5>
                            <h6 class="card-subtitle mb-2 text-muted">{singleQuote?.author}</h6>
                            <p class="card-text">{singleQuote?.quote}</p>

                        </div>
                    </div>
                    <div class="card" style={{ width: "280px", margin:"10px" }} >
                        <div class="card-body">
                            <h5 class="card-title">Comments</h5>
                            <h6 class="card-subtitle mb-2 text-muted">{singleComment?.user?.username}</h6>
                            <p class="card-text">{singleComment?.body}</p>

                        </div>
                    </div>
                    <div class="card" style={{ width: "880px", margin:"10px" }}>
                        <div class="card-body">
                            <h5 class="card-title">Posts</h5>
                            <h6 class="card-subtitle mb-2 text-muted">{singlePost?.title}</h6>
                            <p class="card-text">{singlePost?.body}</p>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    

    )
}
