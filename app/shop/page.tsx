import Filters from "@/views/Shop/filters"
import { createShopifyClient } from "@/lib/shopify"
import { PlatformProduct } from "@/lib/shopify/types"
import SearchSection from "@/views/Shop/search-section"
import Image from "next/image"
import { Button } from "@/components/ui/button"

interface PageProps {
  searchParams: {
    brand?: string
    category?: string
    size?: string
    color?: string
    search?: string
    sortKey?: string
    priceMin?: string
    priceMax?: string
    reverse?: string
    numProducts?: string
    cursor?: string
  }
}

export default async function ShopPage({ searchParams }: PageProps) {
  const client = createShopifyClient()

  const products = await client.getProducts("")
  const filteredProducts = await client.getProductsBySearchParams(searchParams)

  const { brands, categories, sizes, colors, priceMax, priceMin } =
    getDataFromProducts(products)

  const brandsValues = (await client.getMetaobjectsById(brands)).map(
    (b) => b?.fields[0].value || ""
  )
  const categoriesValues = (await client.getMetaobjectsById(categories)).map(
    (c) => c?.fields[0].value || ""
  )

  return (
    <div className="container mx-auto px-4 md:px-6 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Shoe Shop</h1>
        <p className="text-muted-foreground">
          Browse our selection of the latest shoes.
        </p>
      </div>

      <SearchSection />
      <div className="grid grid-cols-1 md:grid-cols-[240px_1fr] gap-8">
        <Filters
          categories={categoriesValues}
          brands={brandsValues}
          sizes={sizes}
          colors={colors}
          priceMin={priceMin}
          priceMax={priceMax}
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product?.id}
              className="bg-background p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow flex flex-col justify-between"
            >
              <div>
                <Image
                  src="/placeholder.svg"
                  alt={product?.title || ""}
                  width={300}
                  height={300}
                  className="rounded-lg mb-4 object-cover w-full aspect-square"
                />
                <h3 className="text-lg font-bold mb-2">{product?.title}</h3>
                <p className="text-muted-foreground mb-4">
                  {/* ${product?.price.toFixed(2)} */}
                </p>
              </div>
              <Button size="sm" variant="outline" className="w-full">
                Add to Cart
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function getDataFromProducts(products: (PlatformProduct | null)[]) {
  const brands: Set<string> = new Set()
  const categories: Set<string> = new Set()
  const sizes: Set<string> = new Set()
  const colors: Set<string> = new Set()
  let priceMin: number = 0
  let priceMax: number = 0

  products.forEach((product) => {
    product?.metafields.forEach((metafield) => {
      if (metafield?.key === "brand") {
        brands.add(metafield.value)
      }

      if (metafield?.key === "category") {
        categories.add(metafield.value)
      }
    })

    product?.options.forEach((option) => {
      if (option.name === "Shoe size") {
        option.values.forEach((size) => sizes.add(size))
      }
      if (option.name === "Color") {
        option.values.forEach((color) => colors.add(color))
      }
    })

    if (product !== null) {
      const currentMinPrice = parseFloat(
        product.priceRange.minVariantPrice.amount
      )
      const currentMaxPrice = parseFloat(
        product.priceRange.maxVariantPrice.amount
      )

      if (currentMinPrice < priceMin) {
        priceMin = currentMinPrice
      }

      if (currentMaxPrice > priceMax) {
        priceMax = currentMaxPrice
      }
    }
  })

  return {
    brands: Array.from(brands),
    categories: Array.from(categories),
    sizes: Array.from(sizes),
    colors: Array.from(colors),
    priceMin: priceMin,
    priceMax: priceMax,
  }
}
