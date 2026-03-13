import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useCart } from '../hooks/useCart'
import CheckoutForm from '../components/checkout/CheckoutForm'
import OrderSummary from '../components/checkout/OrderSummary'

function Checkout() {
    const { cartItems, cartTotal, clearCart } = useCart()
    const navigate = useNavigate()
    const [submitting, setSubmitting] = useState(false)

    if (cartItems.length === 0) {
        return (
            <div className="container-luxury section-padding pb-32 text-center">
                <h1 className="text-2xl font-bold mb-4">Your bag is empty.</h1>
                <Link to="/shop" className="underline hover:text-gray-500">Return to shop</Link>
            </div>
        )
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setSubmitting(true)
        
        // Simulate payment process
        setTimeout(() => {
            clearCart()
            setSubmitting(false)
            alert("Order placed successfully! (Mock)")
            navigate('/')
        }, 1500)
    }

    return (
        <div className="container-luxury section-padding min-h-screen">
            <h1 className="text-3xl font-bold mb-8 tracking-tight">Checkout</h1>
            
            <div className="flex flex-col-reverse lg:flex-row gap-12">
                <div className="flex-1">
                    <CheckoutForm 
                        cartTotal={cartTotal} 
                        submitting={submitting} 
                        onSubmit={handleSubmit} 
                    />
                </div>
                
                {/* Order Summary */}
                <div className="w-full lg:w-[400px]">
                    <OrderSummary cartItems={cartItems} cartTotal={cartTotal} />
                </div>
            </div>
        </div>
    )
}

export default Checkout
