import PropTypes from 'prop-types';
import { currencyFormat } from '../../utils';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const CoinStable = ({ coin }) => {
  return (
    <Link to={`/coin/${coin.id}`}>
      <motion.div
        whileHover={{ scale: 1.1, x: 10 }}
        whileTap={{
          scale: 0.8,
        }}
        className="flex flex-col flex-grow w-auto gap-2"
      >
        <div>
          <img src={coin.image} alt={coin.name} className="w-6 h-6" />
        </div>
        <div>
          <p className="font-extralight dark:font-light text-xl pb-1 text-base-content">
            {coin.name}
          </p>
          <p className=" text-sm text-violet-400">
            {currencyFormat(coin.current_price)}
          </p>
        </div>
      </motion.div>
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
