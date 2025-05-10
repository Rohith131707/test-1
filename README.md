# Third-Party Trading Platform

A modern trading platform where users can trade various assets such as stocks, bonds, commodities, and other financial instruments through third-party service providers like Angel Broking, 5paisa, etc.

## Features

- **Dashboard**: Overview of portfolio, market indices, and watchlist
- **Trading Interface**: Connect to third-party brokers and execute trades
- **Markets**: View market indices, top gainers/losers, and sector performance
- **Portfolio**: Track holdings, order history, and performance
- **User Profile**: Manage personal information, security settings, linked accounts, and notifications

## Tech Stack

- **Frontend**: React with Vite
- **Styling**: Tailwind CSS
- **Routing**: React Router
- **Charts**: Chart.js with react-chartjs-2
- **UI Components**: Headless UI and Heroicons

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd trading-platform
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the development server:
   ```
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:3000`

## Build for Production

```
npm run build
```

This will create a `dist` folder with the production-ready build.

## Preview Production Build

```
npm run preview
```

## Project Structure

```
trading-platform/
├── public/              # Static assets
├── src/
│   ├── assets/          # Images and other assets
│   ├── components/      # Reusable UI components
│   ├── context/         # React context for state management
│   ├── hooks/           # Custom React hooks
│   ├── pages/           # Main application pages
│   ├── services/        # API integration services
│   ├── styles/          # Global styles
│   ├── App.jsx          # Main App component
│   └── main.jsx         # Entry point
├── .gitignore
├── index.html
├── package.json
├── postcss.config.js
├── README.md
├── tailwind.config.js
└── vite.config.js
```

## Third-Party Broker Integration

The platform is designed to integrate with various third-party brokers:

- Angel Broking
- 5paisa
- Zerodha
- Upstox

Each broker integration requires authentication and API connectivity, which would be implemented in the services layer.

## License

ISC
# test-1
