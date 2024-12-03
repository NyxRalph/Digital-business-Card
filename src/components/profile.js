import React from "react";
import ProfilePic from "../images/ProfileOne.jpeg";

export default function Profile() {
  return (
    <div className="profile">
      <img src={ProfilePic} alt="profile pic" className="profilePic" />
    </div>
  );
}
