import React from 'react';
import '../componentes/style/footer.css'

function redirect(url) {
  window.location = url
}

const Footer = ({id}) => {
	return (
		<div className="footerContainer" id={id}>
			<div className="footerColumn">
				<h4>Social Media</h4>
				<div>Facebook</div>
				<div>Instagram</div>
				<div>Telegram</div>
			</div>
			<div className="footerColumn" id='about-us'>
				<h4>About</h4>
				<div>Contact us</div>
				<div>Careers</div>
			</div>
			<div className="footerColumn">
				<h4>Website creator</h4>
				<div style={{cursor: 'pointer'}} onClick={() => redirect('https://github.com/Santiagogure')}>Github</div>
				<div style={{cursor: 'pointer'}} onClick={() => redirect('https://twitter.com/santigure')}>Twitter</div>
			</div>
		</div>
	);
};

export default Footer;