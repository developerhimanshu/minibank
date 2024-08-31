import { useState } from "react";
import Button from "./button";

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
  return (
    <div className="flex flex-col">
      <p className="font-bold">Users</p>
      <div className="my-2">
        <input
          type="text"
          placeholder="Search users.."
          className="w-full px-2 py-1 rounded border-slate-200"
        />
      </div>
      <div>
        {users.map((user) => {
          return <User key={user._id} user={user} />;
        })}
      </div>
    </div>
  );
};

const User = ({ user }: { user: userType }) => {
  return (
    <div className="flex justify-between">
      <div className="flex gap-2">
        <div className="h-12 w-12 rounded-full bg-slate-200 flex items-center justify-center">
          <p>{user.firstName[0]}</p>
        </div>
        <div>
          {user.firstName} {user.lastName}
        </div>
      </div>
      <Button onClick={() => {}} label="Send Money" />
    </div>
  );
};

export default Users;
