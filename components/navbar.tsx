import { FootprintsIcon, ShoppingBag } from "lucide-react"
import Link from "next/link"
import dynamic from "next/dynamic"
import Image from "next/image"

const CartModal = dynamic(() => import("./cart-modal"), {
  loading: () => <ShoppingBag className="text-muted-foreground" />,
})

function Navbar() {
  return (
    <header className="flex items-center container pt-10 py-0">
      <Link
        href="/"
        className="flex items-center justify-center"
        prefetch={false}
      >
        <Image src="/logo.svg" alt="Shoe App" width={120} height={120} />
        <span className="sr-only">Shoe App</span>
      </Link>
      <nav className="ml-auto flex gap-4 sm:gap-6">
        <Link
          href="/shop"
          className="text-sm font-medium hover:underline underline-offset-4"
          prefetch={false}
        >
          Shop
        </Link>

        <Link
          href="#"
          className="text-sm font-medium hover:underline underline-offset-4"
          prefetch={false}
        >
          Contact
        </Link>
        <CartModal />
      </nav>
    </header>
  )
}

export default Navbar
