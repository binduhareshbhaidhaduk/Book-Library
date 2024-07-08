// import './index.css'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import ReactDOM from 'react-dom';
// import { BrowserRouter, BrowserRouter as Router } from 'react-router-dom';
// import App from './App.jsx';

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <BrowserRouter>

//     <Router>
//       <App />
//     </Router>
//   </BrowserRouter>
// )
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App.jsx';
import './index.css'
import { Provider } from 'react-redux';
import store from './store.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>

  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
  </Provider>
);

