import './NutritionKeyData.css';
import { getData } from '../../../service/dataSwitch';
import { getAllDataUser } from "../../../api/call";
import { USER_MAIN_DATA } from '../../../mocks/data/informations';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import caloriesIcon from '../../../assets/Nutrition-icons/calories-icon.svg';
import proteinsIcon from '../../../assets/Nutrition-icons/proteins-icon.svg';
import carbsIcon from '../../../assets/Nutrition-icons/carbohydrates-icon.svg';
import lipidsIcon from '../../../assets/Nutrition-icons/lipids-icon.svg';

const NutritionKeyData = ({ icon, infoEnergie, text }) => {
    return (
        <div className='keyData'>
            <img src={icon} alt={text} className="keyData__icon" />
            <div className='keyData__energie'>
                <span className="keyData__energie__number-energie">{infoEnergie}</span>
                <span className="keyData__energie__text-energie">{text}</span>
            </div>
        </div>
    );
};

const UserNutrition = () => {
    const { userId } = useParams();
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const dataChoice = getData();
            let userData = null;
            if (dataChoice === 'mocked') {
                userData = USER_MAIN_DATA.find((el) => el.id == userId);
            } else if (dataChoice === 'api') {
                try {
                    userData = await getAllDataUser(userId);
                } catch (error) {
                    console.log('An error occurred:', error);
                }
            }
            setData(userData);
        };
        fetchData();
    }, [userId]);

    if (!data) {
        return <div>Aucun utilisateur trouvé</div>;
    }

    return (
        <div>
            {/* Vos autres composants ici */}
            <aside className='main__wrapper__graph-container__aside'>
                <NutritionKeyData
                    icon={caloriesIcon}
                    infoEnergie={`${(data.keyData.calorieCount / 1000).toFixed(3).replace('.', ',')}kCal`}
                    text='Calories'
                />
                <NutritionKeyData
                    icon={proteinsIcon}
                    infoEnergie={`${data.keyData.proteinCount}g`}
                    text='Proteines'
                />
                <NutritionKeyData
                    icon={carbsIcon}
                    infoEnergie={`${data.keyData.carbohydrateCount}g`}
                    text='Glucides'
                />
                <NutritionKeyData
                    icon={lipidsIcon}
                    infoEnergie={`${data.keyData.lipidCount}g`}
                    text='Lipides'
                />
            </aside>
        </div>
    );
};

export default UserNutrition;
