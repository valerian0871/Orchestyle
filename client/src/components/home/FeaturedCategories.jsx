import { Link } from "react-router-dom"

function FeaturedCategories() {
    const promos = [
        {
            id: 1,
            title: "Waist Beads",
            subtitle: "Embrace tradition.",
            image: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?q=80&w=1964&auto=format&fit=crop",
            linkText: "Shop now"
        },
        {
            id: 2,
            title: "Crystal Bracelets",
            subtitle: "Shine brighter.",
            image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=2070&auto=format&fit=crop",
            linkText: "Shop now"
        }
    ]

    return (
        <section className="px-4 md:px-6 mb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {promos.map((promo) => (
                    <div key={promo.id} className="relative aspect-[4/5] md:aspect-square bg-gray-100 overflow-hidden group cursor-pointer">
                        <img 
                            src={promo.image} 
                            alt={promo.title} 
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                        <div className="absolute inset-x-0 bottom-10 flex flex-col flex-wrap text-white justify-center items-center text-center px-4">
                            <h3 className="text-2xl md:text-3xl font-bold mb-2 tracking-tight">{promo.title}</h3>
                            <p className="text-base mb-6 font-medium">{promo.subtitle}</p>
                            <Link to="/shop" className="inline-block bg-white text-black px-6 py-3 font-bold text-sm hover:bg-gray-200 transition-colors">
                                {promo.linkText}
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default FeaturedCategories
