"use client";
import { motion, useAnimation } from 'framer-motion';
import Link from 'next/link';
import { RiHomeFill } from "react-icons/ri";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { FaPhone, FaList } from "react-icons/fa6";
import { useState, useEffect } from 'react';
import logo from '../../assets/CCClogo.svg';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

function Sidebar() {
  const [isHovered, setIsHovered] = useState(false);
  const controls = useAnimation();
  const controls2 = useAnimation();
  const controls3 = useAnimation();

  const handleMouseEnter = () => {
    setIsHovered(true);
    controls.start({ opacity: 1, x: 50 });
    controls2.start({ opacity: 1, x: 20 });
    controls3.start({ opacity: 1, x: 0 });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    controls.start({ opacity: 0, x: -20 });
    controls2.start({ opacity: 1, x: -162 });
    controls3.start({ opacity: 0, x: -100 });
  };
  const router = useRouter();
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768); // Adjusted threshold for small screens
    };

    handleResize(); // Check initial screen size
    window.addEventListener('resize', handleResize); // Listen for window resize events
    return () => {
      window.removeEventListener('resize', handleResize); // Cleanup event listener
    };
  }, []);

  if (isSmallScreen) {
    return (
      <div className="fixed bottom-0 w-[100vw] items-center h-[13vh] bg-[#080826] text-white flex justify-around">
        <Link href="/">
          <div className={` flex flex-col items-center justify-center w-full  p-2 ${router.pathname === '/' ? 'bg-gray-900' : ''}`}>
            <RiHomeFill size={35}/>
            
          </div>
        </Link>
        <Link href="#second">
          <div className={`flex flex-col items-center justify-center w-full p-2 ${router.pathname === '/second' ? 'bg-gray-900' : ''}`}>
            <AiOutlineInfoCircle size={35} />
            
          </div>
        </Link>
        <Link href="#third">
          <div className={`flex flex-col items-center justify-center w-full p-2 ${router.pathname === '/third' ? 'bg-gray-900' : ''}`}>
            <FaPhone size={25} />
            
          </div>
        </Link>
        <Link href="#fourth">
          <div className={`flex flex-col items-center justify-center w-full p-2 ${router.pathname === '/fourth' ? 'bg-gray-900' : ''}`}>
            <FaList size={30} />
            
          </div>
        </Link>
      </div>
    );
  }else{

 

  return (
    <div
      className={`fixed  h-full bg-[#18184b] overflow-x-hidden text-white transition-all duration-700 ease-in-out w-20 hover:w-64 ${isHovered ? 'text-right' : 'text-center'}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className='flex flex-col items-start h-full space-y-4 py-10'>
        <div className='flex items-center cursor-pointer group '>
          <Link href="/">
            <div className={`flex items-center transition-all duration-500 h-[10vh] text-[#080826] px-4 w-64 bg-[#bae5f4] `}>
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={controls3}
                transition={{ duration: 0.5 }}
                className={`ml-2 whitespace-nowrap`}
              >
                Cloud Computing Cell
              </motion.div>
              <motion.div
                initial={{ opacity: 1, x: -162 }}
                animate={controls2}
                transition={{ duration: 0.5 }}
                className={`flex ml-[0.4vw] m-auto w-8 h-8`}
              >
                <Image src={logo} alt='logo' width={40} height={40} />
              </motion.div>
            </div>
          </Link>
        </div>
        <Link href="#first">
          <div className='flex transition-all duration-500 h-[10vh] hover:text-[#080826] w-64 hover:bg-[#bae5f4] items-center cursor-pointer group px-4 Home '>
            <div className={`flex items-center ml-[0.4vw] text-5xl justify-center w-8 h-8 `}>
              <RiHomeFill />
            </div>
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={controls}
              transition={{ duration: 0.5 }}
              className='ml-2 whitespace-nowrap'
            >
              Home
            </motion.span>
          </div>
        </Link>
        <Link href="#second">
          <div className='flex transition-all duration-500 h-[10vh] hover:text-[#080826] w-64 hover:bg-[#bae5f4] items-center cursor-pointer group px-4'>
            <div className={`flex items-center ml-[0.4vw] text-6xl justify-center w-8 h-8 `}>
              <AiOutlineInfoCircle />
            </div>
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={controls}
              transition={{ duration: 0.5 }}
              className='ml-2 whitespace-nowrap'
            >
              About
            </motion.span>
          </div>
        </Link>
        <Link href="#third">
          <div className='flex transition-all duration-500 h-[10vh] hover:text-[#080826] w-64 hover:bg-[#bae5f4] items-center cursor-pointer group px-4'>
            <div className={`flex items-center justify-center ml-[0.4vw] text-3xl w-8 h-8 `}>
              <FaPhone />
            </div>
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={controls}
              transition={{ duration: 0.5 }}
              className='ml-2 whitespace-nowrap'
            >
              Contact
            </motion.span>
          </div>
        </Link>
        <Link href="#fourth">
          <div className='flex transition-all duration-500 h-[10vh] hover:text-[#080826] w-64 hover:bg-[#bae5f4] items-center cursor-pointer group px-4'>
            <div className={`flex items-center ml-[0.4vw] text-3xl justify-center w-8 h-8 `}>
              <FaList />
            </div>
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={controls}
              transition={{ duration: 0.5 }}
              className='ml-2 whitespace-nowrap'
            >
              Our Domain
            </motion.span>
          </div>
        </Link>
      </div>
    </div>
    );
  }
}

export default Sidebar;
