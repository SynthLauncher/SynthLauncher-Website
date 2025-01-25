import React from "react";
import { Card } from "./ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";

const DialogCard = () => {
  return (
    <Card className="p-6 bg-purple-900/30 border-purple-500/30">
      <h3 className="text-xl font-semibold text-white mb-4">Modal Dialog</h3>
      <Dialog>
        <DialogTrigger asChild>
          <Button className="w-full bg-purple-600 hover:bg-purple-700">
            Open Settings
          </Button>
        </DialogTrigger>
        <DialogContent className="bg-purple-900/95 border-purple-500/30 text-white">
          <DialogHeader>
            <DialogTitle>Settings</DialogTitle>
            <DialogDescription className="text-purple-200">
              Customize your experience with these settings.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-purple-200">
                Display Name
              </Label>
              <Input
                id="name"
                className="bg-purple-900/30 border-purple-500/30 text-purple-200"
                placeholder="Enter your display name"
              />
            </div>
            <div className="space-y-2">
              <Label className="text-purple-200">Theme</Label>
              <RadioGroup defaultValue="dark" className="space-y-2">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="light" id="light-dialog" />
                  <Label htmlFor="light-dialog" className="text-purple-200">
                    Light
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="dark" id="dark-dialog" />
                  <Label htmlFor="dark-dialog" className="text-purple-200">
                    Dark
                  </Label>
                </div>
              </RadioGroup>
            </div>
          </div>
          <div className="flex justify-end">
            <Button className="bg-purple-600 hover:bg-purple-700">
              Save Changes
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </Card>
  );
};

export default DialogCard;
