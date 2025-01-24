"use client";

import InfoLine from "@/components/infoline";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { motion } from "framer-motion";
import Image from "next/image";

export default function HomePage() {
  return (
    <main className="h-[90rem] bg-black">
      {/* Sector 1 */}
      <div className="bg-hero bg-cover bg-center w-full h-[740px] flex justify-center">
        <div
          className="flex flex-col my-auto gap-2 justify-center items-center mb-[250px]"
        >
          {/* Logo and Label */}
          <Image
            src="/herologo.svg"
            width={550}
            height={550}
            alt="Logo and Label"
          />

          {/*
              TODO: Add hover animation!
            */}
          {/* Button */}
          <Button variant="download" size="nm">
            <div className="flex items-center justify-center gap-2">
              {/* Download Icon */}
              <Image
                src="/download.svg"
                width={25}
                height={25}
                alt="Download Icon"
              />

              <p className="font-lato font-lato-700 text-xl">Download</p>
            </div>
          </Button>
        </div>
      </div>

      {/* Sector 2 */}
      <div className="bg-black h-[601px] flex flex-col gap-[50px] pt-[100px]">
            <InfoLine />
      </div>

      {/* Sector 3 */}
      <div></div>

      {/* Sector 4 */}
      <div></div>
    </main>
  );
}
