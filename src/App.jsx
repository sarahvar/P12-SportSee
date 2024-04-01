import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ErrorPage from "./pages/Error/Error";
import HomePage from "./pages/Home/Home";
import UnderMaintenance from "./pages/UnderMaintenance/UnderMaintenance";
import User from "./pages/User/User";
import Layout from "./components/Layout/Layout";

function App() {
  return (
    <BrowserRouter>
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/profil" element={<HomePage/>} />
        <Route path="/reglages" element={<UnderMaintenance/>} />
        <Route path="/communaute" element={<UnderMaintenance/>} />
        <Route
          path="/user/:userId"
          element={
              <User />
          }
        />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;

