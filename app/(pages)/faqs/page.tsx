"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

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

export default function UiTestPage() {
  const faqs = [
    {
      question: "What is SynthLauncher?",
      answer:
        "SynthLauncher is a modern, user-friendly Minecraft launcher that makes it easy to manage your Minecraft installations, mods, and profiles. It's designed to be simple enough for new players while offering powerful features for experienced users.",
    },
    {
      question: "Is SynthLauncher free to use?",
      answer:
        "Yes, SynthLauncher is completely free to use. You only need to own a copy of Minecraft to play the game.",
    },
    {
      question: "How do I install mods?",
      answer:
        "Installing mods with SynthLauncher is simple. Just go to the Mods section, click 'Install Mod', and either drag and drop your mod files or select them from your computer. SynthLauncher will automatically install them in the correct location.",
    },
    {
      question: "Can I use multiple Minecraft versions?",
      answer:
        "Yes! SynthLauncher supports multiple Minecraft versions and profiles. You can easily switch between different versions and modpacks through the profile manager.",
    },
    {
      question: "Is SynthLauncher safe to use?",
      answer:
        "Absolutely. SynthLauncher is open-source, and we take security seriously. All our code is publicly available for review, and we regularly update the launcher to address any security concerns.",
    },
    {
      question: "How do I update SynthLauncher?",
      answer:
        "SynthLauncher automatically checks for updates when you start it. If an update is available, you'll be prompted to install it. You can also manually check for updates in the Settings menu.",
    },
  ];

  return (
    <div className="h-[780px] bg-black flex justify-center items-center shadow-card text-white">
      <div className="container max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 mt-16"
        >
          <h1 className="text-5xl font-bold mb-6">
            Frequently Asked{" "}
            <span className="text-transparent bg-gradient-to-r from-orange-500 to-purple-400 bg-clip-text">Questions</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Find answers to common questions about SynthLauncher
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-4"
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <motion.div key={index} variants={itemVariants}>
                <AccordionItem
                  value={`item-${index}`}
                  className=" bg-slate-300/10 backdrop-blur-lg rounded-xl mb-4 border border-white/20 shadow-md w-full  "
                >
                  <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
                    <span className="text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-500">
                      {faq.question}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4">
                    <div className="text-gray-400 leading-relaxed">
                      {faq.answer}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </div>
  );
}
