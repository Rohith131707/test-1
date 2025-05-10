import React, { useState } from 'react';
import { Tab } from '@headlessui/react';
import { SearchIcon, ArrowSmUpIcon, ArrowSmDownIcon } from '@heroicons/react/solid';
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

const marketIndices = [
  { name: 'NIFTY 50', value: '19,425.35', change: '+0.75%', trend: 'up' },
  { name: 'SENSEX', value: '64,718.56', change: '+0.68%', trend: 'up' },
  { name: 'NIFTY BANK', value: '44,327.80', change: '+0.92%', trend: 'up' },
  { name: 'NIFTY IT', value: '32,456.78', change: '-0.45%', trend: 'down' },
  { name: 'NIFTY AUTO', value: '16,789.45', change: '+1.23%', trend: 'up' },
  { name: 'NIFTY PHARMA', value: '14,567.89', change: '-0.32%', trend: 'down' },
];

const globalIndices = [
  { name: 'NASDAQ', value: '14,897.23', change: '-0.32%', trend: 'down' },
  { name: 'S&P 500', value: '4,536.12', change: '-0.14%', trend: 'down' },
  { name: 'DOW JONES', value: '35,456.78', change: '+0.21%', trend: 'up' },
  { name: 'FTSE 100', value: '7,654.32', change: '+0.45%', trend: 'up' },
  { name: 'NIKKEI 225', value: '28,765.43', change: '-0.78%', trend: 'down' },
  { name: 'HANG SENG', value: '19,876.54', change: '-1.23%', trend: 'down' },
];

const topGainers = [
  { name: 'Adani Ports', symbol: 'ADANIPORTS', price: '876.45', change: '+4.56%', trend: 'up' },
  { name: 'Tata Motors', symbol: 'TATAMOTORS', price: '654.30', change: '+3.78%', trend: 'up' },
  { name: 'SBI', symbol: 'SBIN', price: '567.80', change: '+3.45%', trend: 'up' },
  { name: 'HDFC', symbol: 'HDFC', price: '2,765.40', change: '+2.98%', trend: 'up' },
  { name: 'Bajaj Finance', symbol: 'BAJFINANCE', price: '7,654.30', change: '+2.76%', trend: 'up' },
];

const topLosers = [
  { name: 'Tech Mahindra', symbol: 'TECHM', price: '1,234.50', change: '-3.45%', trend: 'down' },
  { name: 'HCL Tech', symbol: 'HCLTECH', price: '1,098.65', change: '-2.87%', trend: 'down' },
  { name: 'Wipro', symbol: 'WIPRO', price: '432.10', change: '-2.54%', trend: 'down' },
  { name: 'Sun Pharma', symbol: 'SUNPHARMA', price: '987.65', change: '-2.32%', trend: 'down' },
  { name: 'Dr Reddy', symbol: 'DRREDDY', price: '4,567.80', change: '-1.98%', trend: 'down' },
];

const sectors = [
  { name: 'Banking', change: '+1.23%', trend: 'up', marketCap: '₹45.6T' },
  { name: 'IT', change: '-0.87%', trend: 'down', marketCap: '₹23.4T' },
  { name: 'Oil & Gas', change: '+0.76%', trend: 'up', marketCap: '₹18.7T' },
  { name: 'Automobile', change: '+2.34%', trend: 'up', marketCap: '₹12.5T' },
  { name: 'Pharmaceuticals', change: '-0.54%', trend: 'down', marketCap: '₹9.8T' },
  { name: 'FMCG', change: '+0.32%', trend: 'up', marketCap: '₹15.3T' },
  { name: 'Metals', change: '+1.76%', trend: 'up', marketCap: '₹8.9T' },
  { name: 'Realty', change: '-1.23%', trend: 'down', marketCap: '₹4.5T' },
];

