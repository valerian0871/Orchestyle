import { useState } from "react"
import { Link } from "react-router-dom"
import { FiSearch, FiHeart, FiShoppingBag, FiUser } from "react-icons/fi"

function Navbar() {
    const [isSearchOpen, setIsSearchOpen] = useState(false)

    return (
        <header className="w-full bg-white sticky top-0 z-50 shadow-sm">

            {/* Main Header Container */}
            <div className="hidden lg:flex items-center justify-between container-luxury mx-auto py-3">

                {/* Left side (Logo + Nav Links) container */}
                <div className="flex items-center flex-1">

                    {/* Left: Logo (Stylized Text) */}
                    <div className="flex-shrink-0 mr-12 mt-1">
                        <Link to="/" className="text-[42px] text-[#C19B4C] leading-none" style={{ fontFamily: '"Fleur De Leah", cursive' }}>
                            Orchestyle
                        </Link>
                    </div>

                    {/* Center-Left: Main Navigation Categories (All Caps) */}
                    <nav className="flex gap-x-6 text-[12px] font-medium tracking-widest text-[#222]">
                        <Link className="hover:text-[#C19B4C] hover:underline underline-offset-4 uppercase">BRACELETS</Link>
                        <Link className="hover:text-[#C19B4C] hover:underline underline-offset-4 uppercase">NECKPIECES</Link>
                        <Link className="hover:text-[#C19B4C] hover:underline underline-offset-4 uppercase">BAGS</Link>
                        <Link className="hover:text-[#C19B4C] hover:underline underline-offset-4 uppercase">WAISTBEADS</Link>
                        <Link className="hover:text-[#C19B4C] hover:underline underline-offset-4 uppercase">ANKLETS</Link>
                        <Link className="hover:text-[#C19B4C] hover:underline underline-offset-4 uppercase">EARRINGS</Link>
                    </nav>

                </div>

                {/* Right: Search, Account & Cart Links */}
                <div className="flex-shrink-0 flex items-center gap-6 text-[#222]">

                    {/* Search Icon / Toggle */}
                    <div className="relative flex items-center justify-end">
                        {isSearchOpen && (
                            <input
                                type="text"
                                placeholder="Search products"
                                className="w-[180px] border-b border-[#222] outline-none pb-1 pr-6 text-[13px] bg-transparent text-[#666] mr-2 transition-all duration-300 animate-fade-in"
                                autoFocus
                            />
                        )}
                        <FiSearch
                            className={`text-[20px] cursor-pointer hover:text-[#C19B4C] transition-colors ${isSearchOpen ? 'absolute right-0 top-1/2 -translate-y-1/2 text-lg' : ''}`}
                            onClick={() => setIsSearchOpen(!isSearchOpen)}
                        />
                    </div>

                    <div className="flex items-center hover:text-[#C19B4C] cursor-pointer transition-colors">
                        <FiUser className="text-[20px] ml-4" />
                    </div>
                    <div className="flex items-center hover:text-[#C19B4C] cursor-pointer transition-colors">
                        <FiHeart className="text-[20px]" />
                    </div>
                    <div className="flex justify-center items-center hover:text-[#C19B4C] cursor-pointer transition-colors relative">
                        <FiShoppingBag className="text-[20px]" />
                        <span className="absolute -bottom-[6px] -right-[6px] bg-[#222] text-[#e0a96d] text-[10px] w-[14px] h-[14px] rounded-full flex items-center justify-center font-bold">0</span>
                    </div>
                </div>

            </div>

            {/* Mobile Header */}
            <div className="lg:hidden flex items-center justify-between p-3 border-b sticky top-0 bg-white z-50">
                <div className="flex items-center gap-4">
                    <button className="text-xl">☰</button>
                    <FiSearch className="text-xl" onClick={() => setIsSearchOpen(!isSearchOpen)} />
                </div>

                <Link to="/" className="text-[36px] text-[#C19B4C] leading-none mt-1" style={{ fontFamily: '"Fleur De Leah", cursive' }}>
                    Orchestyle
                </Link>

                <div className="flex gap-4">
                    <FiUser className="text-xl hidden sm:block" />
                    <FiHeart className="text-xl" />
                    <FiShoppingBag className="text-xl" />
                </div>
            </div>
            {/* Mobile Search Input Overlay (Conditional) */}
            {isSearchOpen && (
                <div className="lg:hidden p-3 border-b bg-gray-50 flex justify-center animate-fade-in">
                    <input
                        type="text"
                        placeholder="Search products..."
                        className="w-full max-w-sm border-b border-[#222] outline-none pb-1 bg-transparent text-sm focus:border-[#C19B4C]"
                        autoFocus
                    />
                </div>
            )}
        </header>
    )
}

export default Navbar