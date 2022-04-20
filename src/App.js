import './App.css';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './Redux/store';
import {BrowserRouter} from 'react-router-dom';
import Router from './Route';

function App() {
  return (
    <> 
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <Router/>
        </BrowserRouter>
        </PersistGate>
      </Provider>
    </>
  );
}

export default App;
