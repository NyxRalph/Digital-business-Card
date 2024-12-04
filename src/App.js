import React from "react";
import DevInfo from "./components/info";
import Interest from "./components/interest";
import Socials from "./components/socials";
import Profile from "./components/profile";
import '../src/index.css'

export default function BusinessCard() {
  return (
    <>
    <link href="/src/index.css" />
    <div className="Business__card">
      <Profile />
      <DevInfo />
      <Interest />
      <Socials />
    </div>
    </>
  );
}
