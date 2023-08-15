import useFetch from '../../hooks/useFetch';
import CoinTrending from './CoinTrending';

const Trending = () => {
  const { loading, data, error } = useFetch('search/trending');

  if (loading) {
    return <span className="loading loading-dots loading-lg"></span>;
  }
  if (error) {
    return <p>{error.message}</p>;
  }
  return (
    <section className="my-8 md:my-16">
      <div className="mb-2 md:mb-8">
        <h2 className="text-2xl md:text-3xl text-secondary  opacity-80 font-semibold mb-1">
          Trending Coins
        </h2>
        <p className=" font-light">
          The coins that everyone is talking about, all in one place
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2  xl:grid-cols-4 gap-4">
        {data.coins.map((coin) => (
          <CoinTrending key={coin.item.coin_id} coin={coin.item} />
        ))}
      </div>
    </section>
  );
};

export default Trending;
