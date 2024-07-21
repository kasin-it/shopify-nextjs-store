import { useRouter, useSearchParams } from "next/navigation"
import { useEffect, useState, useCallback } from "react"

type SetFilterType = "category" | "brand" | "size" | "color"
type SingleValueFilterType = "search" | "sortKey" | "priceMin" | "priceMax"
type FilterType = SetFilterType | SingleValueFilterType

interface FilterState {
  category: Set<string>
  brand: Set<string>
  size: Set<string>
  color: Set<string>
  search: string
  sortKey: string
  priceMin: number
  priceMax: number
}

const defaultFilters: FilterState = {
  category: new Set<string>(),
  brand: new Set<string>(),
  size: new Set<string>(),
  color: new Set<string>(),
  search: "",
  sortKey: "",
  priceMin: 0,
  priceMax: 0,
}

export function useProductFilters() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [selectedFilters, setSelectedFilters] =
    useState<FilterState>(defaultFilters)

  useEffect(() => {
    const parseSet = (param: string | null): Set<string> => {
      if (!param) return new Set()
      try {
        const parsed = JSON.parse(param)
        return new Set(Array.isArray(parsed) ? parsed : [parsed])
      } catch {
        return new Set(param ? [param] : [])
      }
    }

    setSelectedFilters({
      category: parseSet(searchParams.get("category")),
      brand: parseSet(searchParams.get("brand")),
      size: parseSet(searchParams.get("size")),
      color: parseSet(searchParams.get("color")),
      search: searchParams.get("search") || "",
      sortKey: searchParams.get("sortKey") || "",
      priceMin: parseInt(searchParams.get("priceMin") || "0", 10),
      priceMax: parseInt(searchParams.get("priceMax") || "0", 10),
    })
  }, [searchParams])

  const handleFilterChange = useCallback(
    (type: FilterType, value: string | number) => {
      setSelectedFilters((prev) => {
        if (type in { category: true, brand: true, size: true, color: true }) {
          const newSet = new Set(prev[type as SetFilterType])
          if (newSet.has(value as string)) {
            newSet.delete(value as string)
          } else {
            newSet.add(value as string)
          }
          return { ...prev, [type]: newSet }
        } else {
          return { ...prev, [type]: value }
        }
      })
    },
    []
  )

  const applyFilters = useCallback(() => {
    const params = new URLSearchParams()
    Object.entries(selectedFilters).forEach(([key, value]) => {
      if (value instanceof Set && value.size > 0) {
        params.set(key, JSON.stringify(Array.from(value)))
      } else if (typeof value === "string" && value !== "") {
        params.set(key, value)
      } else if (typeof value === "number" && value !== 0) {
        params.set(key, value.toString())
      }
    })
    router.push(`?${params.toString()}`)
  }, [selectedFilters, router])

  return { selectedFilters, handleFilterChange, applyFilters }
}
