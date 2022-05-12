import "./topbar.css";
import { Chat, Notifications, Person, Search } from "@mui/icons-material";

export default function Topbar() {
  return (
    <div className="topbarContainer">
        <div className="topbarLeft">
          <span className="logo">Social Media</span>
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
          <img src="https://www.nicepng.com/png/full/166-1667644_dbz-dragon-ball-z-transparent-dragonball-z-gohan.png" 
            alt="" className="topbarImg" />
        </div>
    </div>
  )
};
