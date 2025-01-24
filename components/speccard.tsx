import { motion } from "framer-motion";
import React from "react";

const SpecCard = () => {
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
      className="mt-24 max-w-3xl mx-auto"
      variants={containerVariants}
    >
      <motion.h2
        className="text-4xl font-bold mb-12 text-center gradient-text"
        variants={itemVariants}
      >
        System Requirements
      </motion.h2>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
        variants={containerVariants}
      >
        {[
          {
            title: "Minimum",
            specs: [
              "4GB RAM",
              "Intel Core i3 / AMD Ryzen 3",
              "2GB free disk space",
              "Internet connection",
            ],
          },
          {
            title: "Recommended",
            specs: [
              "8GB RAM",
              "Intel Core i5 / AMD Ryzen 5",
              "4GB free disk space",
              "Broadband internet",
            ],
          },
        ].map((req, index) => (
          <motion.div key={req.title} variants={itemVariants}>
            <div className="specs-card bg-gradient-primary-bg">
              <h3 className="text-xl font-bold mb-4 gradient-text">
                {req.title}
              </h3>
              <ul className="space-y-3">
                {req.specs.map((spec, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-400">
                    <span className="w-2 h-2 rounded-full bg-gradient-to-r from-[#FF6B00] to-[#9333EA]" />
                    {spec}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default SpecCard;
