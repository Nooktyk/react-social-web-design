import "./register.css";

export default function Register() {
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
                <div className="regisBox">
                    <input placeholder="Username" className="loginInput" />
                    <input placeholder="Email" className="loginInput" />
                    <input placeholder="Password" className="loginInput" />
                    <input placeholder="Password again" className="loginInput" />
                    <button className="loginButton">Sign up</button>
                    <button className="loginRegisterButton">
                        Log into Account
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
};