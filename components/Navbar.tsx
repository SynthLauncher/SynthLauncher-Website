import React from 'react';
import Image from 'next/image';
import { assets } from '@/app/ui/assets';

const Navbar = () => {
  return (
    <nav className='bg-black h-[71px]'>
        <div className='flex items-center justify-between'>
            {/* Logo */}
            <Image 
                src={assets.icons.navlogo}
                width={270}
                height={270}
                alt='Logo'
            />

            {/* Icons */}
            <div className='items-center gap-4 mr-4 pb-1 hidden sm:flex'>
                {/* Discord Icon */}
                <Image 
                    src={assets.icons.discord}
                    width={38}
                    height={38}
                    alt='Discord Icon'
                    className='pt-[2px]' 
                />

                {/* Github Icon */}
                <Image 
                    src={assets.icons.github}
                    width={34}
                    height={34}
                    alt='GitHub Icon'
                />
            </div>
        </div>
    </nav>
  );
}

export default Navbar;
