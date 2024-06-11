import { Routes, Route } from "react-router-dom";

import Home from "@pages/Home";
import Reportes from "@pages/Reportes";
import Login from "@pages/Login/Login";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="reportes" element={<Reportes />} />
        <Route path="home" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
