"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MessageSquare, Mail, Github, Disc as Discord } from "lucide-react";
import { motion } from "framer-motion";

export default function SupportPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="min-h-screen bg-black flex justify-center z-0">
      <div className="container py-12 px-4 flex items-center mt-7">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="max-w-6xl mx-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div variants={itemVariants}>
              <h2 className="text-2xl font-bold mb-6 text-white">Contact Us</h2>

              <form className="space-y-4">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm mb-1 text-gray-200"
                  >
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    required
                    className="bg-white/5 border-white/10 text-white"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium mb-1 text-gray-200"
                  >
                    Subject
                  </label>
                  <Input
                    id="subject"
                    required
                    className="bg-white/5 border-white/10 text-white"
                    placeholder="How can we help?"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-1 text-gray-200"
                  >
                    Message
                  </label>
                  <Textarea
                    id="message"
                    required
                    className="min-h-[150px] bg-white/5 border-white/10 text-white"
                    placeholder="Describe your issue or question..."
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-500 to-orange-500 hover:opacity-90 transition-opacity"
                >
                  Send Message
                </Button>
              </form>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h2 className="text-2xl font-bold mb-6 text-white">
                Other Ways to Get Help
              </h2>

              <div className="space-y-4">
                <motion.div
                  className="p-6 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <Discord className="h-5 w-5 text-purple-400" />
                    <h3 className="font-bold text-white">Discord Community</h3>
                  </div>
                  <p className="text-sm text-gray-300 mb-3">
                    Join our Discord server for real-time support and community
                    discussions.
                  </p>
                  <Button
                    variant="secondary"
                    className="w-full bg-white/10 hover:bg-white/20 text-white"
                  >
                    Join Discord
                  </Button>
                </motion.div>

                <motion.div
                  className="p-6 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <Github className="h-5 w-5 text-purple-400" />
                    <h3 className="font-bold text-white">GitHub Issues</h3>
                  </div>
                  <p className="text-sm text-gray-300 mb-3">
                    Report bugs or request features through our GitHub
                    repository.
                  </p>
                  <Button
                    variant="secondary"
                    className="w-full bg-white/10 hover:bg-white/20 text-white"
                  >
                    View GitHub
                  </Button>
                </motion.div>

                <motion.div
                  className="p-6 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <MessageSquare className="h-5 w-5 text-purple-400" />
                    <h3 className="font-bold text-white">Knowledge Base</h3>
                  </div>
                  <p className="text-sm text-gray-300 mb-3">
                    Browse our documentation and guides for common issues.
                  </p>
                  <Button
                    variant="secondary"
                    className="w-full bg-white/10 hover:bg-white/20 text-white"
                  >
                    View Guides
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
