import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from "./App";
import reportWebVitals from "./reportWebVitals";
// import Layout from "./component/divar project/divar project/Layout";

import Layout from "./component/divar project/Layout";
// const bib = ReactDOM.createRoot(document.getElementById("root"));
const root = document.getElementById("root") as HTMLElement;
const bib = ReactDOM.createRoot(root);
bib.render(<Layout />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
