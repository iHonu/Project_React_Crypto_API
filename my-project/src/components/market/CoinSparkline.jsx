import { Sparklines, SparklinesLine } from 'react-sparklines';
import PropTypes from 'prop-types';

const CoinSparkline = ({ price }) => {
  const firstValue = price[0];
  const lastValue = price[price.length - 1];
  const lineColor =
    lastValue >= firstValue ? 'hsl(var(--er))' : 'hsl(var(--su))';

  return (
    <Sparklines data={price} height={80}>
      <SparklinesLine color={lineColor} />
    </Sparklines>
  );
};

CoinSparkline.propTypes = {
  price: PropTypes.arrayOf(PropTypes.number).isRequired,
};

export default CoinSparkline;
