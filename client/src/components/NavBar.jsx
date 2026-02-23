import { Link } from "react-router";

export default function NavBar() {
    return (
    <nav className="nav-bar"> 
        <div className="nav-logo">
            <h2>Style Closet</h2>
            </div>

            <div className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/feed">Feed</Link>
            <Link to="/postoutfit">Create new post</Link>
            </div>
    </nav> 
    )
}