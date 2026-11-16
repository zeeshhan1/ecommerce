export const CATEGORY_MAP = {
  electronics: {
    slug: "electronics",
    name: "Electronics",
    eyebrow: "TECH & GADGETS",
    description:
      "Cutting-edge audio, smart connectivity, computing, and high-performance tech essentials.",
  },
  fashion: {
    slug: "fashion",
    name: "Fashion",
    eyebrow: "APPAREL & ACCESSORIES",
    description:
      "Modern wardrobe staples, premium natural fabrics, artisanal footwear, and elevated accents.",
  },
  "home-kitchen": {
    slug: "home-kitchen",
    name: "Home & Kitchen",
    eyebrow: "LIVING & COOKING",
    description:
      "Heirloom-grade cookware, precision appliances, and thoughtfully designed home essentials.",
  },
  "sports-fitness": {
    slug: "sports-fitness",
    name: "Sports & Fitness",
    eyebrow: "PERFORMANCE & WELLNESS",
    description:
      "Ergonomic strength gear, sustainable yoga equipment, hydration, and deep tissue recovery tools.",
  },
  "beauty-personal-care": {
    slug: "beauty-personal-care",
    name: "Beauty & Personal Care",
    eyebrow: "SELF CARE & BEAUTY",
    description:
      "Clean dermatological skincare, signature unisex fragrances, and daily grooming rituals.",
  },
  "books-stationery": {
    slug: "books-stationery",
    name: "Books & Stationery",
    eyebrow: "WORKSPACE & CREATIVITY",
    description:
      "Archival linen journals, engineered writing instruments, and minimalist workspace goods.",
  },
};

export const SECONDARY_CATEGORIES = [
  { id: "all", name: "All", slug: "", path: "/shop", hasIcon: true },
  {
    id: "electronics",
    name: "Electronics",
    slug: "electronics",
    path: "/shop/electronics",
  },
  { id: "fashion", name: "Fashion", slug: "fashion", path: "/shop/fashion" },
  {
    id: "home-kitchen",
    name: "Home & Kitchen",
    slug: "home-kitchen",
    path: "/shop/home-kitchen",
  },
  {
    id: "sports-fitness",
    name: "Sports & Fitness",
    slug: "sports-fitness",
    path: "/shop/sports-fitness",
  },
  {
    id: "beauty-personal-care",
    name: "Beauty & Personal Care",
    slug: "beauty-personal-care",
    path: "/shop/beauty-personal-care",
  },
  {
    id: "books-stationery",
    name: "Books & Stationery",
    slug: "books-stationery",
    path: "/shop/books-stationery",
  },
  {
    id: "bestsellers",
    name: "Best Sellers",
    slug: "bestsellers",
    path: "/shop",
    isHighlight: true,
  },
];

