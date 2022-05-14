import "./rightbar.css";
import { Users } from "../../dummyData";
import Online from "../online/Online";

export default function Rightbar({user}) {

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
            {Users.map((u)=>(
              <Online key={u.id} user={u} />
            ))}
          </ul>
      </>
    )
  };

  const ProfileRightbar = () => {
    return (
      <>
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
        <h4 className="rightbarTitle">Photos</h4>
        <div className="rightbarFollowings">
          <div className="righbartFollowing">
            <img src="https://wallpapersmug.com/large/b25bfa/black-goku-and-trunks-dragon-ball-super.jpg" 
              alt="" className="rightbarFolowingImg" />
          </div>
          <div className="righbartFollowing">
            <img src="https://c4.wallpaperflare.com/wallpaper/839/639/657/dragon-ball-dragon-ball-z-dragon-ball-super-dragon-ball-xenoverse-2-hirudegarn-hd-wallpaper-preview.jpg" 
              alt="" className="rightbarFolowingImg" />
          </div>
          <div className="righbartFollowing">
            <img src="https://i.pinimg.com/736x/b8/27/e7/b827e77f3816f60585578e91103a3a16.jpg" 
              alt="" className="rightbarFolowingImg" />
          </div>
          <div className="righbartFollowing">
            <img src="https://wallpaperforu.com/wp-content/uploads/2021/07/Wallpaper-Dragon-Ball-Dragon-Ball-Z-Gohan-Dragon-Ball101920x1080.jpg" 
              alt="" className="rightbarFolowingImg" />
          </div>
          <div className="righbartFollowing">
            <img src="https://www.whatspaper.com/wp-content/uploads/2021/11/dragon-ball-z-wallpaper-whatspaper-9.jpg" 
              alt="" className="rightbarFolowingImg" />
          </div>
          <div className="righbartFollowing">
            <img src="https://p4.wallpaperbetter.com/wallpaper/410/227/670/dragon-ball-super-son-goku-ultra-instinct-goku-kamehameha-wallpaper-preview.jpg" 
              alt="" className="rightbarFolowingImg" />
          </div>
          <div className="righbartFollowing">
            <img src="https://a-static.besthdwallpaper.com/super-saiyan-goten-cchaak-dragon-ball-z-dragon-ball-legends-arts-samhrabedskth-p-wx-ll-pepexr-2800x1050-56134_88.jpg" 
              alt="" className="rightbarFolowingImg" />
          </div>
          <div className="righbartFollowing">
            <img src="https://www.whatspaper.com/wp-content/uploads/2021/09/hd-gogeta-wallpaper-whatspaper-17.jpg" 
              alt="" className="rightbarFolowingImg" />
          </div>
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
