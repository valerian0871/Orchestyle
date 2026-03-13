import { Link } from "react-router-dom"
import { FiHeart } from "react-icons/fi"
import { mockTrending } from "../../utils/mockData"

function Trending() {
    const products = mockTrending.map(p => ({
        id: p.id,
        title: p.name,
        subtitle: p.category,
        price: `₦${p.price.toLocaleString()}`,
        image: p.images[0]
    }));

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
