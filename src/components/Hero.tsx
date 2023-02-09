import { useEffect, useState } from 'react';
import axios from 'axios';
import requests from '../data';
import { AiOutlinePlus } from 'react-icons/ai';
import { BsFillPlayFill } from 'react-icons/bs';

const Hero = () => {
  const [movies, setMovies] = useState<any[]>([]);
  const movie = movies[Math.floor(Math.random() * movies?.length)];

  useEffect(() => {
    axios.get(requests.requestPopular).then((res) => {
      setMovies(res.data.results);
    });
  }, []);

  function truncateStr(str: string, len: number) {
    if (str?.length <= len) return str;
    else return str?.slice(0, len) + '...';
  }

  return (
    <div className='w-full h-full relative'>
      {/*  background overlay */}
      <div className='absolute w-full h-screen bg-gradient-to-r from-black'></div>
      <img
        src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
        alt={movie?.title}
        className='w-full h-screen object-cover'
      />
      <div className='absolute top-32 p-8 w-full'>
        <h1 className='text-white text-4xl md:text-5xl font-bold uppercase tracking-wide my-4'>
          {movie?.title}
        </h1>
        <span className='text-gray-600 text-sm'>Released {movie?.release_date}</span>
        <div className='flex my-2 cursor-pointer'>
          <button className='px-6 py-3 text-white bg-emerald-900'>
            <BsFillPlayFill size={30} />
          </button>
          <button className='px-6 py-3 text-white bg-emerald-500'>
            <AiOutlinePlus size={30} />
          </button>
        </div>
        <p className='text-gray-300 text-lg my-4 max-w-md '>
          {truncateStr(movie?.overview, 180)}
        </p>
      </div>
    </div>
  );
};

export default Hero;
