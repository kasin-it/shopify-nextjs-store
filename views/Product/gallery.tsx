"use client"

import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { useCallback, useEffect, useState } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { PlatformImage } from "@/lib/shopify/types"

interface GalleryProps {
  images: PlatformImage[]
}

function Gallery({ images }: GalleryProps) {
  const [api, setApi] = useState<CarouselApi>()
  const [thumbsApi, setThumbsApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (!api || !thumbsApi) {
      return
    }

    setCurrent(api.selectedScrollSnap())

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1)
      thumbsApi.scrollTo(api.selectedScrollSnap())
    })
  }, [api, thumbsApi])

  const onThumbClick = useCallback(
    (index: number) => {
      api?.scrollTo(index)
    },
    [api]
  )

  const hasOnlyOneImage = images.length <= 1

  return (
    <div className="grid gap-4">
      <Carousel setApi={setApi} className="relative min-h-[600px] w-full ">
        <CarouselContent className="size-full">
          {images.map((image, index) => (
            <CarouselItem
              className="flex size-full h-[600px] flex-col items-center justify-center"
              key={image.url}
            >
              <Image
                alt={image.altText || ""}
                src={image.url || "/default-product-image.svg"}
                width={600}
                height={900}
                priority={index === 0}
                className="aspect-[2/3] object-cover border w-full rounded-lg overflow-hidden"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="absolute bottom-0 left-1/2 flex -translate-x-1/2 gap-10 pb-6">
          {hasOnlyOneImage ? null : <CarouselPrevious className="relative" />}
          {hasOnlyOneImage ? null : <CarouselNext className="relative" />}
        </div>
      </Carousel>

      <div className="hidden md:flex gap-4 items-start overflow-x-hidden">
        <Carousel
          setApi={setThumbsApi}
          opts={{
            dragFree: true,
            containScroll: "trimSnaps",
            align: "start",
          }}
        >
          <CarouselContent className="ml-0 w-full max-w-[460px] justify-start gap-3 pb-4">
            {images.map((image, index) => (
              <CarouselItem
                key={`thumbnail_${image.url}`}
                className="basis-auto"
              >
                <button
                  onClick={() => onThumbClick(index)}
                  className={cn(
                    "border hover:border-primary rounded-lg overflow-hidden",
                    { "border-black": index === current - 1 }
                  )}
                >
                  <Image
                    alt={image.altText || ""}
                    src={image.url || `/placeholder.svg`}
                    width={100}
                    height={150}
                    className="aspect-[5/6] object-cover"
                  />
                </button>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  )
}

export default Gallery
