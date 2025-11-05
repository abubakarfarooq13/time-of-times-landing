/*eslint-disable*/
//@ts-nocheck
"use client";

import React, { useEffect, useRef, useCallback, useState } from "react";
// Removed: import AOS from 'aos'; to resolve the compilation error.

// Custom hook to handle "Animate On Scroll" logic using Intersection Observer
const useAOS = (options = {}) => {
  const { duration = 800, once = true, easing = "ease-in-out" } = options;
  const [isScrolling, setIsScrolling] = useState(false);
  const animationQueue = useRef([]);
  const isProcessingQueue = useRef(false);
  const lastProcessTime = useRef(0);
  const throttleDelay = 16; // ~60fps

  // Throttled scroll detection for better performance
  const handleScroll = useCallback(() => {
    const now = Date.now();
    if (now - lastProcessTime.current < throttleDelay) return;

    lastProcessTime.current = now;
    setIsScrolling(true);

    const timeoutId = setTimeout(() => {
      setIsScrolling(false);
    }, 100);
    return () => clearTimeout(timeoutId);
  }, []);

  // Process animation queue with improved delay handling
  const processAnimationQueue = useCallback(() => {
    if (isProcessingQueue.current || animationQueue.current.length === 0)
      return;

    isProcessingQueue.current = true;

    // Process all queued animations with their individual delays
    animationQueue.current.forEach(({ element, delay }) => {
      if (delay > 0) {
        // Use requestAnimationFrame for smoother timing
        const startTime = performance.now();
        const animate = (currentTime) => {
          if (currentTime - startTime >= delay) {
            element.classList.add("aos-animate");
          } else {
            requestAnimationFrame(animate);
          }
        };
        requestAnimationFrame(animate);
      } else {
        // Animate immediately for elements without delay
        requestAnimationFrame(() => {
          element.classList.add("aos-animate");
        });
      }
    });

    // Clear the queue
    animationQueue.current = [];
    isProcessingQueue.current = false;
  }, []);

  // Use useCallback to ensure the function reference is stable
  const observeElements = useCallback(() => {
    // Select all elements that have the 'data-aos' attribute
    const elements = document.querySelectorAll("[data-aos]");

    // Intersection Observer callback function
    const observerCallback = (entries, observer) => {
      entries.forEach((entry) => {
        const target = entry.target;

        // When the element enters the viewport
        if (entry.isIntersecting) {
          const delay = parseInt(target.getAttribute("data-aos-delay") || "0");

          // Add to animation queue
          animationQueue.current.push({ element: target, delay });

          // Process queue immediately for better responsiveness
          processAnimationQueue();

          // If 'once' is true, stop observing the element after it has animated
          if (once) {
            observer.unobserve(target);
          }
        } else if (!once) {
          // If 'once' is false (meaning repeat animation), remove the class
          // when it leaves the viewport
          target.classList.remove("aos-animate");
        }
      });
    };

    // Create the Intersection Observer instance with improved settings
    const observer = new IntersectionObserver(observerCallback, {
      root: null, // viewport as the root
      rootMargin: "50px 0px -10% 0px", // Trigger earlier with top margin, stop earlier with bottom margin
      threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5], // Multiple thresholds for better detection
    });

    // Start observing each element
    elements.forEach((el) => {
      // Set initial state and animation properties via inline styles/attributes
      const delay = el.getAttribute("data-aos-delay") || "0";
      const animationDuration =
        el.getAttribute("data-aos-duration") || duration;

      el.style.transition = `opacity ${animationDuration}ms ${easing}, transform ${animationDuration}ms ${easing}`;
      el.style.transitionDelay = `${delay}ms`;

      // Add a generic class for basic initial styling (hidden state)
      el.classList.add("aos-init");
      observer.observe(el);
    });

    // Add scroll listener for better fast scroll handling
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Return a cleanup function to disconnect the observer when the component unmounts
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, [duration, once, easing, handleScroll, processAnimationQueue]);

  useEffect(() => {
    // Start observing elements once the component has mounted and rendered
    const cleanup = observeElements();
    return cleanup;
  }, [observeElements]);
};

/**
 * AOSWrapper initializes the custom AOS logic and provides a base CSS
 * setup for the animations.
 */
