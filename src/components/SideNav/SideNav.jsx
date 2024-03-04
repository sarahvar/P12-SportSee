import iconZen from "../../assets/icon-zen.png";
import iconSwim from "../../assets/icon-swim.png";
import iconBike from "../../assets/icon-bike.png";
import iconWeight from "../../assets/icon-weight.png";
import "./SideNav.css"


export default function SideNavBar() {
    return ( <div id="sidebar_wrapper">
      <div className="sidebar_icon">
        <img src={iconZen} alt="icon-zen"></img>
        <img src={iconSwim} alt="icon-swim"></img>
        <img src={iconBike} alt="icon-bike"></img>
        <img src={iconWeight} alt="icon-weight"></img>
      </div>
      <div className="copyright">
        <p>Copyright, SportSee 2020</p>
      </div>
    </div>
  );
  }