import React, { useState } from "react";
import { Card } from "./ui/card";
import { Volume2, VolumeX } from "lucide-react";
import { Slider } from "./ui/slider";

const VolumeSlider = () => {
  const [volume, setVolume] = useState(50);

  return (
    <Card className="p-6 bg-purple-900/30 border-purple-500/30">
      <h3 className="text-xl font-semibold text-white mb-4">Volume Control</h3>
      <div className="flex items-center space-x-4">
        <button
          onClick={() => setVolume(0)}
          className="text-purple-200 hover:text-white transition-colors"
        >
          {volume === 0 ? (
            <VolumeX className="w-5 h-5" />
          ) : (
            <Volume2 className="w-5 h-5" />
          )}
        </button>
        <Slider
          value={[volume]}
          max={100}
          step={1}
          className="flex-1"
          onValueChange={(value) => setVolume(value[0])}
        />
        <span className="text-purple-200 min-w-[3ch]">{volume}</span>
      </div>
    </Card>
  );
};

export default VolumeSlider;
