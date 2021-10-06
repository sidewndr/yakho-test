import React, {FC} from 'react';
import ReactDOM from 'react-dom';
import {GlobalStyles} from "./shared/globalStyles/globalStyles";
import {Routes} from "./routes/routes";
import {Provider} from "react-redux";
import {store} from "./store";

//24, 18, 16
//h2, h3, h4

const App: FC = () => (
  <Provider store={store}>
    <GlobalStyles />
    <Routes />
  </Provider>
)

ReactDOM.render(<App/>, document.getElementById('root'))
