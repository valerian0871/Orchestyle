import { Link } from 'react-router-dom'
import { useWishlist } from '../hooks/useWishlist'
import WishlistItem from '../components/wishlist/WishlistItem'
import Button from '../components/common/Button'

function Wishlist() {
    const { wishlistItems } = useWishlist()

    if (wishlistItems.length === 0) {
        return (
            <div className="container-luxury section-padding min-h-[50vh] flex flex-col items-center justify-center text-center">
                <h1 className="text-3xl font-bold mb-4 tracking-tight text-[#222]">Saved Items</h1>
                <p className="text-[#666] mb-8">You haven't saved any items yet.</p>
                <Link to="/shop">
                    <Button className="px-12 uppercase tracking-widest text-sm py-4">Start Shopping</Button>
                </Link>
            </div>
        )
    }

    return (
        <div className="container-luxury section-padding max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold mb-8 tracking-tight text-[#222]">Saved Items ({wishlistItems.length})</h1>
            
            <div className="border-t border-gray-200">
                {wishlistItems.map(item => (
                    <WishlistItem key={item.id} item={item} />
                ))}
            </div>
            
            <div className="mt-12 text-center">
                <Link to="/shop">
                    <Button variant="outline" className="px-12 py-3">Continue Shopping</Button>
                </Link>
            </div>
        </div>
    )
}

export default Wishlist
