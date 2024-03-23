import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getData } from '../../../service/dataSwitch';
import { USER_MAIN_DATA } from '../../../mocks/data/informations';
import { getUserInformation } from '../../../api/call';
import { ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const KeyPerformanceIndice = () => {
  const { userId } = useParams();
  const [score, setScore] = useState([]);

  useEffect(() => {
    const dataChoice = getData();

    if (dataChoice === 'mocked') {
      const selectedUser = USER_MAIN_DATA.find(user => user.id == userId);

      if (!selectedUser) {
        return <div>Utilisateur non trouvé</div>;
      }

      const { firstName, lastName } = selectedUser.userInfos;
      const { todayScore, score } = selectedUser;

      const data = [
        { name: `${firstName} ${lastName}`, value: todayScore || score },
        { name: 'Autres', value: 1 - (todayScore || score) } // Calcul du score restant
      ];
      setScore(data);
    } else if (dataChoice === 'api') {
      getUserInformation(userId)
        .then(data => {
          setScore(data);
        })
        .catch(error => {
          console.log('An error occurred:', error);
        });
    }
  }, [userId]);

  if (!score || score.length === 0) {
    return <div>Aucun utilisateur trouvé</div>;
  }

  return (
    <div className='container-keyPerformanceIndice'>
      <div className='chart-and-score-container'>
        <ResponsiveContainer width='50%' height={100}>
          <PieChart>
            <Pie
              data={score}
              cx='100%'
              cy='100%'
              innerRadius={75}
              outerRadius={100}
              paddingAngle={5}
              dataKey='value'
              labelLine={false}
            >
              {score.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={index === 0 ? '#ff0000' : '#fbfbfb'} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        <div className='container-keyPerformanceIndice__score-container'>
          <span className='container-keyPerformanceIndice__score-container__score'>
            {score[0].value * 100}% <br />
          </span>
          <span className='container-keyPerformanceIndice__score-container__text'>de votre </span>
          <br />
          <span className='container-keyPerformanceIndice__score-container__text'>objectif</span>
        </div>
      </div>
    </div>
  );
};

export default KeyPerformanceIndice;

