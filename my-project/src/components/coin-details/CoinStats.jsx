import useFetch from '../../hooks/useFetch';
import { useParams } from 'react-router-dom';

const CoinStats = () => {
  const { id } = useParams();
  const { loading, data, error } = useFetch(
    `/coins/${id}?tickers=false&market_data=false&community_data=false&developer_data=false&sparkline=false`,
  );

  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>{error.message}</p>;
  }

  return (
    <div className="my-6">
      <div className="flex gap-2 items-center">
        <img src={data.image.small} alt={data.name} />
        <h1 className="text-2xl mb-2 capitalize font-bold">{data.name}</h1>
        <p
          className="mt-6 text-gray-500 [&>a]:text-blue-500"
          dangerouslySetInnerHTML={{ __html: data.description.en }}
        ></p>
      </div>
    </div>
  );
};

export default CoinStats;
