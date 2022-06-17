import React from "react";
import "../Resources/global.scss";
import "./Home.scss";

import MapPicture from "../images/2414.jpg";
import TestPicture from "../images/test.jpg";

export default function Home() {
  return (
    <>
      <div className="home-container">
        <div>
          <div className="flex justify-right mr-1">
            <div className="ml-1">
              <p className="heading-one">
                A group of web designers and full stack developers. We design
                and build beautiful websites for businesses around the globe. If
                you need a modern and powerful website, send us an email.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div id="work-examples" className="work-examples">
        Work Examples
      </div>
    </>
  );
}
