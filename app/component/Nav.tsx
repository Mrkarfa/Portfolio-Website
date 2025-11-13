"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const navItems = [
  { href: "#about", label: "ABOUT" },
  { href: "#projects", label: "PROJECT" },
] as const;

const Nav = () => {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-6 md:px-12"
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between">
        {/* Left: Name */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <Link
            href="#hero"
            className="text-2xl font-bold tracking-tight text-white md:text-3xl"
          >
            SOUVIK K.
          </Link>
        </motion.div>

        {/* Center: Navigation Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          className="hidden items-center gap-8 text-sm font-medium uppercase tracking-wider text-white md:flex"
        >
          {navItems.map((item, index) => (
            <motion.div
              key={item.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.3 + index * 0.1,
                ease: [0.25, 0.1, 0.25, 1],
              }}
            >
              <Link
                href={item.href}
                className="transition-opacity hover:opacity-70"
              >
                {item.label}
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Right: Button */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <Link
            href="#contact"
            className="rounded-full border border-black bg-white px-4 py-2 text-xs font-semibold uppercase tracking-wider text-black transition-opacity hover:opacity-90 md:px-6 md:py-2.5 md:text-sm"
          >
            FREE FOR FREELANCE
          </Link>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Nav;
