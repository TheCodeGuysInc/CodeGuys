import React from "react";
import "../Resources/global.scss";
import "./Home.scss";

import MapPicture from "../images/2414.jpg";

export default function Home() {
  return (
    <div className="home-container">
      <div>
        <p className="heading-one">Hi, we are the code guys.</p>

        <div className="flex justify-between mr-1">
          <div className="ml-1">
            <p className="heading-two">
              A group of web designers and full stack developers. We design and
              build beautiful websites for businesses around the globe. If you
              need a modern and powerful website, send us an email.
            </p>
          </div>

          <div>
            <img className="map-image" src={MapPicture} alt="" />
          </div>
        </div>
      </div>

      <div>
        <p>test</p>
      </div>
    </div>
  );
}
