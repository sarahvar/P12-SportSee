
import HeaderDashboard from "../../components/Dashboard/HeaderDashboard/HeaderDashboard";
import Activity from "../../components/Dashboard/ActivityCharts/Activity";
import Objectifs from "../../components/Dashboard/Objectifs/Objectifs";
import RadarPerformance from "../../components/Dashboard/Radar/Radar";

const User = () => {
  return (
    <div>
      <HeaderDashboard />
      <Activity />
      <Objectifs/>
      <RadarPerformance/>
    </div>
  );
}

export default User;
