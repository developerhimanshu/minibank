const Heading = ({
  label,
  className,
}: {
  label: string;
  className?: string;
}) => {
  return <div className={`${className} font-bol text-4xl pt-6`}>{label}</div>;
};

export default Heading;
