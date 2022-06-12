import React from "react";
import star from "../images/star.png";

function Card(props) {
  const src = require(`../images/${props.coverImg}.png`);
  let badgeText;
  if (props.location === "Online") {
    badgeText = "Online";
  } else if (props.openSpots === 0) {
    badgeText = "Sold Out";
  }

  return (
    <div className="card">
      {badgeText && <div className="card--badge">{badgeText}</div>}
      {props.location === "online" && (
        <div className="card--badge">Sold Out</div>
      )}
      <img src={src} alt={props.title} className="card--image" />
      <div className="card--stats">
        <img src={star} alt="Stars" className="card--star" />
        <span className="card--rating">{props.stats.rating}</span>
        <span className="card--gray">({props.stats.reviewCount}) •&nbsp;</span>
        <span className="card--gray">{props.location}</span>
      </div>
      <p className="card--title">{props.title}</p>
      <p className="card--price">
        <span className="card--price_bold">From ${props.price}</span> / person
      </p>
    </div>
  );
}

export default Card;
