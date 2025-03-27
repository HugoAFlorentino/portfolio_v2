import { motion } from 'framer-motion';
import { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { FaReact, FaCode, FaLaptopCode } from 'react-icons/fa';
import { FloatingIcons } from '../components';

const Contact = () => {
  const [text] = useState("Let's create amazing things together!".split(''));

  // Trigger animation when text enters viewport
  const { ref: textRef, inView: textInView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const { ref: formRef, inView: formInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <motion.section
      id='contact'
      className='min-h-screen text-white flex flex-col items-center justify-center relative py-16 px-6'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5, ease: 'easeOut' }}
    >
      {/* Floating Icons */}
      <FloatingIcons
        iconsData={[
          {
            Icon: FaLaptopCode,
            startX: '550vw',
            startY: '500vh',
            movementX: 30,
            movementY: -50,
            duration: 5,
            delay: 0,
          },
          {
            Icon: FaReact,
            startX: '200vw',
            startY: '200vh',
            movementX: -40,
            movementY: 40,
            duration: 6,
            delay: 1,
          },
          {
            Icon: FaCode,
            startX: '700vw',
            startY: '800vh',
            movementX: 50,
            movementY: -30,
            duration: 5,
            delay: 0.5,
          },
        ]}
      />

      {/* Animated Typing Text with Scroll Trigger */}
      <motion.h2
        ref={textRef}
        className='text-4xl md:text-5xl font-bold text-center mb-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 animate-textGlow'
      >
        {text.map((letter, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, y: -10 }}
            animate={
              textInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 } // Reset animation if out of view
            }
            transition={{
              duration: 0.05,
              delay: textInView ? index * 0.05 : 0, // Delay only when in view
              ease: 'easeOut',
            }}
            className='inline-block'
          >
            {letter === ' ' ? '\u00A0' : letter}
          </motion.span>
        ))}
      </motion.h2>

      {/* Contact Form */}
      <motion.div
        ref={formRef}
        className='flex flex-col items-center justify-center w-full md:max-w-[500px]'
        initial={{ opacity: 0, x: 100 }}
        animate={{
          opacity: formInView ? 1 : 0,
          x: formInView ? 0 : 100,
        }}
        transition={{ duration: 1, ease: 'easeOut', delay: 0.5 }}
      >
        <form className='bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md'>
          <div className='mb-4'>
            <label
              htmlFor='name'
              className='text-lg font-semibold text-blue-400'
            >
              Name
            </label>
            <input
              type='text'
              id='name'
              className='w-full p-3 mt-2 bg-gray-700 text-white rounded-lg focus:ring-2 focus:ring-blue-500'
              required
            />
          </div>

          <div className='mb-4'>
            <label
              htmlFor='email'
              className='text-lg font-semibold text-blue-400'
            >
              Email
            </label>
            <input
              type='email'
              id='email'
              className='w-full p-3 mt-2 bg-gray-700 text-white rounded-lg focus:ring-2 focus:ring-blue-500'
              required
            />
          </div>

          <div className='mb-4'>
            <label
              htmlFor='message'
              className='text-lg font-semibold text-blue-400'
            >
              Message
            </label>
            <textarea
              id='message'
              className='w-full p-3 mt-2 bg-gray-700 text-white rounded-lg focus:ring-2 focus:ring-blue-500'
              rows='5'
              required
            />
          </div>

          <button
            type='submit'
            className='w-full bg-blue-500 py-3 text-white rounded-lg font-semibold hover:bg-blue-600 transition duration-300'
          >
            Send Message
          </button>
        </form>
      </motion.div>
    </motion.section>
  );
};

export default Contact;
