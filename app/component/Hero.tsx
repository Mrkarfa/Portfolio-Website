"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const Hero = () => {
  const descriptionText =
    "CREATIVE THINKING AND PROBLEM SOLVING ARE WHERE MY MIND WADERS, USING MY KNOWLEDGE & PASSION FOR DESIGN & CODING AS MY MEDIUM.";

  return (
    <section
      id="hero"
      className="relative flex min-h-screen w-full flex-col justify-between px-6 pt-20 pb-8 md:px-12 md:pt-40 md:pb-12 lg:pb-12"
    >
      <div className="mx-auto w-full max-w-7xl">
        {/* Left Side Content */}
        <div className="mb-4 flex flex-col gap-4 md:mb-0 md:flex-row md:items-start md:justify-between md:gap-8">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="flex flex-col gap-4 md:w-1/3 md:gap-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              className="text-sm font-medium uppercase tracking-wider text-white"
            >
              01//04 - SCROLL ↓
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.6,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              className="text-left text-sm leading-relaxed text-white md:text-base"
            >
              {descriptionText}
            </motion.p>
          </motion.div>

          {/* Center: Main Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            className="my-4 flex flex-col items-center justify-center md:my-0 md:w-1/3"
          >
            <h1 className="text-center text-5xl font-bold leading-tight text-white md:text-7xl md:leading-none lg:text-9xl">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.7,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
                className="block"
              >
                FULL
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.8,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
                className="block"
              >
                STACK
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.9,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
                className="block"
              >
                DEVELOPER
              </motion.span>
            </h1>
          </motion.div>

          {/* Right Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="flex flex-col gap-6 md:w-1/3 md:items-end"
          >
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.6,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              className="text-right text-sm leading-relaxed text-white md:text-base"
            >
              {/* {descriptionText} */}
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* Bottom Center: Big Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1, ease: [0.25, 0.1, 0.25, 1] }}
        className="flex justify-center"
      >
        <motion.a
          href="#about"
          className="flex h-[120px] w-[120px] items-center justify-center rounded-full border-2 border-white transition-opacity hover:opacity-70 md:h-[186px] md:w-[186px]"
          animate={{ y: [0, 16, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="h-10 w-10 text-white md:h-16 md:w-16" />
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Hero;
