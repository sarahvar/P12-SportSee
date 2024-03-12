import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SideNavBar from "./components/SideNav/SideNav";
import TopNavBar from "./components/TopNav/TopNav";
import ErrorPage from "./pages/Error/Error";
import HomePage from "./pages/Home/Home";


function App() {
  return (
    <>
      <BrowserRouter>
        <TopNavBar>
          <Routes>
            <Route path="*" element={<ErrorPage />} />
            <Route path="/" element={<HomePage />} />
          </Routes>
        </TopNavBar>
        <SideNavBar/>
        <HomePage/>
      </BrowserRouter>
    </>
  );
}

export default App;
