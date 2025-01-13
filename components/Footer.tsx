import { assets } from '@/app/ui/assets';
import Image from 'next/image';
import React from 'react';

const Footer = () => {
  return (
    <footer className='h-[327px] bg-footer-dark'>
      {/* Top Part */}
      <div className='flex'>
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
        <div>
            <div className='flex flex-col'>
                <h3 className='font-lato font-lato-700  text-white'>
                    Launcher
                </h3>
            </div>
        </div>
        
        {/* Social Icons Container */}
        <div>

        </div>
      </div>

      {/* Bottom Part */}
      <div>

      </div>
    </footer>
  )
}

export default Footer;
