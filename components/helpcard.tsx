import React from "react";

import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { LucideProps } from "lucide-react";
import { cn } from "@/lib/utils";

interface Props {
    title: string;
    content: string;
    children: React.ReactNode;
    icon?: React.ComponentType<LucideProps>;

    cardClassName?: string;
    titleClassName?: string;
    contentClassName?: string;
    iconClassName?: string;
}

const HelpCard = ({ title, content, children, icon: Icon, titleClassName, contentClassName, iconClassName, cardClassName } : Props) => {
  return (
    <motion.div
      className={cn("p-6 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors", cardClassName)}
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className="flex items-center gap-3 mb-2">
        {Icon ? <Icon className={cn("h-5 w-5 text-purple-400", iconClassName)} /> : <></>}
        <h3 className={cn("font-bold text-white", titleClassName)}>{title}</h3>
      </div>
      <p className={cn("text-sm text-gray-300 mb-3", contentClassName)}>
        {content}
      </p>
      
      {children}
    </motion.div>
  );
};

export default HelpCard;
