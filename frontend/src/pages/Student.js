import React from "react";
import Navbar from "../components/Navbar";
// import Buttons from"../components/Buttons";
import Sidebar from "../components/Sidebar";
// import MarksTable from"../components/MarksTable";
import Profile from "../components/Profile";
export default function student() {
  return (
    <>
      <Navbar />

      {/* <MarksTable/> */}

      <div className="flexbox-container">
        <div>
          <Sidebar />
        </div>
        <div>
          <Profile/>
        </div>
      </div>
    </>
  );
}
