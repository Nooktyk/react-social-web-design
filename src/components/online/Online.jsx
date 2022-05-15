import "./online.css";
import {Link} from "react-router-dom";

export default function Online({user}) {

  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  return (
    <Link
      to={`/profile/${user.username}`} 
      style={{textDecoration: "none"}}
    >
    <li className="rightbarFriend">
        <div className="rightbarProfileImgContainer">
        <img src={
                user.profilePicture 
                  ? PF + user.profilePicture 
                  : PF + "default.png"} 
            alt="" className="rightbarProfileImg" />
        <span className="rightbarOnline"></span>
        </div>
        <span className="rightbarUsername">{user.username}</span>
    </li>
    </Link>
  )
};
