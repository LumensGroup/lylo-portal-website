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
    item_images,
    market_price,
    item_features,
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
  const NumberWidgt = ({ number }: { number: number }) => {
    return <span style={{ margin: "0 4px" }}>{number}</span>;
  };

  const ToolTipContent = (isFiveSeater: boolean) => {
    return (
      <div className="tootip__content">
        <div className="tootip__content__title">
          {isFiveSeater ? 5 : 7} adults including driver or any of the
          combination:
        </div>
        <ul className="tootip__content__ul">
          <li> {isFiveSeater ? 2 : 4} adults + 3 kids without baby seats</li>
          <li>2 adults with {isFiveSeater ? 2 : 4} kids with baby seats</li>
        </ul>
      </div>
    );
  };

  const TooltioComponent = ({ seatNumber }: { seatNumber: string }) => {
    const isFiveSeater = seatNumber === "5" ? true : false;
    return (
      <Tooltip
        title={() => ToolTipContent(isFiveSeater)}
        placement="bottom"
        overlayClassName="tootip"
      >
        <span style={{ display: "flex" }}>
          <Icon
            source={"info"}
            className={"logo"}
            style={{ margin: "0px 4px" }}
          />
        </span>
      </Tooltip>
    );
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
          <NumberWidgt number={seatNumber} />
          <TooltioComponent seatNumber={seatNumber} />
        </div>
        {value && (
          <div className="car-card__item">
            <Icon source={"luggage"} className={"logo"} />
            <NumberWidgt number={value} />
          </div>
        )}
        <div className="car-card__item">
          <Icon source={"footprint"} className={"logo"} />
        </div>
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
