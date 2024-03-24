import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import HeaderDashboard from '../../components/Dashboard/HeaderDashboard/HeaderDashboard';
import Activity from '../../components/Dashboard/ActivityCharts/Activity';
import Objectifs from '../../components/Dashboard/Objectifs/Objectifs';
import RadarPerformance from '../../components/Dashboard/Radar/Radar';
import KeyPerformanceIndice from '../../components/Dashboard/KPI/KPI';
import NutritionKeyData from '../../components/Dashboard/NutritionKeyData/NutritionKeyData';
import caloriesIcon from '../../assets/Nutrition-icons/calories-icon.svg';
import proteinsIcon from '../../assets/Nutrition-icons/proteins-icon.svg';
import carbsIcon from '../../assets/Nutrition-icons/carbohydrates-icon.svg';
import lipidsIcon from '../../assets/Nutrition-icons/lipids-icon.svg';
import { getData } from '../../service/dataSwitch';
import { getAllDataUser } from "../../api/call"
import { USER_MAIN_DATA } from '../../mocks/data/informations';
const User = () => {
  const { userId } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    const dataChoice = getData();

    if (dataChoice === 'mocked') {
      const mockData = USER_MAIN_DATA.find((el) => el.id == userId);
      setData(mockData);
    } else if (dataChoice === 'api') {
      getAllDataUser(userId)
        .then((data) => {
          setData(data);
        })
        .catch((error) => {
          console.log('An error occurred:', error);
        });
    }
  }, [userId]);

  if (!data || data.length === 0) {
    return <div>Aucun utilisateur trouvé</div>;
  }

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
        <div style={{ marginRight: '100px', marginLeft: '100px' }}>
          <KeyPerformanceIndice />
        </div>
        <aside className="main__wrapper__graph-container__aside">
          <NutritionKeyData
            icon={caloriesIcon}
            infoEnergie={`${data.keyData.calorieCount / 1000}kCal`}
            text="Calories"
          />
          <NutritionKeyData
            icon={proteinsIcon}
            infoEnergie={`${data.keyData.proteinCount}g`}
            text="Proteines"
          />
          <NutritionKeyData
            icon={carbsIcon}
            infoEnergie={`${data.keyData.carbohydrateCount}g`}
            text="Glucides"
          />
          <NutritionKeyData
            icon={lipidsIcon}
            infoEnergie={`${data.keyData.lipidCount}g`}
            text="Lipides"
          />
        </aside>
      </div>
    </div>
  );
};

export default User;
