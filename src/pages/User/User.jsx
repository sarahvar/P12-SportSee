
import HeaderDashboard from "../../components/Dashboard/HeaderDashboard/HeaderDashboard";
import Activity from "../../components/Dashboard/ActivityCharts/Activity";
import Objectifs from "../../components/Dashboard/Objectifs/Objectifs";


const User = () => {
  return (
    <div>
      <HeaderDashboard />
      <Activity />
      <Objectifs/>
    </div>
  );
}

export default User;
