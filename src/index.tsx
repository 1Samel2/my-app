import React from 'react';
import ReactDOM from 'react-dom/client';
import NewRoom from './page/NewRoom';

import './Services/firebase';

import './styles/globalStyles.scss'


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <>
    <NewRoom/> 
  </>,
);

