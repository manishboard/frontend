import React from "react";
import Sidebar from "assets/components/Sidebar";
import User from "assets/components/User";
import RightSection from "assets/components/RightSection";
import Main from "assets/components/Main";
import Navbar from "assets/components/Navbar";

export default function Home() {
  return (
    <div className="container">
      {/* <Navbar />       */}
      <Sidebar />
      <Main />
      {/* <User /> */}
      <RightSection />
    </div>
  );
}
