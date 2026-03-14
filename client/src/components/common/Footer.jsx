import { Link } from "react-router-dom"
import { FiFacebook, FiTwitter, FiInstagram, FiYoutube, FiArrowRight } from "react-icons/fi"

function Footer() {
    return (
        <footer className="bg-[#e4e4e4] pt-12 pb-10 mt-auto border-t border-gray-200">
            <div className="container-luxury max-w-[1240px] flex flex-col md:flex-row justify-between gap-8 mb-16 px-4">

                {/* Columns */}
                <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

                    <div>
                        <h4 className="font-bold mb-4 text-[#222]">SHOP</h4>
                        <ul className="flex flex-col gap-3 text-[13px] text-[#222]">
                            <li><Link to="/shop?category=Women" className="hover:underline">Women</Link></li>
                            <li><Link to="/shop?category=Men" className="hover:underline">Men</Link></li>
                            <li><Link to="/shop?category=Accessories" className="hover:underline">Accessories</Link></li>
                            <li><Link to="/shop" className="hover:underline">All Products</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold mb-4 text-[#222]">ABOUT</h4>
                        <ul className="flex flex-col gap-3 text-[13px] text-[#222]">
                            <li><Link className="hover:underline">About Orchestyle</Link></li>
                            <li><Link className="hover:underline">Sustainability</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold mb-4 text-[#222]">HELP</h4>
                        <ul className="flex flex-col gap-3 text-[13px] text-[#222]">
                            <li><Link className="hover:underline">Customer Service</Link></li>
                            <li><Link to="/account" className="hover:underline">My Account</Link></li>
                            <li><Link className="hover:underline">Find a Store</Link></li>
                            <li><Link className="hover:underline">Legal & Privacy</Link></li>
                            <li><Link className="hover:underline">Contact</Link></li>
                        </ul>
                    </div>
                </div>

                {/* Newsletter & Socials */}
                <div className="w-full md:w-[350px] flex flex-col pt-4 md:pt-0 border-t md:border-t-0 border-gray-300 md:border-l md:pl-8">


                    <div className="flex gap-6 text-[22px] text-[#222]">
                        <a href="#" className="hover:text-hm-red transition-colors"><FiInstagram /></a>
                        <a href="#" className="hover:text-hm-red transition-colors"><FiYoutube /></a>
                        <a href="#" className="hover:text-hm-red transition-colors"><FiFacebook /></a>
                        <a href="#" className="hover:text-hm-red transition-colors"><FiTwitter /></a>
                    </div>
                </div>
            </div>

            <div className="container-luxury text-center px-4 border-t border-gray-300 pt-8">
                <p className="text-[11px] text-[#444] leading-relaxed max-w-xl mx-auto mb-6">
                    The content of this site is copyright-protected and is the property of Orchestyle OS. Orchestyle's business concept is to offer fashion and quality at the best price in a sustainable way.
                </p>
                <div className="text-[42px] text-[#C19B4C] leading-none" style={{ fontFamily: '"Fleur De Leah", cursive' }}>
                    Orchestyle
                </div>
                <p className="text-[11px] font-bold text-[#666]">Nigeria</p>
            </div>
        </footer>
    )
}

export default Footer