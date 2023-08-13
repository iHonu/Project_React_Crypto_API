import useFetch from '../../hooks/useFetch';
import { useParams } from 'react-router-dom';
import moment from 'moment';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
);

const HistoryChart = () => {
  const { id } = useParams();
  const { loading, data, error } = useFetch(
    `coins/${id}/market_chart?vs_currency=eur&days=7`,
  );

  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>{error.message}</p>;
  }

  const chartData = data.prices.map((item) => ({
    x: item[0],
    y: item[1].toFixed(2),
  }));

  const options = {
    responsive: true,
  };

  // const uniqueDates = [
  //   ...new Set(chartData.map((item) => moment(item.x).format('MMM DD'))),
  // ];

  const dataInfo = {
    labels: chartData.map((item) => moment(item.x).format('MMM DD')),
    datasets: [
      {
        fill: true,
        label: id,
        data: chartData.map((item) => item.y),
        backgroundColor: 'rgba(75,192,192,0.2)',
        borderColor: 'rgba(75,192,192,1)',
      },
    ],
  };

  return (
    <div>
      <Line options={options} data={dataInfo} />
    </div>
  );
};

export default HistoryChart;
