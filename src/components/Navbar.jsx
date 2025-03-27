import { useState, useEffect, useRef } from 'react';
import { FaGithub, FaLinkedin, FaBars, FaTimes } from 'react-icons/fa';
import { Link as ScrollLink } from 'react-scroll';

const links = [
  { id: 'about', name: 'About', to: 'about' },
  { id: 'skills', name: 'Skills', to: 'skills' },
  { id: 'projects', name: 'Projects', to: 'projects' },
  { id: 'contact', name: 'Contact', to: 'contact' },
];

const socials = [
  { id: 'github', icon: <FaGithub />, path: '#' },
  { id: 'linkedin', icon: <FaLinkedin />, path: '#' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      window.addEventListener('resize', handleResize);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('resize', handleResize);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('resize', handleResize);
    };
  }, [isOpen]);

  return (
    <nav className='fixed top-0 left-0 w-full flex justify-between items-center py-4 px-6 z-50 shadow-md bg-transparent'>
      {/* Logo (HugoFlorentino) */}
      <ScrollLink
        to='hero'
        smooth={true}
        className='text-2xl underline font-bold bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text animate-textGlow hover:cursor-pointer'
      >
        HugoFlorentino
      </ScrollLink>

      {/* Socials */}
      <ul className='ml-28 flex flex-row justify-between gap-4'>
        {socials.map(({ id, icon, path }) => (
          <li key={id}>
            <button className='transition duration-300 active:scale-95'>
              <a
                href={path}
                className='text-2xl text-blue-400 hover:text-blue-600 transition duration-300'
              >
                {icon}
              </a>
            </button>
          </li>
        ))}
      </ul>

      {/* Links Full Screen */}
      <ul className='hidden md:flex flex-row gap-2'>
        {links.map(({ id, name, to }) => (
          <li key={id}>
            <button className='transition duration-300 active:scale-95'>
              <ScrollLink
                to={to}
                smooth={true}
                className='text-lg font-medium text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 border border-transparent rounded-md hover:border-blue-600 p-2 transition duration-300'
              >
                {name}
              </ScrollLink>
            </button>
          </li>
        ))}
      </ul>

      {/* Button Menu */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className='md:hidden text-2xl active:scale-95'
      >
        {isOpen ? (
          <FaTimes className='text-blue-400 mr-8' />
        ) : (
          <FaBars className='text-blue-400 mr-8' />
        )}
      </button>

      {/* Drop Down Menu */}
      <div
        ref={dropdownRef}
        className={`absolute top-full right-5 bg-gradient-to-br from-black via-[#030a1a] to-black p-5 rounded-lg border border-transparent transition-all duration-300 w-[200px] md:w-auto z-50 ${
          isOpen
            ? 'opacity-100 scale-100'
            : 'opacity-0 scale-95 pointer-events-none'
        }`}
      >
        <ul className='flex flex-col gap-4 justify-center items-center'>
          {links.map(({ id, name, to }) => (
            <li key={id}>
              <button className='transition duration-300 active:scale-95'>
                <ScrollLink
                  to={to}
                  smooth={true}
                  onClick={() => setIsOpen(false)}
                  className='block text-lg font-medium text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 border rounded-md border-transparent hover:border-blue-600 p-2 text-center'
                >
                  {name}
                </ScrollLink>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
