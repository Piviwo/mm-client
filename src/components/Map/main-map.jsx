import Map, {
  Marker,
  Popup,
  NavigationControl,
  FullscreenControl,
  ScaleControl,
  GeolocateControl
} from 'react-map-gl/maplibre';
import {useState, useEffect, useMemo, useCallback} from 'react';
import Pin from './Pins/pin.jsx';
import CITIES from '../../data/data.json';
import './main-map.css';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';

function MainMap({marker, setMarker, navigation}) {
  const [popupInfo, setPopupInfo] = useState(null);
  const [places, setPlaces] = useState([{}]);

  useEffect(() => {
    fetch('http://localhost:3000/api/places').then(
      response => response.json()
    ).then(data => {
      setPlaces(data)
    })
  }, [])

  const pins = useMemo(
    () =>
      CITIES.map((place, index) => (
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
          <Pin type={place.type}/>
        </Marker>
      )),
    []
  );

  const onMarkerDragEnd = useCallback(event => {
    setMarker({
      longitude: event.lngLat.lng,
      latitude: event.lngLat.lat,
    });
  }, []);

  return (
    <Map
      initialViewState={{
        longitude: 11.576124,
        latitude: 48.137154,
        zoom: 12
      }}
      style={{width: '100vw', height: '100vh'}}
      mapStyle="https://api.maptiler.com/maps/outdoor-v2/style.json?key=hInnHZLgrLFW1U6e6Wtv"
    >
      {pins}
      {navigation!='MAP' && (
        <Marker
        longitude={marker.longitude}
        latitude={marker.latitude}
        draggable={true}
        onDragEnd={onMarkerDragEnd}
      >
        <Pin type={"draggable-marker"}/>
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
              <p className="popup-info-text">{popupInfo.name}</p>
              <p className="popup-info-text">{popupInfo.type}</p>
            </div>
            <img width="100%" src={popupInfo.image} />
          </Popup>
        )}
    </Map>
  );
}

export default MainMap