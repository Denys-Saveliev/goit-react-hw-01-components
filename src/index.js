import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App.jsx';
import './index.css';
import './components/profile/Profile.jsx';
import './components/statistics/Statistics.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
