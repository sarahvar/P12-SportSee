import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SideNavBar from "./components/SideNav/SideNav";
import TopNavBar from "./components/TopNav/TopNav";
import ErrorPage from "./pages/Error/Error";
import HomePage from "./pages/Home/Home";
import UnderMaintenance from "./pages/UnderMaintenance/UnderMaintenance";
import Activity from '../src/components/Dashboard/ActivityCharts/Activity';

function App() {
  return (
    <BrowserRouter>
      <TopNavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/profil" element={<HomePage/>} />
        <Route path="/reglages" element={<UnderMaintenance/>} />
        <Route path="/communaute" element={<UnderMaintenance/>} />
        <Route path="/user/:id" component={Activity} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <SideNavBar />
    </BrowserRouter>
  );
}

export default App;
