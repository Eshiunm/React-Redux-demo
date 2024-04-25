import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { Provider } from "react-redux";
import store from "./redux/store.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* 讓所有元件能夠與 redux 資料庫取得聯繫 */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
