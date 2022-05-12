import { MoreVert } from "@mui/icons-material";
import "./post.css";

export default function Post() {
  return (
    <div className="post">
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <img src="https://www.nicepng.com/png/full/166-1667644_dbz-dragon-ball-z-transparent-dragonball-z-gohan.png" 
                        alt="" className="postProfileImg" />
                    <span className="postUsername">Son Gohan</span>
                    <span className="postDate">1 day ago</span>
                </div>
                <div className="postTopRight">
                    <MoreVert/>
                </div>
            </div>
            <div className="postCenter">
                <span className="postText">My first post!</span>
                <img src="https://wallpaperaccess.com/full/4545965.png" 
                    alt="" className="postImg" />
            </div>
            <div className="postButtom">
                <div className="postBottomLeft">
                    <img src="assets/like.png" alt="" className="likeIcon" />
                    <img src="assets/heart.png" alt="" className="likeIcon" />
                    <span className="postlikeCounter">32 pepple like it</span>
                </div>
                <div className="postBottomRight">
                    <span className="postCommentText">9 comments</span>
                </div>
            </div>
        </div>
    </div>
  )
};
