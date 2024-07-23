import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function slugToName(slug: string, separator: string = "-") {
  return slug
    .split(separator)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")
}

export function nameToSlug(name: string, separator: string = "-") {
  return name.toLowerCase().split(" ").join(separator)
}

export function escapeSearchTerm(term: string) {
  return term.replace(/([:"()[\]{}])/g, "\\$1")
}
