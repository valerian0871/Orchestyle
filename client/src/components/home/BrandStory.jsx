import { Link } from "react-router-dom"

function BrandStory() {
    return (
        <section className="px-4 md:px-6 mb-20">
            <div className="bg-[#f8f8f8] p-8 md:p-16 flex flex-col md:flex-row items-center gap-12">
                <div className="flex-1">
                    <img 
                        src="https://images.unsplash.com/photo-1616047006789-b7af5afb8c20?q=80&w=2080&auto=format&fit=crop" 
                        alt="Craftsmanship" 
                        className="w-full h-full object-cover max-h-[500px]"
                    />
                </div>
                <div className="flex-1 max-w-lg">
                    <h2 className="text-2xl md:text-3xl font-bold mb-6 tracking-tight">The Orchestyle Craft</h2>
                    <p className="text-[#444] text-[15px] leading-relaxed mb-6">
                        Every piece we create tells a story of tradition, elegance, and meticulous craftsmanship. 
                        We source the finest materials to bring you accessories that don't just complement your outfit—they define it.
                    </p>
                    <p className="text-[#444] text-[15px] leading-relaxed mb-8">
                        Join us on a journey where heritage meets modern luxury. Discover the art of adornment.
                    </p>
                    <Link to="/about" className="inline-block border border-[#222] text-[#222] px-8 py-3 font-bold text-sm hover:bg-[#222] hover:text-white transition-colors">
                        Read Our Story
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default BrandStory
