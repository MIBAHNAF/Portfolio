import { useEffect, useRef, useState } from 'react';

export const useScrollAnimation = (options = {}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Once visible, stop observing to prevent re-triggering
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1, // Trigger when 10% of element is visible
        rootMargin: '50px 0px -50px 0px', // Start animation slightly before element comes into view
        ...options
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return [ref, isVisible];
};

// Animation classes for different effects
export const fadeInUp = 'transform transition-all duration-1000 ease-out';
export const fadeInUpHidden = 'opacity-0 translate-y-8';
export const fadeInUpVisible = 'opacity-100 translate-y-0';

export const fadeIn = 'transition-all duration-1000 ease-out';
export const fadeInHidden = 'opacity-0';
export const fadeInVisible = 'opacity-100';

export const slideInLeft = 'transform transition-all duration-1000 ease-out';
export const slideInLeftHidden = 'opacity-0 -translate-x-8';
export const slideInLeftVisible = 'opacity-100 translate-x-0';

export const slideInRight = 'transform transition-all duration-1000 ease-out';
export const slideInRightHidden = 'opacity-0 translate-x-8';
export const slideInRightVisible = 'opacity-100 translate-x-0';

export const scaleIn = 'transform transition-all duration-1000 ease-out';
export const scaleInHidden = 'opacity-0 scale-95';
export const scaleInVisible = 'opacity-100 scale-100';
