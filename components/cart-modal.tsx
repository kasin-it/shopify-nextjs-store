"use client"

import React from "react"
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select"
import { Button } from "./ui/button"
import { ShoppingBag } from "lucide-react"
import Image from "next/image"

function CartModal() {
  const cartItems = [
    {
      id: 1,
      image: "/placeholder.svg",
      name: "Cozy Blanket",
      quantity: 2,
      price: 29.99,
    },
    {
      id: 2,
      image: "/placeholder.svg",
      name: "Autumn Mug",
      quantity: 1,
      price: 12.99,
    },
    {
      id: 3,
      image: "/placeholder.svg",
      name: "Fall Fragrance Candle",
      quantity: 3,
      price: 16.99,
    },
  ]
  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  )

  return (
    <Sheet>
      <SheetTrigger>
        <ShoppingBag />
      </SheetTrigger>
      <SheetContent side={"right"} className="w-full sm:max-w-lg">
        <div className="px-2 md:px-6 py-12">
          <h1 className="text-2xl font-bold mb-6">Your Cart</h1>
          <div className="grid gap-6">
            <div className="flex flex-col gap-4 flex-grow">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="grid grid-cols-2 min-[420px]:grid-cols-[100px_1fr_100px] items-center gap-4"
                >
                  <Image
                    src="/placeholder.svg"
                    alt={item.name}
                    width={100}
                    height={100}
                    className="rounded-lg object-cover"
                  />
                  <div className="grid gap-1">
                    <h3 className="font-semibold">{item.name}</h3>
                    <div className="flex items-center gap-2">
                      <span className="text-muted-foreground">Qty:</span>
                      <Select defaultValue={item.quantity.toString()}>
                        <SelectTrigger className="w-20">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {[1, 2, 3, 4, 5].map((qty) => (
                            <SelectItem key={qty} value={qty.toString()}>
                              {qty}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="min-[420px]:hidden" />
                  <div className="text-left min-[420px]:text-right font-semibold">
                    ${(item.price * item.quantity).toFixed(2)}
                  </div>
                </div>
              ))}
            </div>
            <div className="border-t pt-6">
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Total:</span>
                <span className="text-2xl font-bold">${total.toFixed(2)}</span>
              </div>
              <div className="flex flex-wrap gap-4 mt-6">
                <Button variant="outline" className="flex-1">
                  Continue Shopping
                </Button>
                <Button className="flex-1">Proceed to Checkout</Button>
              </div>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}

export default CartModal
