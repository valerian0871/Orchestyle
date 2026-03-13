import { Link } from "react-router-dom"
import { FiFacebook, FiTwitter, FiInstagram, FiYoutube, FiArrowRight } from "react-icons/fi"

function Footer() {
    return (
        <footer className="bg-[#e4e4e4] pt-12 pb-20 mt-auto">
            <div className="container-luxury max-w-[1240px] flex flex-col md:flex-row justify-between gap-8 mb-16 px-4">

                {/* Columns */}
                <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div>
                        <h4 className="font-bold mb-4 text-[#222]">SHOP</h4>
                        <ul className="flex flex-col gap-3 text-[13px] text-[#222]">
                            <li><Link className="hover:underline">Women</Link></li>
                            <li><Link className="hover:underline">Men</Link></li>
                            <li><Link className="hover:underline">Baby</Link></li>
                            <li><Link className="hover:underline">Kids</Link></li>
                            <li><Link className="hover:underline">Orchestyle HOME</Link></li>
                            <li><Link className="hover:underline">Beauty</Link></li>
                            <li><Link className="hover:underline">Student Discount</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold mb-4 text-[#222]">CORPORATE INFO</h4>
                        <ul className="flex flex-col gap-3 text-[13px] text-[#222]">
                            <li><Link className="hover:underline">Career at Orchestyle</Link></li>
                            <li><Link className="hover:underline">About Orchestyle group</Link></li>
                            <li><Link className="hover:underline">Sustainability</Link></li>
                            <li><Link className="hover:underline">Press</Link></li>
                            <li><Link className="hover:underline">Investor Relations</Link></li>
                            <li><Link className="hover:underline">Corporate Governance</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold mb-4 text-[#222]">HELP</h4>
                        <ul className="flex flex-col gap-3 text-[13px] text-[#222]">
                            <li><Link className="hover:underline">Customer Service</Link></li>
                            <li><Link className="hover:underline">My Account</Link></li>
                            <li><Link className="hover:underline">Find a Store</Link></li>
                            <li><Link className="hover:underline">Legal & Privacy</Link></li>
                            <li><Link className="hover:underline">Contact</Link></li>
                            <li><Link className="hover:underline">Gift Card</Link></li>
                        </ul>
                    </div>
                </div>

                {/* Newsletter & Socials */}
                <div className="w-full md:w-[350px]">
                    <h4 className="font-bold mb-4 text-[#222]">BECOME A MEMBER</h4>
                    <p className="text-[13px] mb-4 text-[#222] leading-relaxed">
                        Join now and get 10% off your next purchase!
                    </p>
                    <Link className="inline-flex items-center text-[13px] font-bold hover:text-hm-red transition-colors mb-8 group">
                        READ MORE <FiArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
                    </Link>

                    <div className="flex gap-6 text-[22px] text-[#222]">
                        <a href="#" className="hover:text-hm-red transition-colors"><FiInstagram /></a>
                        <a href="#" className="hover:text-hm-red transition-colors"><FiYoutube /></a>
                        <a href="#" className="hover:text-hm-red transition-colors"><FiFacebook /></a>
                        <a href="#" className="hover:text-hm-red transition-colors"><FiTwitter /></a>
                    </div>
                </div>
            </div>

            <div className="container-luxury text-center px-4">
                <p className="text-[11px] text-[#444] leading-relaxed max-w-xl mx-auto mb-6">
                    The content of this site is copyright-protected and is the property of Orchestyle OS. Orchestyle's business concept is to offer fashion and quality at the best price in a sustainable way.
                </p>
                <div className="text-[34px] font-bold tracking-tighter text-hm-red mb-2" style={{ fontFamily: 'Georgia, serif' }}>
                    Orchestyle
                </div>
                <p className="text-[11px] font-bold text-[#666]">Nigeria</p>
            </div>
        </footer>
    )
}

export default Footer