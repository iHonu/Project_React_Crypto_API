import useFetch from '../../hooks/useFetch';
import { useParams } from 'react-router-dom';
import CoinHeader from './CoinHeader';
import CoinStats from './CoinStats';
import HistoryChart from './HistoryChart';

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
    <div className="">
      <CoinHeader name={data.name} marketData={data.market_data} />
      <div className="flex shrink-0 gap-24 my-20 mx-6">
        <CoinStats
          marketData={data.market_data}
          genesisDate={data.genesis_date}
          coin={data}
        />

        <p
          className=" basis-2/3 font-light mt-1"
          dangerouslySetInnerHTML={{ __html: data.description.en }}
        ></p>
      </div>

      <div className="divider">History Chart</div>
      <div className="">
        <HistoryChart />
      </div>
    </div>
  );
};

export default CoinDetails;
