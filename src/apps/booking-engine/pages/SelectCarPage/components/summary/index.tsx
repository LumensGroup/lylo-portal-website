import CustomizedCollapse from "@/bases/components/collapse";
import Icon from "@/bases/components/icon";
import { Button, Flex, Typography } from "antd";
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
  title: string;
  price: number | JSX.Element;
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
      <TCTip />
      <Payment />
      <BreakLine />
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
  title,
  price,
  description,
  isSelected = false,
  onSelect,
}: PriceCardProps) => {
  return (
    <div
      className={clsx("payment-card__layout", { selected: isSelected })}
      onClick={onSelect}
    >
      <div className="payment-card__title">
        {title}
        <Icon source={isSelected ? "check_circle" : "uncheck_circle"} />
      </div>
      <div className="payment-card__price">{price}</div>
      <div className="payment-card__desc">{description}</div>
      {isSelected && <Button>Checkout</Button>}
    </div>
  );
};

const TCTip = ({ tcUrl }: { tcUrl?: string }) => {
  return (
    <div className="TC-tip">
      By clicking Checkout, I acknowledge that I have read and agree to Lylo’s
      <a className="TC-link" target="_blank" rel="noreferrer" href={tcUrl}>
        Terms & Conditions.
      </a>
    </div>
  );
};

const PaymentContent = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <>
      {[
        {
          title: "Pay in full",
          price: <MoneyComponent price={"630"} />,
          desc: (
            <Flex align="center">
              <Icon source="acute" className="acute" />
              <div style={{ marginLeft: 9 }}>
                {"Faster vehicle collection!"}
              </div>
            </Flex>
          ),
        },
        {
          title: "Pay in less upfront",
          price: (
            <Flex align="center">
              <MoneyComponent price={"630"} />{" "}
              <span style={{ fontWeight: 400, fontSize: 14, marginLeft: 4 }}>
                now
              </span>
            </Flex>
          ),
          desc: "The rest ($315.00) will be charged during vehicle collection. No extra fees.",
        },
      ].map(({ title, price, desc }, index) => {
        return (
          <PaymentCard
            key={index}
            title={title}
            price={price}
            description={desc}
            isSelected={selectedIndex === index}
            onSelect={() => setSelectedIndex(index)}
          />
        );
      })}
    </>
  );
};

const Payment = () => {
  return (
    <CustomizedCollapse
      header={<Typography.Title level={2}>Payment</Typography.Title>}
      style={{
        padding: "16px",
        background: "#F2F5FF",
      }}
    >
      <PaymentContent />
    </CustomizedCollapse>
  );
};

export { BreakLine, CollapseSummary, Payment, PromoLabel, Summary, TCTip };
