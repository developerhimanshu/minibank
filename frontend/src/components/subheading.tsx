export const SubHeading = ({
  label,
  className,
}: {
  label: string;
  className?: string;
}) => {
  return (
    <div className={`${className} text-slate-500 text-md pt-1 px-4 pb-4`}>
      {label}
    </div>
  );
};
