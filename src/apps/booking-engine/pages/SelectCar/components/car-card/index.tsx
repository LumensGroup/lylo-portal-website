import Icon from "@/bases/components/icon";
import { Tooltip } from "antd";
import clsx from "clsx";
import "./styles.scss";

type CarCardProps = {
  active: boolean;
  item: any;
  onCardClick?: () => void;
};
const CarCard: React.FC<CarCardProps> = ({ active, onCardClick, item }) => {
  const {
    name,
    sale_price,
    categories,
    item_features,
    item_images,
    market_price,
  } = item as any;

  const currentItem = item_images?.find((item: { cover: boolean }) => {
    return item.cover === true;
  });
  const currentCategories = categories?.find((item: { type: string }) => {
    return item.type === "SEATING_TYPE";
  });

  const seatNumber = currentCategories?.name?.match(/\d+/)[0];
  const currentItemFeatures = item_features?.find(
    (item: { feature: { slug: string } }) => {
      return item?.feature?.slug === "luggages";
    }
  );

  const { image_url } = currentItem || {};
  const { value } = currentItemFeatures || {};

  const renderBasePrice = (marketPrice: string, salePrice: string) => {
    if (parseInt(marketPrice, 10) - parseInt(salePrice, 10) > 5) {
      return (
        <div className="car-card__footer__base__price">S$ {marketPrice}</div>
      );
    }
    return null;
  };

  return (
    <div
      className={clsx("car-card__layout", { isActive: active })}
      onClick={onCardClick}
    >
      <div className="car-card__title">{name}</div>
      <div className="car-card__subscription">
        <div className="car-card__item">
          <Icon source={"person"} className={"logo"} />
          <span style={{ margin: "0 4px" }}>{seatNumber}</span>
          <Tooltip title="prompt text" color={"#3762F6"} key={1}>
            <Icon
              source={"info"}
              className={"logo"}
              style={{ margin: "0px 4px" }}
            />
          </Tooltip>
        </div>
        {value && (
          <div className="car-card__item" style={{ margin: "0 20px" }}>
            <Icon source={"luggage"} className={"logo"} />
            <span style={{ margin: "0 4px" }}>{value}</span>
          </div>
        )}
        <Icon source={"footprint"} className={"logo"} />
      </div>
      <div className="car-card__img">
        <img src={image_url} alt="" />
      </div>
      <div className="car-card__footer">
        <div className={clsx("leftPrice", { isActive: true })}>
          {renderBasePrice(market_price, sale_price)}
          <span style={{ fontSize: 20 }}>S${sale_price / 100}</span>
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
