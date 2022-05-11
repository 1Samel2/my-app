import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './page/Home';

import './Services/firebase';

import './styles/globalStyles.scss'


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <>
    <Home/> 
  </>,
);

