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
      <div className='flex items-center justify-between py-6 px-8 absolute z-10 w-full'>
        <div className='z-10'>
          <Link
            to='/'
            className='text-3xl md:text-4xl text-emerald-400 uppercase font-bold'
          >
            Cinemania
          </Link>
        </div>

        {/* buttons */}
        <div className='md:flex hidden'>
          <Link
            to='/login'
            className='px-5 py-1.5 bg-emerald-500 hover:bg-emerald-400 text-white mx-1 rounded-xl '
          >
            Login
          </Link>
          <Link
            to='/register'
            className='px-5 py-1.5 bg-slate-100 hover:bg-white text-emerald-500 mx-1 rounded-xl '
          >
            Register
          </Link>
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
              ? 'md:hidden fixed flex flex-col w-full h-[250px] left-0 rounded-b-3xl top-0 pt-20 px-6 bg-slate-200 uppercase ease-in-out duration-500'
              : 'fixed top-[-100%]'
          }
        >
          <ul onClick={() => setNav(false)} className='cursor-pointer flex flex-col'>
            {/* mobile buttons */}
            <div className='flex flex-col py-4'>
              <Link
                to='/login'
                className='px-5 py-2 w-full bg-emerald-900 hover:bg-emerald-700 text-white mx-1 rounded-xl my-2'
              >
                Login
              </Link>
              <Link
                to='/register'
                className='px-5 py-2 w-full bg-white hover:bg-slate-100 text-emerald-600 mx-1 rounded-xl my-1'
              >
                Register
              </Link>
            </div>
          </ul>
        </div>
      </div>
    </>
  );
};
export default Navbar;
