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

  // Optimized beams for all screen sizes using viewport units
  const beams = [
    // Group 1 - Left edge (3 beams) 5-25%
    {
      initialX: "5vw",
      translateX: "5vw",
      duration: 8,
      repeatDelay: 0,
      delay: 0,
      className: "h-6 sm:h-8",
    },
    {
      initialX: "15vw",
      translateX: "15vw",
      duration: 9,
      repeatDelay: 0,
      delay: 0.3,
      className: "h-4 sm:h-6",
    },
    {
      initialX: "25vw",
      translateX: "25vw",
      duration: 10,
      repeatDelay: 0,
      delay: 0.6,
      className: "h-5 sm:h-7",
    },

    // Group 2 - Center (5 beams) 35-65%
    {
      initialX: "35vw",
      translateX: "35vw",
      duration: 7,
      repeatDelay: 0,
      delay: 0.9,
      className: "h-8 sm:h-10",
    },
    {
      initialX: "42.5vw",
      translateX: "42.5vw",
      duration: 11,
      repeatDelay: 0,
      delay: 1.2,
      className: "h-6 sm:h-8",
    },
    {
      initialX: "50vw",
      translateX: "50vw",
      duration: 9,
      repeatDelay: 0,
      delay: 1.5,
      className: "h-7 sm:h-9",
    },
    {
      initialX: "57.5vw",
      translateX: "57.5vw",
      duration: 8,
      repeatDelay: 0,
      delay: 1.8,
      className: "h-4 sm:h-6",
    },
    {
      initialX: "65vw",
      translateX: "65vw",
      duration: 12,
      repeatDelay: 0,
      delay: 2.1,
      className: "h-5 sm:h-7",
    },

    // Group 3 - Right edge (3 beams) 75-95%
    {
      initialX: "75vw",
      translateX: "75vw",
      duration: 10,
      repeatDelay: 0,
      delay: 2.4,
      className: "h-8 sm:h-12",
    },
    {
      initialX: "85vw",
      translateX: "85vw",
      duration: 11,
      repeatDelay: 0,
      delay: 2.7,
      className: "h-5 sm:h-7",
    },
    {
      initialX: "95vw",
      translateX: "95vw",
      duration: 9,
      repeatDelay: 0,
      delay: 3.0,
      className: "h-6 sm:h-8",
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
