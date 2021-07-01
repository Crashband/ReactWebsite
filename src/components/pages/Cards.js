import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";
import image9 from "../../images/img-9.jpg";
import image8 from "../../images/img-8.jpg";
import image7 from "../../images/img-7.jpg";
import image6 from "../../images/img-6.jpg";
import image5 from "../../images/img-5.jpg";

function Cards() {
  return (
    <div className="cards">
      <h1>Check out these EPIC destinations</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src={image9}
              text="Explore the hidden waterfall deep inside the Amazon Jungle"
              label="Adventure"
              path="/services"
            />
            <CardItem
              src={image8}
              text="I didn't check yet"
              label="Funny"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src={image7}
              text="Explore the hidden waterfall deep inside the Amazon Jungle"
              label="Adventure"
              path="/services"
            />
            <CardItem
              src={image6}
              text="I didn't check yet"
              label="Funny"
              path="/services"
            />
            <CardItem
              src={image5}
              text="I didn't check yet"
              label="Funny"
              path="/services"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
