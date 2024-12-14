import React from "react";
import FaceBook from "../components/images/Facebook Icon.svg";
import Instagram from "../components/images/Instagram Icon.svg";
import Twitter from "../components/images/Bird Icon 376969.svg";
import LinkedIn from "../components/images/linkedin.svg";
import GitHub from "../components/images/GitHub.svg";

// import FaceBookLink from "../components/images/Facebook Icon.svg";
// import InstagramLink from "https://www.instagram.com/menz_andy/";
// import TwitterLink from "https://x.com/AndyRalphMenz";
// import LinkedInLink from "https://www.linkedin.com/in/andy-ralph-menz-32bb10259/";
// import GitHubLink from "https://github.com/NyxRalph";

export default function Socials() {
  return (
    <div className="socials__logo">
      <a href="https://x.com/AndyRalphMenz">
        <img className="Twitter Logo_social" src={Twitter} alt="Twitter Logo" />
      </a>
      <a href="https://web.facebook.com/profile.php?id=61559257813732">
        <img
          className="Facebook Logo_social"
          src={FaceBook}
          alt="FaceBook Logo"
        />
      </a>
      <a href="https://www.instagram.com/menz_andy/">
        <img
          className="Instagram Logo_social"
          src={Instagram}
          alt="Instagram Logo"
        />
      </a>
      <a href="https://www.linkedin.com/in/andy-ralph-menz-32bb10259/">
        <img
          className="LinkedIn Logo_social"
          src={LinkedIn}
          alt="LinkedIn Logo"
        />
      </a>
      <a href="https://github.com/NyxRalph?tab=overview&from=2024-12-01&to=2024-12-13">
        <img className="GitHub Logo_social" src={GitHub} alt="GitHub Logo" />
      </a>
    </div>
  );
}
