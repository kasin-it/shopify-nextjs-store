"use client"

import { useState, useMemo } from "react"
import { Input } from "@/components/ui/input"
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { ListOrderedIcon } from "lucide-react"
import Image from "next/image"

export default function Component() {
  const [searchTerm, setSearchTerm] = useState("")
  const [filters, setFilters] = useState({
    brand: [],
    size: [],
    color: [],
    category: [],
    priceRange: [0, 500],
  })
  const [sortBy, setSortBy] = useState("popularity")
  const products = useMemo(() => {
    return [
      {
        id: 1,
        image: "/placeholder.svg",
        title: "Nike Air Force 1",
        price: 99.99,
        brand: "Nike",
        size: 9,
        color: "white",
      },
      {
        id: 2,
        image: "/placeholder.svg",
        title: "Adidas Ultraboost",
        price: 179.99,
        brand: "Adidas",
        size: 10,
        color: "black",
      },
      {
        id: 3,
        image: "/placeholder.svg",
        title: "Converse Chuck Taylor",
        price: 59.99,
        brand: "Converse",
        size: 8,
        color: "red",
      },
      {
        id: 4,
        image: "/placeholder.svg",
        title: "Vans Old Skool",
        price: 69.99,
        brand: "Vans",
        size: 11,
        color: "black",
      },
      {
        id: 5,
        image: "/placeholder.svg",
        title: "Puma RS-X Toys",
        price: 89.99,
        brand: "Puma",
        size: 9,
        color: "blue",
      },
      {
        id: 6,
        image: "/placeholder.svg",
        title: "New Balance 574",
        price: 99.99,
        brand: "New Balance",
        size: 10,
        color: "grey",
      },
    ]
      .filter((product) => {
        const { brand, size, color, priceRange } = filters
        return (
          product.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
          (brand.length === 0 || brand.includes(product.brand)) &&
          (size.length === 0 || size.includes(product.size)) &&
          (color.length === 0 || color.includes(product.color)) &&
          product.price >= priceRange[0] &&
          product.price <= priceRange[1]
        )
      })
      .sort((a, b) => {
        switch (sortBy) {
          case "price-asc":
            return a.price - b.price
          case "price-desc":
            return b.price - a.price
          case "popularity":
            return b.id - a.id
          case "newest":
            return new Date(b.id) - new Date(a.id)
          default:
            return 0
        }
      })
  }, [searchTerm, filters, sortBy])
  const handleSearch = (e) => {
    setSearchTerm(e.target.value)
  }
  const handleFilterChange = (type, value) => {
    setFilters((prevFilters) => {
      const newFilters = { ...prevFilters }
      if (type === "brand") {
        newFilters.brand = newFilters.brand.includes(value)
          ? newFilters.brand.filter((item) => item !== value)
          : [...newFilters.brand, value]
      } else if (type === "size") {
        newFilters.size = newFilters.size.includes(value)
          ? newFilters.size.filter((item) => item !== value)
          : [...newFilters.size, value]
      } else if (type === "color") {
        newFilters.color = newFilters.color.includes(value)
          ? newFilters.color.filter((item) => item !== value)
          : [...newFilters.color, value]
      } else if (type === "priceRange") {
        newFilters.priceRange = value
      }
      return newFilters
    })
  }
  const handleSortChange = (value) => {
    setSortBy(value)
  }
  return (
    <div className="container mx-auto px-4 md:px-6 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Shoe Shop</h1>
        <p className="text-muted-foreground">
          Browse our selection of the latest shoes.
        </p>
      </div>
      <div className="flex items-center mb-6">
        <Input
          type="search"
          placeholder="Search for shoes..."
          value={searchTerm}
          onChange={handleSearch}
          className="flex-1 mr-4 bg-background text-foreground"
        />
        <DropdownMenu>
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
        </DropdownMenu>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-[240px_1fr] gap-8">
        <div className="bg-background flex flex-col p-4 rounded-lg shadow-lg self-start">
          <h3 className="text-lg font-bold mb-4">Filters</h3>
          <Accordion type="single" collapsible>
            <AccordionItem value="category">
              <AccordionTrigger className="text-base">
                Category
              </AccordionTrigger>
              <AccordionContent>
                <div className="grid gap-2">
                  <Label className="flex items-center gap-2 font-normal">
                    <Checkbox
                      checked={filters.category.includes("sneakers")}
                      onCheckedChange={() =>
                        handleFilterChange("category", "sneakers")
                      }
                    />
                    Sneakers
                  </Label>
                  <Label className="flex items-center gap-2 font-normal">
                    <Checkbox
                      checked={filters.category.includes("running")}
                      onCheckedChange={() =>
                        handleFilterChange("category", "running")
                      }
                    />
                    Running Shoes
                  </Label>
                  <Label className="flex items-center gap-2 font-normal">
                    <Checkbox
                      checked={filters.category.includes("casual")}
                      onCheckedChange={() =>
                        handleFilterChange("category", "casual")
                      }
                    />
                    Casual Shoes
                  </Label>
                  <Label className="flex items-center gap-2 font-normal">
                    <Checkbox
                      checked={filters.category.includes("formal")}
                      onCheckedChange={() =>
                        handleFilterChange("category", "formal")
                      }
                    />
                    Formal Shoes
                  </Label>
                  <Label className="flex items-center gap-2 font-normal">
                    <Checkbox
                      checked={filters.category.includes("boots")}
                      onCheckedChange={() =>
                        handleFilterChange("category", "boots")
                      }
                    />
                    Boots
                  </Label>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="brand">
              <AccordionTrigger className="text-base">Brand</AccordionTrigger>
              <AccordionContent>
                <div className="grid gap-2">
                  <Label className="flex items-center gap-2 font-normal">
                    <Checkbox
                      checked={filters.brand.includes("Nike")}
                      onCheckedChange={() =>
                        handleFilterChange("brand", "Nike")
                      }
                    />
                    Nike
                  </Label>
                  <Label className="flex items-center gap-2 font-normal">
                    <Checkbox
                      checked={filters.brand.includes("Adidas")}
                      onCheckedChange={() =>
                        handleFilterChange("brand", "Adidas")
                      }
                    />
                    Adidas
                  </Label>
                  <Label className="flex items-center gap-2 font-normal">
                    <Checkbox
                      checked={filters.brand.includes("Converse")}
                      onCheckedChange={() =>
                        handleFilterChange("brand", "Converse")
                      }
                    />
                    Converse
                  </Label>
                  <Label className="flex items-center gap-2 font-normal">
                    <Checkbox
                      checked={filters.brand.includes("Vans")}
                      onCheckedChange={() =>
                        handleFilterChange("brand", "Vans")
                      }
                    />
                    Vans
                  </Label>
                  <Label className="flex items-center gap-2 font-normal">
                    <Checkbox
                      checked={filters.brand.includes("Puma")}
                      onCheckedChange={() =>
                        handleFilterChange("brand", "Puma")
                      }
                    />
                    Puma
                  </Label>
                  <Label className="flex items-center gap-2 font-normal">
                    <Checkbox
                      checked={filters.brand.includes("New Balance")}
                      onCheckedChange={() =>
                        handleFilterChange("brand", "New Balance")
                      }
                    />
                    New Balance
                  </Label>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="size">
              <AccordionTrigger className="text-base">Size</AccordionTrigger>
              <AccordionContent>
                <div className="grid gap-2">
                  <Label className="flex items-center gap-2 font-normal">
                    <Checkbox
                      checked={filters.size.includes(8)}
                      onCheckedChange={() => handleFilterChange("size", 8)}
                    />
                    8
                  </Label>
                  <Label className="flex items-center gap-2 font-normal">
                    <Checkbox
                      checked={filters.size.includes(9)}
                      onCheckedChange={() => handleFilterChange("size", 9)}
                    />
                    9
                  </Label>
                  <Label className="flex items-center gap-2 font-normal">
                    <Checkbox
                      checked={filters.size.includes(10)}
                      onCheckedChange={() => handleFilterChange("size", 10)}
                    />
                    10
                  </Label>
                  <Label className="flex items-center gap-2 font-normal">
                    <Checkbox
                      checked={filters.size.includes(11)}
                      onCheckedChange={() => handleFilterChange("size", 11)}
                    />
                    11
                  </Label>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="color">
              <AccordionTrigger className="text-base">Color</AccordionTrigger>
              <AccordionContent>
                <div className="grid gap-2">
                  <Label className="flex items-center gap-2 font-normal">
                    <Checkbox
                      checked={filters.color.includes("white")}
                      onCheckedChange={() =>
                        handleFilterChange("color", "white")
                      }
                    />
                    White
                  </Label>
                  <Label className="flex items-center gap-2 font-normal">
                    <Checkbox
                      checked={filters.color.includes("black")}
                      onCheckedChange={() =>
                        handleFilterChange("color", "black")
                      }
                    />
                    Black
                  </Label>
                  <Label className="flex items-center gap-2 font-normal">
                    <Checkbox
                      checked={filters.color.includes("red")}
                      onCheckedChange={() => handleFilterChange("color", "red")}
                    />
                    Red
                  </Label>
                  <Label className="flex items-center gap-2 font-normal">
                    <Checkbox
                      checked={filters.color.includes("blue")}
                      onCheckedChange={() =>
                        handleFilterChange("color", "blue")
                      }
                    />
                    Blue
                  </Label>
                  <Label className="flex items-center gap-2 font-normal">
                    <Checkbox
                      checked={filters.color.includes("grey")}
                      onCheckedChange={() =>
                        handleFilterChange("color", "grey")
                      }
                    />
                    Grey
                  </Label>
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
                  <span>${filters.priceRange[0]}</span>
                  <span>${filters.priceRange[1]}</span>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Button size="sm" variant="outline" className="w-full">
            Apply Filters
          </Button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
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
          ))}
        </div>
      </div>
    </div>
  )
}
