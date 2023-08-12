import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  currencyFormat,
  currencyFormatNoCents,
  currencyFormatMicroCents,
} from '../../utils';
import CoinSparkline from './CoinSparkline';

const CoinMarket = ({ coin, index }) => {
  return (
    <tr className="hover:bg-gray-100">
      <th className="">{index + 1}</th>
      <td className="">
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
      <td className="">{currencyFormat(coin.current_price)}</td>
      <td
        className={` ${
          coin.price_change_percentage_24h < 0
            ? 'text-red-500'
            : 'text-emerald-500'
        }`}
      >
        {coin.price_change_percentage_24h.toFixed(2)}%
      </td>
      <td
        className={` ${
          coin.price_change_24h < 0 ? 'text-red-400' : 'text-green-400'
        }`}
      >
        {currencyFormatMicroCents(coin.price_change_24h)}
      </td>
      <td className="">{currencyFormatNoCents(coin.market_cap)}</td>
      <td>
        <CoinSparkline price={coin.sparkline_in_7d.price} />
      </td>
    </tr>
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

<div className="flex items-center space-x-3">
  <div className="avatar">
    <div className="mask mask-squircle w-12 h-12">
      <img
        src="/tailwind-css-component-profile-2@56w.png"
        alt="Avatar Tailwind CSS Component"
      />
    </div>
  </div>
  <div>
    <div className="font-bold">Hart Hagerty</div>
    <div className="text-sm opacity-50">United States</div>
  </div>
</div>;
