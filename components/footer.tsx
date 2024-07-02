import { MountainIcon } from "lucide-react"
import Link from "next/link"
import VariantWrapper from "./variant-wrapper"

function Footer() {
  return (
    <VariantWrapper variant="secondary">
      <footer className="container py-6 md:py-8 w-full">
        <div className="max-w-7xl flex flex-col items-center justify-between gap-4 md:flex-row">
          <Link href="#" className="flex items-center gap-2" prefetch={false}>
            <MountainIcon className="h-6 w-6" />
            <span className="text-lg font-semibold">Acme Inc</span>
          </Link>
          <nav className="flex flex-wrap items-center justify-center gap-4 text-sm">
            <Link href="#" className="hover:underline" prefetch={false}>
              Home
            </Link>
            <Link href="#" className="hover:underline" prefetch={false}>
              About
            </Link>
            <Link href="#" className="hover:underline" prefetch={false}>
              Products
            </Link>
            <Link href="#" className="hover:underline" prefetch={false}>
              Contact
            </Link>
          </nav>
          <p className="text-sm text-muted-foreground">
            &copy; 2024 Acme Inc. All rights reserved.
          </p>
        </div>
      </footer>
    </VariantWrapper>
  )
}

export default Footer
