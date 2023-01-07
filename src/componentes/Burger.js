import React, { useContext } from 'react';
import { Slide } from "react-awesome-reveal";
import { Link } from 'react-router-dom';
import { AppContext } from '../context/dataProvider';
import '../componentes/style/burger.css'



const Burger = ({ id }) => {

 
	const value = useContext(AppContext)
	const burger = value.burger
    const addCart = value.addCart
	


	return (
		<div className="burgerContainer" id={id}>
			<h1 className="burgerHeading">Trendy food</h1>
			<div className="burgerWrapper">
				{burger.map((burger, index) => (
					<Slide
						key={index}
						right={index >= 3 ? true : false}
						left={index < 3 ? true : false}
					>
						<div className="burgerCard" style={{cursor: 'pointer'}}>
						{/* <Link to={`/buy/${burger.id}`}> */}
							<img src={burger.img} className="burgerImg" alt={burger.alt} />
							{/* </Link> */}
							<div className="burgerInfo">
								<div className="protTitle">{burger.title}</div>
								<div className="protDesc">{burger.desc}</div>
								<div className="burgerPrice">${burger.price}.00</div>
								<button className="burgerBtn" onClick={() => addCart(burger.id)}>
									Add to cart
									<box-icon id="button-cart" name='cart'></box-icon>
									</button>
							</div>
						</div>
					</Slide>
				))}
			</div>
		</div>
	);
};

export default Burger;