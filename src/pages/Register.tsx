import { Link } from 'react-router-dom';
const Register = () => {
  return (
    <div className='w-full h-screen'>
      <img
        className='hidden sm:block absolute w-full h-full object-cover'
        src='https://images.unsplash.com/photo-1526007413281-c202e21eedf3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
        alt='/'
      />
      <div className='bg-black/60 fixed top-0 left-0 w-full h-screen'></div>
      <div className='fixed w-full px-4 py-24'>
        <div className='max-w-[450px] h-[600px] mx-auto bg-black/75 text-white'>
          <div className='max-w-[320px] mx-auto py-16'>
            <h1 className='text-3xl font-bold'>Register</h1>
            <form className='w-full flex flex-col py-4'>
              <input
                className='p-3 my-2 bg-gray-700 rounded'
                type='email'
                placeholder='Email'
                autoComplete='email'
              />
              <input
                className='p-3 my-2 bg-gray-700 rounded'
                type='password'
                placeholder='Password'
                autoComplete='current-password'
              />
              <button className='bg-emerald-600 py-3 my-6 rounded font-bold'>
                Sign In
              </button>
              <div className='flex justify-between items-center text-sm text-gray-600'>
                <p>
                  <input className='mr-2' type='checkbox' />
                  Remember me
                </p>
                <p>Need Help?</p>
              </div>
              <p className='py-8'>
                <div className='flex justify-between items-center'>
                  <span className='text-gray-600'>Already have account?</span>
                  <Link to='/login'>Login</Link>
                </div>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
