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
import Colors from "@/views/Product/colors"

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

  const colors = product.options.filter((option) => option.name === "Color")[0]
    .values

  return (
    <main>
      <section className="container grid md:grid-cols-2 gap-6 lg:gap-12 items-start max-w-5xl">
        <Gallery images={product.images} />
        <div className="grid gap-4 md:gap-10 items-start">
          <div className="grid gap-4">
            <h1 className="font-bold text-3xl lg:text-4xl">{product.title}</h1>
            <div>
              <p>{product.description}</p>
            </div>
          </div>
          <form className="grid gap-4 md:gap-10">
            <Colors colors={colors} />
            <div className="grid gap-2">
              <Label htmlFor="size" className="text-base">
                Size
              </Label>
              <RadioGroup
                id="size"
                defaultValue="m"
                className="flex items-center gap-2"
              >
                <Label
                  htmlFor="size-xs"
                  className="border cursor-pointer rounded-md p-2 flex items-center gap-2 [&:has(:checked)]:bg-muted"
                >
                  <RadioGroupItem id="size-xs" value="xs" />
                  XS
                </Label>
                <Label
                  htmlFor="size-s"
                  className="border cursor-pointer rounded-md p-2 flex items-center gap-2 [&:has(:checked)]:bg-muted"
                >
                  <RadioGroupItem id="size-s" value="s" />S
                </Label>
                <Label
                  htmlFor="size-m"
                  className="border cursor-pointer rounded-md p-2 flex items-center gap-2 [&:has(:checked)]:bg-muted"
                >
                  <RadioGroupItem id="size-m" value="m" />M
                </Label>
                <Label
                  htmlFor="size-l"
                  className="border cursor-pointer rounded-md p-2 flex items-center gap-2 [&:has(:checked)]:bg-muted"
                >
                  <RadioGroupItem id="size-l" value="l" />L
                </Label>
                <Label
                  htmlFor="size-xl"
                  className="border cursor-pointer rounded-md p-2 flex items-center gap-2 [&:has(:checked)]:bg-muted"
                >
                  <RadioGroupItem id="size-xl" value="xl" />
                  XL
                </Label>
              </RadioGroup>
            </div>
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
        </div>
      </section>
      <Specification />
      <Reviews />
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
