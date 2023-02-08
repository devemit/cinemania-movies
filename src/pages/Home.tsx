import Hero from '../components/Hero';
import Row from '../components/Row';
import requests from '../data';

const Home = () => {
  return (
    <>
      <Hero />
      <Row title='Trending Movies' getUrl={requests.requestTrending} />
      <Row title='Upcoming Movies' getUrl={requests.requestUpcoming} />
      <Row title='Top Rated Movies' getUrl={requests.requestTopRated} />
    </>
  );
};
export default Home;
