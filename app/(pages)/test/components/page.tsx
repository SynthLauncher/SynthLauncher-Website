"use client";

import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";

import Image from "next/image";

export default function ComponentsShowcase() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-950 via-gray-900 to-black p-8">
      <h1 className="text-4xl font-bold text-white mb-12 text-center mt-12">
        UI Components Showcase
      </h1>

      <section className="mb-16 overflow-hidden">
        <h2 className="text-2xl font-semibold text-white mb-6">
          Sliding Cards
        </h2>
        <motion.div
          className="flex space-x-6 pb-4"
          drag="x"
          dragConstraints={{ right: 0, left: -1200 }}
        >
          {[1, 2, 3, 4, 5].map((item) => (
            <motion.div
              key={item}
              className="flex-shrink-0 w-80"
              whileHover={{ scale: 1.02 }}
            >
              <Card className="p-6 bg-gradient-to-br from-purple-800/40 to-purple-900/40 border-purple-500/30 backdrop-blur-sm">
                <Image
                  src="/"
                  alt="Card image"
                  className="rounded-lg mb-4 w-full h-48 object-cover"
                  width={0}
                  height={0}
                />
                <h3 className="text-xl font-semibold text-white mb-2">
                  Feature {item}
                </h3>
                <p className="text-purple-200/80">
                  Drag to explore more features and content.
                </p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  );
}
