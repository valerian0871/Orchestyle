import { BrowserRouter } from "react-router-dom"
import AppRoutes from "./routes/AppRoutes"
import MainLayout from "./layouts/MainLayout"

import { AuthProvider } from "./context/AuthContext"
import { CartProvider } from "./context/CartContext"
import { WishlistProvider } from "./context/WishlistContext"

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <WishlistProvider>
          <BrowserRouter>
            <MainLayout>
              <AppRoutes />
            </MainLayout>
          </BrowserRouter>
        </WishlistProvider>
      </CartProvider>
    </AuthProvider>
  )
}

export default App