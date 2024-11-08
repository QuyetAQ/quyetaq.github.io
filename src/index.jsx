import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ConfigProvider } from "antd";
import { AuthProvider } from "@utils/context/AuthContext";
import App from "./App";
import "./index.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <ConfigProvider
      theme={{
        token: {
          colorBgContainer: "#fff",
          fontSize: "12px",
          fontSizeHeading1: 38,
          fontSizeHeading2: 30,
          fontSizeHeading3: 24,
          fontSizeHeading4: 20,
          fontSizeHeading5: 16,
        },
        components: {
          Card: {
            fontSize: "12px",
            headerHeight: 28,
            headerFontSize: 12,
          },
          Carousel: {
            dotWidth: 8,
            dotHeight: 8,
            dotActiveWidth: 8,
          },
        },
      }}>
      <AuthProvider>
        <App />
      </AuthProvider>
    </ConfigProvider>
  </BrowserRouter>,
);
