import React from "react";
import mapLogo from "../images/map_icon.png";

export default function Card(props) {
  return (
    <div className="card">
      <div className="photo-container">
        <img src={`../assets/${props.id}.jpg`} className="photo" alt="" />
      </div>
      <div className="content">
        <div className="location">
          <img src={mapLogo} alt="" className="pin"></img>
          <span className="country">{props.country}</span>
          <a
            target="blank"
            rel="noopener noreferrer"
            href={`https://www.google.com/maps/search/${props.title}`}
            className="google-maps"
          >
            View on Google Maps
          </a>
        </div>
        <h2 className="card-title">{props.title}</h2>
        <p className="description">{props.description}</p>
        <hr></hr>
      </div>
    </div>
  );
}
