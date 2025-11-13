"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const Preloader = ({ onComplete }: { onComplete: () => void }) => {
  const [visibleLetters, setVisibleLetters] = useState<string[]>([]);
  const [showLoadingBar, setShowLoadingBar] = useState(false);
  const [progress, setProgress] = useState(0);

  const fullText = "SOUVIK KARFA.";
  const finalText = "SK.";
  const fullTextArray = fullText.split("");

  useEffect(() => {
    // Initially show all letters
    setVisibleLetters(fullTextArray);

    // Start letter removal animation after a brief delay
    const letterRemovalTimer = setTimeout(() => {
      let currentIndex = fullTextArray.length - 1;

      const removeLetters = () => {
        if (currentIndex >= finalText.length) {
          // Remove letter from the end
          setVisibleLetters((prev) => prev.slice(0, currentIndex));
          currentIndex--;
          setTimeout(removeLetters, 80); // Remove one letter every 80ms for smooth stair effect
        } else {
          // Show loading bar after final text is displayed
          setTimeout(() => {
            setShowLoadingBar(true);
          }, 400);
        }
      };

      removeLetters();
    }, 800); // Initial delay before starting letter removal

    return () => clearTimeout(letterRemovalTimer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (showLoadingBar) {
      // Set initial progress to 1%
      setProgress(1);

      // Animate progress from 1% to 100%
      const duration = 2000; // 2 seconds for loading
      const interval = 16; // ~60fps
      const increment = 99 / (duration / interval); // 99% to go (from 1% to 100%)
      let current = 1;

      const progressTimer = setInterval(() => {
        current += increment;
        if (current >= 100) {
          setProgress(100);
          clearInterval(progressTimer);
          // Complete after reaching 100%
          setTimeout(() => {
            onComplete();
          }, 300);
        } else {
          setProgress(Math.floor(current));
        }
      }, interval);

      return () => clearInterval(progressTimer);
    }
  }, [showLoadingBar, onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#000000]"
      >
        {/* Main Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8 text-center"
        >
          <h1 className="text-5xl font-bold uppercase text-white md:text-6xl lg:text-7xl xl:text-8xl">
            {fullTextArray.map((char, index) => {
              const isVisible = visibleLetters.length > index;
              return (
                <motion.span
                  key={`${char}-${index}`}
                  initial={{ opacity: 1, y: 0 }}
                  animate={{
                    opacity: isVisible ? 1 : 0,
                    y: isVisible ? 0 : -30,
                    scale: isVisible ? 1 : 0.8,
                  }}
                  transition={{
                    duration: 0.4,
                    ease: [0.25, 0.1, 0.25, 1],
                  }}
                  className="inline-block"
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              );
            })}
          </h1>
        </motion.div>

        {/* Loading Bar */}
        {showLoadingBar && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full max-w-md px-6"
          >
            {/* Progress Bar Container */}
            <div className="mb-3 h-0.5 w-full overflow-hidden rounded-full bg-white/20">
              <motion.div
                initial={{ width: "1%" }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.1, ease: "linear" }}
                className="h-full bg-white"
              />
            </div>

            {/* Progress Percentage */}
            <motion.div
              key={progress}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center text-sm font-medium text-white md:text-base"
            >
              {progress}%
            </motion.div>
          </motion.div>
        )}
      </motion.div>
    </AnimatePresence>
  );
};

export default Preloader;
