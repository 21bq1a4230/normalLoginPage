import React from "react";
import "./Login.css"

const Login = () =>{
    return(
        <div className="login-body">
            <div className="title">
                <label>A Generic Name</label>
            </div>
            <div className="flex-container">
                <div className="login-container">
                    <div className="logo">
                        <label> A Generic Logo </label>    
                    </div>                
                    <div className="form">
                        <div className="username">
                            <label> USERNAME </label>
                            <input type="text" className="in" />
                        </div>
                        <div className="input">
                            <label> Input </label>
                            <input type="password" className="in" />
                        </div>
                    </div>
                    <div className="Login">
                        <button>Login</button>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Login;