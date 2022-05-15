import "./rightbar.css";
import Online from "../online/Online";
import { useContext, useEffect, useState } from "react";
import {Link} from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import {Add, Remove} from "@mui/icons-material";
import axios from "axios";

export default function Rightbar({user}) {

  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const [friends,setFriends] = useState([]);
  const {user:currentUser, dispatch} = useContext(AuthContext);
  const [followed,setFollowed] = useState(null);
  const [other,setOther] = useState([]);

  useEffect(()=>{

    getOther();

  },[currentUser]);

  useEffect(()=>{

    setFollowed(currentUser.followings.includes(user?._id));
    getFriends();
    
  },[currentUser.followings,user]);

  const getFriends = async () => {

    try {
      const friendList = await axios.get(`/users/friends/${user._id}`);
      setFriends(friendList.data);

    } catch (err) {
      // console.log(err);
    }
  };

  const getOther = async () => {

    try{
      const otherList = await axios.get(`/users/${currentUser._id}/other`);
      setOther(otherList.data);

    } catch (err) {
      console.log(err);
    }
  };
  
  const handleClick = async () => {
    
    try{
      if (followed) {
        await axios.put(`/users/${user._id}/unfollow`, 
          {
            userId: currentUser._id,
          }
        );
        dispatch({type: "UNFOLLOW", payload: user._id});
      } else {
        await axios.put(`/users/${user._id}/follow`, 
          {
            userId: currentUser._id,
          }
        );
        dispatch({type: "FOLLOW", payload: user._id});
      }
      setFollowed(!followed);

    } catch (err) {
      console.log(err);
    }  
  };

  const HomeRightbar = () => {
    return(
      <>
          <div className="birthdayContainer">
            <img src="assets/gift.png" alt="" className="birthdayImg" />
            <span className="birthdayText">
              <b>Latest!</b> new experience with <b>Dragon Ball SuperHeroes</b> available now!!!. <b>more...</b>
            </span>
          </div>
          <img src={PF + "superhero.jpg"} 
            alt="" className="rightbarAd" />
          <h4 className="rightbarTitle">Other People</h4>
          <ul className="rightbarFriendList">
            {other.map((u)=>(
              <Online key={u._id} user={u} />
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
        <h4 className="rightbarTitle">Followings</h4>
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
