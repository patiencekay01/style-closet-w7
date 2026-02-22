import { Link } from "react-router";

export default function NavBar() {
    return (
        <div className="nav-bar">
            <h2>Style Closet</h2>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/feed">Feed</Link>
            </nav> 
        </div>
    )
}