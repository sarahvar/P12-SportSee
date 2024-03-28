import { useParams } from "react-router-dom";
import { USER_MAIN_DATA } from "../../../mocks/data/informations";
import { getData } from "../../../service/dataSwitch";
import { useState, useEffect } from "react";
import { getUserInformation } from '../../../api/call';
import "./HeaderDashboard.css";

const HeaderDashboard = () => {
  const { userId } = useParams();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const dataChoice = getData();

        if (dataChoice === "mocked") {
          const data = USER_MAIN_DATA.find((user) => user.id === parseInt(userId));
          console.log("Données utilisateur (mocked) :", data);
          setUserData(data);
        } else if (dataChoice === "api") {
          const userData = await getUserInformation(userId);
          console.log("Données utilisateur (API) :", userData);
          setUserData(userData);
        }
      } catch (error) {
        console.log("An error occurred:", error);
      }
    };

    fetchData();
  }, [userId]);

  return (
    <header className="headerDashboard">
      <h1 className="headerDashboard__title">
        Bonjour{" "}
        <span className="headerDashboard__firstname">
          {userData ? userData.userInfos.firstName : ""}
        </span>
      </h1>
      <span className="headerDashboard__felicitations">
        Félicitations ! Vous avez explosé vos objectifs hier 👏
      </span>
    </header>
  );
};

export default HeaderDashboard;
