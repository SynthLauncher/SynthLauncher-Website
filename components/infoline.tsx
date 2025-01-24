import { assets } from '@/app/ui/assets'
import { motion } from 'framer-motion';
import React from 'react'

const InfoLine = () => {
  const stats = assets.texts.en.Data.stats;
  
  return (
    <motion.div 
      className='bg-gradient-primary w-full py-20'
      initial={{ opacity: 0} }
      whileInView={{opacity: 1}}
      exit={{ opacity: 0 }}
      viewport={{ once: false }}
    >
        <div className='container mx-auto px-4'>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-8 max-w-7xl mx-auto'>
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    className='text-center'
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.16 }}
                  >
                    <h1 className='md:text-5xl font-bold text-white'>
                      {stat.number}
                    </h1>

                    <p className='text-gray-200 font-medium'>
                      {stat.label}
                    </p>
                  </motion.div>
                ))}
            </div>
        </div>
    </motion.div>
  )
}

export default InfoLine