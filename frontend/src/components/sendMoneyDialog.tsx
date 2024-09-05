import { Dispatch, SetStateAction, useState } from "react";
import { FaTimes } from "react-icons/fa";
import { userType } from "./users";
import axios from "axios";

export const SendMoneyDialog = ({
  onClose,
  toSendMoney,
}: {
  onClose: Dispatch<SetStateAction<boolean>>;
  toSendMoney: userType;
}) => {
  const handleOverlayClick = () => {
    onClose(false);
  };

  const [amount, setAmount] = useState<number>();

  const initiateTransfer = async () => {
    if (!toSendMoney) return;

    const data = {
      to: toSendMoney._id,
      amount: amount,
    };

    const userObj = localStorage.getItem("user");
    if (!userObj) return;
    const user = JSON.parse(userObj);
    if (!user) return;
    const res = await axios.post(
      "http://localhost:3000/api/v1/account/transfer",
      data,
      {
        headers: { Authorization: `Bearer ${user.token}` },
      }
    );
    if (res.status === 200) onClose(false);
  };
  const handleDialogClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevents the overlay click from being triggered when clicking inside the dialog
  };

  return (
    <div
      className="flex justify-center h-screen bg-gray-100/90 z-10 absolute top-0 w-full "
      onClick={handleOverlayClick}
    >
      <div
        className="h-full flex flex-col justify-center"
        onClick={handleDialogClick}
      >
        <div className="border h-min text-card-foreground max-w-md p-4 space-y-8 w-96 bg-white shadow-lg rounded-lg relative">
          <div className="flex items-center justify-center ">
            <div className="flex flex-col space-y-1.5 p-6">
              <h2 className="text-3xl font-bold text-center">Send Money</h2>
            </div>
            <FaTimes
              size={25}
              className="absolute right-3  top-3 cursor-pointer"
              onClick={() => {
                onClose(false);
              }}
            />
          </div>
          <div className="p-6">
            <div className="flex flex-col items-center space-x-4">
              <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center">
                <span className="text-2xl text-white">
                  {toSendMoney?.firstName[0].toUpperCase()}
                </span>
              </div>
              <h3 className="text-2xl font-semibold">
                {toSendMoney?.firstName + " " + toSendMoney?.lastName}
              </h3>
            </div>
            <div className="space-y-4">
              <div className="space-y-2">
                <label
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  htmlFor="amount"
                >
                  Amount (in Rs)
                </label>
                <input
                  type="number"
                  onChange={(e) => setAmount(parseInt(e.target.value))}
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                  id="amount"
                  placeholder="Enter amount"
                />
              </div>
              <button
                className="justify-center rounded-md text-sm font-medium ring-offset-background transition-colors h-10 px-4 py-2 w-full bg-green-500 text-white"
                onClick={initiateTransfer}
              >
                Initiate Transfer
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
