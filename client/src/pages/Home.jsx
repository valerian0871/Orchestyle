import Hero from "../components/home/Hero"
import Trending from "../components/home/Trending"
import FeaturedCategories from "../components/home/FeaturedCategories"
import NewArrivals from "../components/home/NewArrivals"
import BrandStory from "../components/home/BrandStory"

function Home() {
    return (
        <div className="pt-2 md:pt-4">
            <Hero />
            <Trending />
            <FeaturedCategories />
            <NewArrivals />
            <BrandStory />
        </div>
    )
}

export default Home