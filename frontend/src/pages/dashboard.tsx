import { useEffect, useState } from "react";
import Appbar from "../components/appbar";
import Balance from "../components/balance";
import Users from "../components/users";
import { useNavigate } from "react-router-dom";
import axios from "axios";

type currUserType = {
  name: string;
  token: string;
  id: string;
} | null;

const Dashboard = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<currUserType>(null);
  const [showSendMoneyDialog, setShowSendMoneyDialog] = useState(false);
  const [balance, setBalance] = useState(0);
  useEffect(() => {
    const userObj = localStorage.getItem("user");
    if (!userObj) {
      navigate("/signin");
      return;
    }
    const currUser = JSON.parse(userObj);
    setUser(currUser);
    console.log(currUser);
    const getBalance = async () => {
      const res = await axios.get(
        "http://localhost:3000/api/v1/account/balance",
        {
          headers: { Authorization: `Bearer ${currUser.token}` },
        }
      );
      setBalance(res.data.balance);
    };

    getBalance();
  }, [navigate, showSendMoneyDialog]);

  if (!user) return null;
  return (
    <div>
      <Appbar name={user.name} />
      <Balance balance={balance.toString()} />
      <Users
        setShowSendMoneyDialog={setShowSendMoneyDialog}
        showSendMoneyDialog={showSendMoneyDialog}
      />
    </div>
  );
};

export default Dashboard;
