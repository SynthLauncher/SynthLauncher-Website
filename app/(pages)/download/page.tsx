"use client";

import { motion } from "framer-motion";
import DownloadCard from "@/components/downloadcard";
import { assets } from "@/app/ui/assets";

export default function DownloadPage() {
  const platforms = assets.texts.en.Data.platforms;

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

        <div className="flex flex-col md:flex-row justify-center gap-8 mb-16 items-center w-full">
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
