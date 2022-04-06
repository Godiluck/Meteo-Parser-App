import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import CurrentCity from "./CurrentCity";

export const CityContext = createContext({})

ReactDOM.render(
  <CityContext.Provider value={{
      city: new CurrentCity(),
  }}>
    <App />
  </CityContext.Provider>,
  document.getElementById('root')
);