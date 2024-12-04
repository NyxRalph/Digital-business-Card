import React from "react";
import FaceBook from "../components/images/Facebook Icon.svg";
import Instagram from "../components/images/Instagram Icon.svg";
import Twitter from "../components/images/Bird Icon 376969.svg";
import LinkedIn from "../components/images/linkedin.svg";
import GitHub from "../components/images/GitHub.svg";

export default function Socials() {
  return (
    <div className="socials__logo">
      <img src={Twitter} alt="Twitter Logo" />
      <img src={FaceBook} alt="FaceBook Logo" />
      <img src={Instagram} alt="Instagram Logo" />
      <img src={LinkedIn} alt="LinkedIn Logo" />
      <img src={GitHub} alt="GitHub Logo" />
    </div>
  );
}
