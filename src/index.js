import { createRoot } from "react-dom/client";
import App from "./App";
import store from './store';
import { Provider } from "react-redux";

import "bulma/css/bulma.css";
import './styles.css';


const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <Provider store={store}>
    <App /> 
  </Provider>
);
