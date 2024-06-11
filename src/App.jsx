import { Routes, Route } from "react-router-dom";

import Dashboard from "@pages/Dashboard/Dashboard";
import Reportes from "@pages/Reportes";
import Login from "@pages/Login/Login";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="reportes" element={<Reportes />} />
        <Route path="dashboard" element={<Dashboard />} />
      </Routes>
    </>
  );
}

export default App;
