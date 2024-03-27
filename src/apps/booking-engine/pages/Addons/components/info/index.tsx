import Icon from "@/bases/components/icon";
import "./styles.scss";
const Infomation = ({
  content,
  style,
  seatType,
}: {
  content: string;
  seatType: any;
  style?: React.CSSProperties;
}) => {
  const category = seatType["seating_category"];
  console.log(category);

  const SeatNumber = () => {
    if (category?.length === 2 || category?.length === 0) {
      return "all car models available";
    }
    return `${category[0]?.label?.match(/\d+/)} car models available`;
  };
  return (
    <>
      <div className="info-wrapper" style={style}>
        <Icon source={"infomation"} className="infomation" />
        <span>{content}</span>
      </div>
      {seatType && (
        <div className="select-cars__action__title">{SeatNumber()}</div>
      )}
    </>
  );
};

export default Infomation;
