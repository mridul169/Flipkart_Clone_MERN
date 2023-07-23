import React from "react";
import Header from "./component/header/Header.jsx";
import Home from "./component/home/Home";
import { Box } from "@mui/material";
import ContextProvider from "./context/DataProvider.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DetailView from "./component/details/DetailView.jsx";

function App() {
  return (
    <ContextProvider>
      <BrowserRouter>
        <Header />
        <Box style={{ marginTop: 54 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<DetailView />} />
          </Routes>
        </Box>
      </BrowserRouter>
    </ContextProvider>
  );
}

export default App;
