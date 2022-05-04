import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './page/Home';
import GlobalStyle from './globalStyle'

import './Services/firebase';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <>
    <Home/> <GlobalStyle/>
  </>,
);

