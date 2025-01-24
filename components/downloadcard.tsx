import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "./ui/button";

interface PlatformProp {
  icon: string,
  name: string,
  desc: string,
  version: string,
  size: string
}

interface PlatformProps {
  platforms: PlatformProp[];
}

const DownloadCard = ({ platforms } : PlatformProps) => {
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
    <motion.div
      className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
      variants={containerVariants}
    >
      {platforms.map((platform, index) => (
        <motion.div key={platform.name} variants={itemVariants}>
          <div className="download-card bg-gradient-primary-bg relative overflow-hidden border-[2px] border-solid border-transparent bg-origin-border transition-all duration-400 rounded-2xl p-8 text-center h-full">
            <div className="relative z-10">
              <div className="relative">
                <Image
                  src={platform.icon}
                  alt={`${platform.name} icon`}
                  width={64}
                  height={64}
                  className="platform-icon relative transition-all duration-400 mx-auto mb-6"
                  layout="intrinsic"
                />
              </div>

              <h2 className="text-2xl font-bold mb-2 gradient-text">
                {platform.name}
              </h2>

              <p className="text-gray-400 mb-2">{platform.desc}</p>

              <div className="flex justify-center gap-4 mb-6 text-sm text-gray-500">
                <span>{platform.version}</span>
                <span>•</span>
                <span>{platform.size}</span>
              </div>

              <Button className="download-button rounded-lg font-medium relative overflow-hidden border-none transition-all duration-400 ease-in-out; hover:before:opacity-100 w-full gap-2 text-white py-6">
                <span className="flex items-center gap-2 relative z-10">
                  <Image
                    src="/download.svg"
                    height={50}
                    width={50}
                    alt="Download Icon"
                  />
                  Download for {platform.name}
                </span>
              </Button>
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default DownloadCard;
