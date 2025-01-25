import React, { useState } from "react";
import { Card } from "./ui/card";
import { Toggle } from "./ui/toggle";
import { Bell, Moon } from "lucide-react";

const ToggleCard = () => {
  const [showNotification, setShowNotification] = useState(false);

  return (
    <Card className="p-6 bg-purple-900/30 border-purple-500/30">
      <h3 className="text-xl font-semibold text-white mb-4">Quick Settings</h3>
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-purple-200">Notifications</span>
          <Toggle
            aria-label="Toggle notifications"
            className="data-[state=on]:bg-purple-600"
            onPressedChange={(pressed) => setShowNotification(pressed)}
          >
            <Bell className="h-4 w-4" />
          </Toggle>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-purple-200">Dark Mode</span>
          <Toggle
            aria-label="Toggle dark mode"
            className="data-[state=on]:bg-purple-600"
          >
            <Moon className="h-4 w-4" />
          </Toggle>
        </div>
      </div>
    </Card>
  );
};

export default ToggleCard;
