import { motion } from 'framer-motion';
import { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { FaReact, FaCode, FaLaptopCode } from 'react-icons/fa';
import { FloatingIcons } from '../components'; // Import the FloatingIcons component

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const { ref: titleRef, inView: titleInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const { ref: imageRef, inView: imageInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const { ref: formRef, inView: formInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const iconsData = [
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
  ];

  return (
    <motion.section
      id='contact'
      className='min-h-screen text-white flex flex-col items-center justify-center relative py-16 px-6'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5, ease: 'easeOut' }}
    >
      {/* Floating Icons */}
      <FloatingIcons iconsData={iconsData} />

      {/* Title Animation */}
      <motion.h2
        ref={titleRef}
        className='text-5xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 animate-textGlow'
        initial={{ opacity: 0, y: -50 }}
        animate={{
          opacity: titleInView ? 1 : 0,
          y: titleInView ? 0 : -50,
        }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        Contact Me
      </motion.h2>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-12 max-w-screen-xl w-full mx-auto'>
        {/* Left column with animated image */}
        <motion.div
          ref={imageRef}
          className='flex justify-center items-center w-full hidden md:block' // Hidden on small screens and only visible on md and larger
          initial={{ opacity: 0, x: -100 }}
          animate={{
            opacity: imageInView ? 1 : 0,
            x: imageInView ? 0 : -100,
          }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.5 }}
        >
          <img
            src='/src/assets/coding.png'
            alt='Coding workspace'
            className='w-full h-full object-cover rounded-lg shadow-lg' // Ensure the image fills the height of its parent
          />
        </motion.div>

        {/* Right column with animated contact form */}
        <motion.div
          ref={formRef}
          className='flex flex-col items-center justify-center w-full md:max-w-[500px] h-full' // Add h-full here to match the height of the image
          initial={{ opacity: 0, x: 100 }}
          animate={{
            opacity: formInView ? 1 : 0,
            x: formInView ? 0 : 100,
          }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.5 }}
        >
          <form
            onSubmit={handleSubmit}
            className='bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md h-full' // Ensure form takes full height too
          >
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
                name='name'
                value={formData.name}
                onChange={handleChange}
                className='w-full p-3 mt-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
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
                name='email'
                value={formData.email}
                onChange={handleChange}
                className='w-full p-3 mt-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
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
                name='message'
                value={formData.message}
                onChange={handleChange}
                className='w-full p-3 mt-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
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
      </div>
    </motion.section>
  );
};

export default Contact;
