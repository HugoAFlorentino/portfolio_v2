import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaArrowDown } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';
import { FaReact, FaCode, FaLaptopCode } from 'react-icons/fa';
import FloatingIcons from './FloatingIcons';

const Hero = () => {
  const [isAtBottom, setIsAtBottom] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  const handleScroll = () => {
    const scrollPosition = window.innerHeight + window.scrollY;
    const documentHeight = document.documentElement.scrollHeight;
    setIsAtBottom(scrollPosition >= documentHeight - 5);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);

    handleResize();
    handleScroll();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      window.scrollTo({ top: aboutSection.offsetTop, behavior: 'smooth' });
    }
  };

  const iconsData = [
    {
      Icon: FaReact,
      startX: '500vw',
      startY: '500vh',
      movementX: 40,
      movementY: 30,
      duration: 5,
      delay: 0,
    },
    {
      Icon: FaCode,
      startX: '200vw',
      startY: '200vh',
      movementX: -60,
      movementY: 50,
      duration: 5,
      delay: 0.5,
    },
    {
      Icon: FaLaptopCode,
      startX: '900vw',
      startY: '900vh',
      movementX: 80,
      movementY: -70,
      duration: 6,
      delay: 1,
    },
  ];

  return (
    <motion.section
      id='hero'
      className='relative flex flex-col justify-center items-center h-screen text-center overflow-hidden bg-cover bg-center py-16'
      style={{ backgroundImage: "url('your-background-image.jpg')" }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Floating Icons */}
      <FloatingIcons iconsData={iconsData} />

      {/* Animated Heading */}
      <motion.h1
        className='p-6 text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text flex items-center gap-3'
        initial={{ opacity: 0, y: 50, scale: 0.8 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
      >
        Hi,
        <motion.span
          className='inline-block text-white'
          animate={{ rotate: [0, 15, 0, -15, 0] }}
          transition={{ repeat: Infinity, duration: 1.4, ease: 'easeInOut' }}
          style={{ transformOrigin: 'bottom' }}
        >
          👋
        </motion.span>
        welcome to my portfolio
      </motion.h1>

      {/* Animated Subheading */}
      <motion.div
        className='mt-8'
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 1, ease: 'easeOut' }}
      >
        <TypeAnimation
          sequence={['Web Developer', 2000, 'Tech Enthusiast', 2000]}
          wrapper='h2'
          className='text-xl mt-4 text-gray-300'
          repeat={Infinity}
        />
      </motion.div>

      {/* Animated Button */}
      <motion.button
        className='mt-6 px-6 py-3 text-lg font-semibold bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-lg shadow-md transition-all duration-500 relative overflow-hidden'
        initial={{ opacity: 0, y: 50, scale: 0.8 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        whileHover={{
          scale: 1.05,
          boxShadow: '0px 0px 20px rgba(59, 130, 246, 0.7)',
        }}
        whileTap={{ scale: 0.98 }}
        onClick={scrollToAbout}
      >
        Explore More
        <motion.span
          className='absolute inset-0 bg-white opacity-10'
          initial={{ x: '-100%' }}
          animate={{ x: '100%' }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: 'loop',
            ease: 'linear',
          }}
        />
      </motion.button>

      {/* Scroll Indicator (Arrow) */}
      {!isAtBottom && !isMobile && (
        <motion.div
          className='fixed bottom-10 left-1/2 transform -translate-x-1/2 text-4xl text-white'
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: [10, -10, 10] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
        >
          <FaArrowDown />
        </motion.div>
      )}
    </motion.section>
  );
};

export default Hero;
