import { useState } from "react";
import PostForm from "../components/PostForm";

export default function PostOutfit() {
    
    return (
        <div> 
            <h3>NEW POST</h3>

            <PostForm />
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


    
    

    
