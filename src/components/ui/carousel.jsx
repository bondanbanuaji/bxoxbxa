import * as React from "react"
import { ArrowLeft, ArrowRight } from "lucide-react"
import useEmblaCarousel from "embla-carousel-react"

import { cn } from "../../lib/utils"
import { Button } from "./button"

const CarouselContext = React.createContext(null)

function useCarousel() {
  const context = React.useContext(CarouselContext)

  if (!context) {
    throw new Error("useCarousel must be used within a <Carousel />")
  }

  return context
}


const Carousel = React.forwardRef((
  {
    orientation = "horizontal",
    opts,
    setApi,
    plugins,
    className,
    children,
    ...props
  },
  ref
) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    ...opts,
    axis: orientation === "horizontal" ? "x" : "y",
  }, plugins)
  const [canScrollPrev, setCanScrollPrev] = React.useState(false)
  const [canScrollNext, setCanScrollNext] = React.useState(false)

  const onSelect = React.useCallback((emblaApi) => {
    if (!emblaApi) return
    setCanScrollPrev(emblaApi.canScrollPrev())
    setCanScrollNext(emblaApi.canScrollNext())
  }, [])

  React.useEffect(() => {
    if (!emblaApi) return
    onSelect(emblaApi)
    emblaApi.on("reInit", onSelect)
    emblaApi.on("select", onSelect)
    return () => {
      emblaApi?.off("select", onSelect)
    }
  }, [emblaApi, onSelect])

  React.useImperativeHandle(ref, () => ({
    carouselApi: emblaApi,
  }), [emblaApi])

  React.useEffect(() => {
    if (setApi) {
      setApi(emblaApi)
    }
  }, [emblaApi, setApi])

  return (
    <CarouselContext.Provider
      value={{
        carouselApi: emblaApi,
        canScrollPrev,
        canScrollNext,
        scrollPrev: () => emblaApi?.scrollPrev(),
        scrollNext: () => emblaApi?.scrollNext(),
        orientation,
      }}
    >
      <div
        {...props}
        className={cn(
          "relative",
          className
        )}
      >
        <div ref={emblaRef} className="overflow-hidden">
          <div
            className={cn(
              "flex",
              orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col"
            )}
          >
            {children}
          </div>
        </div>
        {props.showControls && (
          <>
            <CarouselPrevious />
            <CarouselNext />
          </>
        )}
      </div>
    </CarouselContext.Provider>
  )
})
Carousel.displayName = "Carousel"

const CarouselContent = React.forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className="flex" {...props} />
))
CarouselContent.displayName = "CarouselContent"

const CarouselItem = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("min-w-0 shrink-0 grow-0 basis-full pl-4", className)}
    {...props}
  />
))
CarouselItem.displayName = "CarouselItem"

const CarouselPrevious = React.forwardRef(({ className, variant = "outline", size = "icon", ...props }, ref) => {
  const { carouselApi } = useCarousel()
  const [canScrollPrev, setCanScrollPrev] = React.useState(false)

  React.useEffect(() => {
    if (!carouselApi) return
    const onSelect = () => {
      setCanScrollPrev(carouselApi.canScrollPrev())
    }
    onSelect()
    carouselApi.on("select", onSelect)
    carouselApi.on("reInit", onSelect)
    return () => {
      carouselApi?.off("select", onSelect)
      carouselApi?.off("reInit", onSelect)
    }
  }, [carouselApi])

  return (
    <Button
      ref={ref}
      variant={variant}
      size={size}
      className={cn(
        "absolute h-8 w-8 rounded-full",
        canScrollPrev ? "opacity-100" : "opacity-0",
        className
      )}
      onClick={() => carouselApi?.scrollPrev()}
      disabled={!canScrollPrev}
      {...props}
    >
      <ArrowLeft className="h-4 w-4" />
      <span className="sr-only">Previous slide</span>
    </Button>
  )
})
CarouselPrevious.displayName = "CarouselPrevious"

const CarouselNext = React.forwardRef(({ className, variant = "outline", size = "icon", ...props }, ref) => {
  const { carouselApi } = useCarousel()
  const [canScrollNext, setCanScrollNext] = React.useState(false)

  React.useEffect(() => {
    if (!carouselApi) return
    const onSelect = () => {
      setCanScrollNext(carouselApi.canScrollNext())
    }
    onSelect()
    carouselApi.on("select", onSelect)
    carouselApi.on("reInit", onSelect)
    return () => {
      carouselApi?.off("select", onSelect)
      carouselApi?.off("reInit", onSelect)
    }
  }, [carouselApi])

  return (
    <Button
      ref={ref}
      variant={variant}
      size={size}
      className={cn(
        "absolute h-8 w-8 rounded-full",
        canScrollNext ? "opacity-100" : "opacity-0",
        className
      )}
      onClick={() => carouselApi?.scrollNext()}
      disabled={!canScrollNext}
      {...props}
    >
      <ArrowRight className="h-4 w-4" />
      <span className="sr-only">Next slide</span>
    </Button>
  )
})
CarouselNext.displayName = "CarouselNext"

export {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
}
