import { useState, useEffect } from 'react';
import axios from 'axios';
import Movie from './Movie';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

const Row = ({ title, getUrl }: { title: string; getUrl: any }) => {
  const [trendingMovies, setTrendingMovies] = useState<any[]>([]);
  useEffect(() => {
    axios.get(getUrl).then((res) => {
      setTrendingMovies(res.data.results);
      console.log(trendingMovies);
    });
  }, [getUrl]);

  return (
    <>
      <h1 className='text-xl text-white text-center uppercase p-4'>{title}</h1>
      <div className='relative flex items-center group'>
        <div className='w-full h-full whitespace-nowrap scroll-smooth relative scrollbar-thumb-gray-500 scrollbar-track-gray-900 scrollbar-thin'>
          {trendingMovies.map((item, id) => (
            <Movie key={id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Row;
