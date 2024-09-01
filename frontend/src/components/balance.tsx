const Balance = ({ balance }: { balance: string }) => {
  return (
    <div className="font-semibold my-4 ml-4">Your balance Rs {balance}</div>
  );
};

export default Balance;
