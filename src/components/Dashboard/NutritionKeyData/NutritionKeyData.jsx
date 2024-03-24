import './NutritionKeyData.css'
//  import { useParams } from 'react-router-dom';
//  import { useState, useEffect } from 'react';
//  import { getUserInformation } from '../../../api/call';

const NutritionKeyData = ({icon, infoEnergie, text}) => {

//    const {userId } = useParams()
//    const [keyData, setKeyData] = useState([])

//    useEffect(() => {
//      getUserInformation(userId)
//        .then((data) => {
//          setKeyData(data);
//        })
//        .catch((error) => {
//          console.log('An error occurred:', error);
//    }); 
//    }, [userId]);

//    if(!keyData || keyData.length === 0) {
//      return <div>Aucun utilisateur trouvé</div>
//    }

  return (
    <div className='keyData'>
      <img src={icon} alt="Calories" className="keyData__icon"/>
      <div className='keyData__energie'>
          <span className="keyData__energie__number-energie">{infoEnergie}</span>
          <span className="keyData__energie__text-energie">{text}</span>
      </div>
    </div>
  )
}
export default NutritionKeyData;