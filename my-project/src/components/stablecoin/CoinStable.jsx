import PropTypes from 'prop-types';
import { currencyFormat } from '../../utils';
import { Link } from 'react-router-dom';

const CoinStable = ({ coin }) => {
  return (
    <Link to={`/coin/${coin.id}`}>
      <div className="flex flex-col flex-grow w-auto gap-2">
        <div className="">
          <img src={coin.image} alt={coin.name} className="w-6 h-6" />
        </div>
        <div>
          <p className="font-extralight text-xl pb-1">{coin.name}</p>
          <p className=" text-sm text-violet-400">
            {currencyFormat(coin.current_price)}
          </p>
        </div>
      </div>
    </Link>
  );
};

CoinStable.propTypes = {
  coin: PropTypes.shape({
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    symbol: PropTypes.string.isRequired,
    current_price: PropTypes.number.isRequired,
    market_cap_rank: PropTypes.number.isRequired,
  }).isRequired,
};

export default CoinStable;
