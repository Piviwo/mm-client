import bar from '../../../assets/bar.svg';
import cinema from '../../../assets/cinema.svg';
import museum from '../../../assets/museum.svg';
import restaurant from '../../../assets/restaurant.svg';
import theatre from '../../../assets/theatre.svg';
import cafe from '../../../assets/cafe.svg';
import dragBlue from '../../../assets/draggable-place-blue.svg';
import dragGreen from '../../../assets/draggable-place-green.svg';
import './pin.css';


function Pin({type}) {
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
}

  return (
    <div className={"pin"}>
      <img src={source} alt={type} className={type} height={15}/>
    </div>
  );
}

export default Pin;