import React, { useState } from 'react';
import { Tab } from '@headlessui/react';
import {
  UserIcon,
  KeyIcon,
  CreditCardIcon,
  DocumentTextIcon,
  BellIcon,
  ExclamationCircleIcon
} from '@heroicons/react/outline';

const connectedBrokers = [
  { id: 1, name: 'Angel Broking', status: 'Connected', lastSync: '2023-05-15 10:30 AM', logo: 'https://play-lh.googleusercontent.com/UL2K_aMKNyEq7-KuT4Ga-1Ps7q9EEGNZTKRdz0MzYCnzjTXZimIKnWXrLQnGEGtKB-s=w240-h480-rw' },
  { id: 2, name: '5paisa', status: 'Connected', lastSync: '2023-05-14 09:45 AM', logo: 'https://play-lh.googleusercontent.com/Vx7SuYaIhYRdZ9fPNs6m9DHu_Z_vuVlZF-V-Qs5T6HT6jKIpALJ0Qn9gGsZRUjERqQ=w240-h480-rw' },
];

const bankAccounts = [
  { id: 1, bankName: 'HDFC Bank', accountNumber: 'XXXX XXXX 1234', ifsc: 'HDFC0001234', status: 'Primary' },
  { id: 2, bankName: 'ICICI Bank', accountNumber: 'XXXX XXXX 5678', ifsc: 'ICIC0005678', status: 'Secondary' },
];

const documents = [
  { id: 1, name: 'PAN Card', status: 'Verified', uploadDate: '2023-01-15' },
  { id: 2, name: 'Aadhaar Card', status: 'Verified', uploadDate: '2023-01-15' },
  { id: 3, name: 'Cancelled Cheque', status: 'Pending', uploadDate: '2023-05-10' },
];

