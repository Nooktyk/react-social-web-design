import "./topbar.css";
import { Chat, Notifications, Person, Search } from "@mui/icons-material";
import {Link} from "react-router-dom";

export default function Topbar() {
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
            <span className="topbarLink">Homepage</span>
            <span className="topbarLink">Timeline</span>
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
          <Link to="/profile" className="topbarProfileLink"><b>Black Goku</b></Link>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcHFvbwQldZBq8qLQOUH-gGx6mLwK2PGj58w&usqp=CAU" 
            alt="" className="topbarImg" />
        </div>
    </div>
  )
};
