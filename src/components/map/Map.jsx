import Map from 'react-map-gl/maplibre';

function CartoMap() {
  return (
    <Map
      initialViewState={{
        longitude: 11.576124,
        latitude: 48.137154,
        zoom: 12
      }}
      style={{width: 800, height: 600}}
      mapStyle="https://api.maptiler.com/maps/outdoor-v2/style.json?key=hInnHZLgrLFW1U6e6Wtv"
    />
  );
}

export default CartoMap