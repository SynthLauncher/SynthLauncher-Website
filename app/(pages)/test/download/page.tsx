"use client";

import React from "react";

import DownloadCard from "@/components/downloadcard";
import SpecCard from "@/components/speccard";

import { motion } from "framer-motion";

export default function TestDownloadPage() {
  const platforms = [
    {
      icon: "/windows.svg",
      name: "Windows",
      desc: "Windows 10, 11 (64-bit)",
      version: "v1.2.0",
      size: "85 MB",
    },
    {
      icon: "/apple.svg",
      name: "macOS",
      desc: "macOS 10.15 or later",
      version: "v1.2.0",
      size: "92 MB",
    },
    {
      icon: "/linux.svg",
      name: "Linux",
      desc: "Ubuntu, Debian, Fedora",
      version: "v1.2.0",
      size: "88 MB",
    },
  ];

  const containerVariants = {
    hidden: {
      opacity: 0,
    },

    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },

    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="min-h-screen bg-black text-white py-20 flex justify-center">
      <motion.div
        className="container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Intro */}
        <motion.div
          className="max-w-4xl mx-auto text-center mb-16"
          variants={itemVariants}
        >
          {/* Title */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Download{" "}
            <span className="bg-clip-text text-transparent bg-gradient-title">
              SynthLauncher
            </span>
          </h1>

          {/* Label */}
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Choose your platform and begin your epic Minecraft journey.
          </p>
        </motion.div>

        {/* Download Cards */}
        {/* TODO: Fix the icon size thing*/}
        <DownloadCard platforms={platforms} />

        {/* Spec Cards */}
        <SpecCard />
      </motion.div>
    </div>
  );
}
