import ProductCard from "./ProductCard"

function ProductGrid() {

    const products = [1, 2, 3, 4, 5, 6]

    return (

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">

            {products.map((item) => (
                <ProductCard key={item} />
            ))}

        </div>

    )
}

export default ProductGrid