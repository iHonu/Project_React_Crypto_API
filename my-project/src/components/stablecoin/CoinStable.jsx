import PropTypes from 'prop-types';
import { currencyFormat } from '../../utils';

const CoinStable = ({ coin }) => {
  return (
    <div className="flex flex-col justify-center  text-center items-center mr-4 mt-4 gap-1">
      <div className="">
        <img src={coin.image} alt={coin.name} className="w-6 h-6" />
      </div>
      <p className="font-light">{coin.name}</p>
      <div className=" font-extralight">
        {currencyFormat(coin.current_price)}
      </div>
    </div>
  );
};

CoinStable.propTypes = {
  coin: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    symbol: PropTypes.string.isRequired,
    current_price: PropTypes.number.isRequired,
    market_cap_rank: PropTypes.number.isRequired,
  }).isRequired,
};

export default CoinStable;
