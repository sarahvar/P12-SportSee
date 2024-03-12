import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SideNavBar from "./components/SideNav/SideNav";
import TopNavBar from "./components/TopNav/TopNav";
import ErrorPage from "./pages/Error/Error";
import HomePage from "./pages/Home/Home";

function App() {
  return (
    <BrowserRouter>
      <TopNavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/profil" element={<HomePage/>} />
        <Route path="/reglage" element={<HomePage/>} />
        <Route path="/communaute" element={<HomePage/>} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <SideNavBar />
    </BrowserRouter>
  );
}

export default App;
