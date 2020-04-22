/*global google*/
import React, { useState } from "react";
import {
  GoogleMap,
  InfoWindow,
  Marker,
  withGoogleMap,
  withScriptjs,
} from "react-google-maps";

const API_KEY = "";
const MAP_URL = `https://maps.googleapis.com/maps/api/js?key=${API_KEY}&v=3.exp&libraries=geometry`;

const MapComp = withScriptjs(
  withGoogleMap((props) => (
    <GoogleMap
      defaultOptions={{ styles: "retro" }}
      defaultZoom={6}
      defaultCenter={{ lat: 41.8719, lng: 12.5674 }}
    >
      {props.children}
    </GoogleMap>
  ))
);

const Map = (props) => {
  const [state, setState] = useState({
    isOpen: 0,
    infoIndex: null,
  });

  const handleToggleOpen = (index) => {
    setState({
      isOpen: true,
      infoIndex: index,
    });
  };

  const handleToggleClose = () => {
    setState({
      isOpen: false,
      infoIndex: null,
    });
  };

  return (
    <MapComp
      googleMapURL={MAP_URL}
      loadingElement={<div style={{ height: `100%` }} />}
      containerElement={<div style={{ height: `100vh` }} />}
      mapElement={<div style={{ height: `100%` }} />}
      center={{ lat: 41.8719, lng: 12.5674 }}
    >
      {props.cordinates.map((item, index) => (
        <Marker
          key={index}
          position={{ lat: parseFloat(item.lat), lng: parseFloat(item.long) }}
          options={{
            icon: {
              url: "https://image.flaticon.com/icons/svg/2659/2659980.svg",
              scaledSize: new google.maps.Size(25, 25),
            },
          }}
          onMouseOver={() => handleToggleOpen(index)}
          onMouseOut={() => handleToggleClose()}
        >
          {state.infoIndex === index && (
            <InfoWindow onCloseClick={handleToggleClose}>
              <div>
                <h6 style={{ textAlign: "center" }}>
                  {item.denominazione_provincia}
                </h6>
                <h5>
                  Totale Casi:{" "}
                  <span className="text-danger"> {item.totale_casi}</span>
                </h5>
              </div>
            </InfoWindow>
          )}
        </Marker>
      ))}
    </MapComp>
  );
};

export default Map;