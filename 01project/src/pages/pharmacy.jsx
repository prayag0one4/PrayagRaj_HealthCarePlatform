import React, { useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = 'pk.eyJ1IjoiYXl1c2gyMDA0IiwiYSI6ImNtMzlhNXlrZzB1YzUyaXF3aXBteml6YWYifQ.UE6LGRjWQ6OPdQvsQcuGgw';

const MapPage = () => {
  const [map, setMap] = useState(null);
  const [nearbyPlaces, setNearbyPlaces] = useState([]);
  const [searchLocation, setSearchLocation] = useState('');

  useEffect(() => {
    const mapInstance = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [78.9629, 20.5937],
      zoom: 4,
    });
    setMap(mapInstance);

    return () => mapInstance.remove();
  }, []);

  const fetchNearbyPlaces = (longitude, latitude) => {
    fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/pharmacy.json?proximity=${longitude},${latitude}&access_token=${mapboxgl.accessToken}`
    )
      .then((res) => res.json())
      .then((data) => {
        setNearbyPlaces(data.features);
      });
  };

  const handleSearch = (event) => {
    if (event.key === 'Enter') {
      fetch(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
          searchLocation
        )}.json?access_token=${mapboxgl.accessToken}`
      )
        .then((res) => res.json())
        .then((data) => {
          if (data.features.length > 0) {
            const [longitude, latitude] = data.features[0].center;
            map.flyTo({ center: [longitude, latitude], zoom: 12 });
            fetchNearbyPlaces(longitude, latitude);
          } else {
            alert('Location not found');
          }
        });
    }
  };

  return (
    <div style={{ position: 'relative' }}>
      <input
        type="text"
        placeholder="Search location"
        value={searchLocation}
        onChange={(e) => setSearchLocation(e.target.value)}
        onKeyDown={handleSearch}
        style={{
          position: 'absolute',
          top: '10px',
          right: '10px',
          padding: '5px',
          width: '200px',
          borderRadius: '5px',
          zIndex: 1,
        }}
      />
      <div id="map" style={{ width: '100%', height: '500px' }}></div>
      <ul>
        {nearbyPlaces.map((place) => (
          <li key={place.id}>{place.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default MapPage;
