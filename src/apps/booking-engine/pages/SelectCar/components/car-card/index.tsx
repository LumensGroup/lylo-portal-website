import Icon from "@/bases/components/icon";
import { Tooltip } from "antd";
import clsx from "clsx";
import "./styles.scss";

type CarCardProps = {
  active: boolean;
  onCardClick?: () => void;
};
const CarCard: React.FC<CarCardProps> = ({ active, onCardClick }) => {
  return (
    <div
      className={clsx("car-card__layout", { isActive: active })}
      onClick={onCardClick}
    >
      <div className="car-card__title">toyota</div>
      <div className="car-card__subscription">
        <div className="car-card__item">
          <Icon source={"person"} className={"logo"} />
          <span style={{ margin: "0 4px" }}>5</span>
          <Tooltip title="prompt text" color={"#3762F6"} key={1}>
            <Icon source={"info"} className={"logo"} />
          </Tooltip>
        </div>
        <div className="car-card__item" style={{ margin: "0 20px" }}>
          <Icon source={"frame"} className={"logo"} />
        </div>
        <Icon source={"footprint"} className={"logo"} />
      </div>
      <div className="car-card__img">
        <img src={require("@/bases/assets/imgs/Car model.jpg")} alt="" />
      </div>
      <div className="car-card__footer">
        <div className={clsx("leftPrice", { isActive: true })}>
          <span style={{ fontSize: 20 }}>S$123</span>
          <span style={{ fontSize: 14 }}>.00/day</span>
        </div>
        <div className="rightText">
          <Icon source="car_check" className="check-logo" />
          Free entry
        </div>
      </div>
    </div>
  );
};

export default CarCard;
