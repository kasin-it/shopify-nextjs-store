import Hero from "@/views/Home/hero"
import About from "@/views/Home/about"
import TrendingItems from "@/components/trending-items"
import Categories from "@/components/categories"
import { getCategoories } from "@/actions/category.actions"
import { getPopularProducts } from "@/actions/product.actions"
import FAQ from "@/components/faq"

async function HomePage() {
  const categories = await getCategoories()
  const products = await getPopularProducts()
  const questions = [
    {
      question: "What materials are the shoes made of?",
      answer:
        "Our shoes are crafted from high-quality materials, including premium leather, breathable mesh, and durable rubber soles. We carefully select the materials to ensure maximum comfort, support, and longevity.",
    },
    {
      question: "What materials are the shoes made of?",
      answer:
        "Our shoes are crafted from high-quality materials, including premium leather, breathable mesh, and durable rubber soles. We carefully select the materials to ensure maximum comfort, support, and longevity.",
    },
    {
      question: "What materials are the shoes made of?",
      answer:
        "Our shoes are crafted from high-quality materials, including premium leather, breathable mesh, and durable rubber soles. We carefully select the materials to ensure maximum comfort, support, and longevity.",
    },
    {
      question: "What materials are the shoes made of?",
      answer:
        "Our shoes are crafted from high-quality materials, including premium leather, breathable mesh, and durable rubber soles. We carefully select the materials to ensure maximum comfort, support, and longevity.",
    },
    {
      question: "What materials are the shoes made of?",
      answer:
        "Our shoes are crafted from high-quality materials, including premium leather, breathable mesh, and durable rubber soles. We carefully select the materials to ensure maximum comfort, support, and longevity.",
    },
    {
      question: "What materials are the shoes made of?",
      answer:
        "Our shoes are crafted from high-quality materials, including premium leather, breathable mesh, and durable rubber soles. We carefully select the materials to ensure maximum comfort, support, and longevity.",
    },
  ]

  return (
    <main className="flex-1">
      <Hero />
      <About />
      <Categories
        categories={categories}
        tag="Categories"
        title="Browse by Category"
        desc="Explore our wide range of shoe categories to find the perfect fit."
      />
      <FAQ variant="secondary" questions={questions} />
      <TrendingItems
        products={products}
        tag="Trending"
        title="Trending Shoe Styles"
        desc="Explore our curated collection of the latest and most popular shoe styles."
        variant="primary"
      />
    </main>
  )
}

export default HomePage
