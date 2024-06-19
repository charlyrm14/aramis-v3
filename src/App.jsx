import { Routes, Route } from "react-router-dom";
//Components
import Layout from "@components/Layout/Layout";
//Pages
import Dashboard from "@pages/Dashboard/Dashboard";
import Login from "@pages/Login/Login";
import InsuredSelect from "@pages/InsuredSelect/InsuredSelect";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="dashboard"
          element={
            <Layout>
              <Dashboard />
            </Layout>
          }
        />
        <Route
          path="insuredSelect"
          element={
            <Layout>
              <InsuredSelect />
            </Layout>
          }
        />
      </Routes>
    </>
  );
}

export default App;
