import { Link } from "react-router";

export default function PostCard ({username, image_url, caption}) {
    
    return (
        <article className="post-card">
            <h3 className="post-username">
                <strong>{username}</strong>
                </h3>

            <div className="post-image">
            <img src={image_url} alt="User image"/> 
            </div> 

            <div className="post-body">
            <p className="caption">{caption}
            </p>
            </div>
        </article>
    )
}