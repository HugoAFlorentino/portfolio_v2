import { Outlet } from 'react-router-dom';
import Frame from '../components/Frame';
import { Navbar } from './index';

const HomeLayout = () => {
  return (
    <div className='relative min-h-screen flex justify-center overflow-hidden bg-gradient-to-br from-black via-[#030a1a] to-black bg-[length:400%_400%] animate-gradientBlur bg-fixed z-0 transform translate3d(0,0,0)'>
      {/* Full-page background with gradient and blur animation */}
      <div className='absolute inset-0'></div>
      <Frame /> {/* Frame stays on top */}
      <div className='relative z-40'>
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
};

export default HomeLayout;
