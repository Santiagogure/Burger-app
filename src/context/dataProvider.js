import React, { createContext, useEffect, useState } from "react";

import chef2 from '../images/chef2.jpg';

import chef from '../images/Chef.jpg'
import burguer1 from '../images/burguer-1.jfif'
import burguer2 from '../images/burguer-2.jfif'
import burguer3 from '../images/burguer-3.webp'
import burguer4 from '../images/burger-4.jpg'
import burguer5 from '../images/burger-5.jfif'
import burguer6 from '../images/burger-6.jpg'

export const AppContext = createContext();

export default function DataProvider({ children }) {


	const [cart, setCart] = useState([])
	const [total, setTotal] = useState()

	useEffect(() => { 
		if(cart) {
		 setCart(cart)
		} else {
		 setCart([])
		}
	}, []);

	const addCart = (id) => {
		const check = cart.every((item) => {

			return item.id !== id
		})
		if(check) {
			const data = burger.filter((burger) => {
				return burger.id === id
	
			})
			setCart([...cart, ...data])
			console.log(cart)
		} else {
			alert("El item fue añadido otra vez")
		}
	}

    const deleteFromCart = (id) => {
		cart.map((item) => {
			if(item.id === id)  {
				const data = cart.filter((burger) => {
					return burger.id !== id
				})
				setCart([...data])
			}
		})
	}




	const upCantidad = (id) => {
		cart.forEach((burger) => {
             if(burger.id === id) {
				burger.cantidad += 1
                setCart([...cart])
				console.log('hola')
			 }
		})
	}

	const downCantidad = (id) => {
		cart.forEach((burger) => {
			if(burger.id === id) {
	            if(burger.cantidad === 1) {
					burger.cantidad = 2
				}
				burger.cantidad -= 1
				setCart([...cart])
			}
		})
	}


	useEffect(() => {
        const resultado = cart.reduce((prevValue, item) =>{
            return prevValue + (parseFloat(item.price * item.cantidad))
        }, 0)
        setTotal(resultado)
   }, [cart])


   //Local Storage

   useEffect(() => {
	 const cartItems = localStorage.getItem('cart-items')
	 if(cartItems) {
		setCart(JSON.parse(cartItems))
	 }
   }, []);

   useEffect(() => {
	window.localStorage.setItem('cart-items', JSON.stringify(cart))
   }, [cart]);

 const burger = [
	{
		img: burguer1,
		alt: 'Cake',
		title: 'Super Burger',
		desc: 'The burger everyone loves. With lettuce and tomato',
		price: 3,
		button: 'Select',
		id: 1,
		cantidad: 1
	},
	{
		img: burguer2,
		alt: 'Cake',
		title: 'Mega Burger',
		desc: 'An excelent burger with all that you can imagine and potatoes',
		price: 4,
		button: 'Select',
		id: 2,
		cantidad: 1
	},
	{
		img: burguer3,
		alt: 'Cake',
		title: 'Meat Burger',
		desc: "If you don't need something to add, this is the best option.",
		price: 2,
		button: 'Select',
		id: 3,
		cantidad: 1
	},
	{
		img: burguer4,
		alt: 'Cake',
		title: 'Hiper Burger',
		desc: 'The biggest burger that we have, a great option if you are hungry',
		price: 5,
		button: 'Select',
		id: 4,
		cantidad: 1
	},
	{
		img: burguer5,
		alt: 'Cake',
		title: 'Extra Burger',
		desc: 'If you want to try with a differrent bread buy this',
		price: 6,
		button: 'Select',
		id: 5,
		cantidad: 1
	},
	{
		img: burguer6,
		alt: 'Cake',
		title: 'Sweet Burger',
		desc: 'The unique and different chocolate burger',
		price: 4,
		button: 'Select',
		id: 6,
		cantidad: 1
	},
];
    



 const chefs = [
	{
		img: chef,
		alt: 'Chef',
		name: 'Ferran Adrià',
		id: 1
	},
	{
		img: chef2,
		alt: 'Chef',
		name: 'Mario Batali',
		id: 2
	},
];


  const value = {
      burger,
      chefs,
	  cart,
	  setCart,
	  addCart,
	  upCantidad,
	  downCantidad,
	  total,
	  setTotal,
	  deleteFromCart
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}