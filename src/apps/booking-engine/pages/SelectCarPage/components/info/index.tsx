import Icon from "@/bases/components/icon";
import "./styles.scss";
const Infomation = ({ content }: { content: string }) => {
  return (
    <div className="info-wrapper">
      <Icon source={"infomation"} className="infomation" />
      <span>{content}</span>
    </div>
  );
};

export default Infomation;
