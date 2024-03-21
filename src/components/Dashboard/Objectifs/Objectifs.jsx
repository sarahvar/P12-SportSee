import './Objectifs.css'
import { ResponsiveContainer, LineChart, Line, XAxis, Tooltip } from 'recharts';
import { USER_AVERAGE_SESSIONS } from '../../../mocks/data/averageSessions'
import { useParams } from 'react-router-dom';
import { getUserAverageSessions } from '../../../api/call';
import { useState, useEffect } from 'react';
import { getData } from '../../../service/dataSwitch'

const Objectifs = () => {

  const { userId  } = useParams()
  const [dataDay, setDataDay] = useState([])

  useEffect(() => {

    // const useMockData = import.meta.env.REACT_APP_USE_MOCK_DATA === 'true';
    const dataChoice = getData();

    if(dataChoice === 'mocked') {

      const data = USER_AVERAGE_SESSIONS.find((el) => el.userId == userId )
      console.log(data);

      if(data) {
        const dataDay = data.sessions.map((data) => {

          switch(data.day) {
            case 1:
              return {...data, day: 'L'}
            case 2: 
              return {...data, day: 'M'}
            case 3: 
              return {...data, day: 'M'}
            case 4: 
              return {...data, day: 'J'}
            case 5: 
              return {...data, day: 'V'}
            case 6: 
              return {...data, day: 'S'}
            case 7: 
              return {...data, day: 'D'}
          }
          
        });
        console.log(dataDay)
        setDataDay(dataDay);
      }

    } else if (dataChoice === 'api') { 
    getUserAverageSessions(userId )
      .then((data) => {
        setDataDay(data)
      })
      .catch((error) => {
        console.log('An error occurred', error);
      });
    }
  }, [userId]);

  return (
    <div className="container-line-graph">
      <h3 className="container-line-graph__title">Durée moyenne des sessions</h3>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={dataDay}
          margin={{top: 50, right: 5, left: 5, bottom: 16}} 
          strokeWidth={1}
        >    
        <XAxis
          dataKey='day' 
          type='category' 
          padding={{ left: 15, right: 15}}  
          tickLine={false} 
          stroke='red'
          tick={{ fontSize: 12, stroke: "white", opacity: 0.8}}
        />
        <Tooltip content={<CustomToolTip />} cursor={<CustomHover />} />
        <Line 
          type='monotone'
          dataKey='sessionLength'
          strokeWidth={2}
          activeDot={{
            background: "#FFFFFF",
            stroke: "rgba(255, 255, 255, 0.3)",
            strokeWidth: 10,
            r: 4,
          }}
          dot={{ r: 0 }}
          stroke='#fff'
        /> 
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

function CustomToolTip({ active, payload }) {
  if (active) {
    return (
      <div className="tooltip">
        <p>{`${payload[0].value}`} min</p>
      </div>
    );
  }
  return null;
}

const CustomHover = ({ points }) => {
  return (
    <rect
      x={points[0].x}
      y={0}
      height="100%"
      width="100%"
      fill="rgba(0, 0, 0, 0.1)"
    />
  );
};

export default Objectifs