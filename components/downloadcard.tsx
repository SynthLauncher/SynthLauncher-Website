import React from "react";

import { motion } from "framer-motion";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Download } from "lucide-react";
import Image from "next/image";

interface Platform {
  name: string;
  index: number;
  size: string;
  type: string;
  requirements: string;
  icon: string;
}

const DownloadCard = ({ name, index, size, type, icon, requirements } : Platform) => {
  return (
    <motion.div
      key={name}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.2 }}
    >
      <Card className="p-8 bg-purple-900/30 border-purple-500/30 backdrop-blur-sm hover:bg-purple-800/40 transition-all duration-300">
        <Image 
          width={48}
          height={48}
          className="mb-6 text-purple-500"
          alt="icon"
          src={icon}
        />
        <h2 className="text-2xl font-bold text-white mb-2">{name}</h2>
        <p className="text-purple-200/80 mb-4">Version 2.0.1</p>
        <div className="flex justify-between items-center text-purple-200/60 mb-6">
          <span>{size}</span>
          <span>{type}</span>
        </div>
        <p className="text-purple-200/60 text-sm mb-6">
          {requirements}
        </p>
        <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
          <Download className="mr-2 h-4 w-4" /> Download
        </Button>
      </Card>
    </motion.div>
  );
};

export default DownloadCard;
