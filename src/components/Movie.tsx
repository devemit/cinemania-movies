import { useState } from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';

const Movie = ({ item }: { item: any }) => {
  const [like, setLike] = useState(false);
  return (
    <div className='flex-none w-2/3 md:w-1/3 rounded-lg inline-block cursor-pointer relative px-1'>
      <img
        className='w-full h-auto object-cover'
        src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`}
        alt={item?.title}
      />
      <div className='absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white'>
        <p className='white-space-normal text-md md:text-lg tracking-wider font-bold flex justify-center items-center h-full text-center'>
          {item?.title}
        </p>
        <p>
          {like ? (
            <FaHeart className='absolute top-4 left-4 text-gray-300 hover:text-red-500 ' />
          ) : (
            <FaRegHeart className='absolute top-4 left-4 text-gray-300 hover:text-red-500' />
          )}
        </p>
      </div>
    </div>
  );
};

export default Movie;
