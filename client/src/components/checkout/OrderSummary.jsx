function OrderSummary({ cartItems, cartTotal }) {
    return (
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
    )
}

export default OrderSummary
