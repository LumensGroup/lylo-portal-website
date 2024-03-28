import CustomizedCollapse from "@/bases/components/collapse";
import Icon from "@/bases/components/icon";
import { Button, Flex } from "antd";
import clsx from "clsx";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MoneyComponent from "../money";
import PromoCodeInput from "../promoInput";
import "./styles.scss";

interface Description {
  label: string | JSX.Element;
  key: number;
  value: number | JSX.Element | undefined;
}

interface SummaryProps {
  previewDetail: any;
  deletePromoCode: (value: string) => void;
}

interface PriceCardProps {
  tip: string;
  price: string;
  description: string | JSX.Element;
  isSelected?: boolean;
  onSelect: () => void;
}

const Summary: React.FC<SummaryProps> = ({
  previewDetail,
  deletePromoCode,
}) => {
  const { pricing_breakdown, total_price } = previewDetail;

  const descList = pricing_breakdown?.map(
    (item: { name: string; value: string; type: string; title: string }) => {
      const { name, value, type, title } = item;
      let labelComponent;
      switch (type) {
        case "PRICE_ENGINE_RULE":
          labelComponent = (
            <RateDescLabel rateName={name} price={value} title={title} />
          );
          break;
        case "DISCOUNT":
          labelComponent = (
            <PromoLabel
              name={name}
              deletePromoCode={() => deletePromoCode(name)}
            />
          );
          break;
        default:
          labelComponent = name;
      }
      return {
        label: labelComponent,
        value: <MoneyComponent price={value} minus={type === "DISCOUNT"} />,
      };
    }
  );

  descList?.push({
    label: "Total",
    value: <MoneyComponent price={total_price} />,
  });

  return (
    <div className="addons__summary">
      {descList?.map((item: any, index: number) => (
        <div key={index} className="summary__item">
          <div className="summary__label">{item.label}</div>
          {item.value && <div className="summary__value">{item.value}</div>}
        </div>
      ))}
      <AvgRentalTip price={total_price / 100} />
    </div>
  );
};

const RateDescLabel = ({
  rateName,
  title,
}: {
  rateName: string;
  price: string;
  title?: string;
}) => {
  return (
    <div className="rate-desc__label">
      <div className="rate-desc__label__name">{rateName} </div>
      <div className="rate-desc__label__price">{title}</div>
    </div>
  );
};

const CollapseSummary = ({
  previewDetail,
  handlePromoCodeInput,
  promoCodeInputError,
  setPromoCodeInputError,
}: any) => {
  const { total_price } = previewDetail;
  return (
    <CustomizedCollapse header={<h1>Price summary</h1>}>
      <Summary
        previewDetail={previewDetail}
        deletePromoCode={handlePromoCodeInput}
      />
      <BreakLine />
      <PromoCodeInput
        clearErrorStatus={() => setPromoCodeInputError(false)}
        promoCodeInputError={promoCodeInputError}
        setPromoCode={(value: string) => handlePromoCodeInput(value)}
      />
      <BreakLine />
      <Payment totalPrice={total_price} />
      <BreakLine />
      <TCTip />
    </CustomizedCollapse>
  );
};

const PriceOverLayInMobile = ({
  onChange,
  isVisible,
  previewDetail,
  handlePromoCodeInput,
  promoCodeInputError,
  setPromoCodeInputError,
}: any) => {
  const { total_price } = previewDetail || {};
  return (
    <div className={clsx("drawer", { open: isVisible, close: !isVisible })}>
      <div className="price__overlay__header" onClick={onChange}>
        <h1>Price summary</h1>
        <Icon source="collaps_down_arrow" />
      </div>
      <Summary
        previewDetail={previewDetail}
        deletePromoCode={handlePromoCodeInput}
      />

      <BreakLine />
      <PromoCodeInput
        clearErrorStatus={() => setPromoCodeInputError(false)}
        promoCodeInputError={promoCodeInputError}
        setPromoCode={(value: string) => handlePromoCodeInput(value)}
      />
      <BreakLine />
      <Payment totalPrice={total_price} />
    </div>
  );
};

const PromoLabel = ({
  name,
  deletePromoCode,
}: {
  name: string;
  deletePromoCode: () => void;
}) => {
  return (
    <div className="promo-label">
      {name}
      <Icon
        source="close"
        style={{ marginLeft: 4 }}
        handleClick={deletePromoCode}
      />
    </div>
  );
};

const BreakLine = () => {
  return <div className="break-line" />;
};

const AvgRentalTip = ({ price }: { price: number }) => {
  return (
    <div className="avg-rental">{`Avg. rental rate per day - S$${price.toFixed(
      2
    )}`}</div>
  );
};

const PaymentCard = ({
  price,
  description,
  tip,
  isSelected = false,
  onSelect,
}: PriceCardProps) => {
  return (
    <div
      className={clsx("payment-card__layout", { selected: isSelected })}
      onClick={onSelect}
    >
      <div className="payment-card__title">
        <Flex>
          {"Pay"}
          &nbsp;
          <MoneyComponent price={price} />
          &nbsp;
          <Flex className="payment-card__tip" align="center">
            &nbsp;
            {`(${tip})`}
          </Flex>
        </Flex>
        <Icon source={isSelected ? "check_circle" : "uncheck_circle"} />
      </div>
      <div className="payment-card__desc">{description}</div>
    </div>
  );
};

const TCTip = ({
  tcUrl,
  style,
}: {
  tcUrl?: string;
  style?: React.CSSProperties;
}) => {
  return (
    <div className="TC-tip" style={style}>
      By clicking Checkout, I acknowledge that I have read and agree to Lylo’s
      <a className="TC-link" target="_blank" rel="noreferrer" href={tcUrl}>
        Terms & Conditions.
      </a>
    </div>
  );
};

const Payment = ({ totalPrice }: { totalPrice: string }) => {
  const [selectedIndex, setSelectedIndex] = useState(1);

  const price = (parseInt(totalPrice) / 100).toString();
  const halfPrice = (parseInt(totalPrice) / 200).toString();

  const navigate = useNavigate();
  const handleContinue = () => {
    navigate("/driver-info");
  };

  return (
    <>
      <PaymentCard
        tip="in full"
        key={1}
        price={price}
        description={
          <Flex align="center">
            <Icon source="acute" className="acute" />
            <div className="desc" style={{ marginLeft: 9 }}>
              {"Faster vehicle collection!"}
            </div>
          </Flex>
        }
        isSelected={selectedIndex === 1}
        onSelect={() => setSelectedIndex(1)}
      />
      <PaymentCard
        tip="less upfront"
        key={2}
        price={halfPrice}
        description={
          <div className="desc">
            {`The rest (S$ ${parseInt(halfPrice).toFixed(
              2
            )}) will be charged during vehicle collection. No extra fees.`}
          </div>
        }
        isSelected={selectedIndex === 2}
        onSelect={() => setSelectedIndex(2)}
      />

      <Button className="payment-checkout__button" onClick={handleContinue}>
        Continue
      </Button>
      {/* <TCTip /> */}
    </>
  );
};

export {
  AvgRentalTip,
  BreakLine,
  CollapseSummary,
  Payment,
  PriceOverLayInMobile,
  PromoLabel,
  RateDescLabel,
  Summary,
  TCTip,
};
