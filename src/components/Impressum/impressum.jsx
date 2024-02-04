import './impressum.css';

function Impressum({}) {

	return (
		<div className='outer-container'>
			<div className='about-container'>
				<h1>about</h1>
				<p>Welcome to my web app! &#128155;
				<br></br><br></br>
				Explore Munich with this custom interactive map, designed within the mapping project of the Erasmus Mundus Cartography Master program. 
				<br></br><br></br>
				My vision was to simplify the selection of places to meet up within a group. But this app goes beyond, allowing us too gather new favorite spots that we have discovered resulting in a unique and personalized group map. &#128506; 
				<br></br><br></br>
				Enjoy exploring! &#128640;</p>
			</div>
			<div className="impressum-container">
				<h2>Impressum</h2>
				<p className='text-small'>©2024 Pia Wolffram</p>
			</div>
		</div>
	)
}

export default Impressum