import './Activity.css';
import { USER_ACTIVITY } from "../../../mocks/data/activity";
import { useParams } from 'react-router-dom';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { ToolType } from './ToolType';
import iconWeight from "../../../assets/Activity-icons/Oval-Poids.svg";
import iconCaloriesBrulees from '../../../assets/Activity-icons/Oval-Calories-brulees.svg';
import { getData } from '../../../service/dataSwitch';
import { useState, useEffect } from 'react';
import { getUserActivity } from '../../../api/call';

const Activity = () => {
    const { id } = useParams()
    const [userData, setUserData] = useState([])
  
     useEffect(() => {
  
      // const useMockData = import.meta.env.REACT_APP_USE_MOCK_DATA === 'true';
      const dataChoice = getData();
  
      if(dataChoice === 'mocked') {    
        const data = USER_ACTIVITY.find((user) => user.userId == id)
  
        if(data) {
          let dataSessions = data.sessions.map((el, index) => ({
            day: index + 1,
            kilogram: el.kilogram,
            calories: el.calories
          }));
          setUserData(dataSessions)
        }
  
      } else if (dataChoice === 'api') { 
      getUserActivity(id)
        .then((data) => {
          setUserData(data);
        })
        .catch((error) => {
          console.log('An error occurred:', error);
        }); 
      }
    }, [id]);
    
    if(!userData || userData.length === 0) {
      return <div>Aucune donnée utilisateur trouvée</div>
    }
  
    return (
      <div className='legend'>
        <div className='legend__barChart'>
          <h1 className='legend__barChart__title'>Activité quotidienne</h1>
          <div className='legend__barChart__icons'>
            <div className='legend__barChart__icons__bullet'>
              <img src={iconWeight} alt='weight' />
              <span className='legend__barChart__icons__bullet__text'>Poids (kg)</span>
            </div>
            <div className='legend__barChart__icons__bullet'>
              <img src={iconCaloriesBrulees} alt='calories' />
              <span className='legend__barChart__icons__bullet__text'>Calories brûlées (kCal)</span>
            </div>
          </div>
        </div>
        <ResponsiveContainer height={320}>
          <BarChart data={userData} barGap={8} barCategoryGap={1} >
            <CartesianGrid strokeDasharray='1 1' vertical={false} />
            <XAxis dataKey='day' tickLine={false} tick={{fontSize: 14}} dy={15} stroke='1 1' />
            <YAxis yAxisId='kilogram' dataKey='kilogram' type='number' domain={['dataMin - 2', 'dataMax + 1']} tickCount="4" axisLine={false} orientation="right" tickLine={false} tick={{fontSize: 14}} dx={15} />
            <YAxis yAxisId='calories' dataKey='calories' type='number' domain={['dataMin - 20', 'dataMax + 10']} hide={true}  />
            <Tooltip content={<ToolType />} />
            <Bar yAxisId="kilogram" dataKey="kilogram" fill="#282D30" barSize={7} radius={[50, 50, 0, 0]}/>
            <Bar yAxisId="calories" dataKey="calories" fill="#E60000" barSize={7} radius={[50, 50, 0, 0]}/>
          </BarChart>
        </ResponsiveContainer>
      </div> 
    )
}

export default Activity;
