import { Routes, Route } from "react-router-dom";
import Layout from "./layout/components/Layout"
import Home from "./pages/Home"
import Reportes from "./pages/Reportes"

function App() {

  return (
    <>
      <Routes>
        <Route path="/">
        <Route index element={
            <Layout>
              <Home/>
            </Layout>
          }/>
        </Route>
        <Route path="reportes" element={
          <Layout>
            <Reportes/>
          </Layout>} 
        />
      </Routes>
    </>
  )
}

export default App
