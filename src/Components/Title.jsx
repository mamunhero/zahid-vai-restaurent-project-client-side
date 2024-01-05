
const Title = ({children}) => {
  return (
    <div className="border-s-8 border-orange-400 ps-3 relative">
      <h2 className="text-6xl font-bold">{children}</h2>
      <p className="text-5xl bottom-0 -z-10 opacity-5 absolute">{children}</p>
    </div>
  );
};

export default Title;