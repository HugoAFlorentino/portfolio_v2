import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaArrowDown } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';
import { FaReact, FaCode, FaLaptopCode } from 'react-icons/fa';
import FloatingIcons from './FloatingIcons';

const Hero = () => {
  const [isAtBottom, setIsAtBottom] = useState(false);

  const handleScroll = () => {
    const scrollPosition = window.innerHeight + window.scrollY;
    const documentHeight = document.documentElement.scrollHeight;

    if (scrollPosition >= documentHeight) {
      setIsAtBottom(true);
    } else {
      setIsAtBottom(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      window.scrollTo({
        top: aboutSection.offsetTop,
        behavior: 'smooth',
      });
    }
  };

  const iconsData = [
    {
      Icon: FaReact,
      startX: '500vw', // Use percentage units for better positioning
      startY: '500vh', // Percentage of viewport height for initial Y position
      movementX: 40, // Movement in X direction (adjust to get spacing)
      movementY: 30, // Movement in Y direction (adjust to get spacing)
      duration: 5,
      delay: 0,
    },
    {
      Icon: FaCode,
      startX: '200vw', // Position more to the right
      startY: '200vh', // Position further down
      movementX: -60, // Adjust movement for better spread
      movementY: 50, // Adjust movement for better spread
      duration: 5,
      delay: 0.5,
    },
    {
      Icon: FaLaptopCode,
      startX: '900vw', // Position at the center
      startY: '900vh', // Move further down for better separation
      movementX: 80, // Increased movement in X
      movementY: -70, // Increased movement in Y
      duration: 6,
      delay: 1,
    },
  ];

  return (
    <motion.section
      id='hero'
      className='relative flex flex-col justify-center items-center h-screen text-center overflow-hidden bg-cover bg-center py-16'
      style={{ backgroundImage: "url('your-background-image.jpg')" }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      {/* Floating Icons */}
      <FloatingIcons iconsData={iconsData} />

      {/* Animated Heading with Waving Hand */}
      <motion.h1 className='text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text flex items-center gap-3'>
        Hi,
        <motion.span
          className='inline-block text-white'
          animate={{ rotate: [0, 15, 0, -15, 0] }}
          transition={{ repeat: Infinity, duration: 1.4, ease: 'easeInOut' }}
          style={{ transformOrigin: 'bottom' }}
        >
          👋
        </motion.span>
        welcome to my little space
      </motion.h1>

      {/* Animated Subheading */}
      <motion.div
        className='mt-8'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <TypeAnimation
          sequence={['Web Developer', 2000, 'Tech Enthusiast', 2000]}
          wrapper='h2'
          className='text-xl mt-4 text-gray-300'
          repeat={Infinity}
        />
      </motion.div>

      {/* Call to Action Button */}
      <motion.button
        className='mt-6 px-6 py-3 text-lg font-semibold bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-lg shadow-md hover:shadow-blue-400 transition duration-300 hover:scale-105 focus:outline-none'
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={scrollToAbout}
      >
        Explore More
      </motion.button>

      {/* Scroll Indicator (Arrow) */}
      {!isAtBottom && (
        <motion.div
          className='fixed bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ repeat: Infinity, duration: 1 }}
        >
          <FaArrowDown className='text-4xl text-white' />
        </motion.div>
      )}
    </motion.section>
  );
};

export default Hero;
