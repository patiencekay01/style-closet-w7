import { useState } from "react";
import PostForm from "../components/PostForm";

export default function PostOutfit() {
    
    return (
        <div className="post-page">
            <div className="post-page-title">
            <h3>NEW POST</h3>
        </div>
        
        <div className="post-page"> 
            <PostForm />
        </div>
        </div>
    )
}

async function handleSubmit(e) {
    e.preventDefault()
    const res = await fetch(`http://localhost:3000/`, {
      headers : {
            "Content-Type": "application/json"
        },
        method: "POST",
        body: JSON.stringify()
    })  
    }


    
    

    
