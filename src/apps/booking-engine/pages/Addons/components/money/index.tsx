import "./styles.scss";
const MoneyComponent = ({
  price,
  style,
  minus = false,
}: {
  price: string;
  minus?: boolean;
  style?: React.CSSProperties;
}) => {
  return (
    <div className="lylo-money" style={style}>
      {minus && <span> - </span>}
      <span>S$&nbsp;</span>
      <span>{parseInt(price).toFixed(2)}</span>
    </div>
  );
};

export default MoneyComponent;
