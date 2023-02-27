import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { getLoginUser } from './api';
import swal from 'sweetalert';
import './style.css'



export default function Login() {
const [userData, setUserData] = useState({
    username:'',
    password:''
})
const navigate = useNavigate()




 const DataCollection= (event) => {
    let { name , value } = event.target;
    // console.log(event)
    setUserData(state => ({
        ...state,
        [name] : value,
    }))
 }

const getloginData =  async () => {
    getLoginUser(userData).then((res) => {
        if(res.data.token){
            localStorage.setItem("Token" , res.data.token)
            navigate('/home')
            swal({
                title: "login successfully",
                text: "You Logged In SuccessFully!",
                icon: "success",
                button: "Done!",
              })
        }}
    ).catch(()=> 
    swal({
        title: "Invalid Credentials!",
        text: "Please check Your  username & Password!",
        icon: "error",
        button: "Oops!",
      })
    )
}


    return (
        <div>
            <div class="container1">
                
                <h1>Login</h1>
            <div style={{margin: "20px"}}>
                <label >Email or Phone</label>
                <input className='input' type="text" placeholder = "Enter username"  name='username' id='username' value={userData.username} onChange={ DataCollection} />
                <label>Password</label>
                <input className='input' type="password" placeholder = "Enter  Password"  name='password' id='password' value={userData.password}  onChange={ DataCollection}/>
                {/* <a href="#">Forgot Password?</a> */}
                <button className = 'Loginbtn' onClick={ getloginData}>Submit</button>
                {/* <div class="link">Not a member? <a href="#">Sigup here</a></div> */}
            </div>
            </div>


        </div>
    )
}
