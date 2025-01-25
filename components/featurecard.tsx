import React from "react";

import { motion } from "framer-motion";
import { Card } from "./ui/card";
import {
  Icon,
  LucideIcon,
  LucideProps,
  Rocket,
  Shield,
  Zap,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface Props {
  title: string;
  content: string;
  icon: React.ComponentType<LucideProps>;
  iconClassName?: string;
  cardClassName?: string;
  titleClassName?: string;
  contentClassName?: string;
}

const FeatureCard = ({
  title,
  content,
  icon: Icon,
  iconClassName,
  cardClassName,
  titleClassName,
  contentClassName,
}: Props) => {
  return (
    <section className="mb-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Card
            className={cn(
              "p-6 bg-purple-900/30 border-purple-500/30 backdrop-blur-sm hover:bg-purple-800/40 transition-all duration-300",
              cardClassName
            )}
          >
            <Icon
              className={cn("w-8 h-8 text-purple-400 mb-4", iconClassName)}
            />
            <h3
              className={cn(
                "text-xl font-semibold text-white mb-2",
                titleClassName
              )}
            >
              {title}
            </h3>
            <p className={cn("text-purple-200/80", contentClassName)}>
              {content}
            </p>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default FeatureCard;
