import React from "react";
import mail from "../components/images/Mail Icon.svg";

export default function DevInfo() {
  return (
    <div className="Info-wrapper">
      <div className="Info__container">
        <h3 className="Info__name">Ralph Andy Menz</h3>
        <p className="Info__para-1">Frontend Developer Enthusiast</p>
        <p className="Info__para-2">Contact me Through</p>
      </div>
      <a href="mailto:anndymenz@gmail.com">
        <div className="button__wrapper">
          <button className="email__button">
            <img className="email__logo" alt="email__logo" src={mail} />
            Email
          </button>
        </div>
      </a>
    </div>
  );
}
