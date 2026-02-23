import { useState, useEffect } from "react"
import PostCard from "../components/PostCard"

export default function Feed() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    async function fetchData() {
        const res = await fetch("https://style-closet-w7-server.onrender.com/feed")
        const data = await res.json()
        setPosts(data)
    }
    fetchData()
  }, [])

  return (
    <div className="feed-page">
      <h3 className="feed-title">FEED</h3>

     <div className="feed-list">
        {posts.length > 0 ? (
        posts.map((post) => (
          <PostCard
          key={post.id} username={post.username} image_url={post.image_url} caption={post.caption}
          />
        ))
      ) : (
        <p>Loading...</p>
        )}
      </div>
      </div>
      ) 
}
