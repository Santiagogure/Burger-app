import React from "react";
import { Link } from "react-router-dom";
import { SideMenu } from "./sideMenu";
import "./style/sidebar.css";

export const Sidebar = ({ toggle, show }) => {
  const scroll = (id) => {
    const element = document.getElementById(id);

    toggle();
    element.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <>
      {show ? (
        <div
          className="sideContainer show"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "fixed",
            zIndex: "100",
            width: "350px",
            height: "100%",
            background: "black",
            top: "0",
            transition: "left 0.3s ease-in-out",
            left: "0",
          }}
        >
          <div className="close" onClick={toggle}>
            Close
            <box-icon
              style={{ fill: "white", position: "relative", top: "2px" }}
              name="right-arrow-alt"
            ></box-icon>
          </div>
          <SideMenu scroll={scroll} />
        </div>
      ) : (
        <div
          className="sideContainer"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "fixed",
            zIndex: "100",
            width: "350px",
            height: "100%",
            background: "black",
            top: "0",
            transition: "left 0.3s ease-in-out",
            left: "-500px",
          }}
        >
          <div className="close" onClick={toggle}>
            Close
            <box-icon
              style={{ fill: "white", position: "relative", top: "2px" }}
              name="right-arrow-alt"
            ></box-icon>
          </div>
          <SideMenu scroll={scroll} />
        </div>
      )}
    </>
  );
};

export default Sidebar;
