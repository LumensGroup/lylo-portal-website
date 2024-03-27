import Icon from "@/bases/components/icon";
import "./styles.scss";
const Infomation = ({
  content,
  style,
  carNumber,
}: {
  content: string;
  carNumber: number;
  style?: React.CSSProperties;
}) => {
  const SeatNumber = () => {
    return `${carNumber} car models available`;
  };
  return (
    <>
      <div className="info-wrapper" style={style}>
        <Icon source={"infomation"} className="infomation" />
        <span>{content}</span>
      </div>

      <div className="select-cars__action__title">{SeatNumber()}</div>
    </>
  );
};

export default Infomation;
