import { Input } from "@/components/ui/input"
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"

import { ListOrderedIcon } from "lucide-react"
import Image from "next/image"
import Filters from "@/views/Shop/filters"
import { createShopifyClient } from "@/lib/shopify"
import { PlatformProduct } from "@/lib/shopify/types"

export default async function ShopPage() {
  const client = createShopifyClient()

  const products = await client.getProducts("")

  const { brands, categories } = getDataFromProducts(products)

  const brandsValues = await client.getMetaobjectsById(brands)
  const categoriesValues = await client.getMetaobjectsById(categories)

  return (
    <div className="container mx-auto px-4 md:px-6 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Shoe Shop</h1>
        <p className="text-muted-foreground">
          Browse our selection of the latest shoes.
        </p>
      </div>
      <div className="flex items-center mb-6">
        {/* <Input
          type="search"
          placeholder="Search for shoes..."
          value={searchTerm}
          onChange={handleSearch}
          className="flex-1 mr-4 bg-background text-foreground"
        /> */}
        {/* <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="flex items-center gap-2">
              <ListOrderedIcon className="w-5 h-5" />
              Sort by:{" "}
              {sortBy === "price-asc"
                ? "Price: Low to High"
                : sortBy === "price-desc"
                ? "Price: High to Low"
                : sortBy === "popularity"
                ? "Popularity"
                : "Newest"}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-48">
            <DropdownMenuRadioGroup
              value={sortBy}
              onValueChange={handleSortChange}
            >
              <DropdownMenuRadioItem value="price-asc">
                Price: Low to High
              </DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="price-desc">
                Price: High to Low
              </DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="popularity">
                Popularity
              </DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="newest">
                Newest
              </DropdownMenuRadioItem>
            </DropdownMenuRadioGroup>
          </DropdownMenuContent>
        </DropdownMenu> */}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-[240px_1fr] gap-8">
        <Filters />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {/* {products.map((product) => (
            <div
              key={product.id}
              className="bg-background p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow flex flex-col justify-between"
            >
              <div>
                <Image
                  src="/placeholder.svg"
                  alt={product.title}
                  width={300}
                  height={300}
                  className="rounded-lg mb-4 object-cover w-full aspect-square"
                />
                <h3 className="text-lg font-bold mb-2">{product.title}</h3>
                <p className="text-muted-foreground mb-4">
                  ${product.price.toFixed(2)}
                </p>
              </div>
              <Button size="sm" variant="outline" className="w-full">
                Add to Cart
              </Button>
            </div>
          ))} */}
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
      if (option.name === "Size") {
        sizes.forEach((size) => sizes.add(size))
      }
      if (option.name === "Color") {
        colors.forEach((color) => colors.add(color))
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
