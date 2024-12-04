import React from "react";
import FaceBook from "../components/images/Facebook Icon.svg";
import Instagram from "../components/images/Instagram Icon.svg";
import Twitter from "../components/images/Bird Icon 376969.svg";
import LinkedIn from "../components/images/linkedin.svg";
import GitHub from "../components/images/GitHub.svg";

export default function Socials() {
  return (
    <div className="socials__logo">
      <img className="Twitter Logo_social" src={Twitter} alt="Twitter Logo" />
      <img className="Facebook Logo_social"src={FaceBook} alt="FaceBook Logo" />
      <img className="Instagram Logo_social"src={Instagram} alt="Instagram Logo" />
      <img className="LinkedIn Logo_social"src={LinkedIn} alt="LinkedIn Logo" />
      <img className="GitHub Logo_social"src={GitHub} alt="GitHub Logo" />
    </div>
  );
}
