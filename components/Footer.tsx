import React from 'react';
import Image from 'next/image';
import { assets } from '@/app/ui/assets';

const Footer = () => {
  const footerNavs = assets.texts.en.Footer.navs;

  return (
    <footer className="h-[527px] flex flex-col gap-12 bg-footer-dark">
      {/* Top Part */}
      <div className="flex items-center gap-[150px] mt-20 mx-auto">
        {/* Logo Container */}
        <div>
          <Image
            src='/footerlogo.svg'
            width={200}
            height={200}
            alt="Footer Logo"
          />
        </div>

        {/* Footer Navs Container */}
        <div className="flex flex-row gap-[45px]">
          {footerNavs.labels.map((nav, index) => {
            const items = footerNavs[
                nav as keyof typeof footerNavs
              ];

            return (
              <div className="flex flex-col mt-[45px]" key={index}>
                <h3 className="font-lato font-lato-700 text-white text-2xl">
                  {nav}
                </h3>

                <div className="flex flex-col gap-1 mt-4">
                  {items.map((text, itemIndex) => (
                    <h6 className="font-lato text-md text-gray-400" key={itemIndex}>
                      {text}
                    </h6>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Social Icons Container */}
        <div className="flex flex-col gap-2">
          <h3 className="font-lato font-lato-700 text-2xl text-white">Socials</h3>

          { /* Social Icons */}
          <div className="flex flex-row gap-[14px]">
            <Image 
              src="/discord.svg"
              width={30}
              height={30}
              alt='Discord'
            />

            <Image 
              src="/instagram.svg"
              width={25}
              height={25}
              alt='Instagram'
            />

            <Image 
              src="/facebook.svg"
              width={30}
              height={30}
              alt='Facebook'
            />
            
            <Image 
              src="/github.svg"
              width={30}
              height={30}
              alt='Github'
            />
          </div>
        </div>
      </div>

      {/* Divider */}
      <hr 
        className='border-t-2 border-gray-400 mx-auto w-4/5'
      />

      {/* Bottom Part */}
      <div className="mx-auto">
        <h1 className="text-gray-400 font-lato font-lato-400">
          {assets.texts.en.Footer.copyright_notice}
        </h1>
      </div>
    </footer>
  );
};

export default Footer;
