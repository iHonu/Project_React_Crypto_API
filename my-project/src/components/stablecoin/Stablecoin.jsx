import useFetch from '../../hooks/useFetch';
import CoinStable from './CoinStable';

const Stablecoin = () => {
  const { loading, data, error } = useFetch(
    'coins/markets?vs_currency=eur&category=stablecoins&order=market_cap_desc&per_page=10&page=1&sparkline=false',
  );

  if (loading) {
    return <span className="loading loading-dots loading-lg"></span>;
  }
  if (error) {
    return <p>{error.message}</p>;
  }

  return (
    <section className="">
      <h2 className="text-2xl md:text-3xl text-primary opacity-90 font-semibold mb-4 ">
        Stablecoins
      </h2>
      <div className="">
        <p className="text-gray-600 font-light w-auto lg:3/4 xl:w-2/3 ">
          Learn about stablecoins, the digital assets aiming to maintain a
          steady value by pegging to reserves like the dollar, gold, or other
          assets. These innovative tokens represent a fusion of traditional
          finance with modern blockchain technology, offering users a reliable
          medium of exchange in the often turbulent world of cryptocurrencies.
        </p>
      </div>
      <div className="grid grid-cols-3 md:grid-cols-5 my-6 gap-y-6">
        {data.map((coin) => (
          <CoinStable key={coin.id} coin={coin} />
        ))}
      </div>
    </section>
  );
};

export default Stablecoin;
