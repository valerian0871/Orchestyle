import ProductCard from "./ProductCard"

function ProductGrid({ products = [] }) {
    if (products.length === 0) {
        return <div className="py-12 text-center text-gray-500">No products found matching your criteria.</div>
    }

    return (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-10">
            {products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    )
}

export default ProductGrid