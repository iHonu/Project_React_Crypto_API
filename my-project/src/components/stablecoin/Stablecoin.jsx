import useFetch from '../../hooks/useFetch';
import CoinStable from './CoinStable';

const Stablecoin = () => {
  const { loading, data, error } = useFetch(
    'coins/markets?vs_currency=eur&category=stablecoins&order=market_cap_desc&per_page=10&page=1&sparkline=false',
  );

  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>{error.message}</p>;
  }

  return (
    <section className="flex flex-col md:flex-row">
      <div className="w-2/5">
        <h2 className="text-2xl md:text-3xl text-primary  opacity-80 font-semibold mb-4">
          Stablecoins
        </h2>
        <p className="text-gray-600 font-light">
          Learn about stablecoins, the digital assets aiming to maintain a
          steady value by pegging to reserves like the dollar, gold, or other
          assets. These innovative tokens represent a fusion of traditional
          finance with modern blockchain technology, offering users a reliable
          medium of exchange in the often turbulent world of cryptocurrencies.
        </p>
      </div>
      <div className="grid grid-cols-5 justify-self-center">
        {data.map((coin) => (
          <CoinStable key={coin.id} coin={coin} />
        ))}
      </div>
    </section>
  );
};

export default Stablecoin;
// w-full md:w-2/5 mb-6 md:mb-0 md:mr-8
