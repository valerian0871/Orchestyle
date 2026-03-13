import { Link } from "react-router-dom"
import { FiSearch, FiHeart, FiShoppingBag, FiUser } from "react-icons/fi"

function Navbar() {
    return (

        <header className="border-b border-borderLuxury">

            <div className="container-luxury flex items-center justify-between py-6">

                <nav className="hidden md:flex gap-8">
                    <Link className="nav-link">Shop</Link>
                    <Link className="nav-link">Neckpieces</Link>
                    <Link className="nav-link">Bracelets</Link>
                    <Link className="nav-link">Anklets</Link>
                    <Link className="nav-link">Waist Beads</Link>
                    <Link className="nav-link">Bags</Link>
                </nav>

                <div className="text-xl tracking-widest font-semibold">
                    ORCHESTYLE
                </div>

                <div className="flex gap-6 text-lg">
                    <FiSearch />
                    <FiHeart />
                    <FiShoppingBag />
                    <FiUser />
                </div>

            </div>

        </header>

    )
}

export default Navbar