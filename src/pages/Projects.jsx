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
import { useInView } from 'react-intersection-observer';
import { FloatingIcons } from '../components';
import { RiTailwindCssFill, RiJavascriptFill } from 'react-icons/ri';

const projects = [
  {
    title: 'Blogify-press',
    description:
      'FullStack blog using react-router-dom, redux, jwt, rate limiter, xss, helmet, cors, for more info please visit my github.',
    techStack: [
      FaReact,
      FaNodeJs,
      RiJavascriptFill,
      RiTailwindCssFill,
      FaHtml5,
    ],
    link: 'https://blogify-press.netlify.app/',
    image: '/images/blogify-press.png',
  },
  {
    title: 'Confy Shop',
    description:
      'A E-commerce app with React-Router-Dom, Redux-Toolkit, Tailwind CSS.',
    techStack: [FaReact, RiTailwindCssFill, FaHtml5, RiJavascriptFill],
    link: 'https://confy-shop.netlify.app/',
    image: '/images/confy-shop.png',
  },
  {
    title: 'BackRoads',
    description: 'A landing page with React and Tailwind.',
    techStack: [FaReact, RiTailwindCssFill, FaHtml5, RiJavascriptFill],
    link: 'https://backroad-web-app.netlify.app/',
    image: '/images/backroads.png',
  },
  {
    title: 'Portfolio Template',
    description: 'A mobile app built with React Native.',
    techStack: [FaReact, RiTailwindCssFill, RiJavascriptFill],
    link: 'https://portfolio-template-v1.netlify.app/',
    image: '/images/portfolio-template-v1.png',
  },
  {
    title: 'React Todo-List',
    description:
      'Todo-List with multiple categories options, create-edit-delete using localstorage.',
    techStack: [FaReact, RiJavascriptFill, FaCss3Alt],
    link: 'https://react-v1-todo-list.netlify.app/',
    image: '/images/todo-list.png',
  },
  {
    title: 'React Tic-Tac-Toe',
    description: 'Tic-Tac-Toe game with React.',
    techStack: [FaReact, RiJavascriptFill, FaCss3Alt],
    link: 'https://react-v1-tic-tac-toe.netlify.app/',
    image: '/images/tic-tac-toe.png',
  },

  {
    title: 'React Guessing-Game',
    description: 'Guessing-game made in react to practice logic.',
    techStack: [FaReact, RiJavascriptFill, FaCss3Alt, FaHtml5],
    link: 'https://react-guessing-game-v1.netlify.app/',
    image: '/images/guessing-game.png',
  },
];

const ProjectCard = ({ title, description, techStack, link, image }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className='relative bg-gray-800 rounded-lg shadow-lg text-center w-full max-w-[380px] h-[160px] flex flex-col justify-between cursor-pointer transition-transform duration-200 mx-auto'
      whileHover={{ scale: 1.05, rotate: 5 }}
      transition={{ duration: 0.2 }}
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
      <div className='relative z-10 flex flex-col items-center justify-center h-full p-6 '>
        <h3 className='text-xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 animate-textGlow'>
          {title}
        </h3>
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

  const { ref: titleRef, inView: titleInView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const { ref: cardRef, inView: cardInView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

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
        className='text-5xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 animate-textGlow'
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
          .slice(0, showAll ? projects.length : 3)
          .map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{
                opacity: cardInView ? 1 : 0,
                y: cardInView ? 0 : 50,
              }}
              transition={{ duration: 0.4 }}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
      </div>

      {/* Show More / Show Less Button */}
      {projects.length > 3 && (
        <motion.button
          ref={buttonRef}
          className='mt-8 px-6 py-3 text-lg font-semibold bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-lg shadow-md relative overflow-hidden'
          initial={{ opacity: 0, y: 50, scale: 0.8 }}
          animate={{
            opacity: buttonInView ? 1 : 0,
            y: buttonInView ? 0 : 50,
            scale: buttonInView ? 1 : 0.8,
          }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          whileHover={{
            scale: 1.05,
            boxShadow: '0px 0px 20px rgba(59, 130, 246, 0.7)',
          }}
          whileTap={{ scale: 0.98 }}
          onClick={() => setShowAll(!showAll)}
        >
          {showAll ? 'Show Less' : 'Show More'}
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
      )}
    </motion.section>
  );
};

export default Projects;
