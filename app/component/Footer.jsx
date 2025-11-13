"use client";

import { motion } from "framer-motion";

const socialLinks = [
  { name: "INSTAGRAM", href: "#" },
  { name: "TWITTER", href: "#" },
  { name: "LINKEDIN", href: "#" },
];

const Footer = () => {
  return (
    <section className="relative w-full bg-[#000000] py-8 md:py-12">
      <div className="mx-auto w-full max-w-7xl px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center justify-between gap-4 border-t-2 border-white/10 pt-8 md:flex-row"
        >
          {/* Left Text */}
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-left text-xs font-medium uppercase tracking-wider text-white md:text-sm"
          >
            FEEL FREE TO CONNECT WITH ME ON SOCIAL
          </motion.p>

          {/* Right Social Links */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex items-center gap-6"
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                whileHover={{
                  scale: 1.1,
                  y: -3,
                  transition: { duration: 0.2 },
                }}
                className="text-xs font-medium uppercase tracking-wider text-white transition-colors hover:text-white/80 md:text-sm"
              >
                {link.name}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Footer;
