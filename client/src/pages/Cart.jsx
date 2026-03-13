import { Link, useNavigate } from 'react-router-dom'
import { useCart } from '../hooks/useCart'
import Button from '../components/common/Button'
import { FiTrash2, FiMinus, FiPlus } from 'react-icons/fi'

function Cart() {
    const { cartItems, updateQuantity, removeFromCart, cartTotal } = useCart()
    const navigate = useNavigate()

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
                            <div key={`${item.id}-${item.size}`} className="flex gap-4 py-8 border-b border-[#e4e4e4]">
                                <Link to={`/product/${item.id}`} className="w-32 h-40 flex-shrink-0 bg-gray-100">
                                    <img src={item.images[0]} alt={item.name} className="w-full h-full object-cover" />
                                </Link>
                                
                                <div className="flex-1 flex flex-col justify-between">
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <Link to={`/product/${item.id}`}>
                                                <h3 className="text-[14px] font-bold text-[#222] mb-1 hover:underline">{item.name}</h3>
                                            </Link>
                                            <p className="text-[13px] text-[#666] mb-3">₦{item.price.toLocaleString()}</p>
                                        </div>
                                        <button 
                                            onClick={() => removeFromCart(item.id, item.size)}
                                            className="text-[#666] hover:text-hm-red p-2"
                                            aria-label="Remove item"
                                        >
                                            <FiTrash2 size={18} />
                                        </button>
                                    </div>
                                    
                                    <div className="flex items-center gap-6">
                                        <div className="flex items-center border border-[#e4e4e4]">
                                            <button 
                                                className="px-3 py-1 hover:bg-gray-100"
                                                onClick={() => updateQuantity(item.id, item.size, item.quantity - 1)}
                                            >
                                                <FiMinus size={12} />
                                            </button>
                                            <span className="text-[13px] px-2 min-w-[30px] text-center">{item.quantity}</span>
                                            <button 
                                                className="px-3 py-1 hover:bg-gray-100"
                                                onClick={() => updateQuantity(item.id, item.size, item.quantity + 1)}
                                            >
                                                <FiPlus size={12} />
                                            </button>
                                        </div>
                                        
                                        <p className="font-bold text-[14px]">₦{(item.price * item.quantity).toLocaleString()}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                
                <div className="w-full lg:w-[380px]">
                    <div className="bg-[#f8f8f8] p-6 lg:p-8 shrink-0 lg:sticky lg:top-24">
                        <h2 className="text-[18px] font-bold mb-6 tracking-tight">Order Value</h2>
                        
                        <div className="flex justify-between mb-4 text-[14px]">
                            <span className="text-[#666]">Subtotal</span>
                            <span>₦{cartTotal.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between mb-6 text-[14px]">
                            <span className="text-[#666]">Delivery</span>
                            <span>₦0</span>
                        </div>
                        
                        <div className="flex justify-between mb-8 pb-6 border-b border-[#e4e4e4] font-bold text-[18px]">
                            <span>Total</span>
                            <span>₦{cartTotal.toLocaleString()}</span>
                        </div>
                        
                        <Button 
                            className="w-full uppercase tracking-widest text-[13px] py-4"
                            onClick={() => navigate('/checkout')}
                        >
                            Continue to checkout
                        </Button>
                        
                        <div className="mt-6 text-center text-[#666] text-[12px]">
                            <p>We accept</p>
                            <p className="mt-1 font-bold tracking-widest">VISA | PAYSTACK | MASTERCARD</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart
