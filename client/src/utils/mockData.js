export const mockProducts = [
  {
    id: "1",
    name: "Classic Silk Blouse",
    price: 45000,
    category: "Women",
    description: "A premium silk blouse perfect for formal or smart casual occasions.",
    images: ["https://placehold.co/400x500/eaeaea/555?text=Silk+Blouse"],
    inStock: true
  },
  {
    id: "2",
    name: "Tailored Linen Trousers",
    price: 32000,
    category: "Men",
    description: "Comfortable and stylish linen trousers.",
    images: ["https://placehold.co/400x500/eaeaea/555?text=Linen+Trousers"],
    inStock: true
  },
  {
    id: "3",
    name: "Crystal Waist Bead",
    price: 12000,
    category: "Accessories",
    description: "Handcrafted crystal waist beads for a touch of elegance.",
    images: ["https://placehold.co/400x500/eaeaea/555?text=Waist+Bead"],
    inStock: true
  },
  {
    id: "4",
    name: "Leather Crossbody Bag",
    price: 55000,
    category: "Accessories",
    description: "Genuine leather crossbody bag featuring gold-tone hardware.",
    images: ["https://placehold.co/400x500/eaeaea/555?text=Leather+Bag"],
    inStock: true
  },
  {
    id: "5",
    name: "Flowy Maxi Dress",
    price: 68000,
    category: "Women",
    description: "A beautiful flowy maxi dress ideal for summer evenings.",
    images: ["https://placehold.co/400x500/eaeaea/555?text=Maxi+Dress"],
    inStock: true
  },
  {
    id: "6",
    name: "Minimalist Watch",
    price: 85000,
    category: "Accessories",
    description: "A sleek, minimalist timepiece.",
    images: ["https://placehold.co/400x500/eaeaea/555?text=Minimalist+Watch"],
    inStock: true
  }
];

export const mockCategories = [
  { id: "c1", name: "Women", image: "https://placehold.co/300x400/eaeaea/555?text=Women" },
  { id: "c2", name: "Men", image: "https://placehold.co/300x400/eaeaea/555?text=Men" },
  { id: "c3", name: "Accessories", image: "https://placehold.co/300x400/eaeaea/555?text=Accessories" }
];

export const mockTrending = mockProducts.slice(0, 4);
