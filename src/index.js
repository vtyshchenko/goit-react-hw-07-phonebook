import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
// import { PersistGate } from 'redux-persist/integration/react';

import './index.scss';
import store from './redux/store';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Створи сховище з configureStore()
// Створи дії збереження та видалення контакту, а також оновлення фільтра. Використовуй функцію createAction().
// Створи редюсери контактів та фільтра. Використовуй функцію createReducer() або createSlice().

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <PersistGate loading={null} persistor={persistor}> */}
      <App />
      {/* </PersistGate> */}
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();