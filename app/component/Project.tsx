"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const projects = [
  {
    title: "Four Sigmatic",
    category: "Web Redesign + Brand Evolution",
    tags: "Art Direction + Design",
    date: "05.08.2025",
    image: "/project1.jpg", // You'll need to add these images to the public folder
  },
  {
    title: "Four Sigmatic",
    category: "Web Redesign + Brand Evolution",
    tags: "Art Direction + Design",
    date: "05.08.2025",
    image: "/project2.jpg",
  },
  {
    title: "Four Sigmatic",
    category: "Web Redesign + Brand Evolution",
    tags: "Art Direction + Design",
    date: "05.08.2025",
    image: "/project3.jpg",
  },
];

const Project = () => {
  return (
    <section
      id="projects"
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
          <span>03/</span>
          <span>PROJECTS</span>
          <span>/04</span>
        </motion.div>

        {/* Main Content Section */}
        <div className="mb-16 grid grid-cols-1 gap-8 md:grid-cols-12">
          {/* Left Side - View All Projects Button */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-start justify-center md:col-span-4"
          >
            <Link href="/more-projects">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex h-[186px] w-[186px] flex-col items-center justify-center rounded-full border-2 border-white text-center text-sm font-medium uppercase tracking-wider text-white transition-opacity hover:opacity-80"
              >
                <span>View</span>
                <span>All</span>
                <span>Projects</span>
              </motion.button>
            </Link>
          </motion.div>

          {/* Right Side - Descriptive Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="md:col-span-8"
          >
            <p className="text-left text-lg leading-relaxed text-white md:text-xl lg:text-2xl">
              Here are some select projects that showcase my passion for
              creating memorable web experiences products, and Brands to life.
            </p>
          </motion.div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
                ease: "easeOut",
              }}
              className="group relative"
            >
              {/* Project Image Container with Hover Overlay */}
              <motion.div
                className="relative aspect-[4/5] w-full rounded-xl bg-gray-900"
                whileHover="hover"
                initial="initial"
              >
                {/* Placeholder for image - you can replace with actual Image component when images are added */}
                <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900">
                  <span className="text-white/20 text-4xl font-bold">
                    Project {index + 1}
                  </span>
                </div>

                {/* Hover Overlay with Project Name */}
                <motion.div
                  variants={{
                    initial: { opacity: 0 },
                    hover: { opacity: 1 },
                  }}
                  transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                  className="absolute inset-0 z-10 flex items-center justify-center bg-black/85"
                >
                  <motion.h3
                    variants={{
                      initial: { scale: 0.5, opacity: 0, y: 20 },
                      hover: { scale: 1, opacity: 1, y: 0 },
                    }}
                    transition={{
                      duration: 0.5,
                      ease: [0.25, 0.1, 0.25, 1],
                      delay: 0.1,
                    }}
                    className="text-center text-5xl font-bold text-white md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl"
                  >
                    {project.title}
                  </motion.h3>
                </motion.div>
              </motion.div>

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
    </section>
  );
};

export default Project;
