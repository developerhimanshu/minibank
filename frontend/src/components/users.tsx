import { Dispatch, SetStateAction, useState } from "react";
import Button from "./button";
import { SendMoneyDialog } from "./sendMoneyDialog";

type userType = {
  firstName: string;
  lastName: string;
  _id: number;
};

const Users = () => {
  const [users, setUsers] = useState<userType[]>([
    {
      firstName: "Himanshu",
      lastName: "Singh",
      _id: 1,
    },
  ]);
  const [showSendMoneyDialog, setShowSendMoneyDialog] = useState(false);
  return (
    <>
      <div className="flex flex-col">
        <p className="font-bold">Users</p>
        <div className="my-2">
          <input
            type="text"
            placeholder="Search users.."
            className="w-full px-2 py-1 rounded border border-slate-200 outline-none"
          />
        </div>
        <div>
          {users.map((user) => {
            return (
              <User
                key={user._id}
                user={user}
                setShowSendMoneyDialog={setShowSendMoneyDialog}
              />
            );
          })}
        </div>
      </div>
      {showSendMoneyDialog && (
        <SendMoneyDialog onClose={setShowSendMoneyDialog} />
      )}
    </>
  );
};

const User = ({
  user,
  setShowSendMoneyDialog,
}: {
  user: userType;
  setShowSendMoneyDialog: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <div className="flex justify-between px-8">
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
            setShowSendMoneyDialog(true);
          }}
          label="Send Money"
        />
      </div>
    </div>
  );
};

export default Users;
