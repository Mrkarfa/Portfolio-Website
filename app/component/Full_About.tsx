"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
// add import at the top
import { cubicBezier } from "@popmotion/easing";

const brands = [
  "Ajinomoto",
  "Amazing Grass",
  "Arlo",
  "Corvel",
  "Cox",
  "Four Sigmatic",
  "Hoopla",
  "Hyundai",
  "Irvine Company",
  "Indigo",
  "Infinity Ward",
  "Kapsul",
  "Netflix",
  "Nordic Naturals",
  "NuFACE",
  "Meta",
  "Pear Sports",
  "Taylormade",
  "TCL",
  "Vistria",
  "Vizio",
  "Xsolla",
];

const skills = [
  "Website Design",
  "Product Design",
  "Art Direction",
  "Interaction Design",
  "Brand Identity",
  "Motion Design",
  "3D Renders",
  "Editorial Design",
  "Package Design",
];

const Full_About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

// change the variant
const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: cubicBezier(0.65, 0.05, 0.36, 1) // => returns an easing function accepted by framer-motion's types
    }
  }
};

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="relative min-h-screen w-full bg-[#000000]"
    >
      {/* Back Button */}
      <motion.div
        variants={itemVariants}
        className="absolute left-6 top-6 z-10 md:left-12 md:top-12"
      >
        <Link href="/">
          <motion.button
            whileHover={{ scale: 1.05, x: -5 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 rounded-full border-2 border-white bg-transparent px-6 py-3 text-sm font-medium uppercase tracking-wider text-white transition-colors hover:bg-white/10"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>BACK</span>
          </motion.button>
        </Link>
      </motion.div>

      {/* Hero Section with Photo */}
      <motion.section
        variants={itemVariants}
        className="relative w-full"
      >
        <div className="relative h-[60vh] min-h-[500px] w-full overflow-hidden md:h-[70vh]">
          {/* Placeholder for photo - you can replace with actual Image component */}
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-gray-700 to-gray-900">
            <div className="text-center">
              <div className="mb-4 h-32 w-32 rounded-full bg-gradient-to-br from-blue-400 to-purple-600 mx-auto"></div>
              <p className="text-white/50 text-sm">Your Photo Here</p>
            </div>
          </div>

          {/* Large "SOUVIK" text overlay - Orange */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="absolute bottom-0 right-0 z-10"
          >
            <h1 className="text-7xl font-bold uppercase text-orange-500 md:text-8xl lg:text-9xl xl:text-[12rem]">
              SOUVIK
            </h1>
          </motion.div>

          {/* Small text at bottom left */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="absolute bottom-4 left-4 z-10 max-w-md text-xs text-white/70 md:text-sm md:bottom-8 md:left-8"
          >
            THE ORIGINAL ARTIST IS A DESIGNER & SONGWRITER. HE&apos;S ALSO A BIG
            FAN OF VALORANT & CHICKEN NOODLES.
          </motion.p>
        </div>
      </motion.section>

      {/* About Me Section */}
      <motion.section
        variants={itemVariants}
        className="border-t border-white/10 px-6 py-12 md:px-12 md:py-16"
      >
        <div className="mx-auto w-full max-w-6xl">
          {/* Section Header */}
          <motion.div
            variants={itemVariants}
            className="mb-8 flex items-center justify-between text-sm font-medium uppercase tracking-wider text-white md:text-base"
          >
            <span>02 / 03</span>
            <span>ABOUT ME</span>
          </motion.div>

          {/* Content */}
          <div className="space-y-6 text-white md:space-y-8">
            <motion.p
              variants={itemVariants}
              className="text-base leading-relaxed md:text-lg lg:text-xl"
            >
              Hello, my name&apos;s Souvik, I am Kolkata Born designer based in
              Bhubaneswer. I&apos;m currently at Envy as a Senior Designer
              creating connected Brands, Commerce, Products, and Web Experiences.
            </motion.p>
            <motion.p
              variants={itemVariants}
              className="text-base leading-relaxed md:text-lg lg:text-xl"
            >
              when I am not designing, I enjoy Weightlifting, top fragging in
              Valorant, and continuing my quest to find the best chicken and
              Noodles.
            </motion.p>
          </div>
        </div>
      </motion.section>

      {/* Brands Section */}
      <motion.section
        variants={itemVariants}
        className="border-t border-white/10 px-6 py-12 md:px-12 md:py-16"
      >
        <div className="mx-auto w-full max-w-6xl">
          {/* Section Header */}
          <motion.div
            variants={itemVariants}
            className="mb-8 flex items-center justify-between text-sm font-medium uppercase tracking-wider text-white md:text-base"
          >
            <span>03 / 04</span>
            <span>BRANDS I&apos;VE WORK WITH</span>
          </motion.div>

          {/* Brands Grid */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 gap-x-8 gap-y-4 text-white md:grid-cols-3 lg:grid-cols-4"
          >
            {brands.map((brand, index) => (
              <motion.div
                key={brand}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.03 }}
                className="text-sm md:text-base"
              >
                {brand}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Skills Section */}
      <motion.section
        variants={itemVariants}
        className="border-t border-white/10 px-6 py-12 md:px-12 md:py-16"
      >
        <div className="mx-auto w-full max-w-6xl">
          {/* Section Header */}
          <motion.div
            variants={itemVariants}
            className="mb-8 flex items-center justify-between text-sm font-medium uppercase tracking-wider text-white md:text-base"
          >
            <span>04 / 05</span>
            <span>SKILLS</span>
          </motion.div>

          {/* Skills Grid */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 gap-4 text-white md:grid-cols-2"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="text-sm md:text-base"
              >
                {skill}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        variants={itemVariants}
        className="border-t border-white/10 px-6 py-16 md:px-12 md:py-24"
      >
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-center text-center">
          {/* Question Text */}
          <motion.p
            variants={itemVariants}
            className="mb-6 text-sm font-medium uppercase tracking-wider text-white md:text-base"
          >
            GOT A PROJECT IN MIND ?
          </motion.p>

          {/* Main Call to Action */}
          <motion.h2
            variants={itemVariants}
            className="mb-12 text-4xl font-bold uppercase tracking-tight text-white md:text-5xl lg:text-6xl xl:text-7xl"
          >
            LET&apos;S CONNECT
          </motion.h2>

          {/* Circular Button */}
          <motion.div variants={itemVariants}>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex h-[186px] w-[186px] flex-col items-center justify-center rounded-full border-2 border-white text-center text-sm font-medium uppercase tracking-wider text-white transition-opacity hover:opacity-80"
            >
              <span>WRITE</span>
              <span>A</span>
              <span>MESSAGE</span>
            </motion.button>
          </motion.div>
        </div>
      </motion.section>
    </motion.div>
  );
};

export default Full_About;

