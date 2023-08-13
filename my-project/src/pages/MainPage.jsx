import Hero from '../components/hero/Hero';
import Market from '../components/market/Market';
import Stablecoin from '../components/stablecoin/Stablecoin';
import Trending from '../components/trending/Trending';

const MainPage = () => {
  return (
    <div className="container mx-auto px-4 lg:px-12">
      <Hero />
      <Market />
      <Trending />
      <Stablecoin />
    </div>
  );
};

export default MainPage;