const notifications = [
  { id: 1, type: 'Price Alert', message: 'Reliance Industries hit your target price of ₹2,450', date: '2023-05-15 10:30 AM', read: false },
  { id: 2, type: 'Order Update', message: 'Your buy order for HDFC Bank has been executed', date: '2023-05-14 11:45 AM', read: true },
  { id: 3, type: 'System Update', message: 'Platform maintenance scheduled for May 20, 2023', date: '2023-05-13 09:15 AM', read: true },
  { id: 4, type: 'Price Alert', message: 'Infosys fell below your alert price of ₹1,500', date: '2023-05-12 02:30 PM', read: true },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const Profile = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { name: 'Personal Info', icon: UserIcon },
    { name: 'Security', icon: KeyIcon },
    { name: 'Linked Accounts', icon: CreditCardIcon },
    { name: 'Documents', icon: DocumentTextIcon },
    { name: 'Notifications', icon: BellIcon },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-gray-900">Profile</h1>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-4">
        {/* Profile Sidebar */}
        <div className="lg:col-span-1">
          <div className="card card-hover">
            <div className="flex flex-col items-center pb-6">
              <div className="h-24 w-24 rounded-full mb-3 bg-gray-200 flex items-center justify-center">
                <UserIcon className="h-12 w-12 text-gray-500" aria-hidden="true" />
              </div>
              <h2 className="text-lg font-medium text-gray-900"></h2>
              <p className="text-sm text-gray-500"></p>
              <p className="text-sm text-gray-500"></p>
              <button className="mt-3 text-sm text-primary-600 hover:text-primary-700">
                Change Photo
              </button>
            </div>

            <div className="border-t border-gray-200 pt-4">
              <ul className="space-y-1">
                {tabs.map((tab, index) => (
                  <li key={tab.name}>
                    <button
                      className={`flex items-center w-full px-3 py-2 text-sm font-medium rounded-md ${
                        activeTab === index
                          ? 'bg-primary-50 text-primary-700'
                          : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                      }`}
                      onClick={() => setActiveTab(index)}
                    >
                      <tab.icon
                        className={`mr-3 h-5 w-5 ${
                          activeTab === index ? 'text-primary-500' : 'text-gray-400'
                        }`}
                      />
                      {tab.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Profile Content */}
        <div className="lg:col-span-3">
          <div className="card card-hover">
            {/* Personal Info */}
            {activeTab === 0 && (
              <div>
                <h2 className="text-lg font-medium text-gray-900 mb-6">Personal Information</h2>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div>
                      <label htmlFor="firstName" className="label">First Name</label>
                      <input
                        type="text"
                        id="firstName"
                        className="input"
                        defaultValue=""
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="label">Last Name</label>
                      <input
                        type="text"
                        id="lastName"
                        className="input"
                        defaultValue=""
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div>
                      <label htmlFor="email" className="label">Email Address</label>
                      <input
                        type="email"
                        id="email"
                        className="input"
                        defaultValue=""
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="label">Phone Number</label>
                      <input
                        type="tel"
                        id="phone"
                        className="input"
                        defaultValue=""
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="address" className="label">Address</label>
                    <textarea
                      id="address"
                      rows={3}
                      className="input"
                      defaultValue=""
                    />
                  </div>

                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
                    <div>
                      <label htmlFor="city" className="label">City</label>
                      <input
                        type="text"
                        id="city"
                        className="input"
                        defaultValue=""
                      />
                    </div>
                    <div>
                      <label htmlFor="state" className="label">State</label>
                      <input
                        type="text"
                        id="state"
                        className="input"
                        defaultValue=""
                      />
                    </div>
                    <div>
                      <label htmlFor="pincode" className="label">PIN Code</label>
                      <input
                        type="text"
                        id="pincode"
                        className="input"
                        defaultValue=""
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="panNumber" className="label">PAN Number</label>
                    <input
                      type="text"
                      id="panNumber"
                      className="input"
                      defaultValue=""
                    />
                  </div>

                  <div className="flex justify-end">
                    <button type="submit" className="btn btn-primary">
                      Save Changes
                    </button>
                  </div>
                </form>
              </div>
            )}

            {/* Security */}
            {activeTab === 1 && (
              <div>
                <h2 className="text-lg font-medium text-gray-900 mb-6">Security Settings</h2>
                <form className="space-y-6">
                  <div>
                    <h3 className="text-md font-medium text-gray-900 mb-3">Change Password</h3>
                    <div className="space-y-4">
                      <div>
                        <label htmlFor="currentPassword" className="label">Current Password</label>
                        <input
                          type="password"
                          id="currentPassword"
                          className="input"
                          placeholder="••••••••"
                        />
                      </div>
                      <div>
                        <label htmlFor="newPassword" className="label">New Password</label>
                        <input
                          type="password"
                          id="newPassword"
                          className="input"
                          placeholder="••••••••"
                        />
                      </div>
                      <div>
                        <label htmlFor="confirmPassword" className="label">Confirm New Password</label>
                        <input
                          type="password"
                          id="confirmPassword"
                          className="input"
                          placeholder="••••••••"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-gray-200">
                    <h3 className="text-md font-medium text-gray-900 mb-3">Two-Factor Authentication</h3>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-500">
                          Add an extra layer of security to your account by enabling two-factor authentication.
                        </p>
                      </div>
                      <div className="flex items-center">
                        <button className="btn btn-primary">
                          Enable 2FA
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-gray-200">
                    <h3 className="text-md font-medium text-gray-900 mb-3">Login Sessions</h3>
                    <div className="bg-gray-50 p-4 rounded-md">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium text-gray-900">Current Session</p>
                          <p className="text-xs text-gray-500">Mumbai, India • Chrome on Windows • May 15, 2023 10:30 AM</p>
                        </div>
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                          Active
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <button type="submit" className="btn btn-primary">
                      Save Changes
                    </button>
                  </div>
                </form>
              </div>
            )}

            {/* Linked Accounts */}
            {activeTab === 2 && (
              <div>
                <h2 className="text-lg font-medium text-gray-900 mb-6">Linked Accounts</h2>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-md font-medium text-gray-900 mb-3">Connected Brokers</h3>
                    <div className="space-y-3">
                      {connectedBrokers.map((broker) => (
                        <div key={broker.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-md">
                          <div className="flex items-center">
                            <img src={broker.logo} alt={broker.name} className="h-10 w-10 rounded-full" />
                            <div className="ml-3">
                              <p className="text-sm font-medium text-gray-900">{broker.name}</p>
                              <p className="text-xs text-gray-500">Last synced: {broker.lastSync}</p>
                            </div>
                          </div>
                          <div className="flex items-center space-x-2">
                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                              {broker.status}
                            </span>
                            <button className="text-sm text-red-600 hover:text-red-800">
                              Disconnect
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="mt-4">
                      <button className="btn btn-outline">
                        Connect New Broker
                      </button>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-gray-200">
                    <h3 className="text-md font-medium text-gray-900 mb-3">Bank Accounts</h3>
                    <div className="space-y-3">
                      {bankAccounts.map((account) => (
                        <div key={account.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-md">
                          <div>
                            <p className="text-sm font-medium text-gray-900">{account.bankName}</p>
                            <p className="text-xs text-gray-500">Account: {account.accountNumber}</p>
                            <p className="text-xs text-gray-500">IFSC: {account.ifsc}</p>
                          </div>
                          <div className="flex items-center space-x-2">
                            {account.status === 'Primary' && (
                              <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                Primary
                              </span>
                            )}
                            <button className="text-sm text-gray-600 hover:text-gray-800">
                              Edit
                            </button>
                            <button className="text-sm text-red-600 hover:text-red-800">
                              Remove
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="mt-4">
                      <button className="btn btn-outline">
                        Add Bank Account
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Documents */}
            {activeTab === 3 && (
              <div>
                <h2 className="text-lg font-medium text-gray-900 mb-6">Documents</h2>

                <div className="space-y-6">
                  <div className="overflow-hidden">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Document
                          </th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Upload Date
                          </th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Status
                          </th>
                          <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Actions
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {documents.map((document) => (
                          <tr key={document.id}>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                              {document.name}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              {document.uploadDate}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                                document.status === 'Verified'
                                  ? 'bg-green-100 text-green-800'
                                  : 'bg-yellow-100 text-yellow-800'
                              }`}>
                                {document.status}
                              </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                              <button className="text-primary-600 hover:text-primary-900 mr-3">
                                View
                              </button>
                              <button className="text-primary-600 hover:text-primary-900">
                                Re-upload
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <div className="pt-4 border-t border-gray-200">
                    <h3 className="text-md font-medium text-gray-900 mb-3">Upload New Document</h3>
                    <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                      <div className="space-y-1 text-center">
                        <svg
                          className="mx-auto h-12 w-12 text-gray-400"
                          stroke="currentColor"
                          fill="none"
                          viewBox="0 0 48 48"
                          aria-hidden="true"
                        >
                          <path
                            d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <div className="flex text-sm text-gray-600">
                          <label
                            htmlFor="file-upload"
                            className="relative cursor-pointer bg-white rounded-md font-medium text-primary-600 hover:text-primary-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-primary-500"
                          >
                            <span>Upload a file</span>
                            <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                          </label>
                          <p className="pl-1">or drag and drop</p>
                        </div>
                        <p className="text-xs text-gray-500">PNG, JPG, PDF up to 10MB</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Notifications */}
            {activeTab === 4 && (
              <div>
                <h2 className="text-lg font-medium text-gray-900 mb-6">Notifications</h2>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-md font-medium text-gray-900 mb-3">Notification Settings</h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium text-gray-900">Price Alerts</p>
                          <p className="text-xs text-gray-500">Receive notifications when stocks hit your target price</p>
                        </div>
                        <div className="flex items-center">
                          <input
                            id="price-alerts"
                            name="price-alerts"
                            type="checkbox"
                            className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                            defaultChecked
                          />
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium text-gray-900">Order Updates</p>
                          <p className="text-xs text-gray-500">Receive notifications about your order status</p>
                        </div>
                        <div className="flex items-center">
                          <input
                            id="order-updates"
                            name="order-updates"
                            type="checkbox"
                            className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                            defaultChecked
                          />
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium text-gray-900">Market News</p>
                          <p className="text-xs text-gray-500">Receive important market news and updates</p>
                        </div>
                        <div className="flex items-center">
                          <input
                            id="market-news"
                            name="market-news"
                            type="checkbox"
                            className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                            defaultChecked
                          />
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium text-gray-900">Email Notifications</p>
                          <p className="text-xs text-gray-500">Receive notifications via email</p>
                        </div>
                        <div className="flex items-center">
                          <input
                            id="email-notifications"
                            name="email-notifications"
                            type="checkbox"
                            className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                            defaultChecked
                          />
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium text-gray-900">SMS Notifications</p>
                          <p className="text-xs text-gray-500">Receive notifications via SMS</p>
                        </div>
                        <div className="flex items-center">
                          <input
                            id="sms-notifications"
                            name="sms-notifications"
                            type="checkbox"
                            className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-gray-200">
                    <h3 className="text-md font-medium text-gray-900 mb-3">Recent Notifications</h3>
                    <div className="space-y-3">
                      {notifications.map((notification) => (
                        <div
                          key={notification.id}
                          className={`p-4 rounded-md ${notification.read ? 'bg-gray-50' : 'bg-primary-50 border-l-4 border-primary-500'}`}
                        >
                          <div className="flex items-start">
                            <div className="flex-shrink-0">
                              {notification.type === 'Price Alert' ? (
                                <ExclamationCircleIcon className="h-5 w-5 text-yellow-400" />
                              ) : notification.type === 'Order Update' ? (
                                <DocumentTextIcon className="h-5 w-5 text-green-500" />
                              ) : (
                                <BellIcon className="h-5 w-5 text-gray-400" />
                              )}
                            </div>
                            <div className="ml-3 flex-1">
                              <div className="flex items-center justify-between">
                                <p className="text-sm font-medium text-gray-900">
                                  {notification.type}
                                </p>
                                <p className="text-xs text-gray-500">
                                  {notification.date}
                                </p>
                              </div>
                              <p className="text-sm text-gray-500 mt-1">
                                {notification.message}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="mt-4 text-center">
                      <button className="text-sm text-primary-600 hover:text-primary-700">
                        View All Notifications
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
