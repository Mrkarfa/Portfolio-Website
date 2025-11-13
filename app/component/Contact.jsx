"use client";

import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative w-full bg-[#000000] py-12 md:py-20"
    >
      <div className="mx-auto w-full max-w-7xl px-6 md:px-12">
        {/* Main Container with Border */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative mx-auto w-full max-w-5xl rounded-3xl p-6 md:p-6 lg:p-6"
        >
          {/* Question Text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-6 text-center text-sm font-medium uppercase tracking-wider text-white md:text-base"
          >
            GOT A PROJECT IN MIND ?
          </motion.p>

          {/* Main Call to Action */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-12 text-center text-4xl font-bold uppercase tracking-tight text-white md:text-5xl lg:text-6xl xl:text-7xl"
          >
            LET&apos;S CONNECT
          </motion.h2>

          {/* Circular Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex justify-center"
          >
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
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
