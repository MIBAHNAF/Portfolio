"use client";
import { useEffect, useState } from "react";
import { cn } from "../../../lib/utils";

export const TypewriterEffect = ({
  words,
  className,
  cursorClassName,
}) => {
  // The complete title that cycles through different positions
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const currentWord = words[currentWordIndex];
    
    const timeout = setTimeout(() => {
      if (isPaused) {
        // Pause for 1.25 seconds after completing a word
        setIsPaused(false);
        setIsDeleting(true);
        return;
      }

      if (isDeleting) {
        // Deleting characters
        if (currentText.length > 0) {
          setCurrentText(currentText.slice(0, -1));
        } else {
          // Move to next word
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }
      } else {
        // Typing characters
        if (currentText.length < currentWord.length) {
          setCurrentText(currentWord.slice(0, currentText.length + 1));
        } else {
          // Pause when word is complete
          setIsPaused(true);
        }
      }
    }, isPaused ? 1250 : isDeleting ? 50 : 100); // 1.25s pause, 50ms delete, 100ms type

    return () => clearTimeout(timeout);
  }, [currentText, currentWordIndex, isDeleting, isPaused, words]);

  return (
    <span className={cn("", className)}>
      {currentText}
      <span
        className={cn(
          "inline-block w-[2px] h-[1em] bg-current ml-1 animate-pulse",
          cursorClassName
        )}
      />
    </span>
  );
};
