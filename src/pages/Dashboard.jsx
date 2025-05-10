import React from 'react';
import { ArrowSmUpIcon, ArrowSmDownIcon } from '@heroicons/react/solid';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const stats = [
  { name: 'Portfolio Value', value: '$24,567.89', change: '+4.75%', trend: 'up' },
  { name: 'Day Change', value: '$1,245.23', change: '+5.32%', trend: 'up' },
  { name: 'Total Investments', value: '$18,765.43', change: '+12.34%', trend: 'up' },
  { name: 'Available Cash', value: '$5,802.46', change: '-2.14%', trend: 'down' },
];

const marketData = [
  { name: 'NIFTY 50', value: '19,425.35', change: '+0.75%', trend: 'up' },
  { name: 'SENSEX', value: '64,718.56', change: '+0.68%', trend: 'up' },
  { name: 'NASDAQ', value: '14,897.23', change: '-0.32%', trend: 'down' },
  { name: 'S&P 500', value: '4,536.12', change: '-0.14%', trend: 'down' },
];

const watchlist = [
  { name: 'Reliance Industries', symbol: 'RELIANCE', price: '2,456.75', change: '+1.24%', trend: 'up' },
  { name: 'HDFC Bank', symbol: 'HDFCBANK', price: '1,678.90', change: '+0.87%', trend: 'up' },
  { name: 'Infosys', symbol: 'INFY', price: '1,456.30', change: '-0.54%', trend: 'down' },
  { name: 'TCS', symbol: 'TCS', price: '3,245.60', change: '+0.32%', trend: 'up' },
  { name: 'Bharti Airtel', symbol: 'BHARTIARTL', price: '876.45', change: '-1.23%', trend: 'down' },
];

const chartData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  datasets: [
    {
      label: 'Portfolio Value',
      data: [18000, 19200, 18700, 20500, 21300, 22100, 23400, 22800, 23100, 24000, 23500, 24567.89],
      borderColor: 'rgb(14, 165, 233)',
      backgroundColor: 'rgba(14, 165, 233, 0.5)',
      tension: 0.3,
    },
  ],
};

const chartOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Portfolio Performance (2023)',
    },
  },
  scales: {
    y: {
      beginAtZero: false,
    },
  },
};

const Dashboard = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
        <button className="btn btn-primary">Refresh Data</button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.name} className="card card-hover">
            <div className="flex justify-between">
              <p className="text-sm font-medium text-gray-500">{stat.name}</p>
              <div className={`flex items-center text-sm font-medium ${
                stat.trend === 'up' ? 'text-green-600' : 'text-red-600'
              }`}>
                {stat.change}
                {stat.trend === 'up' ? (
                  <ArrowSmUpIcon className="h-5 w-5" />
                ) : (
                  <ArrowSmDownIcon className="h-5 w-5" />
                )}
              </div>
            </div>
            <p className="mt-1 text-3xl font-semibold text-gray-900">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Chart */}
      <div className="card card-hover">
        <h2 className="text-lg font-medium text-gray-900 mb-4">Portfolio Performance</h2>
        <div className="h-80">
          <Line options={chartOptions} data={chartData} />
        </div>
      </div>

      {/* Market Data and Watchlist */}
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
        {/* Market Data */}
        <div className="card card-hover">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-medium text-gray-900">Market Indices</h2>
            <span className="text-sm text-gray-500">Last updated: 5 mins ago</span>
          </div>
          <div className="overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Index
                  </th>
                  <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Value
                  </th>
                  <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Change
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {marketData.map((item) => (
                  <tr key={item.name}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {item.name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-right">
                      {item.value}
                    </td>
                    <td className={`px-6 py-4 whitespace-nowrap text-sm font-medium text-right ${
                      item.trend === 'up' ? 'text-green-600' : 'text-red-600'
                    }`}>
                      <div className="flex items-center justify-end">
                        {item.change}
                        {item.trend === 'up' ? (
                          <ArrowSmUpIcon className="h-5 w-5 ml-1" />
                        ) : (
                          <ArrowSmDownIcon className="h-5 w-5 ml-1" />
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Watchlist */}
        <div className="card card-hover">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-medium text-gray-900">Watchlist</h2>
            <button className="text-sm text-primary-600 hover:text-primary-700">
              Edit Watchlist
            </button>
          </div>
          <div className="overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Stock
                  </th>
                  <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Price
                  </th>
                  <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Change
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {watchlist.map((stock) => (
                  <tr key={stock.symbol}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">{stock.name}</div>
                      <div className="text-sm text-gray-500">{stock.symbol}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-right">
                      {stock.price}
                    </td>
                    <td className={`px-6 py-4 whitespace-nowrap text-sm font-medium text-right ${
                      stock.trend === 'up' ? 'text-green-600' : 'text-red-600'
                    }`}>
                      <div className="flex items-center justify-end">
                        {stock.change}
                        {stock.trend === 'up' ? (
                          <ArrowSmUpIcon className="h-5 w-5 ml-1" />
                        ) : (
                          <ArrowSmDownIcon className="h-5 w-5 ml-1" />
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
