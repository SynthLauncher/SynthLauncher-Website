import React from "react";
import Image from "next/image";
import { assets } from "@/app/ui/assets";

const Footer = () => {
  const footerNavs = assets.texts.en.Footer.navs;

  return (
    <footer className="flex flex-col gap-12 bg-footer-dark h-1/6 pb-[50px]">
      {/* Top Part */}
      <div className="flex flex-wrap items-start gap-[20px] sm:gap-[50px] md:gap-[175px] mt-20 mx-auto">
        {/* Logo Container */}
        <div className="flex justify-center p-4">
          <Image
            src="/footerlogo.svg"
            width={200}
            height={200}
            alt="Footer Logo"
          />
        </div>

        {/* Footer Navs Container */}
        <div className="flex flex-row gap-[75px] mt-[45px] flex-wrap p-4">
          {footerNavs.labels.map((nav, index) => {
            const items = footerNavs[nav as keyof typeof footerNavs];

            return (
              <div className="flex flex-col" key={index}>
                {/* Nav Header */}
                <h3 className="font-lato font-lato-700 text-white text-2xl">
                  {nav}
                </h3>

                {/* Navs */}
                <div className="flex flex-col gap-2 mt-4">
                  {items.map((text, itemIndex) => (
                    <div key={itemIndex} className="flex">
                      <h6 className="font-lato text-md whitespace-nowrap text-ellipsis overflow-hidden text-gray-400">
                        {text}
                      </h6>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Social Icons Container */}
        <div className="flex flex-col mt-[45px] p-4">
          <h3 className="font-lato font-lato-700 text-2xl text-white">
            Socials
          </h3>

          {/* Social Icons */}
          <div className="flex flex-row gap-[14px] mt-4 justify-center flex-wrap">
            <Image src="/discord.svg" width={30} height={30} alt="Discord" />

            <Image
              src="/instagram.svg"
              width={25}
              height={25}
              alt="Instagram"
            />

            <Image src="/facebook.svg" width={30} height={30} alt="Facebook" />

            <Image src="/github.svg" width={30} height={30} alt="Github" />
          </div>
        </div>
      </div>

      {/* Divider */}
      <hr className="border-t-2 border-gray-500 mx-auto w-8/12" />

      {/* Bottom Part */}
      <div className="mx-auto">
        <h5 className="text-gray-400 font-lato font-lato-400 whitespace-nowrap overflow-hidden">
          {assets.texts.en.Footer.copyright_notice}
        </h5>
      </div>
    </footer>
  );
};

export default Footer;
