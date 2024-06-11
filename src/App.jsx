import { Routes, Route } from "react-router-dom";

import Home from "@pages/Home";
import Reportes from "@pages/Reportes";
import Login from "@pages/Login/Login";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="reportes" element={<Reportes />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
