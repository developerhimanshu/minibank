type inputboxprops = {
  placeholder: string;
  label: string;
  type: string;
  onInputChange: (e: any) => void;
};
const InputBox = ({
  placeholder,
  type,
  label,
  onInputChange,
}: inputboxprops) => {
  return (
    <div className="w-full my-2">
      <p className="font-bold">{label}</p>
      <input
        type={type}
        placeholder={placeholder}
        onChange={onInputChange}
        className=" border-2 border-black rounded-md w-full py-2 px-1  outline-none "
      />
    </div>
  );
};

export default InputBox;
