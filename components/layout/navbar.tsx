"use client";

import { motion } from "framer-motion";
import {
  Download,
  Github,
  HelpCircleIcon,
  Home,
  LogsIcon,
  Menu,
  X,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { href: "/", label: "Home", icon: Home },
    { href: "/download", label: "Download", icon: Download },
    { href: "/support", label: "Support", icon: HelpCircleIcon },
    { href: "/changelogs", label: "Changelogs", icon: LogsIcon },
  ];

  return (
    <nav className="fixed w-full z-50 bg-black/40 backdrop-blur-md border-b-2 border-purple-500/20 ">
      <div className="max-w-full mx-2 mr-5">
        <div className="w-full flex items-center justify-between h-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex-shrink-0"
          >
            <Link href="/" className="flex items-center space-x-2">
              <Image src={"/navlogo.svg"} width={250} height={250} alt="logo" />
            </Link>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-4">
              <div className="flex items-center mr-8">
                {menuItems.map((item, index) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      className="text-white hover:text-purple-300 px-3 py-2 rounded-md text-md font-open-sans font-open-sans-400 transition-colors duration-200 flex items-center gap-2"
                    >
                      <item.icon className="w-5 h-5" />
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 }}
              >
                <Button
                  variant="outline"
                  className="bg-purple-600 border-purple-500 text-white hover:text-purple-300 hover:bg-purple-500/20"
                >
                  <Github className="w-4 h-4 mr-2" />
                  GitHub
                </Button>
              </motion.div>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-purple-200 hover:text-white p-2"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <motion.div
        initial={false}
        animate={{ height: isOpen ? "auto" : 0 }}
        className="md:hidden overflow-hidden"
      >
        <div className="px-2 pt-2 pb-3 space-y-1 bg-black/20 backdrop-blur-lg">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-purple-200 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Button
            variant="outline"
            className="w-full border-purple-500 text-purple-950 hover:text-white hover:bg-purple-500/20 mt-2"
          >
            <Github className="w-4 h-4 mr-2" />
            GitHub
          </Button>
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;
