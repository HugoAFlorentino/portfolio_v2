import { motion } from 'framer-motion';
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaCode,
  FaLaptopCode,
} from 'react-icons/fa';
import { SiExpress } from 'react-icons/si';
import { FloatingIcons } from '../components';
import { useInView } from 'react-intersection-observer';

const SkillCard = ({ name, icon, progress }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <motion.div
      className='bg-gray-800 p-6 rounded-lg shadow-lg text-center max-w-[380px] w-full mx-auto'
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={{
        opacity: inView ? 1 : 0,
        y: inView ? 0 : 50,
        scale: inView ? 1 : 0.95,
      }}
      transition={{
        duration: 1,
        ease: 'easeOut',
        delay: 0.2,
        type: 'spring',
        stiffness: 400,
        damping: 15,
      }}
      whileHover={{
        scale: 1.05,
        transition: { type: 'spring', stiffness: 400, damping: 15 },
      }}
    >
      <motion.div
        className='mb-4 flex justify-center sm:justify-start'
        initial={{ scale: 0, rotate: -20, opacity: 0 }}
        animate={{
          scale: inView ? 1 : 0,
          rotate: inView ? 0 : -20,
          opacity: inView ? 1 : 0,
        }}
        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.4 }}
      >
        <div className='text-4xl text-blue-500'>{icon}</div>
      </motion.div>

      <h3 className='text-xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600'>
        {name}
      </h3>

      <motion.div
        className='mt-4 h-2 bg-gray-700 rounded-full overflow-hidden'
        initial={{ width: 0 }}
        animate={{ width: inView ? `${progress}%` : 0 }}
        transition={{ duration: 1.5, delay: 0.3, ease: 'easeOut' }}
      >
        <div className='h-full bg-blue-500'></div>
      </motion.div>
    </motion.div>
  );
};

const Skills = () => {
  const skills = [
    { name: 'HTML', icon: <FaHtml5 />, progress: 85 },
    { name: 'CSS', icon: <FaCss3Alt />, progress: 70 },
    { name: 'JavaScript', icon: <FaJs />, progress: 70 },
    { name: 'React', icon: <FaReact />, progress: 75 },
    { name: 'Node.js', icon: <FaNodeJs />, progress: 65 },
    { name: 'MongoDB', icon: <FaDatabase />, progress: 60 },
    { name: 'Express', icon: <SiExpress />, progress: 70 },
  ];

  const iconsData = [
    {
      Icon: FaReact,
      startX: '600vw',
      startY: '400vh',
      movementX: 40,
      movementY: 30,
      duration: 5,
      delay: 0,
    },
    {
      Icon: FaCode,
      startX: '200vw',
      startY: '150vh',
      movementX: -60,
      movementY: 50,
      duration: 5,
      delay: 0.5,
    },
    {
      Icon: FaLaptopCode,
      startX: '900vw',
      startY: '800vh',
      movementX: 80,
      movementY: -70,
      duration: 6,
      delay: 1,
    },
  ];

  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <motion.section
      id='skills'
      className='py-16 min-h-screen text-white relative flex flex-col items-center justify-center'
    >
      <FloatingIcons iconsData={iconsData} />
      <motion.h2
        ref={ref}
        className='text-5xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 animate-textGlow'
        initial={{ opacity: 0, scale: 0.5, y: 50 }}
        animate={{
          opacity: inView ? 1 : 0,
          scale: inView ? 1 : 0.5,
          y: inView ? 0 : 50,
        }}
        transition={{ duration: 1.5, delay: 0.5, ease: 'easeOut' }}
      >
        My Skills
      </motion.h2>
      <motion.div
        className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-screen-xl px-6 '
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        {skills.map((skill, index) => (
          <SkillCard
            key={index}
            name={skill.name}
            icon={skill.icon}
            progress={skill.progress}
          />
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Skills;
