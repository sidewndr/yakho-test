import React from 'react';
import ReactDOM from 'react-dom';
import {GlobalStyles} from "./shared/globalStyles/globalStyles";
import {Routes} from "./routes/routes";
import {Provider} from "react-redux";
import {store} from "./store";


const App = () => (
  <Provider store={store}>
    <GlobalStyles />
    <Routes />
  </Provider>
  )

ReactDOM.render(<App/>, document.getElementById('root'))
