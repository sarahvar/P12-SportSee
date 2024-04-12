import "./HeaderDashboard.css";
import { getData } from "../../../service/dataSwitch";
import { getUserById } from "../../../api/call";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { USER_MAIN_DATA } from "../../../mocks/data/informations";

const HeaderDashboard = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      // const useMockData = import.meta.env.REACT_APP_USE_MOCK_DATA === 'true';
      const dataChoice = getData();

      if (dataChoice === "mocked") {
        const mockData = USER_MAIN_DATA.find((el) => el.id == id);
        setData(mockData);
      } else if (dataChoice === "api") {
        try {
          const userData = await getUserById(id);
          setData(userData);
        } catch (error) {
          console.log("An error occurred:", error);
        }
      }
    };

    fetchData();
  }, [id]);

  if (!data || data.length === 0) {
    return <div>Aucun utilisateur trouvé</div>;
  }

  return (
    <header className="headerDashboard">
      <h1 className="headerDashboard__title">
        Bonjour{" "}
        <span className="headerDashboard__name">{data.userInfos.firstName}</span>
      </h1>
      <span className="headerDashboard__felicitations">
        Félicitations ! Vous avez explosé vos objectifs hier 👏
      </span>
    </header>
  );
};

export default HeaderDashboard;
