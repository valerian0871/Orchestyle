import Hero from "../components/home/Hero"
import Trending from "../components/home/Trending"
import FeaturedCategories from "../components/home/FeaturedCategories"

function Home() {
    return (
        <div className="pt-2 md:pt-4">
            <Hero />
            <Trending />
            <FeaturedCategories />
        </div>
    )
}

export default Home