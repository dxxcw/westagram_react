import React from "react";
import ReactDOM from "react-dom/client";
import Router from "./Router";

import "./pages/Login/Login";
import "./pages/Main/Main";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Router />);
