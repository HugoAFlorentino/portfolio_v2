import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaCode, FaLaptopCode } from 'react-icons/fa';
import FloatingIcons from '../components/FloatingIcons';
import { TypeAnimation } from 'react-type-animation';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

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
      id='about'
      className='min-h-screen flex flex-col justify-center items-center text-center p-6 relative'
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
      transition={{ duration: 0.8 }}
      ref={ref}
    >
      {/* Floating Icons with Dynamic Zigzag Movement */}
      <FloatingIcons iconsData={iconsData} />

      {/* Title with Scroll Animation */}
      <motion.h1
        className='text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 animate-textGlow'
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0.8 }}
        transition={{
          opacity: { delay: 0.3, duration: 0.6 },
          scale: { delay: 0.3, duration: 0.6 },
        }}
      >
        About Me
      </motion.h1>

      {/* Dynamic Typewriter Effect for Description */}
      <motion.p
        className='mt-8 text-lg text-gray-100 max-w-3xl mx-auto leading-relaxed relative'
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -30 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        I’m a passionate web developer who loves to:
        <br />
        <br />
        <TypeAnimation
          sequence={['Code', 2000, 'Gaming', 2000, 'Learn new things', 2000]}
          wrapper='span'
          className='text-xl mt-4 text-blue-400 font-semibold'
          repeat={Infinity}
        />
        <br />
        <br />I believe that staying calm and focused is the key to success,
        especially in the ever-changing world of tech. I’m always eager to
        learn, grow, and take on new challenges in the coding world.
      </motion.p>
    </motion.section>
  );
};

export default About;
