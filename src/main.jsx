// src/main.jsx
import React, { useMemo, useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import CarDetail from "./pages/CarDetail";
import { Provider } from "react-redux";
import store from "./store/store";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import Header from "./components/Header";

const Root = () => {
  const [mode, setMode] = useState("light");

  const toggleDarkMode = () => {
    setMode((prev) => (prev === "light" ? "dark" : "light"));
  };

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode]
  );

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          <Header toggleDarkMode={toggleDarkMode} />
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/car/:id" element={<CarDetail />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<Root />);
