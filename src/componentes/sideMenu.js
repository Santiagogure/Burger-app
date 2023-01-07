import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from '../context/dataProvider'

export const SideMenu = ({scroll}) => {




  return (
    <div className="sideMenu">
    <Link to="/" className="sideLink" onClick={() => scroll("menu")}>
      Menu
    </Link>
    <Link to="/" className="sideLink" onClick={() => scroll("next")}>
      Next burger
    </Link>
    <Link to="/" className="sideLink" onClick={() => scroll("staff")}>
      Staff
    </Link>
    <Link to="/cart" className="sideLink">
      Cart
    </Link>
    <Link to="/" className="sideLink" onClick={() => scroll("footer")}>
      Contact
    </Link>
  </div>
  )
}
