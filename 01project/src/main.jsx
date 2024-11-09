import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

import { Auth0Provider, useAuth0 } from "@auth0/auth0-react";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
    <Auth0Provider
    domain="dev-eb65aw7po3ombjgp.us.auth0.com"
      clientId="zu0fkKnCgjzVXqJAcg67QsSSFNYnhkzf"
      authorizationParams={{
        redirect_uri: window.location.origin
      }}>
      <App />
      </Auth0Provider>
    </BrowserRouter>
  </React.StrictMode>
);
// Register the Service Worker
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/sw.js")
      .then((registration) => {
        console.log(
          "Service Worker registered with scope:",
          registration.scope
        );
      })
      .catch((error) => {
        console.log("Service Worker registration failed:", error);
      });
  });
}
