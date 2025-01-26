"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Bug,
  Check,
  GitBranch,
  GitCommit,
  GitPullRequest,
  Rocket,
  Sparkles,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function ChangelogPage() {
  const releases = [
    {
      version: "2.0.1",
      date: "March 15, 2024",
      type: "major",
      icon: Rocket,
      title: "Performance Boost Update",
      description:
        "Major performance improvements and new features for a better development experience.",
      changes: [
        {
          type: "feature",
          icon: Sparkles,
          title: "New Component Library",
          description: "Introducing 20+ new components with modern design",
        },
        {
          type: "improvement",
          icon: Zap,
          title: "Performance Optimization",
          description: "50% faster rendering and reduced bundle size",
        },
        {
          type: "bugfix",
          icon: Bug,
          title: "Critical Fixes",
          description: "Resolved memory leaks and UI inconsistencies",
        },
      ],
    },
    {
      version: "1.9.0",
      date: "March 1, 2024",
      type: "minor",
      icon: GitPullRequest,
      title: "Developer Experience Update",
      description:
        "Enhanced developer tools and documentation improvements.",
      changes: [
        {
          type: "feature",
          icon: GitBranch,
          title: "Advanced Theming",
          description: "New theming system with better customization",
        },
        {
          type: "improvement",
          icon: GitCommit,
          title: "Documentation",
          description: "Expanded guides and API documentation",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Changelog
          </h1>
          <p className="text-xl text-purple-200/80 max-w-2xl mx-auto">
            Keep track of updates and improvements to ModernUI. We're constantly
            working to make it better.
          </p>
        </motion.div>

        {/* Latest Release Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-12"
        >
          <Card className="p-8 bg-gradient-to-br from-purple-900/40 to-purple-800/40 border-purple-500/30 backdrop-blur-sm">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-4">
                <span className="px-3 py-1 bg-purple-500/20 text-purple-200 rounded-full text-sm">
                  Latest Release
                </span>
                <h2 className="text-2xl font-bold text-white">v2.0.1</h2>
              </div>
              <Button
                variant="outline"
                className="border-purple-500 text-purple-200 hover:bg-purple-500/20"
              >
                Release Notes <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <p className="text-purple-200/80 mb-6">
              A major update focusing on performance improvements and new features.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <div className="flex items-center text-green-400">
                  <Check className="w-5 h-5 mr-2" />
                  <span>New Components</span>
                </div>
                <p className="text-purple-200/60 text-sm">
                  20+ new components added
                </p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center text-green-400">
                  <Check className="w-5 h-5 mr-2" />
                  <span>Performance</span>
                </div>
                <p className="text-purple-200/60 text-sm">
                  50% faster rendering
                </p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center text-green-400">
                  <Check className="w-5 h-5 mr-2" />
                  <span>Bug Fixes</span>
                </div>
                <p className="text-purple-200/60 text-sm">
                  Critical issues resolved
                </p>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Release Timeline */}
        <div className="space-y-8">
          {releases.map((release, index) => (
            <motion.div
              key={release.version}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
            >
              <Card className="p-6 bg-purple-900/30 border-purple-500/30 backdrop-blur-sm">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <release.icon className="w-8 h-8 text-purple-400" />
                    <div>
                      <h3 className="text-xl font-bold text-white">
                        v{release.version}
                      </h3>
                      <p className="text-purple-200/60">{release.date}</p>
                    </div>
                  </div>
                  <span
                    className={`px-3 py-1 rounded-full text-sm ${
                      release.type === "major"
                        ? "bg-pink-500/20 text-pink-200"
                        : "bg-purple-500/20 text-purple-200"
                    }`}
                  >
                    {release.type === "major" ? "Major Release" : "Minor Release"}
                  </span>
                </div>
                <p className="text-purple-200/80 mb-6">{release.description}</p>
                <div className="space-y-4">
                  {release.changes.map((change) => (
                    <div
                      key={change.title}
                      className="flex items-start space-x-4"
                    >
                      <change.icon className="w-5 h-5 text-purple-400 mt-1" />
                      <div>
                        <h4 className="text-white font-semibold">
                          {change.title}
                        </h4>
                        <p className="text-purple-200/60">
                          {change.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}