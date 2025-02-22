import { DM_Sans } from "next/font/google"
import { Space_Mono } from "next/font/google"
import { cn } from "@/lib/utils"
import "./globals.css"
import { Metadata } from "next/types"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
}

const fontHeading = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-heading",
})

const fontBody = Space_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
  weight: "400",
})

export default function Layout({
  children: children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={cn("antialiased", fontHeading.variable, fontBody.variable)}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
