import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image"
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import Specification from "@/views/Product/specification"
import Reviews from "@/views/Product/reviews"
import TrendingItems from "@/components/trending-items"
import { getPopularProducts } from "@/actions/product.actions"
import { createShopifyClient } from "@/lib/shopify"
import { productFragment } from "@/lib/shopify/fragments/product"
import {
  ProductsByHandleQuery,
  SingleProductFragment,
  SingleProductQuery,
} from "@/lib/shopify/types/storefront.generated"
import { notFound } from "next/navigation"
import { getProductsByHandleQuery } from "@/lib/shopify/queries/product.storefront"
import Gallery from "@/views/Product/gallery"
import Variants from "@/views/Product/variants"
import Description from "@/views/Product/description"
import FAQ from "@/components/faq"

export const generateStaticParams = async () => {
  const client = createShopifyClient()
  const productsHandle = await client.getProductsHandle()

  return (
    productsHandle.map((handle) => ({
      params: {
        productId: handle,
      },
    })) || []
  )
}

async function ProductPage({
  params: { productId },
}: {
  params: { productId: string }
}) {
  const client = createShopifyClient()

  const product = await client.getProductByHandle(productId)

  if (!product) notFound()

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
    <main>
      <section className="container grid md:grid-cols-2 gap-6 lg:gap-12 items-start max-w-5xl">
        <div className="md:sticky top-10">
          <Gallery images={product.images} />
        </div>
        <div className="grid gap-4 md:gap-10 items-start">
          <div className="grid gap-4">
            <h1 className="font-bold text-3xl lg:text-4xl">{product.title}</h1>
            <div>
              <p>{product.priceRange.maxVariantPrice.amount}</p>
            </div>
          </div>
          <form className="grid gap-4 md:gap-10">
            {product.options.map((option) => (
              <Variants
                key={option.name}
                title={option.name}
                values={option.values}
              />
            ))}

            <div className="grid gap-2">
              <Label htmlFor="quantity" className="text-base">
                Quantity
              </Label>
              <Select defaultValue="1">
                <SelectTrigger className="w-24">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">1</SelectItem>
                  <SelectItem value="2">2</SelectItem>
                  <SelectItem value="3">3</SelectItem>
                  <SelectItem value="4">4</SelectItem>
                  <SelectItem value="5">5</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <p className="">Cost of delivery: $10</p>
            <Button size="lg">Add to cart</Button>
          </form>
          <p>{product.description}</p>
        </div>
      </section>
      <Specification />
      <FAQ questions={questions} />
      <Reviews variant="secondary" />
      {/* <TrendingItems
        // products={products}
        tag="Trending"
        title="Trending"
        variant="secondary"
        desc="Explore our curated collection of the latest and most popular shoe styles."
      /> */}
    </main>
  )
}

export default ProductPage
