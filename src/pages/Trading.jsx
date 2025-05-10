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

const brokers = [
  { id: 1, name: 'Angel Broking', logo: 'https://play-lh.googleusercontent.com/UL2K_aMKNyEq7-KuT4Ga-1Ps7q9EEGNZTKRdz0MzYCnzjTXZimIKnWXrLQnGEGtKB-s=w240-h480-rw' },
  { id: 2, name: '5paisa', logo: 'https://play-lh.googleusercontent.com/Vx7SuYaIhYRdZ9fPNs6m9DHu_Z_vuVlZF-V-Qs5T6HT6jKIpALJ0Qn9gGsZRUjERqQ=w240-h480-rw' },
  { id: 3, name: 'Zerodha', logo: 'https://play-lh.googleusercontent.com/bPz1guJ6FHF3oOlrDMhYZ8SXcV5C8DiJ5OGGN-qQ_B3LVg-Y0gK3Mz4uRiR9bMVTpOo=w240-h480-rw' },
  { id: 4, name: 'Upstox', logo: 'https://play-lh.googleusercontent.com/lF3nnzxPMQxVf2LXxJWEjTy5eYcz6CzwpQI6KxX8fFwQINKGZwQ0gYBNQz2-8ZEjEA=w240-h480-rw' },
];

const popularStocks = [
  { name: 'Reliance Industries', symbol: 'RELIANCE', price: '2,456.75', change: '+1.24%', trend: 'up' },
  { name: 'HDFC Bank', symbol: 'HDFCBANK', price: '1,678.90', change: '+0.87%', trend: 'up' },
  { name: 'Infosys', symbol: 'INFY', price: '1,456.30', change: '-0.54%', trend: 'down' },
  { name: 'TCS', symbol: 'TCS', price: '3,245.60', change: '+0.32%', trend: 'up' },
  { name: 'Bharti Airtel', symbol: 'BHARTIARTL', price: '876.45', change: '-1.23%', trend: 'down' },
  { name: 'ITC', symbol: 'ITC', price: '432.15', change: '+0.78%', trend: 'up' },
  { name: 'ICICI Bank', symbol: 'ICICIBANK', price: '945.30', change: '+0.45%', trend: 'up' },
  { name: 'Axis Bank', symbol: 'AXISBANK', price: '876.25', change: '-0.32%', trend: 'down' },
];

