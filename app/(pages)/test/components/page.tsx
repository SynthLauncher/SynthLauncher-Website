"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { motion } from "framer-motion";
import {
  Apple,
  Check,
  Code,
  Download,
  FileDown,
  Folder,
  GitBranch,
  Globe,
  Heart,
  HelpCircle,
  HeartCrack,
  Lock,
  Mail,
  MessageCircle,
  Package,
  Rocket,
  Share2,
  Shield,
  Star,
  ThumbsUp,
  Users,
  AppWindow as Windows,
  Zap,
  Link as Linux,
  Search,
  Menu,
  Bell,
  Home,
  ChevronRight,
  Settings,
  User,
  LogOut,
  Moon,
  Sun,
  Volume2,
  VolumeX,
} from "lucide-react";
import SignInForm from "@/components/signinform";
import SignUpForm from "@/components/signupform";
import PasswordResetForm from "@/components/passwordreset";
import ProgressBar from "@/components/progressbar";
import RadioCard from "@/components/radiocard";
import AccordionCard from "@/components/accordioncard";
import ToggleCard from "@/components/togglecard";
import DialogCard from "@/components/dialogcard";
import SpecCard from "@/components/speccard";
import SupportCard from "@/components/supportcard";
import LogCard from "@/components/logcard";
import InteractiveCard from "@/components/interactivecard";
import FeatureCard from "@/components/featurecard";
import BlogCard from "@/components/blogcard";
import SliderCard from "@/components/slidercard";
import Image from "next/image";
import DownloadCard from "@/components/downloadcard";

export default function ComponentsShowcase() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-950 via-gray-900 to-black p-8">
      <h1 className="text-4xl font-bold text-white mb-12 text-center mt-12">
        UI Components Showcase
      </h1>

      {/* Enhanced Button Showcase */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-white mb-6">
          Button Variations
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Button className="bg-purple-600 hover:bg-purple-700 w-full">
            Primary
          </Button>

          <Button
            variant="outline"
            className="border-purple-500 text-purple-200 hover:bg-purple-800 w-full"
          >
            Outline
          </Button>

          <Button
            variant="ghost"
            className="text-purple-200 hover:bg-purple-800/50 w-full"
          >
            Ghost
          </Button>

          <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 w-full">
            Gradient
          </Button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-4 py-2 rounded-lg bg-purple-600/20 text-purple-200 border border-purple-500/30 hover:bg-purple-600/30 transition-all duration-300 w-full"
          >
            Animated
          </motion.button>

          <Button className="bg-purple-900/50 hover:bg-purple-800 border border-purple-500/30 w-full">
            <Star className="mr-2 h-4 w-4" /> With Icon
          </Button>

          <Button
            variant="outline"
            className="border-2 border-purple-500 text-purple-200 hover:bg-purple-800/50 w-full"
          >
            Thick Border
          </Button>

          <Button className="bg-transparent hover:bg-purple-800/30 border border-purple-500/30 text-purple-200 w-full">
            Transparent
          </Button>

          <Button className="bg-purple-600/20 hover:bg-purple-600/30 text-purple-200 w-full">
            <Download className="mr-2 h-4 w-4" /> Download
          </Button>

          <Button className="bg-gradient-to-br from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 w-full">
            Premium
          </Button>

          <Button className="bg-purple-900 hover:bg-purple-800 text-purple-200 ring-2 ring-purple-500/50 w-full">
            Ringed
          </Button>

          <Button className="bg-purple-600/20 hover:bg-purple-600/30 backdrop-blur-sm w-full">
            Glass
          </Button>
        </div>
      </section>

      <section className="mb-16 overflow-hidden">
        <h2 className="text-2xl font-semibold text-white mb-6">
          Sliding Cards
        </h2>
        <motion.div
          className="flex space-x-6 pb-4"
          drag="x"
          dragConstraints={{ right: 0, left: -1200 }}
        >
          {[1, 2, 3, 4, 5].map((item) => (
            <motion.div
              key={item}
              className="flex-shrink-0 w-80"
              whileHover={{ scale: 1.02 }}
            >
              <Card className="p-6 bg-gradient-to-br from-purple-800/40 to-purple-900/40 border-purple-500/30 backdrop-blur-sm">
                <Image
                  src="/"
                  alt="Card image"
                  className="rounded-lg mb-4 w-full h-48 object-cover"
                  width={0}
                  height={0}
                />
                <h3 className="text-xl font-semibold text-white mb-2">
                  Feature {item}
                </h3>
                <p className="text-purple-200/80">
                  Drag to explore more features and content.
                </p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  );
}
