import "./profile.css"
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function Profile() {

  const [user,setUser] = useState({});
  const username = useParams().username;
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  useEffect(()=>{

    const fetchUser = async () => {
      const res = await axios.get(`/users?username=${username}`);
      setUser(res.data);
    }
    fetchUser();
  },[username]);  

  return (
    <>
    <Topbar/>
    <div className="profile">
      <Sidebar/>
      <div className="profileRight">
        <div className="profileRightTop">
          <div className="profileCover">
            <img src={user.coverPicture ? PF+user.coverPicture : PF + "kamehouse.jpg"} 
              alt="" className="profileCoverImg" />
            <img src={user.profilePicture ? PF+user.profilePicture : PF+ "default.png"}  
              alt="" className="profileUserImg" />
          </div>
          <div className="profileInfo">
            <h4 className="profileInfoName">{user.username}</h4>
            <span className="profileInfoDesc">{user.desc}</span>
          </div>
        </div>
        <div className="profileRightButtom">
          <Feed username={username}/>
          <Rightbar user={user}/>
        </div>
      </div>
    </div>
    </>
  )
};
