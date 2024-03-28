

import Activity from '../../components/Dashboard/ActivityCharts/Activity';
import Objectifs from '../../components/Dashboard/Objectifs/Objectifs';
import RadarPerformance from '../../components/Dashboard/Radar/Radar';
import KeyPerformanceIndice from '../../components/Dashboard/KPI/KPI';
import NutritionKeyData from '../../components/Dashboard/NutritionKeyData/NutritionKeyData';
import Layout from '../../components/Layout/Layout';


const User = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <Layout/>
      <Activity />
      <div style={{ display: 'flex', justifyContent: 'space-between'}}>
        <div style={{ marginRight: '15px' }}>
          <Objectifs />
        </div>
        <div style={{ marginLeft: '15px' }}>
          <RadarPerformance />
        </div>
        <div style={{ marginLeft: 'auto', marginRight: '15px' }}>
          <KeyPerformanceIndice />
        </div>
        <NutritionKeyData />
      </div>
    </div>
  );
};

export default User;

