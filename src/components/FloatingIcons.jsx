import { motion } from 'framer-motion';
import React from 'react';

const FloatingIcons = ({ iconsData }) => {
  return (
    <div className='absolute inset-0 pointer-events-none overflow-hidden'>
      {iconsData.map((iconData, index) => {
        const { Icon, startX, startY, movementX, movementY, duration, delay } =
          iconData;

        // Convert the startX and startY from strings (e.g. '10vw') to numbers for calculation
        const startXNum =
          typeof startX === 'string' ? parseFloat(startX) : startX;
        const startYNum =
          typeof startY === 'string' ? parseFloat(startY) : startY;

        return (
          <motion.div
            key={index}
            className='absolute text-blue-500 opacity-20'
            initial={{
              x: startXNum,
              y: startYNum,
            }}
            animate={{
              x: [startXNum, startXNum + movementX, startXNum],
              y: [startYNum, startYNum + movementY, startYNum],
            }}
            transition={{
              repeat: Infinity,
              duration: duration,
              ease: 'easeInOut',
              delay: delay,
            }}
            style={{
              fontSize: '3rem',
            }}
          >
            <Icon />
          </motion.div>
        );
      })}
    </div>
  );
};

export default FloatingIcons;
