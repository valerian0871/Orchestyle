import React from 'react';
import { Link } from 'react-router-dom';

function About() {
    return (
        <div className="bg-[#f8f8f8] min-h-screen">
            {/* Hero Image Section */}
            <div className="relative w-full h-[60vh] md:h-[80vh] overflow-hidden">
                <img
                    src="https://images.unsplash.com/photo-1616047006789-b7af5afb8c20?q=80&w=2080&auto=format&fit=crop"
                    alt="Craftsmanship"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <h1 className="text-4xl md:text-6xl font-bold text-white tracking-widest text-center" style={{ fontFamily: 'Georgia, serif' }}>
                        THE STORY OF ORCHESTYLE
                    </h1>
                </div>
            </div>

            {/* Content Section 1 */}
            <div className="container-luxury max-w-4xl mx-auto py-16 md:py-24 px-4 text-center">
                <h2 className="text-2xl md:text-3xl font-bold mb-8 tracking-tight text-[#222]">Tradition Meets Modern Luxury</h2>
                <p className="text-[16px] leading-relaxed text-[#444] mb-6">
                    Orchestyle was born out of a profound love for the rich cultural tapestry of African heritage and a vision to blend it seamlessly with modern, minimalist aesthetics. Every bead we string, every crystal we place, and every thread we weave is a tribute to the timeless traditions of body adornment.
                </p>
                <p className="text-[16px] leading-relaxed text-[#444]">
                    Our waist beads, anklets, and jewelry pieces aren't just accessories; they are a celebration of femininity, a marker of milestones, and a deeply personal expression of self-love.
                </p>
            </div>

            {/* Split Image/Text Section */}
            <div className="flex flex-col md:flex-row mb-16 md:mb-24">
                <div className="flex-1 min-h-[400px]">
                    <img
                        src="https://unsplash.com/photos/swirling-dark-trees-with-distant-lights-at-dusk-hCA4TCLW_60"
                        alt="Artisan at work"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="flex-1 bg-white p-12 lg:p-24 flex flex-col justify-center">
                    <h3 className="text-xl md:text-2xl font-bold mb-6 text-[#222]">Meticulous Craftsmanship</h3>
                    <p className="text-[15px] leading-relaxed text-[#444] mb-6">
                        We source our materials from trusted artisans globally, ensuring that every crystal and bead carries the energy of authentic craftsmanship. Our process is deliberate and unhurried—because true luxury cannot be rushed.
                    </p>
                    <p className="text-[15px] leading-relaxed text-[#444]">
                        From the drawing board to the final polish, each Orchestyle piece passes through careful hands to ensure it meets our rigorous standards of quality.
                    </p>
                </div>
            </div>

            {/* Closing Statement */}
            <div className="container-luxury max-w-3xl mx-auto py-16 px-4 text-center mb-16">
                <h2 className="text-2xl md:text-3xl font-bold mb-8 italic" style={{ fontFamily: 'Georgia, serif' }}>
                    "Adornment is what makes us feel like the best version of ourselves."
                </h2>
                <Link to="/shop" className="inline-block border border-[#222] text-[#222] px-12 py-4 font-bold uppercase tracking-widest text-[13px] hover:bg-[#222] hover:text-white transition-colors">
                    Explore the Collection
                </Link>
            </div>
        </div>
    );
}

export default About;
