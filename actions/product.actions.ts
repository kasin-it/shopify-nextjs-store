"use server"

export const getPopularProducts = async () => {
  const products = [
    {
      image: "/placeholder.svg",
      name: "Product 1",
      price: "$100",
      href: "/product/1",
    },
    {
      image: "/placeholder.svg",
      name: "Product 1",
      price: "$100",
      href: "/product/1",
    },
    {
      image: "/placeholder.svg",
      name: "Product 1",
      price: "$100",
      href: "/product/1",
    },
    {
      image: "/placeholder.svg",
      name: "Product 1",
      price: "$100",
      href: "/product/1",
    },
  ]
  return products
}
