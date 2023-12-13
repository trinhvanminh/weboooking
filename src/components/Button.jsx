const Button = ({ children }) => {
  return (
    <button className="flex h-10 place-items-center gap-1 rounded-full bg-gradient-to-r from-[#42E6FF] to-[#8b5ef7] px-4 text-white">
      <b>{children}</b>
    </button>
  );
};

export default Button;
