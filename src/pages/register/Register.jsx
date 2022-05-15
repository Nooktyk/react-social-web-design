import "./register.css";
import { useRef } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

export default function Register() {

    const username = useRef();
    const email = useRef();
    const password = useRef();
    const passwordAgain = useRef();
    const history = useHistory();

    const handleClick = async (e) => {
        e.preventDefault();
        if(passwordAgain.current.value !== password.current.value){
            passwordAgain.current.setCustomValidity("Password do not match!");
        }else{
            const user = {
                username: username.current.value,
                email: email.current.value,
                password: password.current.value,
            }
            
            try {
                await axios.post("/auth/register", user);
                history.push("/login");
                
            } catch (err) {
                console.log(err);
            }
        }
    };

    const login =()=>{
        window.location.href = "/login";
    }

  return (
    <div className="regis">
        <div className="regisWrapper">
            <div className="loginLeft">
                <h3 className="loginLogo">Dragon Ball Social</h3>
                <span className="regisDesc">
                    Connect with friends in Dragon Ball World.
                </span>
            </div>
            <div className="loginRight">
                <form className="regisBox" onSubmit={handleClick}>
                    <input placeholder="Username" 
                        required ref={username} 
                        className="loginInput" />
                    <input placeholder="Email" 
                        required ref={email} 
                        className="loginInput" type="email" />
                    <input placeholder="Password" 
                        required ref={password} 
                        className="loginInput" type="password" minLength="6"/>
                    <input placeholder="Password Again" 
                        required ref={passwordAgain} 
                        className="loginInput" type="password" />
                    <button className="loginButton" type="submit">Sign up</button>
                    <button className="loginRegisterButton" onClick={login}>
                        Log into Account
                    </button>
                </form>
            </div>
        </div>
    </div>
  )
};