import React, { useState } from 'react';
import { Tab } from '@headlessui/react';
import { ArrowSmUpIcon, ArrowSmDownIcon } from '@heroicons/react/solid';
import { Doughnut, Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js';

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const holdings = [
  { name: 'Reliance Industries', symbol: 'RELIANCE', quantity: 10, avgPrice: '2,100.50', currentPrice: '2,456.75', value: '24,567.50', pnl: '+3,562.50', pnlPercentage: '+16.96%', trend: 'up' },
  { name: 'HDFC Bank', symbol: 'HDFCBANK', quantity: 15, avgPrice: '1,450.75', currentPrice: '1,678.90', value: '25,183.50', pnl: '+3,422.25', pnlPercentage: '+15.72%', trend: 'up' },
  { name: 'Infosys', symbol: 'INFY', quantity: 20, avgPrice: '1,500.25', currentPrice: '1,456.30', value: '29,126.00', pnl: '-878.00', pnlPercentage: '-2.93%', trend: 'down' },
  { name: 'TCS', symbol: 'TCS', quantity: 8, avgPrice: '3,100.00', currentPrice: '3,245.60', value: '25,964.80', pnl: '+1,164.80', pnlPercentage: '+4.70%', trend: 'up' },
  { name: 'Bharti Airtel', symbol: 'BHARTIARTL', quantity: 25, avgPrice: '900.50', currentPrice: '876.45', value: '21,911.25', pnl: '-601.25', pnlPercentage: '-2.67%', trend: 'down' },
];

const orders = [
  { id: 1, stock: 'Reliance Industries', symbol: 'RELIANCE', type: 'BUY', quantity: 5, price: '2,345.60', status: 'Completed', date: '2023-05-15' },
  { id: 2, stock: 'HDFC Bank', symbol: 'HDFCBANK', type: 'BUY', quantity: 10, price: '1,567.80', status: 'Completed', date: '2023-05-10' },
  { id: 3, stock: 'Infosys', symbol: 'INFY', type: 'SELL', quantity: 8, price: '1,478.90', status: 'Completed', date: '2023-05-05' },
  { id: 4, stock: 'TCS', symbol: 'TCS', type: 'BUY', quantity: 3, price: '3,210.45', status: 'Completed', date: '2023-04-28' },
  { id: 5, stock: 'Bharti Airtel', symbol: 'BHARTIARTL', type: 'BUY', quantity: 15, price: '890.30', status: 'Completed', date: '2023-04-20' },
];

const sectorAllocation = {
  labels: ['Oil & Gas', 'Banking', 'IT', 'Telecom', 'Others'],
  datasets: [
    {
      data: [30, 25, 20, 15, 10],
      backgroundColor: [
        'rgba(14, 165, 233, 0.8)',
        'rgba(139, 92, 246, 0.8)',
        'rgba(20, 184, 166, 0.8)',
        'rgba(245, 158, 11, 0.8)',
        'rgba(107, 114, 128, 0.8)',
      ],
      borderColor: [
        'rgba(14, 165, 233, 1)',
        'rgba(139, 92, 246, 1)',
        'rgba(20, 184, 166, 1)',
        'rgba(245, 158, 11, 1)',
        'rgba(107, 114, 128, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

const performanceData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  datasets: [
    {
      label: 'Monthly Returns (%)',
      data: [2.5, -1.2, 3.7, 1.8, 4.2, 2.1, -0.8, 3.5, 2.9, 1.5, -1.1, 3.2],
      backgroundColor: 'rgba(14, 165, 233, 0.8)',
      borderColor: 'rgba(14, 165, 233, 1)',
      borderWidth: 1,
    },
  ],
};

const doughnutOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'right',
    },
    title: {
      display: true,
      text: 'Sector Allocation',
    },
  },
};

const barOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Monthly Performance (2023)',
    },
  },
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const Portfolio = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-gray-900">Portfolio</h1>
        <button className="btn btn-primary">Refresh Data</button>
      </div>

      {/* Portfolio Summary */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        <div className="card card-hover">
          <p className="text-sm font-medium text-gray-500">Total Investment</p>
          <p className="mt-1 text-3xl font-semibold text-gray-900">₹1,20,500.00</p>
        </div>
        <div className="card card-hover">
          <p className="text-sm font-medium text-gray-500">Current Value</p>
          <p className="mt-1 text-3xl font-semibold text-gray-900">₹1,26,753.05</p>
        </div>
        <div className="card card-hover">
          <div className="flex justify-between">
            <p className="text-sm font-medium text-gray-500">Total P&L</p>
            <div className="flex items-center text-sm font-medium text-green-600">
              +5.19%
              <ArrowSmUpIcon className="h-5 w-5" />
            </div>
          </div>
          <p className="mt-1 text-3xl font-semibold text-green-600">+₹6,253.05</p>
        </div>
        <div className="card card-hover">
          <p className="text-sm font-medium text-gray-500">Available Funds</p>
          <p className="mt-1 text-3xl font-semibold text-gray-900">₹25,467.89</p>
        </div>
      </div>

      {/* Portfolio Analysis */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Sector Allocation */}
        <div className="card card-hover">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Sector Allocation</h2>
          <div className="h-80">
            <Doughnut options={doughnutOptions} data={sectorAllocation} />
          </div>
        </div>

        {/* Performance Chart */}
        <div className="card card-hover">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Performance</h2>
          <div className="h-80">
            <Bar options={barOptions} data={performanceData} />
          </div>
        </div>
      </div>

      {/* Holdings and Orders */}
      <div className="card card-hover">
        <Tab.Group>
          <Tab.List className="flex space-x-1 rounded-xl bg-gray-100 p-1 mb-4">
            <Tab
              className={({ selected }) =>
                classNames(
                  'w-full rounded-lg py-2.5 text-sm font-medium leading-5',
                  'focus:outline-none focus:ring-0',
                  selected
                    ? 'bg-white shadow text-primary-700'
                    : 'text-gray-600 hover:bg-white/[0.12] hover:text-gray-700'
                )
              }
            >
              Holdings
            </Tab>
            <Tab
              className={({ selected }) =>
                classNames(
                  'w-full rounded-lg py-2.5 text-sm font-medium leading-5',
                  'focus:outline-none focus:ring-0',
                  selected
                    ? 'bg-white shadow text-primary-700'
                    : 'text-gray-600 hover:bg-white/[0.12] hover:text-gray-700'
                )
              }
            >
              Order History
            </Tab>
          </Tab.List>
          <Tab.Panels>
            <Tab.Panel>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Stock
                      </th>
                      <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Qty
                      </th>
                      <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Avg. Price
                      </th>
                      <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Current Price
                      </th>
                      <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Value
                      </th>
                      <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                        P&L
                      </th>
                      <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                        % Return
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {holdings.map((holding) => (
                      <tr key={holding.symbol}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900">{holding.name}</div>
                          <div className="text-sm text-gray-500">{holding.symbol}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-right">
                          {holding.quantity}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-right">
                          ₹{holding.avgPrice}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-right">
                          ₹{holding.currentPrice}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-right">
                          ₹{holding.value}
                        </td>
                        <td className={`px-6 py-4 whitespace-nowrap text-sm font-medium text-right ${
                          holding.trend === 'up' ? 'text-green-600' : 'text-red-600'
                        }`}>
                          {holding.pnl}
                        </td>
                        <td className={`px-6 py-4 whitespace-nowrap text-sm font-medium text-right ${
                          holding.trend === 'up' ? 'text-green-600' : 'text-red-600'
                        }`}>
                          <div className="flex items-center justify-end">
                            {holding.pnlPercentage}
                            {holding.trend === 'up' ? (
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
            </Tab.Panel>
            <Tab.Panel>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Date
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Stock
                      </th>
                      <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Type
                      </th>
                      <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Quantity
                      </th>
                      <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Price
                      </th>
                      <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {orders.map((order) => (
                      <tr key={order.id}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {order.date}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900">{order.stock}</div>
                          <div className="text-sm text-gray-500">{order.symbol}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-center">
                          <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                            order.type === 'BUY' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                          }`}>
                            {order.type}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-right">
                          {order.quantity}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-right">
                          ₹{order.price}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                            {order.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
  );
};

export default Portfolio;
