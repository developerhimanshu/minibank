const Appbar = ({ name }: { name: string }) => {
  return (
    <div className="shadow flex h-14 justify-between items-center">
      <p className="ml-4">MiniBank App</p>
      <div className="flex items-center gap-2">
        <p>Hello</p>
        <div className="h-12 w-12 bg-slate-200 mr-4 rounded-full flex items-center justify-center">
          {name[0]}
        </div>
      </div>
    </div>
  );
};

export default Appbar;
