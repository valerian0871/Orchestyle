import { Link } from "react-router-dom"
import { FiHeart } from "react-icons/fi"
import { useWishlist } from "../../hooks/useWishlist"

function ProductCard({ product }) {
    const { toggleWishlist, isInWishlist } = useWishlist()
    const isWished = isInWishlist(product?.id)

    if (!product) return null

    return (
        <div className="group cursor-pointer">
            <div className="relative aspect-[3/4] bg-gray-100 mb-3 overflow-hidden">
                <Link to={`/product/${product.id}`}>
                    <img 
                        src={product.images[0]} 
                        alt={product.name} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                    />
                </Link>
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button 
                        onClick={(e) => {
                            e.preventDefault()
                            toggleWishlist(product)
                        }}
                        className={`p-2 rounded-full hover:bg-gray-100 ${isWished ? 'bg-hm-red text-white' : 'bg-white text-black'}`}
                    >
                        <FiHeart className="text-xl" fill={isWished ? 'currentColor' : 'none'} />
                    </button>
                </div>
            </div>
            
            <Link to={`/product/${product.id}`}>
                <h3 className="text-[13px] text-[#222] font-medium leading-tight mb-1">{product.name}</h3>
                <p className="text-[#666] text-[12px] mb-1">{product.category}</p>
                <p className="text-[#222] text-[13px] font-bold">₦{product.price.toLocaleString()}</p>
            </Link>
        </div>
    )
}

export default ProductCard