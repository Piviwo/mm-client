import bar from '../../../assets/map-items/bar.svg';
import cinema from '../../../assets/map-items/cinema.svg';
import museum from '../../../assets/map-items/museum.svg';
import restaurant from '../../../assets/map-items/restaurant.svg';
import theatre from '../../../assets/map-items/theatre.svg';
import cafe from '../../../assets/map-items/cafe.svg';
import dragBlue from '../../../assets/draggable-place-blue.svg';
import dragGreen from '../../../assets/draggable-place-green.svg';
import pin1 from '../../../assets/people/pin_1.svg';
import pin2 from '../../../assets/people/pin_2.svg';
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
  } else if(type == 'pin-2'){
    source = pin2;
  } else if(type == 'pin-1'){
    source = pin1;
  }

  return (
    <div className={"pin"}>
      <img src={source} alt={type} className={className} height={20}/>
    </div>
  );
}

export default Pin;