import React from 'react'

import Burger from "./Burger";
import Next from './Next';
import Chefs from "./Chef";
import Footer from "./Footer";
import Header from "./Header";


export const AllComponents = () => {
  return (
    <div>
        <Header></Header>
        <Burger id="menu"></Burger>
        {/* <Next id="favorite"></> */}
        <Next id="next"></Next>
        <Chefs id="staff"></Chefs>
        <Footer id='footer'></Footer>
    </div>
  )
}
