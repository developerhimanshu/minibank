import Appbar from "../components/appbar";
import Balance from "../components/balance";
import Users from "../components/users";

const Dashboard = () => {
  return (
    <div>
      <Appbar />
      <Balance balance="1000" />
      <Users />
    </div>
  );
};

export default Dashboard;
