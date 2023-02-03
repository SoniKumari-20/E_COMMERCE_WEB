import React from 'react'

export default function Login() {
    return (
        <div>
            <div class="container1">
                
                <h1>Login</h1>
            <div style={{margin: "20px"}}>
                <label >Email or Phone</label>
                <input type="text" placeholder = "Enter Email" />
                <label>Password</label>
                <input type="password" placeholder = "Enter  Password" />
                {/* <a href="#">Forgot Password?</a> */}
                <button className = 'button'>Submit</button>
                {/* <div class="link">Not a member? <a href="#">Sigup here</a></div> */}
            </div>
            </div>


        </div>
    )
}
