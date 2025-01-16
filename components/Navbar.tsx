import React from 'react';
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav className='absolute z-1 h-[71px] w-full'>
        <div className='flex items-center justify-between'>
            {/* Logo */}
            <Image 
                src='/navlogo.svg'
                width={270}
                height={270}
                alt='Logo'
            />

            {/* Icons */}
            <div className='items-center gap-4 mr-4 pb-1 hidden sm:flex'>
                {/* Discord Icon */}
                <Image 
                    src='/discord.svg'
                    width={38}
                    height={38}
                    alt='Discord Icon'
                    className='pt-[2px]' 
                />

                {/* Github Icon */}
                <Image 
                    src='/github.svg'
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
