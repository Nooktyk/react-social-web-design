import "./rightbar.css";
import { OnlineFriend } from "../../dummyData";
import Online from "../online/Online";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import {Add, Remove} from "@mui/icons-material";

export default function Rightbar({user}) {

  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const [friends,setFriends] = useState([]);
  const {user:currentUser, dispatch} = useContext(AuthContext);
  const [followed,setFollowed] = useState(null);

  useEffect(()=>{
    setFollowed(currentUser.followings.includes(user?._id));
    
  },[user]);

  useEffect(()=>{

    const getFriends = async () => {

      try{
        const friendList = await axios.get("/users/friends/" + user?._id);
        setFriends(friendList.data);

      }catch(err){}
    };
    getFriends();

  },[user?._id]);

  const handleClick = async () => {
    
    try{
      if(followed){
        await axios.put(`/users/${user._id}/unfollow`, {
          userId: currentUser._id,
        });
        dispatch({type: "UNFOLLOW", payload: user._id});
      }else{
        await axios.put(`/users/${user._id}/follow`, {
          userId: currentUser._id,
      });
      dispatch({type: "FOLLOW", payload: user._id});
    }
    setFollowed(!followed);
    }catch(err){
    }  
  };

  const HomeRightbar = () => {
    return(
      <>
          <div className="birthdayContainer">
            <img src="assets/gift.png" alt="" className="birthdayImg" />
            <span className="birthdayText">
              <b>Goten</b> and <b>3 other friends</b> have a birthday today.
            </span>
          </div>
          <img src="https://www.wordstream.com/wp-content/uploads/2021/07/persuasive-ads-coca-cola-1.jpg" 
            alt="" className="rightbarAd" />
          <h4 className="rightbarTitle">Online Friends</h4>
          <ul className="rightbarFriendList">
            {OnlineFriend.map((u)=>(
              <Online key={u.id} user={u} />
            ))}
          </ul>
      </>
    )
  };

  const ProfileRightbar = () => {
    return (
      <>
      {user.username !== currentUser.username && (
        <button className="rightbarFollowbButton"
          onClick={handleClick}>
          {followed ? "Unfollow" : "Follow"}
          {followed ? <Remove /> : <Add />}
        </button>
      )}
        <h4 className="rightbarTitle">Personel Information</h4>
        <div className="rightbarInfo">
          <div className="rightInfoItem">
            <span className="rightInfoKey">City:</span>
            <span className="rightInfoValue">{user.city}</span>
          </div>
          <div className="rightInfoItem">
            <span className="rightInfoKey">From:</span>
            <span className="rightInfoValue">{user.from}</span>
          </div>
          <div className="rightInfoItem">
            <span className="rightInfoKey">Status:</span>
            <span className="rightInfoValue">
              {user.relationship === 1 
                ? "Single"
                : user.relationship === 2
                ? "Married"
                : "-" }
            </span>
          </div>
        </div>
        <h4 className="rightbarTitle">Friends</h4>
        <div className="rightbarFollowings">
          {friends.map((friend) => (
            <Link 
              key={friend.username} 
              to={`/profile/${friend.username}`} 
              style={{textDecoration: "none"}}
            >
              <div className="righbartFollowing">
                <img
                  src={
                    friend.profilePicture 
                      ? PF + friend.profilePicture 
                      : PF + "default.png"
                  }
                  alt="" 
                  className="rightbarFolowingImg" 
                />
                <span className="rightbarFollowingName">{friend.username}</span>
              </div>
            </Link>
          ))}
        </div>
      </>
    )
  };

  return (
    <div className="rightbar">
        <div className="rightbarWrapper">
          {user ? <ProfileRightbar /> : <HomeRightbar />}
        </div>
    </div>
  )
};
