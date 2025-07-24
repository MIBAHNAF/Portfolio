"use client";
import React, {
  useEffect,
  useRef,
  useState,
  createContext,
  useContext,
} from "react";
import {
  IconArrowNarrowLeft,
  IconArrowNarrowRight,
  IconX,
} from "@tabler/icons-react";
import { cn } from "../../lib/utils";
import { AnimatePresence, motion } from "motion/react";
import { useOutsideClick } from "../../hooks/use-outside-click";

export const CarouselContext = createContext({
  onCardClose: () => {},
  currentIndex: 0,
});

export const Carousel = ({
  items,
  initialScroll = 0
}) => {
  const carouselRef = React.useRef(null);
  const [canScrollLeft, setCanScrollLeft] = React.useState(false);
  const [canScrollRight, setCanScrollRight] = React.useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = initialScroll;
      checkScrollability();
    }
  }, [initialScroll]);

  const checkScrollability = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth);
    }
  };

  const scrollLeft = () => {
    if (carouselRef.current) {
      const isMobile = window.innerWidth < 640;
      const scrollAmount = isMobile ? 200 : 300;
      carouselRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      const isMobile = window.innerWidth < 640;
      const scrollAmount = isMobile ? 200 : 300;
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const handleCardClose = (index) => {
    if (carouselRef.current) {
      const screenWidth = window.innerWidth;
      let cardWidth, gap;
      
      if (screenWidth < 640) { // Mobile
        cardWidth = 230;
        gap = 4;
      } else if (screenWidth < 768) { // Small tablets
        cardWidth = 280;
        gap = 8;
      } else { // Desktop and larger tablets
        cardWidth = 384;
        gap = 8;
      }
      
      const scrollPosition = (cardWidth + gap) * (index + 1);
      carouselRef.current.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      });
      setCurrentIndex(index);
    }
  };

  const isMobile = () => {
    return window && window.innerWidth < 768;
  };

  return (
    <CarouselContext.Provider value={{ onCardClose: handleCardClose, currentIndex }}>
      <div className="relative w-full">
        <div
          className="flex w-full overflow-x-scroll overscroll-x-auto scroll-smooth py-6 [scrollbar-width:none] sm:py-10 md:py-20"
          ref={carouselRef}
          data-carousel-container
          onScroll={checkScrollability}>
          <div
            className={cn("absolute right-0 z-[1000] h-auto w-[5%] overflow-hidden bg-gradient-to-l")}></div>

          <div
            className={cn(
              "flex flex-row justify-start gap-3 pl-3 sm:gap-4 sm:pl-4",
              // remove max-w-4xl if you want the carousel to span the full width of its container
              "mx-auto max-w-7xl"
            )}>
            {items.map((item, index) => (
              <motion.div
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.5,
                    delay: 0.2 * index,
                    ease: "easeOut",
                    once: true,
                  },
                }}
                key={"card" + index}
                className="rounded-3xl last:pr-[10%] sm:last:pr-[15%] md:last:pr-[33%]">
                {item}
              </motion.div>
            ))}
          </div>
        </div>
        <div className="mr-4 sm:mr-10 flex justify-end gap-1.5 sm:gap-2">
          <button
            className="relative z-40 flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-gray-100 disabled:opacity-50"
            onClick={scrollLeft}
            disabled={!canScrollLeft}>
            <IconArrowNarrowLeft className="h-4 w-4 sm:h-6 sm:w-6 text-gray-500" />
          </button>
          <button
            className="relative z-40 flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-gray-100 disabled:opacity-50"
            onClick={scrollRight}
            disabled={!canScrollRight}>
            <IconArrowNarrowRight className="h-4 w-4 sm:h-6 sm:w-6 text-gray-500" />
          </button>
        </div>
      </div>
    </CarouselContext.Provider>
  );
};

export const Card = ({
  card,
  index,
  layout = false
}) => {
  const [open, setOpen] = useState(false);
  const containerRef = useRef(null);
  const { onCardClose, currentIndex } = useContext(CarouselContext);

  useEffect(() => {
    function onKeyDown(event) {
      if (event.key === "Escape") {
        handleClose();
      }
    }

    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  useOutsideClick(containerRef, () => handleClose());

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    onCardClose(index);
  };

  return (
    <>
      <AnimatePresence>
        {open && (
          <div className="fixed inset-0 z-50 h-screen overflow-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 h-full w-full bg-black/80 backdrop-blur-lg" />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              ref={containerRef}
              layoutId={layout ? `card-${card.title}` : undefined}
              className="relative z-[60] mx-auto my-4 sm:my-10 h-fit max-w-5xl rounded-3xl bg-white p-3 sm:p-4 font-sans md:p-10 dark:bg-neutral-900">
              <button
                className="sticky top-2 sm:top-4 right-0 ml-auto flex h-8 w-8 items-center justify-center rounded-full bg-black dark:bg-white"
                onClick={handleClose}>
                <IconX className="h-5 w-5 sm:h-6 sm:w-6 text-neutral-100 dark:text-neutral-900" />
              </button>
              <motion.p
                layoutId={layout ? `category-${card.title}` : undefined}
                className="text-sm sm:text-base font-medium text-black dark:text-white">
                {card.category}
              </motion.p>
              <motion.p
                layoutId={layout ? `title-${card.title}` : undefined}
                className="mt-2 sm:mt-4 text-xl sm:text-2xl font-semibold text-neutral-700 md:text-5xl dark:text-white">
                {card.title}
              </motion.p>
              <div className="py-4 sm:py-6 md:py-10">{card.content}</div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      <motion.button
        layoutId={layout ? `card-${card.title}` : undefined}
        onClick={handleOpen}
        className="relative z-10 flex h-72 w-52 flex-col items-start justify-start overflow-hidden rounded-3xl bg-gray-100 sm:h-80 sm:w-56 md:h-[40rem] md:w-96 dark:bg-neutral-900">
        <div
          className="pointer-events-none absolute inset-x-0 top-0 z-30 h-full bg-gradient-to-b from-black/50 via-transparent to-transparent" />
        <div className="relative z-40 p-4 sm:p-6 md:p-8">
          <motion.p
            layoutId={layout ? `category-${card.category}` : undefined}
            className="text-left font-sans text-xs sm:text-sm font-medium text-white md:text-base">
            {card.category}
          </motion.p>
          <motion.p
            layoutId={layout ? `title-${card.title}` : undefined}
            className="mt-2 max-w-xs text-left font-sans text-lg sm:text-xl font-semibold [text-wrap:balance] text-white md:text-3xl">
            {card.title}
          </motion.p>
        </div>
        <BlurImage
          src={card.src}
          alt={card.title}
          fill
          className="absolute inset-0 z-10 object-cover" />
      </motion.button>
    </>
  );
};

export const BlurImage = ({
  height,
  width,
  src,
  className,
  alt,
  fill,
  ...rest
}) => {
  const [isLoading, setLoading] = useState(true);
  
  // Filter out non-DOM props
  const { blurDataURL, ...domProps } = rest;
  
  return (
    <img
      className={cn(
        "transition duration-300",
        fill ? "absolute inset-0 h-full w-full object-cover" : "",
        isLoading ? "blur-sm" : "blur-0",
        className
      )}
      onLoad={() => setLoading(false)}
      src={src}
      width={!fill ? width : undefined}
      height={!fill ? height : undefined}
      loading="lazy"
      decoding="async"
      alt={alt ? alt : "Background of a beautiful view"}
      {...domProps} />
  );
};
