import { Label } from "@/components/ui/label"

import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import Reviews from "@/views/Product/reviews"
import TrendingItems from "@/components/trending-items"
import { createShopifyClient, getProductData } from "@/lib/shopify"

import { notFound } from "next/navigation"
import Gallery from "@/views/Product/gallery"
import Variants from "@/views/Product/variants"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { ChevronDownIcon } from "lucide-react"
import { slugToName } from "@/lib/utils"

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
  const data = await getProductData(productId)

  if (!data) notFound()

  const { product, faq, productAccordions, relatedProducts } = data

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
          {productAccordions.map(({ label, content }) => (
            <Collapsible key={label}>
              <CollapsibleTrigger className="flex w-full items-center justify-between rounded-md bg-muted px-4 py-3 text-lg font-medium transition-colors hover:bg-muted/80">
                {slugToName(label, "_")}
                <ChevronDownIcon className="h-5 w-5 transition-transform duration-300 [&[data-state=open]]:rotate-180" />
              </CollapsibleTrigger>
              <CollapsibleContent className="px-4 pt-4 text-muted-foreground">
                {content}
              </CollapsibleContent>
            </Collapsible>
          ))}
        </div>
      </section>
      <Reviews variant="secondary" />
      <FAQ questions={faq} />
      <TrendingItems
        products={relatedProducts}
        tag="Trending"
        title="Trending"
        variant="secondary"
        desc="Explore our curated collection of the latest and most popular shoe styles."
      />
    </main>
  )
}

export default ProductPage
