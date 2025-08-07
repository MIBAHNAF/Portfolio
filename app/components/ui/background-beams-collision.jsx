"use client";
import { cn } from "../../../lib/utils";
import { motion } from "motion/react";
import React, { useRef } from "react";
import { useTheme } from "../../contexts/ThemeContext";

export const BackgroundBeamsWithCollision = ({
  children,
  className
}) => {
  const { isDark } = useTheme();

  // Random optimized beams - responsive count based on screen size
  const beams = [
    // Mobile: 6 beams, Desktop: 10 beams
    {
      initialX: `${Math.random() * 15 + 5}vw`, // Random 5-20%
      translateX: `${Math.random() * 15 + 5}vw`,
      duration: Math.random() * 3 + 7, // Random 7-10s
      repeatDelay: 0,
      delay: 0, // No delay - start immediately
      className: "h-4 sm:h-6 md:h-8",
    },
    {
      initialX: `${Math.random() * 15 + 20}vw`, // Random 20-35%
      translateX: `${Math.random() * 15 + 20}vw`,
      duration: Math.random() * 3 + 8,
      repeatDelay: 0,
      delay: 0,
      className: "h-3 sm:h-5 md:h-7",
    },
    {
      initialX: `${Math.random() * 15 + 35}vw`, // Random 35-50%
      translateX: `${Math.random() * 15 + 35}vw`,
      duration: Math.random() * 3 + 6,
      repeatDelay: 0,
      delay: 0,
      className: "h-5 sm:h-7 md:h-9",
    },
    {
      initialX: `${Math.random() * 15 + 50}vw`, // Random 50-65%
      translateX: `${Math.random() * 15 + 50}vw`,
      duration: Math.random() * 3 + 9,
      repeatDelay: 0,
      delay: 0,
      className: "h-4 sm:h-6 md:h-8",
    },
    {
      initialX: `${Math.random() * 15 + 65}vw`, // Random 65-80%
      translateX: `${Math.random() * 15 + 65}vw`,
      duration: Math.random() * 3 + 7,
      repeatDelay: 0,
      delay: 0,
      className: "h-6 sm:h-8 md:h-10",
    },
    {
      initialX: `${Math.random() * 15 + 80}vw`, // Random 80-95%
      translateX: `${Math.random() * 15 + 80}vw`,
      duration: Math.random() * 3 + 8,
      repeatDelay: 0,
      delay: 0,
      className: "h-3 sm:h-5 md:h-7",
    },
    
    // Additional beams for larger screens (hidden on mobile)
    {
      initialX: `${Math.random() * 10 + 10}vw`, // Random 10-20%
      translateX: `${Math.random() * 10 + 10}vw`,
      duration: Math.random() * 3 + 6,
      repeatDelay: 0,
      delay: 0,
      className: "hidden sm:block h-5 md:h-8",
    },
    {
      initialX: `${Math.random() * 10 + 30}vw`, // Random 30-40%
      translateX: `${Math.random() * 10 + 30}vw`,
      duration: Math.random() * 3 + 9,
      repeatDelay: 0,
      delay: 0,
      className: "hidden sm:block h-4 md:h-6",
    },
    {
      initialX: `${Math.random() * 10 + 55}vw`, // Random 55-65%
      translateX: `${Math.random() * 10 + 55}vw`,
      duration: Math.random() * 3 + 7,
      repeatDelay: 0,
      delay: 0,
      className: "hidden md:block h-6 md:h-9", // Desktop only
    },
    {
      initialX: `${Math.random() * 10 + 75}vw`, // Random 75-85%
      translateX: `${Math.random() * 10 + 75}vw`,
      duration: Math.random() * 3 + 8,
      repeatDelay: 0,
      delay: 0,
      className: "hidden md:block h-5 md:h-7", // Desktop only
    },
  ];

  return (
    <div
      className={cn(
        "fixed inset-0 w-full h-full pointer-events-none z-0 overflow-hidden",
        className
      )}>
      {beams.map((beam, index) => (
        <BeamElement
          key={beam.initialX + "beam-idx-" + index}
          beamOptions={beam}
        />
      ))}
      {children}
    </div>
  );
};

const BeamElement = ({ beamOptions = {} }) => {
  const { isDark } = useTheme();

  // Dynamic beam colors based on theme - darker colors
  const beamGradient = isDark 
    ? "bg-gradient-to-t from-orange-600/60 via-orange-500/40 to-transparent"
    : "bg-gradient-to-t from-blue-900/50 via-blue-800/35 to-transparent";

  return (
    <motion.div
      animate="animate"
      initial={{
        translateY: "-500px", // Start much further off-screen above the website
        translateX: beamOptions.initialX || "0px",
      }}
      variants={{
        animate: {
          translateY: "calc(100vh + 1200px)", // Extended distance to pass through entire website
          translateX: beamOptions.translateX || "0px",
        },
      }}
      transition={{
        duration: beamOptions.duration || 8,
        repeat: Infinity,
        repeatType: "loop",
        ease: "linear",
        delay: beamOptions.delay || 0,
        repeatDelay: beamOptions.repeatDelay || 0,
      }}
      className={cn(
        "absolute left-0 top-0 m-auto h-12 w-px rounded-full will-change-transform",
        beamGradient,
        beamOptions.className
      )}
    />
  );
};
