import "./App.css";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Student from "./pages/Student";
import Login from "./pages/Login";
function App() {
  return (
    <>
      <div className="wrapper">
        <BrowserRouter>
          <Routes>
            {/* <Route index element={<Login />} /> */}
            <Route index element={<Student/>} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}


export default App;
