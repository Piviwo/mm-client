import './impressum.css';

function Impressum({}) {

	return (
		<div className='outer-container'>
			<div className='about-container'>
				<h1>about</h1>
				<p>Welcome to our easy going webapp! &#128155;
				<br></br><br></br>
				Explore Munich with our custom interactive map, designed within the mapping project of the Erasmus Mundus Cartography Master program. 
				<br></br><br></br>
				Our vision was to simplify the selection of place to meet up within our group. But our app goes beyond, allowing us too include new favorite spots that we have discovered resulting in a unique and personalized group-map. &#128506; 
				<br></br><br></br>
				Enjoy exploring our webapp! &#128640;</p>
			</div>
			<div className="impressum-container">
				<h2>Impressum</h2>
				<p className='text-small'>Pia Wolffram</p>
				<p className='text-small'>Jagowstraße 22</p>
				<p className='text-small'>10555 Berlin</p>
				<br></br>
				<p className='text-small'>©2024 Pia Wolffram</p>
			</div>
		</div>
	)
}

export default Impressum