import React, { useContext, useEffect } from 'react'
import { AppContext } from '../context/dataProvider'
import { Link } from 'react-router-dom';
import '../componentes/style/cart.css'
import Footer from '../componentes/Footer';
import { Slide } from "react-awesome-reveal"

export const Cart = () => {


    const value = useContext(AppContext)    
    const cart = value.cart
    const setCart = value.setCart
    const upCantidad = value.upCantidad
    const downCantidad = value.downCantidad
    const total = value.total
    const deleteFromCart = value.deleteFromCart

    useEffect(() => {
      window.scroll(0,0);
    }, []);

    function bought() {
      window.location = '/'
      setTimeout(() => {
        setCart([])    
      }, 1800);
    
    }

  return (
    <div style={{height: '100%'}}>
    {cart.length > 0 ? 
    <>
    <div className='cart'>
    <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: '5px'}}>
    <Link to="/">
    <box-icon name='arrow-back'></box-icon>
    </Link>
    <p style={{position: 'relative', top: '4px'}}>Back</p>
    </div>
      <h2>The total price is: ${total}.00 </h2>
      <div className='cart-container'>
        {
          cart.map((burger, index) => (
            <Slide
						key={index}
						right={index >= 3 ? true : false}
						left={index < 3 ? true : false}
					>
						<div className="burger-cart-card" style={{cursor: 'pointer'}}>
						<Link to={`/buy/${burger.id}`}>
							<img src={burger.img} className="burger-cart-Img" alt={burger.alt} />
							</Link>
							<div className="burger-info">
								<div className="prot-cart-Title">{burger.title}</div>
								<div className="burger-cart-Price"><strong>${burger.price}.00</strong></div>
                <div className="contador-cart">
                <box-icon onClick={() => downCantidad(burger.id)} id="down" name="down-arrow"></box-icon>
                <h4 id="valorCantidad">{burger.cantidad}</h4>
                <box-icon onClick={() => upCantidad(burger.id)} id="up" name="up-arrow"></box-icon>
              </div>
              <div style={{display: 'flex', marginLeft: '15px'}}> 
              <box-icon id="delete-cart" onClick={() => deleteFromCart(burger.id) } name='x'></box-icon>
              </div>
							</div>
						</div>
					</Slide>
          ))
        }
        </div>
    </div>
    <div style={{marginBottom: '20px', marginTop: '-80px', display: 'flex', justifyContent: 'center'}}>
      <button onClick={() => bought()} id='buy-button'>Buy now</button>
    </div>
    </>
    :
    
    <div className='cart'>
     <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: '5px'}}>
    <Link to="/">
    <box-icon name='arrow-back'></box-icon>
    </Link>
    <p style={{position: 'relative', top: '4px'}}>Back</p>
    </div>
    <h2>You have not added anything to the cart. Come back here when you're done.</h2>
    <div className='cart-container'>
        
    </div>
    </div>
    }
    <div>
    <Footer/>
    </div>
    </div>
  )
}
