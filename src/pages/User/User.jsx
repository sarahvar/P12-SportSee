import HeaderDashboard from "../../components/Dashboard/HeaderDashboard/HeaderDashboard";
import Activity from "../../components/Dashboard/ActivityCharts/Activity";
import Objectifs from "../../components/Dashboard/Objectifs/Objectifs";
import RadarPerformance from "../../components/Dashboard/Radar/Radar";
import KeyPerformanceIndice from "../../components/Dashboard/KPI/KPI";

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
        <div style={{ marginRight: '150px', marginLeft: '110px' }}>
          <KeyPerformanceIndice />
        </div>
      </div>
    </div>
  );
}

export default User;


