import bar from '../../../assets/map-items/bar.svg';
import cinema from '../../../assets/map-items/cinema.svg';
import museum from '../../../assets/map-items/museum.svg';
import restaurant from '../../../assets/map-items/restaurant.svg';
import theatre from '../../../assets/map-items/theatre.svg';
import cafe from '../../../assets/map-items/cafe.svg';
import dragBlue from '../../../assets/draggable-place-blue.svg';
import dragGreen from '../../../assets/draggable-place-green.svg';
import pinAthina from '../../../assets/people/pin-athina.svg';
import pinPia from '../../../assets/people/pin-pia.svg';
import './pin.css';


function Pin({type, className}) {
  let source;
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
  } else if (type == 'cafe'){
    source = cafe;
  }else if(type == 'draggable-marker-blue'){
      source = dragBlue;
  }else if(type == 'draggable-marker-green'){
    source = dragGreen;
  } else if(type == 'pin-athina'){
    source = pinAthina;
  } else if(type == 'pin-pia'){
    source = pinPia;
  }

  return (
    <div className={"pin"}>
      <img src={source} alt={type} className={className} height={18}/>
    </div>
  );
}

export default Pin;