import React from 'react'
import Navbar from "../components/Navbar";
// import Buttons from"../components/Buttons";
import Sidebar from '../components/Sidebar';
import MarksTable from"../components/MarksTable";
export default function student() {
  return (
    <>
    <Navbar/>
    <Sidebar/>
    <MarksTable/>
    </>
  );
}

