"use server";

export const getCategoories = async () => {
  const categories = [
    {
      image: "/placeholder.svg",
      name: "Product 1",
      desc: "Product 1 desc",
      href: "/product/1",
    },
    {
      image: "/placeholder.svg",
      name: "Product 1",
      desc: "Product 1 desc",
      href: "/product/1",
    },
    {
      image: "/placeholder.svg",
      name: "Product 1",
      desc: "Product 1 desc",
      href: "/product/1",
    },
    {
      image: "/placeholder.svg",
      name: "Product 1",
      desc: "Product 1 desc",
      href: "/product/1",
    },
  ];
  return categories;
};
