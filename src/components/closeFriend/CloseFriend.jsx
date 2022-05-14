import "./closeFriend.css";

export default function CloseFriend({user}) {
  return (
    <li className="sidebarFriend">
        <img src={user.profilePicture}
            alt="" className="sidbarFriendImg" />
        <span className="sidebarFriendName">{user.username}</span>
    </li>
  )
};
