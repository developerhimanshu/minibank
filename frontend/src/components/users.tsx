import { Dispatch, SetStateAction, useEffect, useState } from "react";
import Button from "./button";
import { SendMoneyDialog } from "./sendMoneyDialog";
import axios from "axios";

export type userType = {
  firstName: string;
  lastName: string;
  _id: number;
} | null;

type userPropType = {
  setShowSendMoneyDialog: Dispatch<SetStateAction<boolean>>;
  showSendMoneyDialog: boolean;
};

const Users = ({
  showSendMoneyDialog,
  setShowSendMoneyDialog,
}: userPropType) => {
  const [users, setUsers] = useState([]);
  const [filter, setFilter] = useState<string>("");
  const [toSendMoney, setToSendMoney] = useState<userType>(null);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/v1/user/bulk?filter=" + filter)
      .then((response) => {
        setUsers(response.data.user);
      });
  }, [filter]);
  return (
    <>
      <div className="flex flex-col">
        <p className="font-bold">Users</p>
        <div className="my-2">
          <input
            type="text"
            placeholder="Search users.."
            className="w-full px-2 py-1 rounded border border-slate-200 outline-none"
            onChange={(e) => {
              setFilter(e.target.value);
            }}
          />
        </div>
        <div>
          {users.map((user: userType) => {
            return (
              <User
                key={user!._id}
                user={user}
                setShowSendMoneyDialog={setShowSendMoneyDialog}
                setToSendMoney={setToSendMoney}
              />
            );
          })}
        </div>
      </div>
      {showSendMoneyDialog && (
        <SendMoneyDialog
          onClose={setShowSendMoneyDialog}
          toSendMoney={toSendMoney}
        />
      )}
    </>
  );
};

const User = ({
  user,
  setShowSendMoneyDialog,
  setToSendMoney,
}: {
  user: userType;
  setShowSendMoneyDialog: Dispatch<SetStateAction<boolean>>;
  setToSendMoney: Dispatch<SetStateAction<userType>>;
}) => {
  if (!user) return <></>;
  return (
    <div className="flex justify-between px-8 my-4 ">
      <div className="flex gap-2 items-center">
        <div className="h-12 w-12 rounded-full bg-slate-200 flex items-center justify-center">
          <p>{user.firstName[0]}</p>
        </div>
        <div>
          {user.firstName} {user.lastName}
        </div>
      </div>
      <div>
        <Button
          onClick={() => {
            setToSendMoney(user);
            setShowSendMoneyDialog(true);
          }}
          label="Send Money"
        />
      </div>
    </div>
  );
};

export default Users;
