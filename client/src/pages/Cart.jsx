import { Link } from 'react-router-dom'
import { useCart } from '../hooks/useCart'
import Button from '../components/common/Button'
import CartItem from '../components/cart/CartItem'
import CartSummary from '../components/cart/CartSummary'

function Cart() {
    const { cartItems, updateQuantity, removeFromCart, cartTotal } = useCart()

    if (cartItems.length === 0) {
        return (
            <div className="container-luxury section-padding min-h-[50vh] flex flex-col items-center justify-center text-center">
                <h1 className="text-3xl font-bold mb-4 tracking-tight text-[#222]">Your Shopping Bag is empty</h1>
                <p className="text-[#666] mb-8">Items remain in your bag for 60 minutes, and then they're moved to your Saved Items.</p>
                <Link to="/shop">
                    <Button className="px-12 uppercase tracking-widest text-sm py-4">Continue Shopping</Button>
                </Link>
            </div>
        )
    }

    return (
        <div className="container-luxury section-padding">
            <h1 className="text-3xl font-bold mb-8 tracking-tight text-[#222]">Shopping Bag</h1>
            
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
                <div className="flex-1">
                    <div className="border-t border-[#e4e4e4]">
                        {cartItems.map((item) => (
                            <CartItem 
                                key={`${item.id}-${item.size}`} 
                                item={item} 
                                updateQuantity={updateQuantity} 
                                removeFromCart={removeFromCart} 
                            />
                        ))}
                    </div>
                </div>
                
                <div className="w-full lg:w-[380px]">
                    <CartSummary cartTotal={cartTotal} />
                </div>
            </div>
        </div>
    )
}

export default Cart
