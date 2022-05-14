import "./profile.css"
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Profile() {

  const [user,setUser] = useState({});

  useEffect(()=>{

    const fetchUser = async () => {
      const res = await axios.get(`/users?username=Black`);
      setUser(res.data);
    }
    fetchUser();
  },[]);  

  return (
    <>
    <Topbar/>
    <div className="profile">
      <Sidebar/>
      <div className="profileRight">
        <div className="profileRightTop">
          <div className="profileCover">
            <img src={user.coverPicture || "https://wallpaperaccess.com/full/4545965.png"} 
              alt="" className="profileCoverImg" />
            <img src={user.profilePicture || "https://www.pngitem.com/pimgs/m/135-1356450_gokus-hair-hd-png-download.png"}  
              alt="" className="profileUserImg" />
          </div>
          <div className="profileInfo">
            <h4 className="profileInfoName">{user.username}</h4>
            <span className="profileInfoDesc">{user.desc}</span>
          </div>
        </div>
        <div className="profileRightButtom">
          <Feed username="Gohan"/>
          <Rightbar user={user}/>
        </div>
      </div>
    </div>
    </>
  )
};
