import React, { useContext } from 'react';
import { Slide } from "react-awesome-reveal";
import { AppContext } from '../context/dataProvider';
import '../componentes/style/chef.css'


const Chefs = ({ id }) => {

    const value = useContext(AppContext)

	const chef = value.chefs

	return (
		<div className="chefContainer" id={id}>
			<h1 className="burgerHeading">Our Kitchen Chefs</h1>
			<div className="burgerWrapper">
				{chef.map((chef, index) => (
					<Slide
						key={(chef, index)}
						right={index % 2 === 1 ? true : false}
						left={index % 2 === 0 ? true : false}
					>
						<div className="burgerCard" style={{cursor: 'pointer'}}>
							<img src={chef.img} className="chefImg" alt={chef.alt} />
							<div className="burgerInfo">
								<div className="protTitle">{chef.name}</div>
							</div>
						</div>
					</Slide>
				))}
			</div>
		</div>
	);
};

export default Chefs;