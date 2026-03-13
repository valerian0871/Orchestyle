import { useParams, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import ProductImages from '../components/product/ProductImages'
import ProductInfo from '../components/product/ProductInfo'
import Loader from '../components/common/Loader'
import { mockProducts } from '../utils/mockData'

function ProductDetails() {
    const { id } = useParams()
    const navigate = useNavigate()
    const [product, setProduct] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        // Simulate API fetch delay
        setLoading(true)
        setTimeout(() => {
            const foundProduct = mockProducts.find(p => p.id === id)
            if (foundProduct) {
                setProduct(foundProduct)
            } else {
                navigate('/not-found', { replace: true })
            }
            setLoading(false)
        }, 300)
    }, [id, navigate])

    if (loading) return <Loader className="min-h-[50vh]" />
    if (!product) return null

    return (
        <div className="container-luxury section-padding">
            <div className="flex flex-col md:flex-row gap-8 lg:gap-16">
                
                {/* Left Side: Images */}
                <div className="flex-1 md:w-1/2">
                    <ProductImages images={product.images} />
                </div>

                {/* Right Side: Product Info */}
                <div className="flex-1 md:w-1/2">
                    <ProductInfo product={product} />
                </div>
            </div>
            
            {/* Optional: Add "You might also like" section here */}
        </div>
    )
}

export default ProductDetails
