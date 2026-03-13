import { mockProducts } from "../../utils/mockData"
import ProductCard from "../product/ProductCard"

function NewArrivals() {
    // Just grab the last 4 as "new arrivals"
    const newArrivals = mockProducts.slice(-4)

    return (
        <section className="px-4 md:px-6 mb-16">
            <div className="flex justify-between items-end mb-6">
                <h2 className="text-xl md:text-2xl font-bold">New Arrivals</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {newArrivals.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </section>
    )
}

export default NewArrivals
