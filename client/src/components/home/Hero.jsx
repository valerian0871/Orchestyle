import { Link } from "react-router-dom"

function Hero() {
    return (
        <section className="relative w-full h-[70vh] md:h-[85vh] bg-gray-100 overflow-hidden mb-8 md:mb-12">
            <img 
                src="https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?q=80&w=2187&auto=format&fit=crop" 
                alt="Orchestyle Collection" 
                className="w-full h-full object-cover object-top"
            />
            <div className="absolute inset-0 bg-black/30"></div>
            
            <div className="absolute inset-x-0 bottom-12 md:bottom-20 flex flex-col items-center text-white text-center px-4">
                <h1 className="text-4xl md:text-[3.5rem] font-bold mb-4 tracking-tight leading-none">
                    NEW ARRIVALS
                </h1>
                <p className="text-base md:text-lg mb-8 max-w-lg font-medium">
                    Discover hand-crafted bead pieces to elevate your everyday style.
                </p>
                <div className="flex gap-4">
                    <Link to="/shop" className="bg-white text-black px-6 py-3 font-bold text-sm hover:bg-gray-200 transition-colors">
                        Shop Women
                    </Link>
                    <Link to="/shop" className="bg-white text-black px-6 py-3 font-bold text-sm hover:bg-gray-200 transition-colors">
                        Shop Men
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default Hero