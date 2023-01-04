import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { AppContext } from "../context/dataProvider";
import { Slide } from "react-awesome-reveal"
import "../componentes/style/viewBurger.css";
import "boxicons";
import Footer from "../componentes/Footer";


export const ViewBurger = () => {
  const params = useParams();
  const value = useContext(AppContext);
  const burger = value.burger;
  const addCart = value.addCart;
  const [item, setItem] = useState([]);


  useEffect(() => {
    burger.forEach((burger) => {
      if (burger.id === Number(params.id)) {
        setItem([burger]);
      }
    });
  }, [params]);



  return (
    <div
      className="view-burger-container"
      style={{ display: "flex", flexDirection: "column" }}
    >
       <Slide>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <Link to="/">
          <box-icon name="arrow-back"></box-icon>
        </Link>
        <p style={{ position: "relative", top: "4px" }}>Back</p>
      </div>
      <div
        className="burger-view"
        style={{ display: "flex", flexDirection: "column" }}
      >
        {item.map((burger) => (
    <>
            <div className="burgerCard-view" style={{ cursor: "pointer" }}>
              <img src={burger.img} className="burgerview-img" alt={burger.alt} />
              <div className="burgerInfo">
                <div style={{ marginTop: "10px" }} className="protTitle-view">
                  {burger.title}
                </div>
                <div style={{ marginTop: "10px" }} className="burgerPrice">
                  ${burger.price}.00
                </div>
                <button onClick={() => addCart(burger.id)} className="burgerBtn">
                  Add to cart
                </button>
              </div>
            </div>
            <p id="burger-desc-view">{burger.desc}</p>
            </>
        ))}
      </div>
      <Footer />
      </Slide>
    </div>
  );
};
