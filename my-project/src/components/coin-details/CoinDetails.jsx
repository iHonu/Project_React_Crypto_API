import useFetch from '../../hooks/useFetch';
import { useParams } from 'react-router-dom';
import CoinHeader from './CoinHeader';
import CoinStats from './CoinStats';
import HistoryChart from './HistoryChart';
import { motion } from 'framer-motion';

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.6,
      staggerChildren: 0.5,
    },
  },
};

const item = {
  hidden: { y: 200, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const CoinDetails = () => {
  const { id } = useParams();
  const { loading, data, error } = useFetch(
    `/coins/${id}?tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false`,
  );

  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>{error.message}</p>;
  }

  return (
    <motion.div variants={container} initial="hidden" animate="visible">
      <motion.div variants={item} initial="hidden" animate="visible">
        <CoinHeader name={data.name} marketData={data.market_data} />
      </motion.div>

      <div className=" flex flex-col shrink-0 lg:flex-row gap-8 lg:gap-20 mb-16 mt-8 lg:mt-16">
        <motion.div variants={item} initial="hidden" animate="visible">
          <CoinStats
            marketData={data.market_data}
            genesisDate={data.genesis_date}
            coin={data}
          />
        </motion.div>
        <motion.p
          variants={item}
          initial="hidden"
          animate="visible"
          className=" basis-2/3 font-light mt-1"
          dangerouslySetInnerHTML={{ __html: data.description.en }}
        ></motion.p>
      </div>

      <motion.div
        variants={item}
        initial="hidden"
        animate="visible"
        className="divider"
      >
        History Chart
      </motion.div>
      <div className="">
        <HistoryChart />
      </div>
    </motion.div>
  );
};

export default CoinDetails;
