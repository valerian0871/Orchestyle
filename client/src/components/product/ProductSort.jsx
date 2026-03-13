function ProductSort({ currentSort, onSortChange }) {
    return (
        <div className="relative">
            <select 
                value={currentSort}
                onChange={(e) => onSortChange(e.target.value)}
                className="appearance-none border border-[#e4e4e4] px-4 py-2 pr-8 text-[13px] bg-white text-[#222] outline-none focus:border-black min-w-[150px] cursor-pointer"
            >
                <option value="newest">New arrivals</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-[#222]">
                <svg className="fill-current h-4 w-4" viewBox="0 0 20 20">
                    <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" fillRule="evenodd" />
                </svg>
            </div>
        </div>
    )
}

export default ProductSort
