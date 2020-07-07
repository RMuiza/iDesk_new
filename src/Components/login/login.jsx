import React from "react";
import LoginImg from "../../login.svg";

export class Login extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return <div className="base-container">
            <div className="header">Login</div>
            <div className="Content">
                <div className="image">
                 <img src={LoginImg} alt=""/>
                </div>
                <div className="form">
                    <div className="form-group">
                        <label htmlFor="username">User Name  adnh</label>
                         <input type="text" name="username" placeholder="username"/>
                    </div>
                    <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" placeholder="password"/>
                </div>
                </div>
            </div>
            <div className="footer">
                <button type="button" className="btn">
                    Login
                    </button>
            </div>
        </div>
    }
}