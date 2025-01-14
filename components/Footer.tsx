import { assets } from '@/app/ui/assets';
import Image from 'next/image';
import React from 'react';

const Footer = () => {
  return (
    <footer className='h-[350px] bg-footer-dark flex flex-col gap-12'>
      {/* Top Part */}
      <div className='flex items-center gap-[35px] mx-[100px]'>
        {/* Logo Container */}
        <div>
            <Image
                src={assets.icons.footerlogo}
                width={150}
                height={150}
                alt="Footer Logo"
            />
        </div>

        {/* Footer Navs Container */}
        <div className='flex flex-row gap-[45px]'>
          {assets.texts.en.Footer.footer_navs.navs.map((nav, index) => {
            const items = assets.texts.en.Footer.footer_navs[nav as keyof typeof assets.texts.en.Footer.footer_navs];

            return (
              <div className='flex flex-col' key={index}>
                <h3 className='font-lato font-lato-700  text-white text-2xl'>
                    {nav}
                </h3>

                <div className='flex flex-col gap-1 mt-4'>
                  {items.map((text, itemIndex) => (
                    <h6 className='font-lato text-md text-gray-400' key={itemIndex}>
                      {text}
                    </h6>
                  ))}
                </div>                
              </div>
            );
          })}
        </div>
        
        {/* Social Icons Container */}
        <div className='flex flex-col gap-2'>
          <h3 className='font-lato font-lato-700 text-2xl text-white'>
            Socials
          </h3>

          <div className='flex flex-row gap-[8px]'>
            {assets.icons.footer.map((icon, index) => {
              const item = assets.icons.footer_icons[index as keyof typeof assets.icons.footer_icons];

              return (
                  <Image
                    alt={item as string} 
                    src={icon}
                    width={35}
                    height={35}
                    key={index}
                  />
              )
            })}
          </div>
        </div>
      </div>


      {/* Bottom Part */}
      <div className='mx-auto'>
            <h1 className='text-gray-400 font-lato font-lato-400'>
              {assets.texts.en.Footer.copyright_notice}
            </h1>
      </div>
    </footer>
  )
}

export default Footer;
