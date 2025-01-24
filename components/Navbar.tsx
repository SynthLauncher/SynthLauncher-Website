import React from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="absolute z-1 h-[71px] w-full">
      <div className="flex items-center justify-between mt-1 mx-2">
        {/* Logo */}
        <div className="hover:scale-105 transition-all duration-300">
          <Link href="/">
            <Image src="/navlogo.svg" width={270} height={270} alt="Logo" />
          </Link>
        </div>

        {/* Icons */}
        <div className="items-center gap-6 mr-4 pb-1 hidden sm:flex">
          {/* Discord Icon */}
          <div className="hover:scale-110 transition-all duration-300">
            <Link href="https://discord.gg/ajZux2Uy9E">
              <Image
                src="/discord.svg"
                width={38}
                height={38}
                alt="Discord Icon"
                className="pt-[2px]"
                quality={100}
              />
            </Link>
          </div>

          {/* Github Icon */}
          <div className="hover:scale-110 transition-all duration-300">
            <Link href="https://github.com/synthlauncher">
              <Image
                src="/github.svg"
                width={34}
                height={34}
                alt="GitHub Icon"
                quality={100}
              />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
