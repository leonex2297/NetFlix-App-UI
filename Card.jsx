import React from "react";
import "./index.css"
function Card(prop) {
  return (
    <React.Fragment>
      <div className="cards">
        <div className="card">
          <img src={prop.imgsrc} alt="poster" className="card_img" />
          <div className="card_info">
            <span className="card_category">{prop.title} </span>
            <h3 className="card_title">{prop.sname}</h3>
            <a href={prop.link} target="_blank">
              <button className="btn">Watch Now</button>
            </a>
          </div>
        </div>
      </div>
    </React.Fragment>);
}
export default Card;