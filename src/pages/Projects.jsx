import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaCode,
  FaLaptopCode,
} from 'react-icons/fa';
import { useInView } from 'react-intersection-observer'; // To trigger animations when in view
import { FloatingIcons } from '../components'; // Assuming the FloatingIcons component is in the components folder

const projects = [
  {
    title: 'Project One',
    description: 'A full-stack app with React and Node.js.',
    techStack: [FaReact, FaNodeJs],
    link: 'https://github.com/project1',
    image: '/images/project1.png',
  },
  {
    title: 'Project Two',
    description: 'A frontend app with HTML and CSS.',
    techStack: [FaHtml5, FaCss3Alt],
    link: 'https://github.com/project2',
    image: '/images/project2.png',
  },
  {
    title: 'Project Three',
    description: 'A mobile app built with React Native.',
    techStack: [FaReact],
    link: 'https://github.com/project3',
    image: '/images/project3.png',
  },
  {
    title: 'Project Four',
    description: 'A full-stack app with Express and MongoDB.',
    techStack: [FaNodeJs],
    link: 'https://github.com/project4',
    image: '/images/project4.png',
  },
  // Add more projects as needed
];

const ProjectCard = ({ title, description, techStack, link, image }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className='relative bg-gray-800 rounded-lg shadow-lg text-center w-full max-w-[380px] h-[160px] flex flex-col justify-between cursor-pointer transition-transform duration-200 mx-auto'
      whileHover={{ scale: 1.05, rotate: 5 }} // Slight rotation on hover
      transition={{ duration: 0.2 }} // Faster hover effect
      onClick={() => window.open(link, '_blank')}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background image on hover */}
      <motion.div
        className={`absolute inset-0 bg-cover bg-center transition-opacity duration-200 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ backgroundImage: `url(${image})` }}
      />
      {/* Dark overlay for better contrast on hover */}
      <div
        className={`absolute inset-0 transition-opacity duration-200 ${
          isHovered ? 'bg-black/70' : 'bg-black/20'
        }`}
      />
      {/* Content */}
      <div className='relative z-10 flex flex-col items-center justify-center h-full p-6'>
        <h3 className='text-xl font-bold'>{title}</h3>
        <p className='text-gray-400 mt-2'>{description}</p>
        <div className='flex justify-center gap-2 mt-4'>
          {techStack.map((Icon, index) => (
            <Icon key={index} className='text-blue-400 text-2xl' />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const [showAll, setShowAll] = useState(false);

  // For title animation on scroll
  const { ref: titleRef, inView: titleInView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  // For card animation on scroll
  const { ref: cardRef, inView: cardInView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  // For button animation on scroll
  const { ref: buttonRef, inView: buttonInView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  // Add the Floating Icons here
  const iconsData = [
    {
      Icon: FaReact,
      startX: '200vw',
      startY: '100vh',
      movementX: 40,
      movementY: 30,
      duration: 5,
      delay: 0,
    },
    {
      Icon: FaCode,
      startX: '600vw',
      startY: '350vh',
      movementX: -60,
      movementY: 50,
      duration: 6,
      delay: 0.5,
    },
    {
      Icon: FaLaptopCode,
      startX: '800vw',
      startY: '800vh',
      movementX: 80,
      movementY: -70,
      duration: 6,
      delay: 1,
    },
  ];

  return (
    <motion.section
      id='projects'
      className='py-16 min-h-screen flex flex-col items-center justify-center text-white relative'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Floating Icons */}
      <FloatingIcons iconsData={iconsData} />

      {/* Title */}
      <motion.h2
        ref={titleRef}
        className='text-5xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600'
        initial={{ opacity: 0, y: -50 }}
        animate={{
          opacity: titleInView ? 1 : 0,
          y: titleInView ? 0 : -50,
        }}
        transition={{ delay: 0.3, duration: 1 }}
      >
        My Projects
      </motion.h2>

      {/* Grid Layout */}
      <div
        ref={cardRef}
        className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-screen-xl px-6'
      >
        {projects
          .slice(0, showAll ? projects.length : 3) // Show 3 by default, or all when 'showAll' is true
          .map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{
                opacity: cardInView ? 1 : 0,
                y: cardInView ? 0 : 50,
              }}
              transition={{ duration: 0.4 }} // Adjusted duration for faster appearance
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
      </div>

      {/* Show More / Show Less Button */}
      {projects.length > 3 && (
        <motion.button
          ref={buttonRef}
          className='mt-8 px-6 py-3 text-lg font-semibold bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-lg shadow-md hover:shadow-blue-400 transition duration-300 hover:scale-105 focus:outline-none'
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: buttonInView ? 1 : 0,
            scale: buttonInView ? 1 : 0.8,
          }}
          transition={{ duration: 0.2 }} // Shorter initial animation
          whileHover={{ scale: 1.05, transition: { duration: 0.2 } }} // Faster hover effect
          whileTap={{ scale: 0.95 }}
          onClick={() => setShowAll(!showAll)}
        >
          {showAll ? 'Show Less' : 'Show More'}
        </motion.button>
      )}
    </motion.section>
  );
};

export default Projects;
