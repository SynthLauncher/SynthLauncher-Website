"use client";

import { motion } from "framer-motion";
import DownloadCard from "@/components/downloadcard";

export default function DownloadPage() {
  const platforms = [
    {
      icon: "/windows.svg",
      name: "Windows",
      size: "120MB",
      type: ".exe",
      requirements: "Windows 10 or later",
    },
    {
      icon: "/apple.svg",
      name: "macOS",
      size: "115MB",
      type: ".dmg",
      requirements: "macOS 11 or later",
    },
    {
      icon: "linux.svg",
      name: "Linux",
      size: "110MB",
      type: ".AppImage",
      requirements: "Most distributions",
    },
  ];

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto mt-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Download SynthLauncher
          </h1>
          <p className="text-xl text-purple-200/80 max-w-2xl mx-auto">
            Choose your platform and get started with SynthLauncher today. All
            versions come with our full suite of features and regular updates.
          </p>
        </motion.div>

        {/* Download Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {platforms.map((platform, index) => (
            <DownloadCard
              key={index}
              index={index}
              icon={platform.icon}
              name={platform.name}
              size={platform.size}
              type={platform.type}
              requirements={platform.requirements}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
