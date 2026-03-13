import Input from '../common/Input'
import Button from '../common/Button'

function CheckoutForm({ cartTotal, submitting, onSubmit }) {
    return (
        <form onSubmit={onSubmit} className="space-y-8">
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
    )
}

export default CheckoutForm
