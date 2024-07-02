import React from "react"
import { Card, CardContent } from "./ui/card"
import Link from "next/link"
import VariantWrapper from "./variant-wrapper"
import { cn } from "@/lib/utils"

interface CategoryItem {
  name: string
  image: string
  desc: string
  href: string
}

interface CategoriesProps {
  tag: string
  title: string
  desc: string
  categories: CategoryItem[]
  variant?: "primary" | "secondary"
}

function Categories({
  tag,
  title,
  desc,
  categories,
  variant = "primary",
}: CategoriesProps) {
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
          {categories.map((category) => (
            <Link href={category.href} key={category.name}>
              <Card>
                <CardContent className="flex flex-col items-center justify-center space-y-2 p-4">
                  <img
                    src="/placeholder.svg"
                    width="600"
                    height="600"
                    alt="Sneakers"
                    className="aspect-video sm:aspect-square overflow-hidden rounded-xl object-cover"
                  />
                  <div className="space-y-1 w-full">
                    <h3 className="text-lg font-bold">{category.name}</h3>
                    <p className="text-muted-foreground">{category.desc}</p>
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

export default Categories
