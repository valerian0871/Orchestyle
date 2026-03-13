import { useState } from 'react';

function ProductImages({ images = [] }) {
    const [mainImage, setMainImage] = useState(images[0])

    if (!images.length) return <div className="bg-gray-100 aspect-[3/4] w-full"></div>

    return (
        <div className="flex flex-col-reverse md:flex-row gap-4">
            <div className="flex md:flex-col gap-4 overflow-x-auto md:w-[100px] hide-scrollbar">
                {images.map((img, idx) => (
                    <button 
                        key={idx} 
                        onClick={() => setMainImage(img)}
                        className={`flex-shrink-0 w-20 h-24 md:w-full md:h-[120px] bg-gray-100 border-2 ${mainImage === img ? 'border-black' : 'border-transparent'}`}
                    >
                        <img src={img} alt={`Thumbnail ${idx}`} className="w-full h-full object-cover" />
                    </button>
                ))}
            </div>
            
            <div className="flex-1 bg-gray-100 aspect-[3/4]">
                <img src={mainImage} alt="Product Main" className="w-full h-full object-cover" />
            </div>

            <style jsx="true">{`
                .hide-scrollbar::-webkit-scrollbar {
                    display: none;
                }
                .hide-scrollbar {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}</style>
        </div>
    )
}

export default ProductImages
