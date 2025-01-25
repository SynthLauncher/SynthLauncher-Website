import React from "react";

import { motion } from "framer-motion";
import { Card } from "./ui/card";
import { Indent, LucideProps } from "lucide-react";
import { cn } from "@/lib/utils";

interface Props {
  title: string;
  content: string;
  bonuses: string[];
  bonusIcon: React.ComponentType<LucideProps>;
  icon: React.ComponentType<LucideProps>;

  cardClassName?: string;
  titleClassName?: string;
  contentClassName?: string;
  bonusesClassName?: string;
  bonusIconClassName?: string;
  iconClassName?: string;
  indexClassName?: string;
  indexes?: number[];
}

const InteractiveCard = ({
  title,
  content,
  icon: Icon,
  bonuses,
  bonusIcon: BonusIcon,
  cardClassName,
  titleClassName,
  contentClassName,
  bonusesClassName,
  bonusIconClassName,
  iconClassName,
  indexes,
  indexClassName,
}: Props) => {
  return (
    <motion.div whileHover={{ scale: 1.05 }} className="group relative">
      <Card
        className={cn(
          "p-6 bg-purple-900/30 border-purple-500/30 backdrop-blur-sm",
          cardClassName
        )}
      >
        <Icon className={cn("w-8 h-8 text-purple-400 mb-4", iconClassName)} />
        <h3
          className={cn(
            "text-xl font-semibold text-white mb-2",
            titleClassName
          )}
        >
          {title}
        </h3>
        <p className={cn("text-purple-200/80", contentClassName)}>{content}</p>

        <div className="absolute inset-0 bg-purple-900/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg p-6">
          <div className="space-y-2">
            {bonuses.map((bonus, index) => (
              <div
                key={index}
                className={
                  indexes?.includes(index)
                    ? cn("flex items-center text-purple-200", indexClassName)
                    : "flex items-center text-purple-200"
                }
              >
                <BonusIcon className={cn("w-5 h-5 mr-2", bonusIconClassName)} />
                <span className={bonusesClassName}>{bonus}</span>
              </div>
            ))}
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

export default InteractiveCard;
