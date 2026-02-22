import { useState, useEffect } from "react"
import PostCard from "../components/PostCard"

export default function Feed() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    async function fetchData() {
        const res = await fetch("http://localhost:3000/feed")
        const data = await res.json()
        setPosts(data)
    }
    fetchData()
  }, [])

  return (
    <div>
      <h3>FEED</h3>

     <div>
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
