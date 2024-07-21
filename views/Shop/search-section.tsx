"use client"

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
import { useProductFilters } from "@/hooks/use-shop-filters"

function SearchSection() {
  const { selectedFilters, handleFilterChange, applyFilters } =
    useProductFilters()

  return (
    <div className="flex items-center mb-6">
      <Input
        type="search"
        placeholder="Search for shoes..."
        className="flex-1 mr-4 bg-background text-foreground"
        value={selectedFilters.search}
        onChange={(value) => handleFilterChange("search", value.target.value)}
        onBlur={applyFilters}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            applyFilters()
          }
        }}
      />
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="flex items-center gap-2">
            <ListOrderedIcon className="w-5 h-5" />
            Sort by:{" "}
            {selectedFilters.sortKey === "TITLE"
              ? "Title"
              : selectedFilters.sortKey === "CREATED_AT"
              ? "Newest"
              : selectedFilters.sortKey === "PRICE"
              ? "Price"
              : "Best selling"}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-48">
          <DropdownMenuRadioGroup
            value={selectedFilters.sortKey}
            onValueChange={(value) => {
              handleFilterChange("sortKey", value)
              applyFilters()
            }}
            onBlur={applyFilters}
          >
            <DropdownMenuRadioItem value="TITLE">Title</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="CREATED_AT">
              Newest
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="PRICE">Price</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="BEST_SELLING">
              Best selling
            </DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}

export default SearchSection
