import { Link } from "react-router";

export default function HomePage() {
    const images = [
        "https://www.pngarts.com/files/1/Summer-Clothes-For-Women-PNG-High-Quality-Image.png",
        "https://png.pngtree.com/png-vector/20250120/ourmid/pngtree-elegant-style-womens-suit-transparent-background-png-image_15278299.png",
        "https://meshki.co.uk/cdn/shop/files/B1102024.07.08MESHKI_3158_ba2ccc96-cea2-4121-99b4-34f83c142e7e.png?v=1766703999&width=1946",        
        "https://www.transparentpng.com/download/women-bag/5n1fgv-red-textured-women-bag-png.png",
        "https://static.vecteezy.com/system/resources/thumbnails/068/842/433/small/stylish-purple-skirt-with-comfortable-elastic-waistband-perfect-for-casual-outings-or-special-occasions-its-flowing-design-adds-elegance-and-charm-to-any-outfit-png.png" 
    ];

    return (
      <main>  
            <div className="home">
                <section className="title">
                    <h1> Style Closet</h1>
                    <p className="tagline">Share your style & inspire the community </p>
                </section>

                <section className="image-gallery">
                    {images.map((src, i) => {
                        const top = Math.random() * 300;
                        const left = Math.random() * 80;

                        return (
                        <img key={i} src={src} alt={`Outfit ${i + 1}`}
                            style={{
                            top: `${top}px`,
                            left: `${left}vw`,
                            width: "190px",
                            height: "225px",
                            borderRadius: "10px"
                           }}
                        />
                        );
                    })}
                 </section>

                 <section className="homepage-buttons">
                    <Link to="/feed">
                    <button>Explore Feed</button>
                    </Link>

                    <Link to="/postoutfit">
                    <button>New Post</button>
                    </Link>
                </section>
            </div>
        </main>
       
    )
}