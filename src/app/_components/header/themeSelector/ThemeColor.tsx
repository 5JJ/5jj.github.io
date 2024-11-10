type ThemeColorProps = { color: string; index: number };

const ThemeColor = (props: ThemeColorProps) => {
  const { color, index } = props;
  return (
    <div
      className="rounded-50 shadow-sm bg-white w-40 h-40 mb-5 p-5 ring-1 ring-black/5 scale-0 group-hover:scale-100"
      style={{
        transitionDuration: `${index * 50}ms`,
        transitionDelay: `${index * 50}ms`,
      }}
    >
      <div
        style={{ backgroundColor: color }}
        className="rounded-50 w-full h-full p-10"
      />
    </div>
  );
};

export default ThemeColor;
