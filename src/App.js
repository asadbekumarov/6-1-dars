import React from "react";
import Header from "./components/header/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import NotFound from "./components/notFound/NotFound";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
