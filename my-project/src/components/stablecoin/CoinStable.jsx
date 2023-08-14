import PropTypes from 'prop-types';
import { currencyFormat } from '../../utils';
import { Link } from 'react-router-dom';

const CoinStable = ({ coin }) => {
  return (
    <Link to={`/coin/${coin.id}`}>
      <div className="flex flex-col justify-center text-center items-center justify-items-center justify-self-center w-auto">
        <div className="">
          <img src={coin.image} alt={coin.name} className="w-6 h-6" />
        </div>
        <p className="font-light">{coin.name}</p>
        <div className=" font-extralight">
          {currencyFormat(coin.current_price)}
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
