import "./closeFriend.css";

export default function CloseFriend({user}) {
  return (
    <li className="sidebarFriend">
        <div className="sidebarGroupImg">
            <img src={user.profilePicture}
            alt="" className="sidbarFriendImg" />
        </div>
        <div className="sidebarGroupText">
        <span className="sidebarGoupTitle">{user.username}</span>
        <span className="sidebarGoupDesc">{user.desc}</span>
        </div>
    </li>
  )
};
