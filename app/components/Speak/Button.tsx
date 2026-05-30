interface IButtonProps {
  handleClick: () => void;
  className?: string;
  children: React.ReactNode;
}

export const Button = ({ handleClick, children, className }: IButtonProps) => {
  return (
    <div
      onClick={handleClick}
      className={`w-15 h-15 sm:w-14 sm:h-14 flex items-center justify-center cursor-pointer hover:scale-105 transition-all rounded-full p-3 ${className || ""}`}
    >
      {children}
    </div>
  );
};
