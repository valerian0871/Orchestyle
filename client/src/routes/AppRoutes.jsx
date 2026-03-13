import { Routes, Route } from "react-router-dom"

import Home from "../pages/Home"
import Shop from "../pages/Shop"
import ProductDetails from "../pages/ProductDetails"
import Cart from "../pages/Cart"
import Wishlist from "../pages/Wishlist"
import Checkout from "../pages/Checkout"
import Login from "../pages/Login"
import Signup from "../pages/Signup"
import Account from "../pages/Account"
import About from "../pages/About"

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/account" element={<Account />} />
            <Route path="/about" element={<About />} />
        </Routes>
    )
}

export default AppRoutes