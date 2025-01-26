export const assets = {
  texts: {
    en: {
      Hero: {
        label: "Modern, free, open-source and secure Minecraft launcher!",
      },

      Footer: {
        copyright_notice: "© 2025 SynthLauncher ORG. | All Rights Reserved",

        navs: {
          labels: ["Launcher", "Links", "Info"],

          Launcher: [
            "Download",
            "Support",
            "Coming Soon",
            "Coming Soon",
            "Coming Soon",
          ],

          Links: ["FAQ", "Coming Soon", "Coming Soon"],

          Info: ["Minecraft Versions", "Support"],
        },
      },
      Data: {
        stats: [
          { number: "1M+", label: "Downloads" },
          { number: "50K+", label: "Active Users" },
          { number: "1000+", label: "Mods Supported" },
          { number: "99.9%", label: "Uptime" },
        ],

        platforms: [
          {
            icon: "/windows.svg",
            name: "Windows",
            size: "120MB",
            type: ".exe",
            requirements: "Windows 10 or later",
          },
          {
            icon: "/apple.svg",
            name: "macOS",
            size: "115MB",
            type: ".dmg",
            requirements: "macOS 11 or later",
          },
          {
            icon: "linux.svg",
            name: "Linux",
            size: "110MB",
            type: ".AppImage",
            requirements: "Most distributions",
          },
        ]
      },
    },
  },
};
