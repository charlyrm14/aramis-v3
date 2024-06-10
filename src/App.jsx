import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Reportes from "./pages/Reportes";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="reportes" element={<Reportes />} />
      </Routes>
    </>
  );
}

export default App;
