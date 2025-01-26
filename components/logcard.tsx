import React from "react";

import { Card } from "./ui/card";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface Props {
  featureText: string;
  title: string;
  content: string;
  banner: string;
  alt: string;

  cardClassName?: string;
  featureTextClassName?: string;
  titleClassName?: string;
  contentClassName?: string;
  bannerClassName?: string;
}

const LogCard = ({
  featureText,
  title,
  content,
  banner,
  alt,
  featureTextClassName,
  titleClassName,
  contentClassName,
  bannerClassName,
  cardClassName,
}: Props) => {
  return (
    <Card
      className={cn(
        "overflow-hidden bg-purple-900/30 border-purple-500/30",
        cardClassName
      )}
    >
      <Image
        src={banner}
        alt={alt}
        className={cn("w-full h-48 object-cover", bannerClassName)}
      />
      <div className="p-6">
        <span
          className={cn(
            "inline-block px-3 py-1 bg-purple-500/20 text-purple-200 rounded-full text-sm mb-4",
            featureTextClassName
          )}
        >
          {featureText}
        </span>
        <h3
          className={cn(
            "text-xl font-semibold text-white mb-2",
            titleClassName
          )}
        >
          {title}
        </h3>
        <p className={cn("text-purple-200/80", contentClassName)}>{content}</p>
      </div>
    </Card>
  );
};

export default LogCard;
