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

  // Reduced beams for subtle effect and better performance
  const beams = [
    // Group 1 - Left side (2 beams)
    {
      initialX: 100,
      translateX: 100,
      duration: 8,
      repeatDelay: 6,
      delay: 0,
      className: "h-8",
    },
    {
      initialX: 300,
      translateX: 300,
      duration: 10,
      repeatDelay: 8,
      delay: 2,
      className: "h-6",
    },

    // Group 2 - Center (2 beams)
    {
      initialX: 600,
      translateX: 600,
      duration: 9,
      repeatDelay: 7,
      delay: 4,
      className: "h-10",
    },
    {
      initialX: 800,
      translateX: 800,
      duration: 11,
      repeatDelay: 9,
      delay: 6,
      className: "h-8",
    },

    // Group 3 - Right side (2 beams)
    {
      initialX: 1100,
      translateX: 1100,
      duration: 7,
      repeatDelay: 5,
      delay: 8,
      className: "h-12",
    },
    {
      initialX: 1300,
      translateX: 1300,
      duration: 12,
      repeatDelay: 10,
      delay: 10,
      className: "h-6",
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
        translateY: "-200px",
        translateX: beamOptions.initialX || "0px",
      }}
      variants={{
        animate: {
          translateY: "calc(100vh + 1000px)", // Extended distance to pass through entire website
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
