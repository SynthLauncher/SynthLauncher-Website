import React from "react";

import InfoLine from "@/components/infoline";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  return (
    <main className="h-[90rem] bg-black">
      {/* Sector 1 */}
      <div className="bg-hero bg-cover bg-center w-full h-screen flex justify-center">
        <div
          className="flex flex-col my-auto gap-4 justify-center items-center mb-50"
        >
          <div className="flex flex-col text-white">
            {/* Logo and Label */}
            <Image
              src="/herologo.svg"
              width={550}
              height={550}
              alt="Logo and Label"
            />

            <h3 className="font-lato font-lato-400 w-[34.375rem] text-center text-wrap">
              Modern, free, open-source and secure Minecraft launcher!
            </h3>
          </div>

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
      <div className="bg-black h-[37.563rem] flex flex-col gap-[3.125rem] pt-[6.25rem]">
          <InfoLine />
      </div>

      {/* Sector 3 */}
      <div>

      </div>

      {/* Sector 4 */}
      <div>

      </div>
    </main>
  );
}
