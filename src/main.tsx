// ref: https://reactrouter.com/start/library/routing
import ReactDOM from "react-dom/client";
import App from "./routes/App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./routes/About";
import store from "./app/store";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="about" element={<About />} />
      </Routes>
    </BrowserRouter>
  </Provider>
);
