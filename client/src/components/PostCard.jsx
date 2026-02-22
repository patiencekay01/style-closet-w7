import { Link } from "react-router";

export default function PostCard ({username, image_url, caption}) {
    
    return (
        <div className="post-card">
            <h3>{username}</h3> 
            <img src={image_url} alt="User image"/> 
            <p className="caption">{caption}</p>
        </div>
    )
}