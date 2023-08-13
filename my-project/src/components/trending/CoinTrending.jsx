import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { currencyFormatBTC } from '../../utils';
const CoinTrending = ({ coin }) => {
  return (
    <Link to={`/coin/${coin.id}`}>
      <div className="flex justify-between items-center p-4 border-gray-100 rounded shadow-lg">
        <div className="mask mask-hexagon w-12">
          <img src={coin.small} alt={coin.name} className="w-full" />
        </div>
        <div className="flex flex-col justify-between w-1/3 text-left">
          <p className="">{coin.name}</p>
          <p className="text-xs opacity-50">{coin.symbol}</p>{' '}
        </div>
        <div className="flex flex-col-reverse justify-between w-1/3 text-end">
          <p className="text-info opacity-75 text-sm">
            {currencyFormatBTC(coin.price_btc)}
          </p>
          <p className="text-xs">{coin.market_cap_rank}</p>
        </div>
      </div>
    </Link>
  );
};

CoinTrending.propTypes = {
  coin: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    small: PropTypes.string,
    name: PropTypes.string,
    symbol: PropTypes.string,
    price_btc: PropTypes.number,
    market_cap_rank: PropTypes.number,
  }).isRequired,
};

export default CoinTrending;
