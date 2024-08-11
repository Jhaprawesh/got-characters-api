import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import CardDetail from "../components/CardDetail";
import Header from "../components/Header";

function NewRoutes() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="character/:id" element={<CardDetail />} />
      </Routes>
    </>
  );
}

export default NewRoutes;
