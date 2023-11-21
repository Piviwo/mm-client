import bar from '../../../assets/bar.svg';
import cinema from '../../../assets/bar.svg';
import museum from '../../../assets/museum.svg';
import restaurant from '../../../assets/restaurant.svg';
import theatre from '../../../assets/theatre.svg';

/*const ICON = `M20.2,15.7L20.2,15.7c1.1-1.6,1.8-3.6,1.8-5.7c0-5.6-4.5-10-10-10S2,4.5,2,10c0,2,0.6,3.9,1.6,5.4c0,0.1,0.1,0.2,0.2,0.3
  c0,0,0.1,0.1,0.1,0.2c0.2,0.3,0.4,0.6,0.7,0.9c2.6,3.1,7.4,7.6,7.4,7.6s4.8-4.5,7.4-7.5c0.2-0.3,0.5-0.6,0.7-0.9
  C20.1,15.8,20.2,15.8,20.2,15.7z`;*/


function Pin({type}) {
  let source;
  console.log(type)
  if ( type == 'bar') {
      source = bar;
  } else if (type == 'cinema'){
      source = cinema;
  } else if (type == 'museum'){
      source = museum;
  } else if (type == 'restaurant'){
      source = restaurant;
  } else if (type == 'theatre'){
      source = theatre;
  }
  console.log(source)
  return (
    /*<svg height={size} viewBox="0 0 24 24" class="pin">
      <path d={ICON} />
    </svg>*/
    <div className="pin">
      <img src={source} alt="" height={20}/>
    </div>
  );
}

export default Pin;