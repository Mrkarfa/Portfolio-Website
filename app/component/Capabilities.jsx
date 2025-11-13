"use client";

import { motion, useMotionValue, animate } from "framer-motion";
import { useState, useRef, useEffect, useMemo } from "react";

const projectTypes = [
  "PRODUCT DESIGN",
  "CAMPAIGNS",
  "BRAND GUIDELINES",
  "DESIGN SYSTEMS",
  "LANDING PAGES",
  "CONTENT STRATEGY",
  "ART DIRECTION",
  "MOTION DESIGN",
  "ECOMMERCE",
  "VISUAL IDENTITY",
  "INTERACTIVE DESIGN",
  "PACKAGING DESIGN",
  "UI/UX DESIGN",
  "WEB DESIGN",
];

// Generate random initial positions and animation parameters for each bubble
const generateBubbleConfig = (index, containerWidth, containerHeight) => {
  const baseDelay = index * 0.15;
  const duration = 4 + Math.random() * 3; // 4-7 seconds
  const distanceX = 30 + Math.random() * 40; // 30-70px horizontal movement
  const distanceY = 30 + Math.random() * 40; // 30-70px vertical movement

  // Position bubbles in a more organic way within the container
  const initialX =
    (Math.random() * 0.7 + 0.15) * containerWidth - containerWidth / 2;
  const initialY =
    (Math.random() * 0.7 + 0.15) * containerHeight - containerHeight / 2;

  return {
    initialX,
    initialY,
    duration,
    distanceX,
    distanceY,
    delay: baseDelay,
  };
};

const Bubble = ({ text, index, containerRef }) => {
  const [isDragging, setIsDragging] = useState(false);
  const [containerDimensions, setContainerDimensions] = useState({
    width: 800,
    height: 600,
  });
  const [isInitialized, setIsInitialized] = useState(false);
  const animationRef = useRef(null);

  // Get container dimensions in useEffect
  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef?.current) {
        setContainerDimensions({
          width: containerRef.current.offsetWidth,
          height: containerRef.current.offsetHeight,
        });
        setIsInitialized(true);
      }
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, [containerRef]);

  const config = useMemo(
    () =>
      generateBubbleConfig(
        index,
        containerDimensions.width,
        containerDimensions.height
      ),
    [index, containerDimensions.width, containerDimensions.height]
  );

  const x = useMotionValue(config.initialX);
  const y = useMotionValue(config.initialY);

  // Initialize position once
  useEffect(() => {
    if (isInitialized) {
      x.set(config.initialX);
      y.set(config.initialY);
    }
  }, [isInitialized, config.initialX, config.initialY, x, y]);

  // Start ping pong animation
  useEffect(() => {
    if (isDragging) return;

    if (animationRef.current) {
      animationRef.current.x.stop();
      animationRef.current.y.stop();
    }

    const currentX = x.get();
    const currentY = y.get();

    const animateX = animate(
      x,
      [
        currentX,
        currentX + config.distanceX,
        currentX - config.distanceX,
        currentX,
      ],
      {
        duration: config.duration,
        repeat: Infinity,
        repeatType: "loop",
        ease: "easeInOut",
        delay: config.delay,
      }
    );

    const animateY = animate(
      y,
      [
        currentY,
        currentY + config.distanceY,
        currentY - config.distanceY,
        currentY,
      ],
      {
        duration: config.duration,
        repeat: Infinity,
        repeatType: "loop",
        ease: "easeInOut",
        delay: config.delay,
      }
    );

    animationRef.current = { x: animateX, y: animateY };

    return () => {
      if (animationRef.current) {
        animationRef.current.x.stop();
        animationRef.current.y.stop();
      }
    };
  }, [
    isDragging,
    x,
    y,
    config.distanceX,
    config.distanceY,
    config.duration,
    config.delay,
  ]);

  const handleDragStart = () => {
    setIsDragging(true);
    if (animationRef.current) {
      animationRef.current.x.stop();
      animationRef.current.y.stop();
    }
  };

  const handleDragEnd = () => {
    setIsDragging(false);
    // Animation will restart automatically via useEffect
  };

  return (
    <motion.div
      drag
      dragConstraints={containerRef}
      dragElastic={0.1}
      dragMomentum={false}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      style={{
        x,
        y,
      }}
      className="absolute left-1/2 top-1/2 cursor-grab active:cursor-grabbing flex items-center justify-center rounded-full border-2 border-white bg-transparent text-xs font-medium text-white whitespace-nowrap select-none w-[120px] h-[120px]"
      whileHover={{ scale: 1.1, zIndex: 10 }}
      whileTap={{ scale: 0.95 }}
    >
      {text}
    </motion.div>
  );
};

const Capabilities = () => {
  const containerRef = useRef(null);

  return (
    <section
      id="capabilities"
      className="relative w-full bg-[#000000] py-12 md:py-20"
    >
      <div className="mx-auto w-full max-w-7xl px-6 md:px-12">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 flex items-center justify-between border-t border-white/10 pt-4 text-sm font-medium uppercase tracking-wider text-white"
        >
          <span>04/</span>
          <span>CAPABILITIES</span>
          <span>/04</span>
        </motion.div>

        {/* Main Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative mx-auto w-full max-w-6xl rounded-3xl border-2 border-white bg-[#000000] p-4 md:p-4 lg:p-4 flex flex-col items-center justify-center"
        >
          {/* CLICK & DRAG Hint */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-4 text-center text-sm font-normal text-white/70"
          >
            CLICK & DRAG
          </motion.p>

          {/* Main Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-4 text-center text-3xl font-bold text-white md:text-4xl lg:text-5xl"
          >
            PROJECT TYPES <br /> I SPECIALIZE IN
          </motion.h2>

          {/* Bubbles Container */}
          <div
            ref={containerRef}
            className="relative h-[500px] w-full overflow-hidden rounded-2xl md:h-[500px] lg:h-[500px]"
          >
            {projectTypes.map((type, index) => (
              <Bubble
                key={type}
                text={type}
                index={index}
                containerRef={containerRef}
                bubbleClassName="rounded-full aspect-square flex items-center justify-center" // Pass rounded and aspect-square classes
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Capabilities;
