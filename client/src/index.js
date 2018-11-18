import React from 'react';
import ReactDOM from 'react-dom';
// import style from './styles/main.css';
import App from './components/App';
//import other components

// ReactDOM.render(<App />, document.getElementById('app'));

//WHEN USING REDUX UNCOMMENT BELOW:

import store from './store/store';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
