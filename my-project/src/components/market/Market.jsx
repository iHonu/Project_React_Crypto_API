import useFetch from '../../hooks/useFetch';
import CoinMarket from './CoinMarket';

const Market = () => {
  const { loading, data, error } = useFetch(
    'coins/markets?vs_currency=eur&order=market_cap_desc&per_page=15&page=1&sparkline=true&locale=en',
  );

  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>{error.message}</p>;
  }

  return (
    <section className="mt-24 px-16">
      <table className="table">
        <thead>
          <tr>
            <th className=""></th>
            <th className="">Coin</th>
            <th className="">Price</th>
            <th className="">% 24h</th>
            <th className="">€ 24h</th>
            <th className="">Market Cap</th>
            <th>Graph</th>
          </tr>
        </thead>
        <tbody>
          {data.map((coin, index) => (
            <CoinMarket key={coin.id} coin={coin} index={index} />
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default Market;
