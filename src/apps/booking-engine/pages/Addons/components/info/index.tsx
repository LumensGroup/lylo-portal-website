import Icon from "@/bases/components/icon";
import "./styles.scss";
const Infomation = ({
  content,
  style,
}: {
  content: string;
  style?: React.CSSProperties;
}) => {
  return (
    <div className="info-wrapper" style={style}>
      <Icon source={"infomation"} className="infomation" />
      <span>{content}</span>
    </div>
  );
};

export default Infomation;
