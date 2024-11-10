import React, { useEffect, useState } from "react";
import mapboxgl from "mapbox-gl";

mapboxgl.accessToken =
  "pk.eyJ1IjoiYXl1c2gyMDA0IiwiYSI6ImNtMzlhNXlrZzB1YzUyaXF3aXBteml6YWYifQ.UE6LGRjWQ6OPdQvsQcuGgw";

const MapPage = () => {
  const [map, setMap] = useState(null);
  const [nearbyPlaces, setNearbyPlaces] = useState([]);
  const [searchLocation, setSearchLocation] = useState("");

  useEffect(() => {
    const mapInstance = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/streets-v11",
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
    if (event.key === "Enter") {
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
            alert("Location not found");
          }
        });
    }
  };

  return (
    <div
      style={{
        position: "relative",
        maxWidth: "1400px",
        margin: "20px auto",
        padding: "20px",
        backgroundColor: "#f8fafc",
        borderRadius: "16px",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      }}
    >
      <div
        style={{
          position: "relative",
          marginBottom: "20px",
        }}
      >
        <input
          type="text"
          placeholder="Search location..."
          value={searchLocation}
          onChange={(e) => setSearchLocation(e.target.value)}
          onKeyDown={handleSearch}
          style={{
            position: "absolute",
            top: "20px",
            right: "20px",
            padding: "12px 20px",
            width: "300px",
            borderRadius: "8px",
            border: "1px solid #e2e8f0",
            backgroundColor: "white",
            fontSize: "16px",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.05)",
            zIndex: 1,
            outline: "none",
            transition: "all 0.3s ease",
          }}
        />
        <div
          id="map"
          style={{
            width: "100%",
            height: "500px",
            borderRadius: "12px",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
            overflow: "hidden",
          }}
        ></div>
      </div>

      {nearbyPlaces.length > 0 && (
        <div
          style={{
            backgroundColor: "white",
            borderRadius: "12px",
            padding: "20px",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.05)",
          }}
        >
          <h2
            style={{
              fontSize: "20px",
              fontWeight: "600",
              marginBottom: "16px",
              color: "#1f2937",
            }}
          >
            Nearby Pharmacies
          </h2>
          <ul
            style={{
              listStyle: "none",
              margin: 0,
              padding: 0,
            }}
          >
            {nearbyPlaces.map((place) => (
              <li
                key={place.id}
                style={{
                  padding: "12px 16px",
                  borderBottom: "1px solid #e5e7eb",
                  color: "#374151",
                  fontSize: "16px",
                  display: "flex",
                  alignItems: "center",
                  transition: "background-color 0.2s ease",
                  cursor: "pointer",
                  borderRadius: "6px",
                  marginBottom: "8px",
                  backgroundColor: "#f9fafb",
                }}
              >
                <span
                  style={{
                    marginRight: "12px",
                    color: "#3b82f6",
                    fontSize: "20px",
                  }}
                >
                  💊
                </span>
                {place.text}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default MapPage;
