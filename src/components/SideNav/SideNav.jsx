import iconZen from "../../assets/icon-zen.png";
import "./SideNav.css"


export default function SideNavBar() {
    return ( <div id="sidebar">
      <div className="sidebar_icon">
        <img src={iconZen} alt="icon-zen"></img>
      </div>
      <div className="topbar_right">
      </div>
    </div>
  );
  }