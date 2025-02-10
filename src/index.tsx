import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/app';
import { Setting } from './const';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App
      rentalOffersCount={Setting.rentOffersCount}/>
  </React.StrictMode>
)