import CustomizedCollapse from "@/bases/components/collapse";
import Icon from "@/bases/components/icon";
import { Flex } from "antd";
import clsx from "clsx";
import { useState } from "react";
import MoneyComponent from "../money";
import PromoCode from "../promoInput";
import "./styles.scss";

interface Description {
  label: string | JSX.Element;
  key: number;
  value: number | JSX.Element | undefined;
}

interface SummaryProps {
  descList: Description[];
}

interface PriceCardProps {
  tip: string;
  price: string;
  description: string | JSX.Element;
  isSelected?: boolean;
  onSelect: () => void;
}

const Summary: React.FC<SummaryProps> = ({ descList }) => {
  return (
    <div className="addons__summary">
      {descList?.map((item) => (
        <div key={item.key} className="summary__item">
          <div className="summary__label">{item.label}</div>
          {item.value && <div className="summary__value">{item.value}</div>}
        </div>
      ))}
    </div>
  );
};

const RateDescLabel = ({
  rateName,
  price,
  day,
}: {
  rateName: string;
  price: string;
  day?: string;
}) => {
  return (
    <div className="rate-desc__label">
      <div className="rate-desc__label__name">{rateName} </div>
      <div className="rate-desc__label__price">{`S$ ${price} x ${day} day(S)`}</div>
    </div>
  );
};

const CollapseSummary = () => {
  return (
    <CustomizedCollapse
      header={
        <h1>
          Price <summary></summary>
        </h1>
      }
    >
      <Summary
        descList={[
          {
            label: "Booking surcharge",
            key: 1,
            value: <MoneyComponent price="123" />,
          },
          {
            label: (
              <RateDescLabel rateName="Regular rate" price="100" day="6" />
            ),
            key: 2,
            value: <MoneyComponent price="123333" />,
          },
          {
            label: (
              <RateDescLabel rateName="CNY seasonal rate" price="80" day="1" />
            ),
            key: 3,
            value: <MoneyComponent price="12333" />,
          },
          {
            label: <PromoLabel percentage={10} />,
            key: 4,
            value: <MoneyComponent price="12333" minus />,
          },
        ]}
      />
      <AvgRentalTip price={10} />
      <BreakLine />

      <Payment />
      <BreakLine />
      <TCTip />
      <PromoCode />
    </CustomizedCollapse>
  );
};

const PromoLabel = ({ percentage }: { percentage: number }) => {
  return <div className="promo-label">{`PROMO${percentage}%`}</div>;
};

const BreakLine = () => {
  return <div className="break-line" />;
};

const AvgRentalTip = ({ price }: { price: number }) => {
  return (
    <div className="avg-rental">{`Avg. rental rate per day - $9${price}`}</div>
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

const Payment = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <>
      <PaymentCard
        tip="in full"
        key={1}
        price={"123"}
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
        price={"345"}
        description={
          <div className="desc">
            {
              "The rest ($315.00) will be charged during vehicle collection. No extra fees."
            }
          </div>
        }
        isSelected={selectedIndex === 2}
        onSelect={() => setSelectedIndex(2)}
      />
    </>
  );
};

export {
  AvgRentalTip,
  BreakLine,
  CollapseSummary,
  Payment,
  PromoLabel,
  RateDescLabel,
  Summary,
  TCTip,
};