const AOSWrapper = ({ children }) => {
  // Initialize the custom AOS logic
  useAOS({
    duration: 800,
    once: true,
    easing: "ease-in-out",
  });

  return (
    <>
      {/* CRITICAL: Inject a style block for the CSS needed for the animations.
        This replaces the need for the external 'aos/dist/aos.css' file.
      */}
      <style global jsx>{`
        /* Define the common initial state for all AOS elements */
        .aos-init {
          opacity: 0;
          transition-property: opacity, transform;
          will-change: opacity, transform;
          transition-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        /* ------------------------------------- */
        /* --- Standard FADE Animations CSS --- */
        /* ------------------------------------- */

        /* Fade-Up: Starts 30px below and moves up (reduced for faster scroll) */
        [data-aos="fade-up"].aos-init {
          transform: translate3d(0, 30px, 0);
        }
        [data-aos="fade-up"].aos-animate {
          transform: translate3d(0, 0, 0);
          opacity: 1;
        }

        /* Fade-Down: Starts 30px above and moves down */
        [data-aos="fade-down"].aos-init {
          transform: translate3d(0, -30px, 0);
        }
        [data-aos="fade-down"].aos-animate {
          transform: translate3d(0, 0, 0);
          opacity: 1;
        }

        /* Fade-Left: Starts 30px right and moves left */
        [data-aos="fade-left"].aos-init {
          transform: translate3d(30px, 0, 0);
        }
        [data-aos="fade-left"].aos-animate {
          transform: translate3d(0, 0, 0);
          opacity: 1;
        }

        /* Fade-Right: Starts 30px left and moves right */
        [data-aos="fade-right"].aos-init {
          transform: translate3d(-30px, 0, 0);
        }
        [data-aos="fade-right"].aos-animate {
          transform: translate3d(0, 0, 0);
          opacity: 1;
        }

        /* Simple Fade */
        [data-aos="fade"].aos-init {
          opacity: 0;
        }
        [data-aos="fade"].aos-animate {
          opacity: 1;
        }

        /* ------------------------------------- */
        /* --- Zoom/Flip Animations CSS --- */
        /* ------------------------------------- */

        /* Zoom-In */
        [data-aos="zoom-in"].aos-init {
          opacity: 0;
          transform: scale(0.8);
        }
        [data-aos="zoom-in"].aos-animate {
          opacity: 1;
          transform: scale(1);
        }

        /* Zoom-Out */
        [data-aos="zoom-out"].aos-init {
          opacity: 0;
          transform: scale(1.2);
        }
        [data-aos="zoom-out"].aos-animate {
          opacity: 1;
          transform: scale(1);
        }

        /* Flip-Up (Simplified) */
        [data-aos="flip-up"].aos-init {
          transform: perspective(2000px) rotateX(90deg);
          opacity: 0;
        }
        [data-aos="flip-up"].aos-animate {
          transform: perspective(2000px) rotateX(0);
          opacity: 1;
        }

        /* Flip-Down */
        [data-aos="flip-down"].aos-init {
          transform: perspective(2000px) rotateX(-90deg);
          opacity: 0;
        }
        [data-aos="flip-down"].aos-animate {
          transform: perspective(2000px) rotateX(0);
          opacity: 1;
        }

        /* Slide-Up */
        [data-aos="slide-up"].aos-init {
          transform: translate3d(0, 100%, 0);
        }
        [data-aos="slide-up"].aos-animate {
          transform: translate3d(0, 0, 0);
          opacity: 1;
        }

        /* Slide-Down */
        [data-aos="slide-down"].aos-init {
          transform: translate3d(0, -100%, 0);
        }
        [data-aos="slide-down"].aos-animate {
          transform: translate3d(0, 0, 0);
          opacity: 1;
        }

        /* ------------------------------------- */
        /* --- Performance Optimizations --- */
        /* ------------------------------------- */

        /* Use GPU acceleration for smoother animations */
        [data-aos].aos-init {
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
          transform-style: preserve-3d;
        }

        /* Reduce motion for users who prefer it */
        @media (prefers-reduced-motion: reduce) {
          [data-aos].aos-init {
            opacity: 0;
            transform: none !important;
          }
          [data-aos].aos-animate {
            opacity: 1;
            transform: none !important;
          }
        }
      `}</style>

      {children}
    </>
  );
};

export default AOSWrapper;
