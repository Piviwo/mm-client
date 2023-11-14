import Map, {
  Marker,
  Popup,
  NavigationControl,
  FullscreenControl,
  ScaleControl,
  GeolocateControl
} from 'react-map-gl/maplibre';
import {useState, useMemo} from 'react';
import Pin from './Pin.jsx';
import CITIES from '../../data/data.json';

function CartoMap() {
  const [popupInfo, setPopupInfo] = useState(null);
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
          <Pin/>
        </Marker>
      )),
    []
  );

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
      {popupInfo && (
          <Popup
            anchor="top"
            longitude={Number(popupInfo.longitude)}
            latitude={Number(popupInfo.latitude)}
            onClose={() => setPopupInfo(null)}
          >
            <div>
              {popupInfo.name}
            </div>
            <img width="100%" src={popupInfo.image} />
          </Popup>
        )}
    </Map>
  );
}

export default CartoMap