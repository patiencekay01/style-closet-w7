import { Link } from "react-router";

export default function HomePage() {
    return (
        <div>
            <main>
                <section>
                    <h1> Style Closet</h1>
                    <p>Share your style & inspire the community </p>
                </section>

                <section className="image-gallery">
                    <img src="https://www.pngarts.com/files/1/Summer-Clothes-For-Women-PNG-High-Quality-Image.png" alt="Outfit 1" />
                    <img src="https://png.pngtree.com/png-vector/20250120/ourmid/pngtree-elegant-style-womens-suit-transparent-background-png-image_15278299.png" alt="Outfit 2" />
                    <img src="https://meshki.co.uk/cdn/shop/files/B1102024.07.08MESHKI_3158_ba2ccc96-cea2-4121-99b4-34f83c142e7e.png?v=1766703999&width=1946" alt="Outfit 3" />
                    <img src="https://www.transparentpng.com/download/women-bag/5n1fgv-red-textured-women-bag-png.png" alt="Outfit 4" />
                    <img src="https://static.vecteezy.com/system/resources/thumbnails/068/842/433/small/stylish-purple-skirt-with-comfortable-elastic-waistband-perfect-for-casual-outings-or-special-occasions-its-flowing-design-adds-elegance-and-charm-to-any-outfit-png.png" alt="Outfit 5" />

                </section>
            </main>
        </div>
    )
}