"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const More_Projects = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
      },
    },
  };

  // Placeholder projects data - you can expand this
  const allProjects = [
    {
      title: "Project One",
      category: "Web Design",
      tags: "UI/UX Design",
      date: "2024",
    },
    {
      title: "Project Two",
      category: "Brand Identity",
      tags: "Branding + Design",
      date: "2024",
    },
    {
      title: "Project Three",
      category: "E-commerce",
      tags: "Full Stack Development",
      date: "2024",
    },
    {
      title: "Project Four",
      category: "Mobile App",
      tags: "React Native + Design",
      date: "2024",
    },
    {
      title: "Project Five",
      category: "Web Application",
      tags: "Next.js + TypeScript",
      date: "2024",
    },
    {
      title: "Project Six",
      category: "Landing Page",
      tags: "Design + Development",
      date: "2024",
    },
  ];

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

      {/* Main Content */}
      <div className="mx-auto w-full max-w-7xl px-6 py-20 md:px-12 md:py-32">
        {/* Header */}
        <motion.div
          variants={itemVariants}
          className="mb-12 flex items-center justify-between border-b border-white/10 pb-4 text-sm font-medium uppercase tracking-wider text-white"
        >
          <span>03/</span>
          <span>ALL PROJECTS</span>
          <span>/04</span>
        </motion.div>

        {/* Main Title */}
        <motion.h1
          variants={itemVariants}
          className="mb-8 text-4xl font-bold uppercase text-white md:text-5xl lg:text-6xl"
        >
          All Projects
        </motion.h1>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {allProjects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative"
            >
              {/* Project Card */}
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl bg-gray-900">
                {/* Placeholder for project image */}
                <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900">
                  <span className="text-white/20 text-4xl font-bold">
                    {index + 1}
                  </span>
                </div>

                {/* Hover Overlay */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 flex items-center justify-center bg-black/80"
                >
                  <motion.h3
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileHover={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="text-center text-3xl font-bold text-white md:text-4xl"
                  >
                    {project.title}
                  </motion.h3>
                </motion.div>
              </div>

              {/* Project Info */}
              <div className="mt-4 space-y-1">
                <p className="text-sm font-medium text-white">
                  {project.title}
                </p>
                <p className="text-xs text-white/70">{project.category}</p>
                <p className="text-xs text-white/70">{project.tags}</p>
                <p className="text-xs text-white/50">{project.date}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default More_Projects;

