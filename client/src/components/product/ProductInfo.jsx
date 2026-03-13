import { useState } from 'react'
import { FiHeart } from 'react-icons/fi'
import Button from '../common/Button'
import { useCart } from '../../hooks/useCart'
import { useWishlist } from '../../hooks/useWishlist'

function ProductInfo({ product }) {
    const { addToCart } = useCart()
    const { toggleWishlist, isInWishlist } = useWishlist()
    const [quantity, setQuantity] = useState(1)
    
    // Add Size selection if needed for future
    const isWished = isInWishlist(product.id)
    
    const handleAddToCart = () => {
        addToCart(product, quantity)
        // Optionally show toast
    }

    return (
        <div className="flex flex-col h-full">
            <h1 className="text-2xl md:text-3xl font-bold mb-2 text-[#222]">{product.name}</h1>
            <p className="text-lg text-hm-red font-semibold mb-6">₦{product.price.toLocaleString()}</p>
            
            <div className="mb-8">
                <p className="text-[14px] text-[#444] leading-relaxed">
                    {product.description || "A premium Orchestyle piece designed to elevate your everyday look. Carefully crafted with attention to detail and quality materials."}
                </p>
            </div>
            
            <div className="mb-8">
                <p className="text-[13px] font-bold text-[#222] mb-3">Quantity</p>
                <div className="flex items-center border border-[#222] w-fit">
                    <button 
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        className="px-4 py-2 text-[#222] hover:bg-gray-100"
                    >
                        -
                    </button>
                    <span className="px-4 py-2 text-[14px] min-w-[3rem] text-center">{quantity}</span>
                    <button 
                        onClick={() => setQuantity(quantity + 1)}
                        className="px-4 py-2 text-[#222] hover:bg-gray-100"
                    >
                        +
                    </button>
                </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Button 
                    className="flex-1 uppercase tracking-widest" 
                    onClick={handleAddToCart}
                >
                    Add to Bag
                </Button>
                <Button 
                    variant="outline" 
                    className="border border-[#222] px-6 flex justify-center items-center gap-2 uppercase tracking-widest hover:bg-gray-50 bg-white"
                    onClick={() => toggleWishlist(product)}
                >
                    <FiHeart fill={isWished ? 'currentColor' : 'none'} className={isWished ? 'text-hm-red' : ''} />
                    {isWished ? 'Saved' : 'Save'}
                </Button>
            </div>
            
            <hr className="border-gray-200 mb-6" />
            
            <div className="text-[12px] text-[#666] space-y-2">
                <p><strong className="text-[#222]">Category:</strong> {product.category}</p>
                <p><strong className="text-[#222]">Availability:</strong> {product.inStock ? 'In Stock - Ready to ship' : 'Out of Stock'}</p>
                <p><strong className="text-[#222]">Shipping:</strong> Free standard shipping on orders over ₦50,000</p>
            </div>
        </div>
    )
}

export default ProductInfo
