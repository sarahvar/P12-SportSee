import HeaderDashboard from '../../components/Dashboard/HeaderDashboard/HeaderDashboard';
import Activity from '../../components/Dashboard/ActivityCharts/Activity';
import Objectifs from '../../components/Dashboard/Objectifs/Objectifs';
import RadarPerformance from '../../components/Dashboard/Radar/Radar';
import KeyPerformanceIndice from '../../components/Dashboard/KPI/KPI';
import UserNutrition from '../../components/Dashboard/NutritionKeyData/NutritionKeyData';

const User = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <HeaderDashboard />
      <Activity />
      <div style={{ display: 'flex', justifyContent: 'space-between', gap: '15px' }}>
        <div>
          <Objectifs />
        </div>
        <div style={{ flex: 1, marginLeft: '447px', marginRight: '15px' }}>
          <RadarPerformance />
        </div>
        <div>
          <div style={{ paddingRight: "400px", paddingTop: "17px" }}>
            <KeyPerformanceIndice />
          </div>
        </div>
      </div>
      <div style={{ margin: '10px' }}>
        <UserNutrition />
      </div>
    </div>
  );
};

export default User;
