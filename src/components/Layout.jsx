import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import { MenuAlt1Icon, MenuIcon } from '@heroicons/react/solid';

const Layout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sidebarEnabled, setSidebarEnabled] = useState(true);

  const toggleSidebarVisibility = () => {
    setSidebarEnabled(!sidebarEnabled);
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {sidebarEnabled && <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />}

      <div className="flex flex-col flex-1 overflow-hidden">
        <div className="bg-white shadow-sm z-10">
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">
                <button
                  type="button"
                  onClick={toggleSidebarVisibility}
                  className="p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500"
                >
                  {sidebarEnabled ? (
                    <>
                      <span className="sr-only">Hide menu</span>
                      <MenuAlt1Icon className="h-6 w-6" aria-hidden="true" />
                    </>
                  ) : (
                    <>
                      <span className="sr-only">Show menu</span>
                      <MenuIcon className="h-6 w-6" aria-hidden="true" />
                    </>
                  )}
                </button>
                <div className="ml-4">
                  <span className="text-lg font-semibold text-gray-900">TradePro</span>
                </div>
              </div>
              <Navbar setSidebarOpen={setSidebarOpen} />
            </div>
          </div>
        </div>

        <main className="flex-1 overflow-y-auto p-4 md:p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
