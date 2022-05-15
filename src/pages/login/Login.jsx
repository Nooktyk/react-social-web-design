import "./login.css";
import { useContext, useRef } from "react";
import { loginCall } from "../../apiCalls";
import { AuthContext } from "../../context/AuthContext";
import { CircularProgress } from "@mui/material";


export default function Login() {

    const email = useRef();
    const password = useRef();
    const { user, isFetching, error, dispatch} = useContext(AuthContext);

    const handleClick = (e) => {
        e.preventDefault();
        loginCall({
            email: email.current.value,
            password: password.current.value}, dispatch
        );
    };

    const register =()=>{
        window.location.href = "/register";
    }

  return (
    <div className="login">
        <div className="loginWrapper">
            <div className="loginLeft">
                <h3 className="loginLogo">Dragon Ball Social</h3>
                <span className="loginDesc">
                    Connect with friends in Dragon Ball World.
                </span>
            </div>
            <div className="loginRight">
                <form className="loginBox" onSubmit={handleClick}>
                    <input 
                        placeholder="Email" 
                        type="email" 
                        required
                        className="loginInput" 
                        ref={email} 
                    />
                    <input 
                        placeholder="Password" 
                        type="password" 
                        required
                        minLength="6"
                        className="loginInput" 
                        ref={password} 
                    />
                    <button className="loginButton" 
                        type="submit" disabled={isFetching}>
                        {isFetching 
                            ? <CircularProgress color="inherit" size="20px"/> 
                            : "Log in"}
                    </button>
                    <span className="loginForgot">Forgot Password</span>
                    <button className="loginRegisterButton" onClick={register}>
                        {isFetching 
                            ? <CircularProgress color="inherit" size="20px"/> 
                            : "Create a New Account"}
                    </button>
                </form>
            </div>
        </div>
    </div>
  )
};