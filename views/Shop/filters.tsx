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
                  <Checkbox checked={false} onCheckedChange={() => {}} />
                  {category}
                </Label>
              ))}
              {/* <Label className="flex items-center gap-2 font-normal">
                <Checkbox checked={false} onCheckedChange={() => {}} />
                Sneakers
              </Label>
              <Label className="flex items-center gap-2 font-normal">
                <Checkbox checked={false} onCheckedChange={() => {}} />
                Running Shoes
              </Label>
              <Label className="flex items-center gap-2 font-normal">
                <Checkbox checked={false} onCheckedChange={() => {}} />
                Casual Shoes
              </Label>
              <Label className="flex items-center gap-2 font-normal">
                <Checkbox checked={false} onCheckedChange={() => {}} />
                Formal Shoes
              </Label>
              <Label className="flex items-center gap-2 font-normal">
                <Checkbox checked={false} onCheckedChange={() => {}} />
                Boots
              </Label> */}
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
                  <Checkbox checked={false} />
                  {brand}
                </Label>
              ))}
              {/* <Label className="flex items-center gap-2 font-normal">
                <Checkbox checked={false} />
                Nike
              </Label>
              <Label className="flex items-center gap-2 font-normal">
                <Checkbox checked={false} />
                Adidas
              </Label>
              <Label className="flex items-center gap-2 font-normal">
                <Checkbox checked={false} onCheckedChange={() => {}} />
                Converse
              </Label>
              <Label className="flex items-center gap-2 font-normal">
                <Checkbox checked={false} />
                Vans
              </Label>
              <Label className="flex items-center gap-2 font-normal">
                <Checkbox checked={false} />
                Puma
              </Label>
              <Label className="flex items-center gap-2 font-normal">
                <Checkbox checked={false} onCheckedChange={() => {}} />
                New Balance
              </Label> */}
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
                  <Checkbox checked={false} />
                  {size}
                </Label>
              ))}
              {/* <Label className="flex items-center gap-2 font-normal">
                <Checkbox checked={false} />8
              </Label>
              <Label className="flex items-center gap-2 font-normal">
                <Checkbox checked={false} />9
              </Label>
              <Label className="flex items-center gap-2 font-normal">
                <Checkbox checked={false} />
                10
              </Label>
              <Label className="flex items-center gap-2 font-normal">
                <Checkbox checked={false} />
                11
              </Label> */}
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
                  <Checkbox checked={false} />
                  {color}
                </Label>
              ))}
              {/* <Label className="flex items-center gap-2 font-normal">
                <Checkbox checked={false} />
                White
              </Label>
              <Label className="flex items-center gap-2 font-normal">
                <Checkbox checked={false} />
                Black
              </Label>
              <Label className="flex items-center gap-2 font-normal">
                <Checkbox checked={false} />
                Red
              </Label>
              <Label className="flex items-center gap-2 font-normal">
                <Checkbox checked={false} />
                Blue
              </Label>
              <Label className="flex items-center gap-2 font-normal">
                <Checkbox checked={false} />
                Grey
              </Label> */}
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
      <Button size="sm" variant="outline" className="w-full">
        Apply Filters
      </Button>
    </div>
  )
}

export default Filters
