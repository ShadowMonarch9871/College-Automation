import React from "react";
import Navbar from "../components/Navbar";
import "../App.css";
// import Buttons from"../components/Buttons";
import Sidebar from "../components/Sidebar";
// import MarksTable from"../components/MarksTable";
import Profile from "../components/Profile";
export default function student() {
  return (
    <>
      <Navbar />
      <div className="flexbox-container">
        <Sidebar />
        {/* <MarksTable/> */}
        <Profile />
      </div>
    </>
  );
}
