import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import ProductGrid from '../components/product/ProductGrid'
import ProductFilters from '../components/product/ProductFilters'
import ProductSort from '../components/product/ProductSort'
import { mockProducts, mockCategories } from '../utils/mockData'

function Shop() {
    const [searchParams, setSearchParams] = useSearchParams()
    
    const initialCategory = searchParams.get('category') || null
    const searchQuery = searchParams.get('search') || ""
    
    const [selectedCategory, setSelectedCategory] = useState(initialCategory)
    const [sort, setSort] = useState('newest')
    const [filteredProducts, setFilteredProducts] = useState(mockProducts)

    // Sync state with URL if needed
    useEffect(() => {
        setSelectedCategory(searchParams.get('category'))
    }, [searchParams])

    useEffect(() => {
        let result = [...mockProducts]

        if (selectedCategory) {
            result = result.filter(p => p.category === selectedCategory)
        }
        
        if (searchQuery) {
            result = result.filter(p => p.name.toLowerCase().includes(searchQuery.toLowerCase()) || p.description.toLowerCase().includes(searchQuery.toLowerCase()))
        }

        if (sort === 'price-asc') {
            result.sort((a, b) => a.price - b.price)
        } else if (sort === 'price-desc') {
            result.sort((a, b) => b.price - a.price)
        } // 'newest' can be default array order or based on an id/date

        setFilteredProducts(result)
    }, [selectedCategory, sort, searchQuery])

    const handleCategoryChange = (cat) => {
        setSelectedCategory(cat)
        if (cat) {
            setSearchParams({ category: cat })
        } else {
            setSearchParams({})
        }
    }

    return (
        <div className="container-luxury section-padding">
            <div className="flex flex-col md:flex-row justify-between items-baseline mb-8">
                <h1 className="text-3xl md:text-4xl font-bold mb-4 md:mb-0">
                    {searchQuery ? `Search Results for "${searchQuery}"` : (selectedCategory || "All Products")}
                </h1>
                <div className="flex items-center gap-4">
                    <span className="text-sm text-gray-500">{filteredProducts.length} items</span>
                    <ProductSort currentSort={sort} onSortChange={setSort} />
                </div>
            </div>

            <div className="flex flex-col md:flex-row">
                <div className="w-full md:w-64 flex-shrink-0">
                    <ProductFilters 
                        categories={mockCategories} 
                        selectedCategory={selectedCategory} 
                        onSelectCategory={handleCategoryChange} 
                    />
                </div>
                
                <div className="flex-1">
                    <ProductGrid products={filteredProducts} />
                </div>
            </div>
        </div>
    )
}

export default Shop