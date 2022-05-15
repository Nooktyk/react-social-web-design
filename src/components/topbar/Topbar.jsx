import "./topbar.css";
import { Chat, Notifications, Person, Search } from "@mui/icons-material";
import {Link} from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

export default function Topbar() {

  const {user} = useContext(AuthContext);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  const logout =()=>{
    window.localStorage.removeItem('user');
    window.location.href = '/login';
  };

  return (
    <div className="topbarContainer">
        <div className="topbarLeft">
          <img src="https://www.pngplay.com/wp-content/uploads/12/Shenron-PNG-HD-Quality.png" 
            alt="" className="logoImg" />
          <Link to="/" className="logo" style={{textDecoration:"none"}}>
            <span >Dragon Ball Social World</span>
          </Link>
        </div>
        <div className="topbarCenter">
          <div className="searchbar">
            <Search className="searchIcon"/>
            <input placeholder="Search for friend, post or video" 
              className="searchInput"/>
          </div>
        </div>
        <div className="topbarRight">
          <div className="topbarLinks">
            <button className="topbarButton" onClick={()=>logout()}>Log out</button>
            {/* <span className="topbarLink">Timeline</span> */}
          </div>
          <div className="topbarIcons">
            <div className="topbarIconItem">
              <Person/>
              <span className="topbarIconBadge">1</span>
            </div>
            <div className="topbarIconItem">
              <Chat/>
              <span className="topbarIconBadge">1</span>
            </div><div className="topbarIconItem">
              <Notifications/>
              <span className="topbarIconBadge">1</span>
            </div>
          </div>
          <Link to={`/profile/${user.username}`} className="topbarProfileLink"><b>{user.username}</b></Link>
          <Link to={`/profile/${user.username}`}>
            <img src={
                user.profilePicture 
                  ? PF + user.profilePicture 
                  : PF + "default.png"} 
              alt="" className="topbarImg" />
          </Link>
        </div>
    </div>
  )
};
