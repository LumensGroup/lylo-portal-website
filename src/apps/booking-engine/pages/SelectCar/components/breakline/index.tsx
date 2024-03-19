type BreakLineProps = {
  direction?: "horizontal" | "vertical";
  height?: string;
  color?: string;
};

const BreakLine: React.FC<BreakLineProps> = ({
  direction = "vertical",
  height = "1px",
  color = "#717171",
}) => {
  const style: React.CSSProperties = {
    width: direction === "horizontal" ? "100%" : "1px",
    height,
    backgroundColor: color,
  };

  return <div style={style} />;
};

export default BreakLine;
