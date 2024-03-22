
import './Radar.css'
import { RadarChart, PolarGrid, PolarAngleAxis, Radar, ResponsiveContainer } from 'recharts';
import { USER_PERFORMANCE} from '../../../mocks/data/performance'
import { getUserPerformance } from '../../../api/call'
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getData } from '../../../service/dataSwitch'

const RadarPerformance = () => {

  const { userId } = useParams()
  const [radarData, setRadarData] = useState([])

  useEffect(() => {

    // const useMockData = import.meta.env.REACT_APP_USE_MOCK_DATA === 'true';
    const dataChoice = getData();

    if(dataChoice === 'mocked') {

      const radarData = USER_PERFORMANCE[0].data.map(item => ({
        kind: USER_PERFORMANCE[0].kind[item.kind],
        value: item.value
      }));
      setRadarData(radarData)
    } else if (dataChoice === 'api')
    getUserPerformance(userId)
      .then((data) => {
        setRadarData(data);
      })
      .catch((error) => {
        console.log('An error occurred:', error);
      });
  }, [userId]);

  if(!radarData || radarData.length === 0) {
    return <div>Aucun utilisateur trouvé</div>
  }

  return (
    <div className="container-radar">
    <ResponsiveContainer width="100%" height="100%">
      <RadarChart outerRadius={80} data={radarData}>
        <PolarGrid gridType='polygon' radialLines={false} />
        <PolarAngleAxis className='custom-axis' dataKey="kind"  tick={{ fill: "white", fontSize: 12 }} />
        <Radar dataKey="value" stroke="#000" fill="rgba(255, 1, 1, 0.70)" fillOpacity={0.6} />
      </RadarChart>
    </ResponsiveContainer>
    </div>
  );
};

export default RadarPerformance