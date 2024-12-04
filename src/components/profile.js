import React from "react";
import ProfilePic from "../components/images/ProfileThree.jpg";


export default function Profile() {
  return (

    <div className="profile">
      <img src={ProfilePic} alt="profile pic" className="profilePic" />
    </div>

  );
}
