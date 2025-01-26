"use client";

import React from "react";

import InfoLine from "@/components/infoline";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import FeatureCard from "@/components/featurecard";
import { Computer, Divide, HelpCircleIcon, Rocket } from "lucide-react";
import InteractiveCard from "@/components/interactivecard";
import DialogCard from "@/components/dialogcard";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import HelpCard from "@/components/helpcard";

export default function HomePage() {
  return (
    <main className="h-[90rem] bg-black">
      {/* Sector 1 */}
      <div className="bg-hero bg-cover bg-center w-full h-screen flex justify-center"></div>

      {/* Sector 2 */}
      <div className="bg-black h-[37.563rem] flex flex-col gap-[3.125rem] pt-[6.25rem]">
      </div>

      {/* Sector 3 */}
      <div></div>

      {/* Sector 4 */}
      <div></div>
    </main>
  );
}
