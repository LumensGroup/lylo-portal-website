import "./styles.scss";
import TotalPriceHeader from "@/bases/components/TotalPriceHeader";
import MoneyComponent from "../../../Addons/components/money";
import PromoCode from "../../../Addons/components/promoInput";
import { AvgRentalTip, BreakLine, Payment, PromoLabel, RateDescLabel, TCTip } from "../../../Addons/components/summary";
import CustomizedCollapse from "@/bases/components/collapse";

interface Description {
  label: string | JSX.Element;
  key: number;
  value: number | JSX.Element | undefined;
}

interface SummaryProps {
  descList: Description[];
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

const DriverPageSummary = () => {
  return (
    <CustomizedCollapse
      collapsed={true}
      header={
        <h1>
          Total price <summary></summary>
        </h1>
      }
      collapsedHeader={
        <TotalPriceHeader />
      }
    >
      <Payment />
      <TCTip />
      <BreakLine />
      <PromoCode />
      <BreakLine />
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
    </CustomizedCollapse>
  );
};


export { DriverPageSummary };
