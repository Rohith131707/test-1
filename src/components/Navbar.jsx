import React from 'react';
import { Link } from 'react-router-dom';
import { BellIcon, UserIcon } from '@heroicons/react/outline';

const Navbar = ({ setSidebarOpen }) => {
  return (
    <div className="flex items-center">
      <div className="hidden md:block">
        <div className="flex items-baseline space-x-4">
          <Link to="/" className="text-gray-900 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium">
            Dashboard
          </Link>
          <Link to="/trading" className="text-gray-900 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium">
            Trading
          </Link>
          <Link to="/markets" className="text-gray-900 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium">
            Markets
          </Link>
          <Link to="/portfolio" className="text-gray-900 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium">
            Portfolio
          </Link>
        </div>
      </div>
      <div className="flex items-center ml-4">
        <button className="p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500">
          <span className="sr-only">View notifications</span>
          <BellIcon className="h-6 w-6" aria-hidden="true" />
        </button>
        <div className="ml-3 relative">
          <Link to="/profile" className="flex items-center max-w-xs rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500">
            <span className="sr-only">Open user menu</span>
            <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center">
              <UserIcon className="h-5 w-5 text-gray-500" aria-hidden="true" />
            </div>
            <span className="ml-2 text-sm font-medium text-gray-700 hidden md:block"></span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
