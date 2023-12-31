import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { currencyFormatBTC } from '../../utils';
import { motion } from 'framer-motion';

const CoinTrending = ({ coin }) => {
  return (
    <Link to={`/coin/${coin.id}`}>
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{
          scale: 0.9,
        }}
      >
        <div className="flex justify-between p-4 border-gray-100 rounded shadow-lg">
          <div className="mask mask-hexagon w-12">
            <img src={coin.small} alt={coin.name} className="w-full" />
          </div>
          <div className="flex flex-col justify-between w-2/4 text-left">
            <p className="">{coin.name}</p>
            <p className="text-xs opacity-50">{coin.symbol}</p>{' '}
          </div>
          <div className="flex flex-col-reverse content-between w-1/4 text-end">
            <p className="text-info opacity-75 text-sm">
              {currencyFormatBTC(coin.price_btc)}
            </p>
            <p className="text-xs">{coin.market_cap_rank}</p>
          </div>
        </div>
      </motion.div>
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
