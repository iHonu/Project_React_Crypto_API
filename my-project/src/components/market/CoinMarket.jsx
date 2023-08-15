import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  currencyFormat,
  currencyFormatNoCents,
  currencyFormatMicroCents,
} from '../../utils';
import CoinSparkline from './CoinSparkline';
import { motion } from 'framer-motion';

const item = {
  hidden: { y: 20, opacity: 0, scale: 1.3 },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
  },
};

const CoinMarket = ({ coin, index }) => {
  return (
    <motion.tr
      variants={item}
      className=" hover:bg-gray-100 dark:hover:bg-gray-700"
    >
      <th>{index + 1}</th>
      <td>
        <Link to={`/coin/${coin.id}`}>
          <div className=" flex align-middle gap-4">
            <img src={coin.image} alt={coin.name} className="w-8 h-8" />
            <div className="flex flex-col  justify-center">
              <span className="font-medium">{coin.name}</span>
              <span className=" font-light opacity-50">{coin.symbol}</span>
            </div>
          </div>
        </Link>
      </td>
      <td>{currencyFormat(coin.current_price)}</td>
      <td
        className={` ${
          coin.price_change_percentage_24h < 0 ? 'text-error' : 'text-success'
        }`}
      >
        {coin.price_change_percentage_24h.toFixed(2)}%
      </td>
      <td
        className={` hidden md:table-cell ${
          coin.price_change_24h < 0 ? 'text-error' : 'text-success'
        }`}
      >
        {currencyFormatMicroCents(coin.price_change_24h)}
      </td>
      <td className="hidden md:table-cell">
        {currencyFormatNoCents(coin.market_cap)}
      </td>
      <td className='className="hidden lg:table-cell"'>
        <Link to={`/coin/${coin.id}`}>
          <CoinSparkline price={coin.sparkline_in_7d.price} />
        </Link>
      </td>
    </motion.tr>
  );
};

CoinMarket.propTypes = {
  coin: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    symbol: PropTypes.string.isRequired,
    current_price: PropTypes.number.isRequired,
    price_change_24h: PropTypes.number.isRequired,
    price_change_percentage_24h: PropTypes.number.isRequired,
    market_cap: PropTypes.number.isRequired,
    sparkline_in_7d: PropTypes.shape({
      price: PropTypes.arrayOf(PropTypes.number).isRequired,
    }).isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
};

export default CoinMarket;
