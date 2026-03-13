import { Link } from 'react-router-dom'
import { FiTrash2, FiMinus, FiPlus } from 'react-icons/fi'

function CartItem({ item, updateQuantity, removeFromCart }) {
    return (
        <div className="flex gap-4 py-8 border-b border-[#e4e4e4]">
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
    )
}

export default CartItem
