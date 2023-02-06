import { useState } from 'react';
import { CgMenuRight } from 'react-icons/cg';
import { AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  function handleNav() {
    setNav(!nav);
  }
  return (
    <>
      <div className='flex items-center justify-between py-6 px-8'>
        <div className='z-10'>
          <h1 className='text-3xl md:text-4xl text-emerald-400 uppercase font-bold'>
            Cinemania
          </h1>
        </div>
        {/* list */}
        <ul className='hidden md:flex text-white gap-6 text cursor-pointer uppercase'>
          <Link to='/' className='hover:text-emerald-400 focus:text-emerald-400'>
            Home
          </Link>
          <Link to='/tvshows' className='hover:text-emerald-400 focus:text-emerald-400'>
            Tv Shows
          </Link>
          <Link to='/movies' className='hover:text-emerald-400 focus:text-emerald-400'>
            Movies
          </Link>
          <Link to='/upcoming' className='hover:text-emerald-400 focus:text-emerald-400'>
            Upcoming
          </Link>
        </ul>
        {/* buttons */}
        <div className='md:flex hidden'>
          <button className='px-5 py-1.5 bg-emerald-400 text-white mx-1 rounded-xl '>
            Login
          </button>
          <button className='px-5 py-1.5 bg-white text-emerald-500 mx-1 rounded-xl '>
            Register
          </button>
        </div>

        {/* open/close menu */}
        <div onClick={handleNav} className='md:hidden block z-10'>
          {nav ? (
            <AiOutlineClose className='text-black' size={25} />
          ) : (
            <CgMenuRight className='text-white' size={25} />
          )}
        </div>
        {/* mobile menu */}
        <div
          className={
            nav
              ? 'md:hidden fixed flex flex-col w-full h-full left-0 rounded-b-3xl top-0 pt-20 px-6 bg-slate-100/90 uppercase ease-in-out duration-500'
              : 'fixed top-[-100%]'
          }
        >
          <ul className='cursor-pointer'>
            <Link
              to='/'
              className='border-b-2 border-gray-400 p-2 font-semibold hover:text-emerald-400'
            >
              Home
            </Link>
            <Link
              to='/tvshows'
              className='border-b-2 border-gray-400 p-2 font-semibold hover:text-emerald-400'
            >
              Tv Shows
            </Link>
            <Link
              to='/movies'
              className='border-b-2 border-gray-400 p-2 font-semibold hover:text-emerald-400'
            >
              Movies
            </Link>
            <Link
              to='/upcoming'
              className='border-b-2 border-gray-400 p-2 font-semibold hover:text-emerald-400'
            >
              Upcoming
            </Link>
          </ul>
          {/* mobile buttons */}
          <div className='flex flex-col py-4'>
            <button className='px-5 py-2 w-full bg-emerald-500 text-white mx-1 rounded-xl my-2'>
              Login
            </button>
            <button className='px-5 py-2 w-full bg-white text-emerald-400 mx-1 rounded-xl my-1'>
              Register
            </button>
          </div>
        </div>
      </div>
      <hr className=' border-gray-200 ' />
    </>
  );
};
export default Navbar;
