import {Map, Marker,Popup} from 'react-map-gl/maplibre';
import {useState, useMemo, useCallback} from 'react';
import Pin from './Pins/pin.jsx';
import './main-map.css';
import pinakothekImage from '../../assets/pinakothek.jpeg';
import stockImage from '../../assets/stock-image.jpeg';
import barImage from '../../assets/stock-images/bar-image.png';
import cinemaImage from '../../assets/stock-images/cinema-image.png';
import museumImage from '../../assets/stock-images/museum-image.png';
import restaurantImage from '../../assets/stock-images/restaurant-image.png';
import theatreImage from '../../assets/stock-images/theatre-image.png';
import cafeImage from '../../assets/stock-images/cafe-image.png';

function MainMap({marker, setMarker, navigation, places, street, setStreet}) {
  const [popupInfo, setPopupInfo] = useState(null);

  const pins = useMemo(
    () =>
      places.map((place, index) => (
        <Marker
          key={`marker-${index}`}
          longitude={place.longitude}
          latitude={place.latitude}
          anchor="bottom"
          onClick={e => {
            e.originalEvent.stopPropagation();
            setPopupInfo(place);
          }}
        >
          <Pin type={place.type} className={'place'}/>
        </Marker>
      )),
    []
  );

  const onMarkerDragEnd = useCallback(event => {
    setMarker({
      longitude: event.lngLat.lng,
      latitude: event.lngLat.lat,
    });
    setStreet('Zieblandstr. 41, 80798 München');
  }, []);


  return (
    <Map
      initialViewState={{
        longitude: 11.576124,
        latitude: 48.137154,
        zoom: 12
      }}
      style={{width: '100vw', height: '100vh'}}
      mapStyle="https://api.maptiler.com/maps/streets-v2/style.json?key=hInnHZLgrLFW1U6e6Wtv"
    >
      {navigation!='PLACE' && pins}
      {navigation!='MAP' && (
        <Marker
          longitude={marker.longitude}
          latitude={marker.latitude}
          draggable={true}
          onDragEnd={onMarkerDragEnd}>
          <Pin type={"draggable-marker-blue"} className={'marker'}/>
        </Marker>
      )}
      {popupInfo && (
          <Popup
            anchor="top"
            longitude={Number(popupInfo.longitude)}
            latitude={Number(popupInfo.latitude)}
            onClose={() => setPopupInfo(null)}
            style={{maxWidth:'300px'}}
          >
            <div className="popup-info-textbox">
              {popupInfo.link ? (
                <a href={'//'+popupInfo.link} target="_blank"><h2 className="popup-info-text">{popupInfo.name}</h2></a>
              ): <p className="popup-info-text">{popupInfo.name}</p>}
              <p className="popup-info-text">{popupInfo.type}</p>
              <p className="popup-info-text-small">{popupInfo.address}</p>
            </div>
            <img width="100%" 
              src={
                popupInfo.name === 'Neue Pinakothek' ? pinakothekImage :
                popupInfo.type === 'bar' ? barImage :
                popupInfo.type === 'cinema' ? cinemaImage :
                popupInfo.type === 'museum' ? museumImage :
                popupInfo.type === 'restaurant' ? restaurantImage :
                popupInfo.type === 'cafe' ? cafeImage :
                popupInfo.type === 'theatre' ? theatreImage :
                stockImage
                }
              alt={popupInfo.type}
            />
          </Popup>
        )}
    </Map>
  );
}

export default MainMap