import {Map, Marker,Popup} from 'react-map-gl/maplibre';
import {useState, useMemo, useCallback} from 'react';
import Pin from './Pins/pin.jsx';
import './main-map.css';
import pinakothekImage from '../../assets/pinakothek.jpeg';
import stockImage from '../../assets/stock-image.jpeg';

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
              <a href={'//'+popupInfo.link} target="_blank"><p className="popup-info-text">{popupInfo.name}</p></a>
              <p className="popup-info-text">{popupInfo.type}</p>
              <p className="popup-info-text-small">{popupInfo.address}</p>
            </div>
            <img width="100%" src={popupInfo.name == 'Neue Pinakothek' ? pinakothekImage : stockImage} />
          </Popup>
        )}
    </Map>
  );
}

export default MainMap