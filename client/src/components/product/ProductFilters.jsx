function ProductFilters({ categories, selectedCategory, onSelectCategory }) {
    return (
        <div className="w-full md:w-64 pr-8 mb-8 md:mb-0">
            <h3 className="font-bold text-[14px] mb-4 text-[#222]">Categories</h3>
            <ul className="space-y-3">
                <li>
                    <button 
                        className={`text-[13px] hover:underline ${!selectedCategory ? 'font-bold' : 'text-[#666]'}`}
                        onClick={() => onSelectCategory(null)}
                    >
                        All Products
                    </button>
                </li>
                {categories.map(category => (
                    <li key={category.id}>
                        <button 
                            className={`text-[13px] hover:underline ${selectedCategory === category.name ? 'font-bold' : 'text-[#666]'}`}
                            onClick={() => onSelectCategory(category.name)}
                        >
                            {category.name}
                        </button>
                    </li>
                ))}
            </ul>
            
            {/* Added a divider for more filter options later */}
            <hr className="my-6 border-gray-200" />
            
            <h3 className="font-bold text-[14px] mb-4 text-[#222]">Price Range</h3>
            <ul className="space-y-3">
                <li><button className="text-[13px] text-[#666] hover:underline">Under ₦20,000</button></li>
                <li><button className="text-[13px] text-[#666] hover:underline">₦20,000 - ₦50,000</button></li>
                <li><button className="text-[13px] text-[#666] hover:underline">Over ₦50,000</button></li>
            </ul>
        </div>
    )
}

export default ProductFilters
