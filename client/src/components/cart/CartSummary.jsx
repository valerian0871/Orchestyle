import { useNavigate } from 'react-router-dom'
import Button from '../common/Button'

function CartSummary({ cartTotal }) {
    const navigate = useNavigate()

    return (
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
    )
}

export default CartSummary
