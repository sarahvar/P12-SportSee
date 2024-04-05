import HeaderDashboard from '../../components/Dashboard/HeaderDashboard/HeaderDashboard';
import Activity from '../../components/Dashboard/ActivityCharts/Activity';
import Objectifs from '../../components/Dashboard/Objectifs/Objectifs';
import RadarPerformance from '../../components/Dashboard/Radar/Radar';
import KeyPerformanceIndice from '../../components/Dashboard/KPI/KPI';
import UserNutrition from '../../components/Dashboard/NutritionKeyData/NutritionKeyData';

const User = () => {
  return (
    <>
    <HeaderDashboard />
<div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between'}}>
    <div style={{ display: 'flex', flexDirection: 'column',  height: '100%', width:'80%'}}>
      <Activity />
      <div style={{ display: 'flex', justifyContent: 'space-between', gap: '15px', marginTop: '35px' }}>
          <Objectifs />
          <RadarPerformance />
            <KeyPerformanceIndice />
      </div>
      </div>
      <div style={{ width:'20%' }}>
        <UserNutrition />
      </div>
    </div>
    </>
  );
};

export default User;
