import "./closeFriend.css";

export default function CloseFriend({user}) {

  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  return (
    <li className="sidebarFriend">
        <div className="sidebarGroupImg">
            <img src={
                user.profilePicture 
                  ? PF + user.profilePicture 
                  : PF + "default.png"} 
            alt="" className="sidbarFriendImg" />
        </div>
        <div className="sidebarGroupText">
        <span className="sidebarGoupTitle">{user.username}</span>
        <span className="sidebarGoupDesc">{user.desc}</span>
        </div>
    </li>
  )
};
