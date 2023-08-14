import { PropTypes } from 'prop-types';
import { currencyFormat } from '../../utils';
import { TDown, TUp } from '../../icons/icon';

const CoinHeader = ({ name, marketData }) => {
  return (
    <div className="flex flex-col pb-12 border-b my-20">
      <div>
        <h2 className="text-center text-6xl font-bold">{name}</h2>
      </div>
      <div className="flex flex-row gap-4 justify-center mt-4">
        <p>{marketData.price_change_percentage_24h.toFixed(2)} %</p>
        <div className="flex">
          <TUp />
          {currencyFormat(marketData.high_24h.eur)}
        </div>
        <div className="flex">
          <TDown />
          {currencyFormat(marketData.low_24h.eur)}
        </div>
      </div>
      <div>
        <p
          className={`text-4xl font-semibold text-center mt-6 ${
            marketData.price_change_percentage_24h < 0
              ? 'text-error'
              : 'text-success'
          }`}
        >
          {currencyFormat(marketData.current_price.eur)}
        </p>
      </div>
    </div>
  );
};

CoinHeader.propTypes = {
  name: PropTypes.string.isRequired,
  marketData: PropTypes.shape({
    price_change_percentage_24h: PropTypes.number.isRequired,
    high_24h: PropTypes.number.isRequired,
    low_24h: PropTypes.number.isRequired,
    current_price: PropTypes.number.isRequired,
  }).isRequired,
};
export default CoinHeader;
