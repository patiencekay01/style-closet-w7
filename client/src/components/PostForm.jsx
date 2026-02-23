import { useState} from "react";

export default function PostForm({onPostCreated}) {
    const [username, setUsername] = useState("")
    const [image_url, setImageUrl] = useState("")
    const [caption, setCaption] = useState("")
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [error, setError] = useState("")

    async function handleSubmit(e) {
        e.preventDefault()
        setError("")
        setIsSubmitting(true)

    try {
        const postRes = await fetch("http://localhost:3000/posts", {
            method: "POST",
            headers: { 
                "Content-Type": "application/json", 
            },
            body: JSON.stringify({username, image_url, caption}),
        })
    if (!postRes.ok) {
        const message = await postRes.text()
        throw new Error(message || "Failed to create post")
      }

    const newPost = await newPost.json()

    if (onPostCreated) onPostCreated(newPost)

    setUsername("")
    setImageUrl("")
    setCaption("")
    } catch (err) {
      console.error(err)
      setError("Could not publish outfit. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }    

    return (
        <form onSubmit={handleSubmit}>
      <label htmlFor="username">Username</label>
      <input
        id="username"
        name="username"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
      />

      <label htmlFor="image_url">Image link</label>
      <input
        id="image_url"
        name="image_url"
        placeholder="Image link"
        value={image_url}
        onChange={(e) => setImageUrl(e.target.value)}
        required
      />

        <label htmlFor="caption">Caption</label>
      <textarea
        id="caption"
        name="caption"
        placeholder="Caption"
        value={caption}
        onChange={(e) => setCaption(e.target.value)}
      />

      {error ? <p>{error}</p> : null}

      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Publishing..." : "Publish Outfit"}
      </button>
    </form>
  )
}

   