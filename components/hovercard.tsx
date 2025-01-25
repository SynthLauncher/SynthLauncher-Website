import React from "react";

import { motion } from "framer-motion";
import { Card } from "./ui/card";
import { Code, Folder, Globe, Package } from "lucide-react";

const HoverCard = () => {
  return (
    <section>
      <h2 className="text-2xl font-semibold text-white mb-6">
        Interactive Cards
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <motion.div whileHover={{ scale: 1.05 }} className="group relative">
          <Card className="p-6 bg-purple-900/30 border-purple-500/30 backdrop-blur-sm">
            <Code className="w-8 h-8 text-purple-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">
              Source Code
            </h3>
            <p className="text-purple-200/80">Explore our codebase</p>

            {/* Hover Content */}
            <div className="absolute inset-0 bg-purple-900/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg p-6">
              <div className="space-y-2">
                <div className="flex items-center text-purple-200">
                  <Folder className="w-5 h-5 mr-2" />
                  <span>📦 /src</span>
                </div>
                <div className="flex items-center text-purple-200 ml-4">
                  <Folder className="w-5 h-5 mr-2" />
                  <span>🎨 /components</span>
                </div>
                <div className="flex items-center text-purple-200 ml-4">
                  <Folder className="w-5 h-5 mr-2" />
                  <span>🛠️ /utils</span>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>

        <motion.div whileHover={{ scale: 1.05 }} className="group relative">
          <Card className="p-6 bg-purple-900/30 border-purple-500/30 backdrop-blur-sm">
            <Globe className="w-8 h-8 text-purple-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">
              API Access
            </h3>
            <p className="text-purple-200/80">Connect with our API</p>

            {/* Hover Content */}
            <div className="absolute inset-0 bg-purple-900/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg p-6">
              <div className="space-y-3 text-purple-200">
                <div>🔑 REST API</div>
                <div>⚡ WebSocket</div>
                <div>📊 GraphQL</div>
              </div>
            </div>
          </Card>
        </motion.div>

        <motion.div whileHover={{ scale: 1.05 }} className="group relative">
          <Card className="p-6 bg-purple-900/30 border-purple-500/30 backdrop-blur-sm">
            <Package className="w-8 h-8 text-purple-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Packages</h3>
            <p className="text-purple-200/80">Explore our packages</p>

            {/* Hover Content */}
            <div className="absolute inset-0 bg-purple-900/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg p-6">
              <div className="space-y-3 text-purple-200">
                <div>📦 Core Package</div>
                <div>🎨 UI Kit</div>
                <div>🛠️ Utils</div>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default HoverCard;
