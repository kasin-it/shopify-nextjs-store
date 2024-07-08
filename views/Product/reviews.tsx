import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import VariantWrapper from "@/components/variant-wrapper"
import { cn } from "@/lib/utils"
import { StarIcon } from "lucide-react"
import Link from "next/link"
import React from "react"

interface ReviewsProps {
  variant?: "primary" | "secondary"
}

function Reviews({ variant = "primary" }: ReviewsProps) {
  return (
    <VariantWrapper variant={variant}>
      <section className="container">
        <div className="mb-8 md:mb-10 lg:mb-12">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <h2 className="text-2xl font-bold tracking-tight md:text-3xl lg:text-4xl">
              What Our Customers Say
            </h2>
            <Button size="lg">Write a Review</Button>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <div className="flex flex-col gap-4 rounded-lg border bg-card p-6 shadow-sm transition-all duration-300 hover:shadow-md">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Avatar className="h-10 w-10 border">
                  <AvatarImage src="/placeholder-user.jpg" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div className="grid gap-0.5 text-sm">
                  <h3 className="font-semibold">Sarah Johnson</h3>
                  <time className="text-muted-foreground">2 days ago</time>
                </div>
              </div>
              <div className="flex items-center gap-0.5">
                <StarIcon className="h-5 w-5 fill-primary" />
                <StarIcon className="h-5 w-5 fill-primary" />
                <StarIcon className="h-5 w-5 fill-primary" />
                <StarIcon className="h-5 w-5 fill-muted stroke-muted-foreground" />
                <StarIcon className="h-5 w-5 fill-muted stroke-muted-foreground" />
              </div>
            </div>
            <div className="text-sm leading-loose text-muted-foreground">
              <p>
                I&apos;ve been experimenting with my LuminaCook Multi-Function
                Air Fryer for a few weeks now, and it&apos;s been a versatile
                addition to my kitchen. It&apos;s great for making crispy fries,
                chicken wings, and even some healthier options.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-4 rounded-lg border bg-card p-6 shadow-sm transition-all duration-300 hover:shadow-md">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Avatar className="h-10 w-10 border">
                  <AvatarImage src="/placeholder-user.jpg" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div className="grid gap-0.5 text-sm">
                  <h3 className="font-semibold">Alex Smith</h3>
                  <time className="text-muted-foreground">3 weeks ago</time>
                </div>
              </div>
              <div className="flex items-center gap-0.5">
                <StarIcon className="h-5 w-5 fill-primary" />
                <StarIcon className="h-5 w-5 fill-primary" />
                <StarIcon className="h-5 w-5 fill-primary" />
                <StarIcon className="h-5 w-5 fill-muted stroke-muted-foreground" />
                <StarIcon className="h-5 w-5 fill-muted stroke-muted-foreground" />
              </div>
            </div>
            <div className="text-sm leading-loose text-muted-foreground">
              <p>
                I recently purchased the SparkleShine Home Cleaning Robot, and
                it has been a game-changer in my life. I used to spend hours
                every weekend cleaning my house, but now I can simply turn on
                this little robot and let it do the work. It&apos;s incredibly
                efficient, navigating around obstacles with ease. The only
                reason I didn&apos;t give it a perfect 5-star rating is that it
                occasionally gets stuck under low furniture. Overall, it&apos;s
                been a great addition to my home, saving me time and effort.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-4 rounded-lg border bg-card p-6 shadow-sm transition-all duration-300 hover:shadow-md">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Avatar className="h-10 w-10 border">
                  <AvatarImage src="/placeholder-user.jpg" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div className="grid gap-0.5 text-sm">
                  <h3 className="font-semibold">Emily Parker</h3>
                  <time className="text-muted-foreground">2 days ago</time>
                </div>
              </div>
              <div className="flex items-center gap-0.5">
                <StarIcon className="h-5 w-5 fill-primary" />
                <StarIcon className="h-5 w-5 fill-primary" />
                <StarIcon className="h-5 w-5 fill-muted stroke-muted-foreground" />
                <StarIcon className="h-5 w-5 fill-muted stroke-muted-foreground" />
                <StarIcon className="h-5 w-5 fill-muted stroke-muted-foreground" />
              </div>
            </div>
            <div className="text-sm leading-loose text-muted-foreground">
              <p>
                The battery life is impressive, lasting me for long-haul flights
                without any issues. They are comfortable to wear for extended
                periods, and I appreciate the sleek design. Worth every penny,
                and I&apos;d recommend these headphones to anyone who values
                high-quality audio and peace and quiet.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-4 rounded-lg border bg-card p-6 shadow-sm transition-all duration-300 hover:shadow-md">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Avatar className="h-10 w-10 border">
                  <AvatarImage src="/placeholder-user.jpg" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div className="grid gap-0.5 text-sm">
                  <h3 className="font-semibold">Olivia Davis</h3>
                  <time className="text-muted-foreground">1 month ago</time>
                </div>
              </div>
              <div className="flex items-center gap-0.5">
                <StarIcon className="h-5 w-5 fill-primary" />
                <StarIcon className="h-5 w-5 fill-primary" />
                <StarIcon className="h-5 w-5 fill-primary" />
                <StarIcon className="h-5 w-5 fill-primary" />
                <StarIcon className="h-5 w-5 fill-primary" />
              </div>
            </div>
            <div className="text-sm leading-loose text-muted-foreground">
              <p>
                I absolutely love this product! The quality is top-notch, and it
                has exceeded all my expectations. The design is sleek and
                modern, and it's been a game-changer in my daily routine. Highly
                recommended for anyone looking for a reliable and versatile
                solution.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-8 flex justify-center">
          <Link
            href="#"
            className={cn(
              "text-sm font-medium hover:underline",
              variant === "primary" ? "" : "text-muted-foreground"
            )}
            prefetch={false}
          >
            See more reviews
          </Link>
        </div>
      </section>
    </VariantWrapper>
  )
}

export default Reviews
