"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  BadgeCheck,
  ArrowRight,
  Linkedin,
  Instagram,
  MessageCircle,
  Facebook,
} from "lucide-react";

const About = () => {
  const experience = [
    {
      period: "2022 - 2024",
      company: "Tech Mahindra - Bhubaneswer",
      role: "Subject Matter Expert (SME)",
    },
    {
      period: "2024 - 2025",
      company: "Starttek - Bhubaneswer",
      role: "Quality Analist",
    },
  ];

  const education = [
    {
      period: "2019 - 2022",
      institution: "Biju Pattanaik University of Technology",
      degree: "B.tech - Computer Science & Technology",
    },
    {
      period: "2017 - 2019",
      institution: "Parul Ramkrishna Sarada High School",
      degree: "Science - Science, Math, English",
    },
  ];

  const socialLinks = [
    { icon: Linkedin, href: "#", color: "text-blue-500" },
    { icon: Instagram, href: "#", color: "text-pink-500" },
    { icon: MessageCircle, href: "#", color: "text-green-500" },
    { icon: Facebook, href: "#", color: "text-blue-600" },
  ];

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

  return (
    <motion.section
      id="about"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
      className="relative w-full bg-black px-6 py-12 md:px-12 md:py-20"
    >
      <div className="mx-auto w-full max-w-7xl">
        {/* Navigation Bar */}
        <motion.div
          variants={itemVariants}
          className="mb-12 flex items-center justify-between border-t border-white/10 pt-4 text-sm font-medium uppercase tracking-wider text-white"
        >
          <span>02/</span>
          <span>ABOUT</span>
          <div className="flex items-center gap-2">
            <span>INSTAGRAM</span>
            <span>/</span>
            <span>LINKEDIN</span>
            <span>/</span>
            <span>TWITTER</span>
            <span>/</span>
            <span>EMAIL</span>
          </div>
          <span>/04</span>
        </motion.div>

        {/* Main Content Grid - 2 columns, no gaps */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-6">
          {/* Left Column - Grid with SK on top, Experience and Social side by side */}
          <div className="grid grid-cols-1 gap-6">
            {/* Profile Picture - SK Card */}
            <motion.div
              variants={itemVariants}
              className="relative aspect-square w-full overflow-hidden rounded-3xl bg-gray-800"
            >
              <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-blue-400 to-blue-600">
                <span className="text-6xl font-bold text-white/20">SK</span>
              </div>
            </motion.div>

            {/* Experience and Social Media Side by Side */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {/* Experience Section */}
              <motion.div
                variants={itemVariants}
                className="rounded-2xl bg-[#1a1a1a] p-6 md:p-8 h-full"
              >
                <h3 className="mb-6 text-xl font-bold uppercase tracking-wider text-white md:text-2xl">
                  EXPERIENCE
                </h3>
                <div className="space-y-6">
                  {experience.map((exp, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="space-y-1"
                    >
                      <p className="text-sm text-white/70">{exp.period}</p>
                      <p className="font-semibold text-white">{exp.company}</p>
                      <p className="text-sm text-white/80">{exp.role}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Social Media Icons */}
              <motion.div
                variants={itemVariants}
                className="rounded-2xl bg-[#1a1a1a] p-6 md:p-8 h-full flex flex-col"
              >
                <div className="mb-6 grid grid-cols-2 gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      whileHover={{ scale: 1.1 }}
                      className="flex h-16 w-16 items-center justify-center rounded-xl bg-gray-800 transition-colors hover:bg-gray-700"
                    >
                      <social.icon className={`h-8 w-8 ${social.color}`} />
                    </motion.a>
                  ))}
                </div>
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="flex items-center gap-2 text-sm font-medium uppercase tracking-wider text-white mt-auto"
                >
                  <span>STAY WITH ME</span>
                  <ArrowRight className="h-4 w-4" />
                </motion.div>
              </motion.div>
            </div>
          </div>

          {/* Right Column - Self Summary and Education stacked */}
          <div className="grid grid-cols-1 gap-6">
            {/* Self Summary Block */}
            <motion.div
              variants={itemVariants}
              className="rounded-2xl bg-[#1a1a1a] p-6 md:p-8"
            >
              <motion.h3
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-4 text-lg font-bold uppercase tracking-wider text-white md:text-xl"
              >
                * SELF SUMMERY *
              </motion.h3>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="mb-4 flex items-center gap-2"
              >
                <h2 className="text-2xl font-bold text-white md:text-3xl">
                  SOUVIK KARFA
                </h2>
                <BadgeCheck className="h-6 w-6 text-blue-500 md:h-7 md:w-7" />
              </motion.div>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-sm leading-relaxed text-white/90 md:text-base"
              >
                I am a self taught Frontend Developer, based on Kolkata, West
                Bengal. I do UI / UX Design & Product Design also as Design is
                my Passion & Development (Coding) is my Drug. So I can&apos;t
                leave without both of them. I have a diverse range of experience
                having worked across various fields and Industries.
              </motion.p>
            </motion.div>

            {/* Education Section */}
            <motion.div
              variants={itemVariants}
              className="rounded-2xl bg-[#1a1a1a] p-6 md:p-8"
            >
              <h3 className="mb-6 text-xl font-bold uppercase tracking-wider text-white md:text-2xl">
                EDUCATION
              </h3>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="space-y-1"
                  >
                    <p className="text-sm text-white/70">{edu.period}</p>
                    <p className="font-semibold text-white">
                      {edu.institution}
                    </p>
                    <p className="text-sm text-white/80">{edu.degree}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-6">
          {/* Large Name and Role Block */}
          <motion.div
            variants={itemVariants}
            className="group relative col-span-2 flex items-center justify-between rounded-2xl bg-[#1a1a1a] p-6 md:p-8"
          >
            <div>
              <motion.h2
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-2 text-3xl font-bold uppercase text-white md:text-4xl lg:text-5xl"
              >
                SOUVIK KARFA
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-sm text-white/80 md:text-base"
              >
                Full Stack Developer & UI / UX Designer
              </motion.p>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Link href="/full-about">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex h-16 w-16 items-center text-center justify-center rounded-full bg-white text-xs font-bold uppercase text-black transition-colors hover:bg-gray-200 md:h-20 md:w-20 md:text-sm"
                >
                  LEARN MORE.
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Let's Work Together Block */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col items-center justify-center rounded-2xl bg-[#1a1a1a] p-6 md:p-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <p className="mb-2 text-2xl font-bold text-white md:text-3xl">
                Let&apos;s Work
              </p>
              <p className="text-2xl font-bold text-blue-500 md:text-3xl">
                Together.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
