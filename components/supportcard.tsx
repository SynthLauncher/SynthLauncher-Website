import React from "react";

import { motion } from "framer-motion";
import { Card } from "./ui/card";
import { HelpCircle, LucideProps } from "lucide-react";
import { Button, ButtonProps } from "./ui/button";
import { cn } from "@/lib/utils";

interface Props {
  title: string;
  description: string;
  icon: React.ComponentType<LucideProps>;
  btnLabel: string;

  cardClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  iconClassName?: string;
  btnClassName?: string;
  btnVariant:
    | "link"
    | "outline"
    | "default"
    | "destructive"
    | "secondary"
    | "ghost"
    | "download"
    | null
    | undefined;
}

const SupportCard = ({
  title,
  description,
  icon: Icon,
  btnLabel,
  cardClassName,
  titleClassName,
  descriptionClassName,
  iconClassName,
  btnClassName,
  btnVariant,
}: Props) => {
  return (
    <section className="mb-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <motion.div whileHover={{ scale: 1.025 }} className="group">
          <Card
            className={cn(
              "p-6 bg-purple-900/30 border-purple-500/30 backdrop-blur-sm hover:bg-purple-800/40 transition-all duration-300"
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
            <p className={cn("text-purple-200/80 mb-4", descriptionClassName)}>
              {description}
            </p>
            <Button
              variant={btnVariant}
              className="text-purple-200 hover:text-purple-200 hover:bg-purple-800/50 w-full"
            >
              {btnLabel}
            </Button>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default SupportCard;
