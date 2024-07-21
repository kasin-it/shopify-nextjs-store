import React from "react"
import { Card, CardContent } from "./ui/card"
import Image from "next/image"
import Link from "next/link"
import VariantWrapper from "./variant-wrapper"
import { cn } from "@/lib/utils"
import { PlatformProduct } from "@/lib/shopify/types"

interface TrendingItemsProps {
  products: (null | PlatformProduct)[]
  tag: string
  title: string
  desc: string
  variant?: "primary" | "secondary"
}

function TrendingItems({
  products,
  tag,
  title,
  desc,
  variant = "primary",
}: TrendingItemsProps) {
  return (
    <VariantWrapper variant={variant}>
      <section className="container">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div
              className={cn(
                "inline-block rounded-lg px-3 py-1 text-sm",
                variant === "secondary" ? "bg-primary" : "bg-muted"
              )}
            >
              {tag}
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              {title}
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              {desc}
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {products.map((product) => (
            <Link href={"/shop/" + product?.handle} key={product?.id}>
              <Card>
                <CardContent className="flex flex-col items-start justify-center space-y-2 p-4">
                  <Image
                    src={product?.images[0].url || "/placeholder.svg"}
                    width="600"
                    height="600"
                    alt={product?.images[0].altText || product?.title || ""}
                    className="aspect-video sm:aspect-square overflow-hidden rounded-xl object-cover"
                  />
                  <div className="space-y-1">
                    <h3 className="text-lg font-bold">{product?.title}</h3>
                    <p className="text-muted-foreground">
                      {product?.priceRange.maxVariantPrice.amount}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>
    </VariantWrapper>
  )
}

export default TrendingItems
