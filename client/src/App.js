import React from "react";
import Header from "./component/header/Header.jsx";
import Home from "./component/home/Home";
import { Box } from "@mui/material";
import ContextProvider from "./context/DataProvider.jsx";

function App() {
  return (
    <ContextProvider>
      <Header />
      <Box style={{ marginTop: 54 }}>
        <Home />
      </Box>
    </ContextProvider>
  );
}

export default App;
