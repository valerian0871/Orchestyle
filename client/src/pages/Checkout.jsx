import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useCart } from '../hooks/useCart'
import Input from '../components/common/Input'
import Button from '../components/common/Button'

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
                    <form onSubmit={handleSubmit} className="space-y-8">
                        <div>
                            <h2 className="text-xl font-bold mb-4 border-b pb-2">Contact Information</h2>
                            <div className="space-y-4">
                                <Input label="Email Address" type="email" required placeholder="john.doe@example.com" />
                                <Input label="Phone Number" type="tel" required placeholder="+234 800 000 0000" />
                            </div>
                        </div>
                        
                        <div>
                            <h2 className="text-xl font-bold mb-4 border-b pb-2">Shipping Address</h2>
                            <div className="space-y-4">
                                <div className="grid grid-cols-2 gap-4">
                                    <Input label="First Name" required />
                                    <Input label="Last Name" required />
                                </div>
                                <Input label="Address" required placeholder="123 Street Name" />
                                <Input label="Apartment, suite, etc. (optional)" />
                                <div className="grid grid-cols-2 gap-4">
                                    <Input label="City" required />
                                    <Input label="State/Province" required />
                                </div>
                            </div>
                        </div>

                        <div>
                            <h2 className="text-xl font-bold mb-4 border-b pb-2">Payment (Mock)</h2>
                            <div className="bg-gray-50 p-4 border rounded">
                                <p className="text-sm text-gray-500 mb-2">This is a mock checkout. No real payment is required.</p>
                                <Input label="Card Number" placeholder="0000 0000 0000 0000" disabled />
                            </div>
                        </div>
                        
                        <Button type="submit" className="w-full py-4 uppercase tracking-widest text-sm" isLoading={submitting}>
                            Place Order (₦{cartTotal.toLocaleString()})
                        </Button>
                    </form>
                </div>
                
                {/* Order Summary */}
                <div className="w-full lg:w-[400px]">
                    <div className="bg-[#f8f8f8] p-6 lg:p-8 sticky top-24 border border-gray-100">
                        <h2 className="text-lg font-bold mb-6">Order Summary</h2>
                        <div className="space-y-4 mb-6 max-h-[300px] overflow-y-auto pr-2">
                            {cartItems.map((item, idx) => (
                                <div key={idx} className="flex gap-4">
                                    <div className="w-16 h-20 bg-gray-200 flex-shrink-0 relative">
                                        <img src={item.images[0]} alt={item.name} className="w-full h-full object-cover" />
                                        <span className="absolute -top-2 -right-2 bg-gray-500 text-white text-[10px] w-5 h-5 flex items-center justify-center rounded-full z-10">
                                            {item.quantity}
                                        </span>
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-sm font-bold truncate">{item.name}</h3>
                                        <p className="text-xs text-gray-500">{item.category}</p>
                                        <p className="text-sm font-semibold mt-1">₦{item.price.toLocaleString()}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <hr className="border-gray-200 mb-4" />
                        <div className="flex justify-between font-bold text-lg">
                            <span>Total</span>
                            <span>₦{cartTotal.toLocaleString()}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Checkout
