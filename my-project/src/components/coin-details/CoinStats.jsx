import { currencyFormat } from '../../utils';
import { PropTypes } from 'prop-types';

const CoinStats = ({ marketData, coin }) => {
  return (
    <div>
      <div className="flex flex-row justify-between">
        <div className="flex flex-col gap-2">
          <img
            src={coin.image.small}
            alt={coin.name}
            className="w-8 h-8 mask mask-circle"
          ></img>
          <div className="flex">
            <p className="">Rank # {marketData.market_cap_rank}</p>
            <p className="text-secondary ml-4"> {coin.symbol}</p>
          </div>
          <div className="flex gap-1">
            <p>Cap:</p>
            <p className="font-light">
              {currencyFormat(marketData.market_cap.eur)}
            </p>
          </div>
          <div className="flex gap-1">
            <p>Volume:</p>
            <p className="font-light">
              {' '}
              {currencyFormat(marketData.total_volume.eur)}
            </p>
          </div>
          <div className="flex gap-1">
            <p>Supply:</p>
            <p className="font-light">
              {' '}
              {currencyFormat(marketData.circulating_supply)}
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-2 items-end content-between"></div>
      </div>
    </div>
  );
};

export default CoinStats;

CoinStats.propTypes = {
  marketData: PropTypes.shape({
    market_cap_rank: PropTypes.number.isRequired,
    current_price: PropTypes.number.isRequired,
    price_change_percentage_24h: PropTypes.number.isRequired,
    high_24h: PropTypes.number.isRequired,
    low_24h: PropTypes.number.isRequired,
    market_cap: PropTypes.number.isRequired,
    total_volume: PropTypes.number.isRequired,
    circulating_supply: PropTypes.number.isRequired,
  }).isRequired,

  coin: PropTypes.shape({
    image: PropTypes.shape({
      small: PropTypes.string.isRequired,
    }).isRequired,
    symbol: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};
