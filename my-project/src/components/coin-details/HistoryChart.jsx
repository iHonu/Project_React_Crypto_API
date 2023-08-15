import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import useFetch from '../../hooks/useFetch';
import { useParams } from 'react-router-dom';
import moment from 'moment';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

const HistoryChart = () => {
  const { id } = useParams();
  const { loading, data, error } = useFetch(
    `coins/${id}/market_chart?vs_currency=eur&days=7`,
  );

  if (loading) {
    return <span className="loading loading-dots loading-lg"></span>;
  }
  if (error) {
    return <p>{error.message}</p>;
  }

  function generateRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgba(${r},${g},${b},0.9)`;
  }

  const pricesData = data.prices.map((item) => ({
    x: item[0],
    y: item[1].toFixed(2),
  }));

  const colors = pricesData.map(() => generateRandomColor());

  const uniqueDates = [
    ...new Set(pricesData.map((item) => moment(item.x).format('MMM DD'))),
  ];

  const minYValue = Math.min(...pricesData.map((item) => parseFloat(item.y)));
  const maxYValue = Math.max(...pricesData.map((item) => parseFloat(item.y)));

  const options = {
    responsive: true,
    maintainAspectRatio: false, // Allow the chart to take up the whole container
    aspectRatio: 1,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
    },
    scales: {
      y: {
        min: minYValue,
        max: maxYValue,
        ticks: {
          stepSize: (maxYValue - minYValue) / 5,
        },
      },
    },
  };

  const chartData = {
    labels: uniqueDates,
    datasets: [
      {
        fill: true,
        label: 'Price',
        data: pricesData.map((item) => item.y),
        backgroundColor: colors,
        borderColor: 'rgba(75,192,192,1)',
        borderRadius: 4,
      },
    ],
  };

  return <Bar options={options} data={chartData} />;
};

export default HistoryChart;
