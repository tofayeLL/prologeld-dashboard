"use client";

import {
  useLoadScript,
  GoogleMap,
  Marker,
  // Autocomplete,
} from "@react-google-maps/api";
import { useState, useRef, useCallback, useEffect } from "react";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const defaultCenter = {
  lat: 34.0209,
  lng: -6.8416,
};

type Props = {
  defaultLocation?: { address: string; latitude: number; longitude: number };
  onLocationSelect: (lat: number, lng: number, address: string) => void;
};

export default function LiveLocationMap ({
  onLocationSelect,
  defaultLocation,
}: Props) {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyA67631C8V946h8M9FhhEnrvPXETBVsQBk", // 🔒 Make sure to keep this private in production
    libraries: ["places"],
  });

  const [marker, setMarker] = useState<{ lat: number; lng: number } | null>(
    defaultLocation
      ? { lat: defaultLocation.latitude, lng: defaultLocation.longitude }
      : null
  );

  const [center, setCenter] = useState<{ lat: number; lng: number }>(
    defaultLocation
      ? { lat: defaultLocation.latitude, lng: defaultLocation.longitude }
      : defaultCenter
  );

  // const autocompleteRef = useRef<google.maps.places.Autocomplete | null>(null);
  const mapRef = useRef<google.maps.Map | null>(null);

  const onMapLoad = useCallback((map: google.maps.Map) => {
    mapRef.current = map;
  }, []);

  useEffect(() => {
    if (defaultLocation) {
      setMarker({
        lat: defaultLocation.latitude,
        lng: defaultLocation.longitude,
      });
      setCenter({
        lat: defaultLocation.latitude,
        lng: defaultLocation.longitude,
      });
    } else if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const lat = position.coords.latitude;
          const lng = position.coords.longitude;

          setMarker({ lat, lng });
          setCenter({ lat, lng });

          const geocoder = new google.maps.Geocoder();
          geocoder.geocode({ location: { lat, lng } }, (results) => {
            const address = results?.[0]?.formatted_address || "";
            onLocationSelect(lat, lng, address);
          });
        },
        (error) => {
          console.error("Geolocation error:", error);
        }
      );
    }
  }, [defaultLocation, onLocationSelect]);

/*   const handlePlaceChanged = () => {
    const place = autocompleteRef.current?.getPlace();
    if (place?.geometry?.location) {
      const lat = place.geometry.location.lat();
      const lng = place.geometry.location.lng();

      setCenter({ lat, lng });
      setMarker({ lat, lng });
      mapRef.current?.panTo({ lat, lng });

      const placeName = place.name || "";
      const geocoder = new google.maps.Geocoder();

      geocoder.geocode({ location: { lat, lng } }, (results) => {
        const address = results?.[0]?.formatted_address || "";
        const finalAddress = placeName ? `${placeName}, ${address}` : address;

        onLocationSelect(lat, lng, finalAddress);
      });
    }
  }; */

  const handleMapClick = async (e: google.maps.MapMouseEvent) => {
    const lat = e.latLng?.lat();
    const lng = e.latLng?.lng();
    if (lat && lng) {
      setMarker({ lat, lng });
      setCenter({ lat, lng });

      const geocoder = new google.maps.Geocoder();
      const { results } = await geocoder.geocode({ location: { lat, lng } });
      const address = results?.[0]?.formatted_address || "";

      onLocationSelect(lat, lng, address);
    }
  };

  if (!isLoaded) return <div>Loading map...</div>;

  return (
    <div className="bg-white p-6 rounded-2xl ">
       <h2 className="text-2xl font-semibold text-[#2D2D2D] mb-4">
        Live Location
      </h2>
       
    <div className="">
      {/* Optional: Button to manually trigger current location again */}
      {/* <button
        className="mb-2 px-4 py-2 bg-blue-500 text-white rounded"
        onClick={() => {
          if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
              const lat = position.coords.latitude;
              const lng = position.coords.longitude;
              setMarker({ lat, lng });
              setCenter({ lat, lng });
              const geocoder = new google.maps.Geocoder();
              geocoder.geocode({ location: { lat, lng } }, (results) => {
                const address = results?.[0]?.formatted_address || "";
                onLocationSelect(lat, lng, address);
              });
            });
          }
        }}
      >
        Use My Current Location
      </button> */}

     {/*  <Autocomplete
        onLoad={(ref) => (autocompleteRef.current = ref)}
        onPlaceChanged={handlePlaceChanged}
      >
        <input
          type="text"
          placeholder="Search a location"
          className="w-full mb-2 px-4 py-2 border rounded-lg"
        />
      </Autocomplete> */}

      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={14}
        onClick={handleMapClick}
        onLoad={onMapLoad}
      >
        {marker && <Marker position={marker} />}
      </GoogleMap>
    </div>
    </div>

  
  );
}