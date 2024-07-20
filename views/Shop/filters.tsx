"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { useRouter, useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"

interface FiltersProps {
  categories: string[]
  brands: string[]
  sizes: string[]
  colors: string[]
  priceMin: number
  priceMax: number
}

function Filters({
  categories,
  brands,
  sizes,
  colors,
  priceMin,
  priceMax,
}: FiltersProps) {
  const router = useRouter()
  const searchParams = useSearchParams()

  const [selectedFilters, setSelectedFilters] = useState({
    category: new Set<string>(),
    brand: new Set<string>(),
    size: new Set<string>(),
    color: new Set<string>(),
  })

  useEffect(() => {
    const parseSet = (param: string | null) => {
      if (param === null) return new Set()

      try {
        const parsed = JSON.parse(param)
        return new Set(Array.isArray(parsed) ? parsed : [parsed])
      } catch (e) {
        return new Set(param ? [param] : [])
      }
    }

    setSelectedFilters({
      category: parseSet(searchParams.get("category")),
      brand: parseSet(searchParams.get("brand")),
      size: parseSet(searchParams.get("size")),
      color: parseSet(searchParams.get("color")),
    })
  }, [searchParams])

  const handleFilterChange = (
    type: keyof typeof selectedFilters,
    value: string
  ) => {
    setSelectedFilters((prev) => {
      const newSet = new Set(prev[type])
      if (newSet.has(value)) {
        newSet.delete(value)
      } else {
        newSet.add(value)
      }
      return { ...prev, [type]: newSet }
    })
  }

  const applyFilters = () => {
    const params = new URLSearchParams()

    Object.entries(selectedFilters).forEach(([key, values]) => {
      if (values.size > 0) {
        params.set(key, JSON.stringify(Array.from(values)))
      }
    })

    router.push(`?${params.toString()}`)
  }

  return (
    <div className="bg-background flex flex-col p-4 rounded-lg shadow-lg self-start">
      <h3 className="text-lg font-bold mb-4">Filters</h3>
      <Accordion type="single" collapsible>
        <AccordionItem value="category">
          <AccordionTrigger className="text-base">Category</AccordionTrigger>
          <AccordionContent>
            <div className="grid gap-2">
              {categories.map((category) => (
                <Label
                  className="flex items-center gap-2 font-normal"
                  key={category}
                >
                  <Checkbox
                    checked={selectedFilters.category.has(category)}
                    onCheckedChange={() =>
                      handleFilterChange("category", category)
                    }
                  />
                  {category}
                </Label>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="brand">
          <AccordionTrigger className="text-base">Brand</AccordionTrigger>
          <AccordionContent>
            <div className="grid gap-2">
              {brands.map((brand) => (
                <Label
                  className="flex items-center gap-2 font-normal"
                  key={brand}
                >
                  <Checkbox
                    checked={selectedFilters.brand.has(brand)}
                    onCheckedChange={() => handleFilterChange("brand", brand)}
                  />
                  {brand}
                </Label>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="size">
          <AccordionTrigger className="text-base">Size</AccordionTrigger>
          <AccordionContent>
            <div className="grid gap-2">
              {sizes.map((size) => (
                <Label
                  className="flex items-center gap-2 font-normal"
                  key={size}
                >
                  <Checkbox
                    checked={selectedFilters.size.has(size)}
                    onCheckedChange={() => handleFilterChange("size", size)}
                  />
                  {size}
                </Label>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="color">
          <AccordionTrigger className="text-base">Color</AccordionTrigger>
          <AccordionContent>
            <div className="grid gap-2">
              {colors.map((color) => (
                <Label
                  className="flex items-center gap-2 font-normal"
                  key={color}
                >
                  <Checkbox
                    checked={selectedFilters.color.has(color)}
                    onCheckedChange={() => handleFilterChange("color", color)}
                  />
                  {color}
                </Label>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="price" className="border-b-0">
          <AccordionTrigger className="text-base">Price</AccordionTrigger>
          <AccordionContent>
            <div className="w-full">
              <div className="bg-muted">
                <div className="bg-primary" />
              </div>
              <div className="bg-primary" />
            </div>
            <div className="flex justify-between text-sm text-muted-foreground mt-2">
              <span>${priceMin}</span>
              <span>${priceMax}</span>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <Button
        size="sm"
        variant="outline"
        className="w-full"
        onClick={applyFilters}
      >
        Apply Filters
      </Button>
    </div>
  )
}

export default Filters
