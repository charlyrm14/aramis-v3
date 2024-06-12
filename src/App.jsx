import { Routes, Route } from "react-router-dom";

import Dashboard from "@pages/Dashboard/Dashboard";
import Login from "@pages/Login/Login";
import InsuredSelect from "@pages/InsuredSelect/InsuredSelect";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="insuredSelect" element={<InsuredSelect />} />

      </Routes>
    </>
  );
}

export default App;
