import { Link } from "react-router-dom"
import { FiHeart } from "react-icons/fi"

function Trending() {
    const products = [
        { id: 1, title: "Amethyst Bracelet", subtitle: "Handcrafted", price: "₦15,000", image: "https://images.unsplash.com/photo-1599643477874-11884e8aae2f?q=80&w=1964&auto=format&fit=crop" },
        { id: 2, title: "Gold Plated Anklet", subtitle: "Premium Quality", price: "₦8,500", image: "https://images.unsplash.com/photo-1515562141207-7a8efbac34bc?q=80&w=2073&auto=format&fit=crop" },
        { id: 3, title: "Rose Quartz Beads", subtitle: "Natural Stone", price: "₦12,000", image: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?q=80&w=1964&auto=format&fit=crop" },
        { id: 4, title: "Tiger Eye Necklace", subtitle: "Adjustable", price: "₦22,000", image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=2070&auto=format&fit=crop" },
    ]

    return (
        <section className="px-4 md:px-6 mb-16">
            <h2 className="text-xl md:text-2xl font-bold mb-6 text-center md:text-left">Trending right now</h2>
            <div className="flex overflow-x-auto pb-4 gap-4 snap-x hide-scrollbar">
                {products.map((product) => (
                    <div key={product.id} className="min-w-[75vw] sm:min-w-[40vw] md:min-w-[250px] lg:min-w-[300px] snap-center group cursor-pointer">
                        <div className="relative aspect-[3/4] bg-gray-100 mb-3 overflow-hidden">
                            <img src={product.image} alt={product.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                            <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                                <button className="p-2 bg-white rounded-full hover:bg-gray-100">
                                    <FiHeart className="text-xl" />
                                </button>
                            </div>
                        </div>
                        <h3 className="text-sm font-semibold">{product.title}</h3>
                        <p className="text-xs text-gray-500 mb-1">{product.subtitle}</p>
                        <p className="text-sm font-medium text-hm-red">{product.price}</p>
                    </div>
                ))}
            </div>
            
            <style jsx="true">{`
                .hide-scrollbar::-webkit-scrollbar {
                    display: none;
                }
                .hide-scrollbar {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}</style>
        </section>
    )
}

export default Trending