const chartData = {
  labels: ['9:15', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '15:30'],
  datasets: [
    {
      label: 'RELIANCE',
      data: [2430, 2445, 2452, 2448, 2460, 2455, 2450, 2456.75],
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
      text: 'Intraday Chart',
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

const Trading = () => {
  const [selectedBroker, setSelectedBroker] = useState(brokers[0]);
  const [orderType, setOrderType] = useState('buy');
  const [orderQuantity, setOrderQuantity] = useState(1);
  const [selectedStock, setSelectedStock] = useState(popularStocks[0]);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-gray-900">Trading</h1>
        <div className="flex space-x-2">
          <div className="relative rounded-md shadow-sm">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <SearchIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
            </div>
            <input
              type="text"
              className="focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
              placeholder="Search for stocks..."
            />
          </div>
          <button className="btn btn-primary">Search</button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* Left Column - Broker Selection */}
        <div className="lg:col-span-1">
          <div className="card card-hover">
            <h2 className="text-lg font-medium text-gray-900 mb-4">Select Broker</h2>
            <div className="space-y-4">
              {brokers.map((broker) => (
                <div
                  key={broker.id}
                  className={`flex items-center p-3 rounded-lg cursor-pointer transition-colors ${
                    selectedBroker.id === broker.id
                      ? 'bg-primary-50 border border-primary-200'
                      : 'hover:bg-gray-50 border border-transparent'
                  }`}
                  onClick={() => setSelectedBroker(broker)}
                >
                  <img src={broker.logo} alt={broker.name} className="h-10 w-10 rounded-full" />
                  <span className="ml-3 font-medium">{broker.name}</span>
                  {selectedBroker.id === broker.id && (
                    <span className="ml-auto text-xs bg-primary-100 text-primary-800 py-1 px-2 rounded-full">
                      Selected
                    </span>
                  )}
                </div>
              ))}
            </div>
            <div className="mt-6">
              <button className="btn btn-primary w-full">
                Connect to {selectedBroker.name}
              </button>
              <p className="mt-2 text-xs text-gray-500 text-center">
                You'll be redirected to {selectedBroker.name}'s login page
              </p>
            </div>
          </div>

          <div className="card card-hover mt-6">
            <h2 className="text-lg font-medium text-gray-900 mb-4">Order Form</h2>
            <div className="space-y-4">
              <div>
                <label htmlFor="stock" className="label">Stock</label>
                <select
                  id="stock"
                  className="input"
                  value={selectedStock.symbol}
                  onChange={(e) => {
                    const stock = popularStocks.find(s => s.symbol === e.target.value);
                    setSelectedStock(stock);
                  }}
                >
                  {popularStocks.map((stock) => (
                    <option key={stock.symbol} value={stock.symbol}>
                      {stock.name} ({stock.symbol})
                    </option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="label">Order Type</label>
                <div className="flex space-x-2">
                  <button
                    className={`flex-1 py-2 px-4 rounded-md font-medium transition-colors ${
                      orderType === 'buy'
                        ? 'bg-green-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                    onClick={() => setOrderType('buy')}
                  >
                    Buy
                  </button>
                  <button
                    className={`flex-1 py-2 px-4 rounded-md font-medium transition-colors ${
                      orderType === 'sell'
                        ? 'bg-red-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                    onClick={() => setOrderType('sell')}
                  >
                    Sell
                  </button>
                </div>
              </div>
              
              <div>
                <label htmlFor="quantity" className="label">Quantity</label>
                <input
                  type="number"
                  id="quantity"
                  className="input"
                  min="1"
                  value={orderQuantity}
                  onChange={(e) => setOrderQuantity(parseInt(e.target.value))}
                />
              </div>
              
              <div>
                <label htmlFor="price" className="label">Price</label>
                <input
                  type="text"
                  id="price"
                  className="input"
                  value={selectedStock.price}
                  readOnly
                />
              </div>
              
              <div>
                <label htmlFor="total" className="label">Total Value</label>
                <input
                  type="text"
                  id="total"
                  className="input"
                  value={`₹${(parseFloat(selectedStock.price.replace(',', '')) * orderQuantity).toLocaleString('en-IN', { maximumFractionDigits: 2 })}`}
                  readOnly
                />
              </div>
              
              <button
                className={`w-full py-2 px-4 rounded-md font-medium text-white ${
                  orderType === 'buy' ? 'bg-green-600 hover:bg-green-700' : 'bg-red-600 hover:bg-red-700'
                }`}
              >
                {orderType === 'buy' ? 'Buy' : 'Sell'} {selectedStock.symbol}
              </button>
            </div>
          </div>
        </div>

        {/* Right Column - Stock Info and Chart */}
        <div className="lg:col-span-2">
          <div className="card card-hover">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h2 className="text-xl font-semibold text-gray-900">{selectedStock.name}</h2>
                <p className="text-sm text-gray-500">{selectedStock.symbol}</p>
              </div>
              <div className={`flex items-center text-lg font-medium ${
                selectedStock.trend === 'up' ? 'text-green-600' : 'text-red-600'
              }`}>
                {selectedStock.price}
                <span className="ml-2 flex items-center">
                  {selectedStock.change}
                  {selectedStock.trend === 'up' ? (
                    <ArrowSmUpIcon className="h-5 w-5" />
                  ) : (
                    <ArrowSmDownIcon className="h-5 w-5" />
                  )}
                </span>
              </div>
            </div>
            
            <Tab.Group>
              <Tab.List className="flex space-x-1 rounded-xl bg-gray-100 p-1 mb-4">
                {['Intraday', '1W', '1M', '3M', '1Y', '5Y'].map((category) => (
                  <Tab
                    key={category}
                    className={({ selected }) =>
                      classNames(
                        'w-full rounded-lg py-2 text-sm font-medium leading-5',
                        'focus:outline-none focus:ring-0',
                        selected
                          ? 'bg-white shadow text-primary-700'
                          : 'text-gray-600 hover:bg-white/[0.12] hover:text-gray-700'
                      )
                    }
                  >
                    {category}
                  </Tab>
                ))}
              </Tab.List>
              <Tab.Panels>
                <Tab.Panel>
                  <div className="h-80">
                    <Line options={chartOptions} data={chartData} />
                  </div>
                </Tab.Panel>
                {['1W', '1M', '3M', '1Y', '5Y'].map((period, idx) => (
                  <Tab.Panel key={idx}>
                    <div className="h-80 flex items-center justify-center">
                      <p className="text-gray-500">Chart data for {period} period would be displayed here</p>
                    </div>
                  </Tab.Panel>
                ))}
              </Tab.Panels>
            </Tab.Group>
            
            <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
              <div className="bg-gray-50 p-3 rounded-lg">
                <p className="text-xs text-gray-500">Open</p>
                <p className="text-lg font-medium">₹2,430.50</p>
              </div>
              <div className="bg-gray-50 p-3 rounded-lg">
                <p className="text-xs text-gray-500">High</p>
                <p className="text-lg font-medium">₹2,465.75</p>
              </div>
              <div className="bg-gray-50 p-3 rounded-lg">
                <p className="text-xs text-gray-500">Low</p>
                <p className="text-lg font-medium">₹2,425.30</p>
              </div>
              <div className="bg-gray-50 p-3 rounded-lg">
                <p className="text-xs text-gray-500">Volume</p>
                <p className="text-lg font-medium">3.2M</p>
              </div>
            </div>
          </div>
          
          <div className="card card-hover mt-6">
            <h2 className="text-lg font-medium text-gray-900 mb-4">Popular Stocks</h2>
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
                    <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {popularStocks.map((stock) => (
                    <tr key={stock.symbol} className={selectedStock.symbol === stock.symbol ? 'bg-primary-50' : ''}>
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
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <button
                          className="text-primary-600 hover:text-primary-900"
                          onClick={() => setSelectedStock(stock)}
                        >
                          Select
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trading;
