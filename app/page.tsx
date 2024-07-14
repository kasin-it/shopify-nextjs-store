import Hero from "@/views/Home/hero"
import About from "@/views/Home/about"
import TrendingItems from "@/components/trending-items"
import Categories from "@/components/categories"
import FAQ from "@/components/faq"
import { createShopifyClient } from "@/lib/shopify"

async function HomePage() {
  const client = createShopifyClient()
  const popularProducts = await client.getProductsByCollection("popular", 4)

  const questions = [
    {
      label: "What materials are the shoes made of?",
      content:
        "Our shoes are crafted from high-quality materials, including premium leather, breathable mesh, and durable rubber soles. We carefully select the materials to ensure maximum comfort, support, and longevity.",
    },
    {
      label: "What materials are the shoes made of?",
      content:
        "Our shoes are crafted from high-quality materials, including premium leather, breathable mesh, and durable rubber soles. We carefully select the materials to ensure maximum comfort, support, and longevity.",
    },
    {
      label: "What materials are the shoes made of?",
      content:
        "Our shoes are crafted from high-quality materials, including premium leather, breathable mesh, and durable rubber soles. We carefully select the materials to ensure maximum comfort, support, and longevity.",
    },
    {
      label: "What materials are the shoes made of?",
      content:
        "Our shoes are crafted from high-quality materials, including premium leather, breathable mesh, and durable rubber soles. We carefully select the materials to ensure maximum comfort, support, and longevity.",
    },
    {
      label: "What materials are the shoes made of?",
      content:
        "Our shoes are crafted from high-quality materials, including premium leather, breathable mesh, and durable rubber soles. We carefully select the materials to ensure maximum comfort, support, and longevity.",
    },
    {
      label: "What materials are the shoes made of?",
      content:
        "Our shoes are crafted from high-quality materials, including premium leather, breathable mesh, and durable rubber soles. We carefully select the materials to ensure maximum comfort, support, and longevity.",
    },
  ]

  return (
    <main className="flex-1">
      <Hero />
      <About />
      {/* <Categories
        categories={categories}
        tag="Categories"
        title="Browse by Category"
        desc="Explore our wide range of shoe categories to find the perfect fit."
      /> */}
      <FAQ variant="secondary" questions={questions} />
      <TrendingItems
        products={popularProducts}
        tag="Trending"
        title="Trending Shoe Styles"
        desc="Explore our curated collection of the latest and most popular shoe styles."
        variant="primary"
      />
    </main>
  )
}

export default HomePage
