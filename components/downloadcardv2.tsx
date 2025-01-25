import React from "react";

import { motion } from "framer-motion";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Check, Download, Rocket, Shield } from "lucide-react";
import { Apple, AppWindow as Windows, Link as Linux } from "lucide-react";

const DownloadCardv2 = () => {
  return (
    <section className="mb-16">
      <h2 className="text-2xl font-semibold text-white mb-6">
        Download Components
      </h2>

      {/* Platform-specific Downloads */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {[
          { icon: Windows, name: "Windows", size: "120MB", type: ".exe" },
          { icon: Apple, name: "macOS", size: "115MB", type: ".dmg" },
          { icon: Linux, name: "Linux", size: "110MB", type: ".AppImage" },
        ].map((platform) => (
          <motion.div
            key={platform.name}
            whileHover={{ scale: 1.02 }}
            className="group"
          >
            <Card className="p-6 bg-purple-900/30 border-purple-500/30 backdrop-blur-sm hover:bg-purple-800/40 transition-all duration-300">
              <platform.icon className="w-12 h-12 text-purple-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">
                {platform.name}
              </h3>
              <p className="text-purple-200/80 mb-4">Version 2.0.1</p>
              <div className="flex items-center justify-between mb-4">
                <span className="text-purple-200/60">{platform.size}</span>
                <span className="text-purple-200/60">{platform.type}</span>
              </div>
              <Button className="w-full bg-purple-600 hover:bg-purple-700">
                <Download className="w-4 h-4 mr-2" /> Download
              </Button>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Enterprise Downloads */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="p-8 bg-gradient-to-br from-purple-900/40 to-purple-800/40 border-purple-500/30 backdrop-blur-sm">
          <div className="flex items-start justify-between">
            <div>
              <div className="flex items-center space-x-3 mb-2">
                <Shield className="w-6 h-6 text-purple-400" />
                <h3 className="text-xl font-semibold text-white">
                  Enterprise Edition
                </h3>
              </div>
              <p className="text-purple-200/80 mb-4">
                Complete solution with advanced features
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-center text-purple-200">
                  <Check className="w-4 h-4 mr-2 text-green-400" /> Priority
                  Support
                </li>
                <li className="flex items-center text-purple-200">
                  <Check className="w-4 h-4 mr-2 text-green-400" /> Advanced
                  Security
                </li>
                <li className="flex items-center text-purple-200">
                  <Check className="w-4 h-4 mr-2 text-green-400" /> Custom
                  Integrations
                </li>
              </ul>
            </div>
            <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
              Get Started
            </Button>
          </div>
        </Card>

        <Card className="p-8 bg-gradient-to-br from-purple-900/40 to-purple-800/40 border-purple-500/30 backdrop-blur-sm">
          <div className="flex items-start justify-between">
            <div>
              <div className="flex items-center space-x-3 mb-2">
                <Rocket className="w-6 h-6 text-purple-400" />
                <h3 className="text-xl font-semibold text-white">
                  Developer Edition
                </h3>
              </div>
              <p className="text-purple-200/80 mb-4">
                Perfect for individual developers
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-center text-purple-200">
                  <Check className="w-4 h-4 mr-2 text-green-400" /> Developer
                  Tools
                </li>
                <li className="flex items-center text-purple-200">
                  <Check className="w-4 h-4 mr-2 text-green-400" /> API Access
                </li>
                <li className="flex items-center text-purple-200">
                  <Check className="w-4 h-4 mr-2 text-green-400" /> Community
                  Support
                </li>
              </ul>
            </div>
            <Button className="bg-purple-600 hover:bg-purple-700">
              Download Free
            </Button>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default DownloadCardv2;
