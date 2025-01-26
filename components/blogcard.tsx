import React from "react";
import { Card } from "./ui/card";
import { Ban, Heart, Share2 } from "lucide-react";
import { Button } from "./ui/button";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface Props {
  banner: string;
  alt: string;
  featureText: string;
  title: string;
  description: string;
  author: string;
  authorPFP: string;
  authorRole: string;

  cardClassName?: string;
  bannerClassName?: string;
  featureTextClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  authorClassName?: string;
  authorPFPClassName?: string;
  authorRoleClassName?: string;
}

const BlogCard = ({
  banner,
  alt,
  featureText,
  title,
  description,
  author,
  authorPFP,
  authorRole,
  bannerClassName,
  authorClassName,
  authorPFPClassName,
  authorRoleClassName,
  descriptionClassName,
  featureTextClassName,
  titleClassName,
  cardClassName,
}: Props) => {
  return (
    <section className="mb-16">
      <div className="grid grid-cols-1 gap-8">
        {/* Featured Blog Post */}
        <Card
          className={cn(
            "overflow-hidden bg-purple-900/30 border-purple-500/30",
            cardClassName
          )}
        >
          <div className="relative">
            <Image
              src={banner}
              alt={alt}
              className={cn("object-cover" , bannerClassName)}
              width={800}
              height={200}
            />

            <div className="absolute top-4 left-4">
              <span
                className={cn(
                  "px-3 py-1 bg-purple-500/50 backdrop-blur-sm text-purple-200 rounded-full text-sm",
                  featureTextClassName
                )}
              >
                {featureText}
              </span>
            </div>
          </div>
          <div className="p-6">
            <div className="flex items-center justify-between mb-4">
              <span className="text-purple-200/60">March 15, 2024</span>
              <div className="flex items-center space-x-4">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="flex items-center text-purple-200/60 hover:text-purple-200"
                >
                  <Heart className="w-5 h-5 mr-1" />
                  <span>2.1k</span>
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="flex items-center text-purple-200/60 hover:text-purple-200"
                >
                  <Share2 className="w-5 h-5" />
                </motion.button>
              </div>
            </div>
            <h3
              className={cn(
                "text-2xl font-semibold text-white mb-2",
                titleClassName
              )}
            >
              {title}
            </h3>
            <p className={cn("text-purple-200/80 mb-4", descriptionClassName)}>
              {description}
            </p>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Image
                  src={authorPFP}
                  alt="Author"
                  className={cn(
                    "rounded-full object-cover",
                    authorPFPClassName
                  )}
                  width={40}
                  height={40}
                />
                <div>
                  <p className={cn("text-white font-medium", authorClassName)}>
                    {author}
                  </p>
                  <p
                    className={cn(
                      "text-purple-200/60 text-sm",
                      authorRoleClassName
                    )}
                  >
                    {authorRole}
                  </p>
                </div>
              </div>
              <Button
                variant="outline"
                className="border-purple-500 text-black hover:bg-purple-800 hover:text-white"
              >
                Read More
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default BlogCard;
