import React from "react";
import { Card } from "./ui/card";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Label } from "./ui/label";

const RadioCard = () => {
  return (
    <Card className="p-6 bg-purple-900/30 border-purple-500/30">
      <h3 className="text-xl font-semibold text-white mb-4">Theme Selection</h3>
      <RadioGroup defaultValue="dark" className="space-y-2">
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="light" id="light" color="green-500" className="border-green-600"/>
          <Label htmlFor="light" className="text-purple-200">
            Light Mode
          </Label>
        </div>
      </RadioGroup>
    </Card>
  );
};

export default RadioCard;