const niftyChartData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  datasets: [
    {
      label: 'NIFTY 50',
      data: [17500, 17800, 17200, 17900, 18300, 18100, 18500, 18800, 19100, 19300, 19200, 19425],
      borderColor: 'rgb(14, 165, 233)',
      backgroundColor: 'rgba(14, 165, 233, 0.5)',
      tension: 0.3,
    },
  ],
};

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'NIFTY 50 (2023)',
    },
  },
  scales: {
    y: {
      beginAtZero: false,
    },
  },
};

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const Markets = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-gray-900">Markets</h1>
        <div className="flex space-x-2">
          <div className="relative rounded-md shadow-sm">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <SearchIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
            </div>
            <input
              type="text"
              className="focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
              placeholder="Search for markets..."
            />
          </div>
          <button className="btn btn-primary">Search</button>
        </div>
      </div>

      {/* Market Overview */}
      <div className="card card-hover">
        <h2 className="text-lg font-medium text-gray-900 mb-4">Market Overview</h2>
        <div className="h-80">
          <Line options={chartOptions} data={niftyChartData} />
        </div>
      </div>

      {/* Market Indices */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Indian Indices */}
        <div className="card card-hover">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-medium text-gray-900">Indian Indices</h2>
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
                {marketIndices.map((index) => (
                  <tr key={index.name}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {index.name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-right">
                      {index.value}
                    </td>
                    <td className={`px-6 py-4 whitespace-nowrap text-sm font-medium text-right ${
                      index.trend === 'up' ? 'text-green-600' : 'text-red-600'
                    }`}>
                      <div className="flex items-center justify-end">
                        {index.change}
                        {index.trend === 'up' ? (
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

        {/* Global Indices */}
        <div className="card card-hover">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-medium text-gray-900">Global Indices</h2>
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
                {globalIndices.map((index) => (
                  <tr key={index.name}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {index.name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-right">
                      {index.value}
                    </td>
                    <td className={`px-6 py-4 whitespace-nowrap text-sm font-medium text-right ${
                      index.trend === 'up' ? 'text-green-600' : 'text-red-600'
                    }`}>
                      <div className="flex items-center justify-end">
                        {index.change}
                        {index.trend === 'up' ? (
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

      {/* Top Gainers and Losers */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Top Gainers */}
        <div className="card card-hover">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-medium text-gray-900">Top Gainers</h2>
            <span className="text-sm text-gray-500">Last updated: 5 mins ago</span>
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
                {topGainers.map((stock) => (
                  <tr key={stock.symbol}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">{stock.name}</div>
                      <div className="text-sm text-gray-500">{stock.symbol}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-right">
                      {stock.price}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-right text-green-600">
                      <div className="flex items-center justify-end">
                        {stock.change}
                        <ArrowSmUpIcon className="h-5 w-5 ml-1" />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Top Losers */}
        <div className="card card-hover">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-medium text-gray-900">Top Losers</h2>
            <span className="text-sm text-gray-500">Last updated: 5 mins ago</span>
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
                {topLosers.map((stock) => (
                  <tr key={stock.symbol}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">{stock.name}</div>
                      <div className="text-sm text-gray-500">{stock.symbol}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-right">
                      {stock.price}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-right text-red-600">
                      <div className="flex items-center justify-end">
                        {stock.change}
                        <ArrowSmDownIcon className="h-5 w-5 ml-1" />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Sector Performance */}
      <div className="card card-hover">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-medium text-gray-900">Sector Performance</h2>
          <span className="text-sm text-gray-500">Last updated: 5 mins ago</span>
        </div>
        <div className="overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Sector
                </th>
                <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Change
                </th>
                <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Market Cap
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {sectors.map((sector) => (
                <tr key={sector.name}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {sector.name}
                  </td>
                  <td className={`px-6 py-4 whitespace-nowrap text-sm font-medium text-right ${
                    sector.trend === 'up' ? 'text-green-600' : 'text-red-600'
                  }`}>
                    <div className="flex items-center justify-end">
                      {sector.change}
                      {sector.trend === 'up' ? (
                        <ArrowSmUpIcon className="h-5 w-5 ml-1" />
                      ) : (
                        <ArrowSmDownIcon className="h-5 w-5 ml-1" />
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-right">
                    {sector.marketCap}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Markets;
