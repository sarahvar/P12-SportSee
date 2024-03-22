import HeaderDashboard from "../../components/Dashboard/HeaderDashboard/HeaderDashboard";
import Activity from "../../components/Dashboard/ActivityCharts/Activity";
import Objectifs from "../../components/Dashboard/Objectifs/Objectifs";
import RadarPerformance from "../../components/Dashboard/Radar/Radar";

const User = () => {
  return (
    <div>
      <HeaderDashboard />
      <Activity />
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div style={{ marginRight: '15px' }}>
          <Objectifs />
        </div>
        <div style={{ marginLeft: '15px' }}>
          <RadarPerformance />
        </div>
      </div>
    </div>
  );
}

export default User;
