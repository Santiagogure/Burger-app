import React from "react";

import DataProvider from "../context/dataProvider";



import { AllComponents } from "./allComponents";
import { Route, Router, Routes } from "react-router-dom";
import { ViewBurger } from "../pages/viewBurger";
import { Cart } from "../cart/cart";


export const AppRouter = () => {
  return (
    <div style={{display: 'flex', width: "100%", alignItems: 'center', justifyContent: 'center'}}>
      <DataProvider>
      <Routes>
      <Route path="" element={<AllComponents/>}></Route>
          <Route path="menu" element={<AllComponents/>}></Route>
          <Route path="buy/:id" element={<ViewBurger/>}></Route>
          <Route path="cart" element={<Cart/>}></Route>
       </Routes>
      </DataProvider>
    </div>
  );
};
