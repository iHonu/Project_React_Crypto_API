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
    <section className="container my-8 md:my-16">
      <table className="table">
        <thead>
          <tr>
            <th></th>
            <th>Coin</th>
            <th>Price</th>
            <th>% 24h</th>
            <th className="hidden md:table-cell">€ 24h</th>
            <th className="hidden md:table-cell">Market Cap</th>
            <th className="hidden lg:table-cell">Graph</th>
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
