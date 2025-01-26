"use client";

import { motion } from "framer-motion";
import {
  Book,
  GitBranch,
  Globe,
  HelpCircle,
  Mail,
  MessageCircle,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function SupportPage() {
  const supportOptions = [
    {
      icon: Book,
      title: "Documentation",
      description: "Comprehensive guides and API references",
      link: "#",
    },
    {
      icon: MessageCircle,
      title: "Community Forum",
      description: "Connect with other developers",
      link: "#",
    },
    {
      icon: GitBranch,
      title: "GitHub Issues",
      description: "Report bugs and request features",
      link: "#",
    },
    {
      icon: Globe,
      title: "Status Page",
      description: "System status and updates",
      link: "#",
    },
  ];

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-7xl mx-auto mt-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            How Can We Help?
          </h1>
          <p className="text-xl text-purple-200/80 max-w-2xl mx-auto">
            Find the help you need through our support channels. We're here to
            assist you every step of the way.
          </p>
        </motion.div>

        {/* Search Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="max-w-2xl mx-auto mb-16"
        >
          <Card className="p-6 bg-purple-900/30 border-purple-500/30 backdrop-blur-sm">
            <div className="flex items-center space-x-4">
              <div className="flex-1">
                <Input
                  type="text"
                  placeholder="Search our documentation..."
                  className="bg-purple-900/30 border-purple-500/30 text-purple-200 placeholder:text-purple-400/50"
                />
              </div>
              <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                Search
              </Button>
            </div>
          </Card>
        </motion.div>

        {/* Support Options Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {supportOptions.map((option, index) => (
            <motion.div
              key={option.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="p-6 bg-purple-900/30 border-purple-500/30 backdrop-blur-sm hover:bg-purple-800/40 transition-all duration-300">
                <option.icon className="w-8 h-8 text-purple-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">
                  {option.title}
                </h3>
                <p className="text-purple-200/80 mb-4">{option.description}</p>
                <Button
                  variant="ghost"
                  className="w-full text-purple-200 hover:bg-purple-500/20"
                >
                  Learn More
                </Button>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="max-w-2xl mx-auto"
        >
          <Card className="p-8 bg-purple-950/50 border-purple-500/30 backdrop-blur-sm">
            <h2 className="text-2xl font-bold text-white mb-6">
              Still Need Help?
            </h2>
            <form className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-purple-200">
                  Name
                </Label>
                <Input
                  id="name"
                  className="bg-purple-900/30 border-purple-500/30 text-purple-200 placeholder:text-purple-400/50"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="text-purple-200">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  className="bg-purple-900/30 border-purple-500/30 text-purple-200 placeholder:text-purple-400/50"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message" className="text-purple-200">
                  Message
                </Label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full rounded-md bg-purple-900/30 border-purple-500/30 text-purple-200 placeholder:text-purple-400/50 focus:ring-purple-500 focus:border-purple-500"
                />
              </div>
              <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                <Mail className="mr-2 h-4 w-4" /> Send Message
              </Button>
            </form>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}