import { Link } from 'react-router-dom'
import { useCart } from '../../hooks/useCart'
import { useWishlist } from '../../hooks/useWishlist'
import { FiX } from 'react-icons/fi'

function WishlistItem({ item }) {
    const { addToCart } = useCart()
    const { toggleWishlist } = useWishlist()

    const handleMoveToCart = () => {
        addToCart(item, 1)
        toggleWishlist(item) // Remove from wishlist after moving
    }

    return (
        <div className="flex gap-4 py-6 border-b border-gray-200">
            <Link to={`/product/${item.id}`} className="w-24 h-32 flex-shrink-0 bg-gray-100">
                <img src={item.images[0]} alt={item.name} className="w-full h-full object-cover" />
            </Link>
            
            <div className="flex-1 flex flex-col justify-between">
                <div className="flex justify-between items-start">
                    <div>
                        <Link to={`/product/${item.id}`} className="hover:underline">
                            <h3 className="text-[14px] font-bold text-[#222] leading-tight mb-1">{item.name}</h3>
                        </Link>
                        <p className="text-[#666] text-[12px] mb-2">{item.category}</p>
                        <p className="text-[#222] font-semibold text-[14px]">₦{item.price.toLocaleString()}</p>
                    </div>
                    <button 
                        onClick={() => toggleWishlist(item)}
                        className="text-[#666] hover:text-[#222]"
                    >
                        <FiX size={20} />
                    </button>
                </div>
                
                <div className="mt-4">
                    <button 
                        onClick={handleMoveToCart}
                        className="text-[12px] font-bold uppercase tracking-widest border border-[#222] px-6 py-2 hover:bg-[#222] hover:text-white transition-colors"
                    >
                        Move to Bag
                    </button>
                </div>
            </div>
        </div>
    )
}

export default WishlistItem
