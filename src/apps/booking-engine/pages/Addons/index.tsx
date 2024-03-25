import AddonsLayout from "@/bases/components/addons-layout";
import CustomizedCollapse from "@/bases/components/collapse";
import Icon from "@/bases/components/icon";
import StepInfoBar from "@/bases/components/steps";
import request from "@/bases/request";
import { RootState } from "@/bases/store/reducers";
import { Button, Flex, Space } from "antd";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useMediaQuery } from "react-responsive";
import Addons from "./components/addons";
import CDW from "./components/cdw";
import SelectCarDetail from "./components/details";
import ImportantInfo from "./components/important-info";
import MoneyComponent from "./components/money";
import PickUp from "./components/pickup";
import PromoCode from "./components/promoInput";
import {
  AvgRentalTip,
  BreakLine,
  CollapseSummary,
  Payment,
  PromoLabel,
  RateDescLabel,
  Summary,
  TCTip,
} from "./components/summary";
import "./styles.scss";

const SelectCarPage = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const { selectedCar } = useSelector((state: RootState) => state.selectedCar);
  console.log(selectedCar, "selectedCar");

  const getAddonsList = async () => {
    await request.get("/addon/getlist");
  };

  useEffect(() => {
    getAddonsList();
  }, []);

  const LeftChildren = (
    <Space direction="vertical" size={16} className="left-area">
      <SelectCarDetail selectedCarDetail={selectedCar} />
      <CDW direction="horizontal" />
      <Addons />
      <ImportantInfo />
    </Space>
  );

  const RightChildren = (
    <Space direction="vertical" size={16} className="right-area">
      <PickUp />
      <CollapseSummary />
    </Space>
  );

  const MobileChildren = (
    <Space direction="vertical" size={16} style={{ width: "100%" }}>
      <SelectCarDetail selectedCarDetail={selectedCar} />
      <CDW direction="vertical" />
      <Addons />
      <ImportantInfo />
    </Space>
  );

  const PriceOverLay = (
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
      <PromoCode />
      <BreakLine />
      <Payment />
    </CustomizedCollapse>
  );

  const MobileAddons = (
    <>
      <StepInfoBar currentIndex={1} />
      <div className="add-ons__mobile__layout">{MobileChildren}</div>{" "}
      <div className="add-ons__footer">
        <Flex justify="space-between">
          <Flex align="center" style={{ height: 28 }}>
            <div className="add-ons__title">Total price</div>
            <Icon source="collaps_down_arrow" className="down_arrow" />
          </Flex>
          <div>
            <MoneyComponent price="630" />
            <div>(incl.of GST)</div>
          </div>
        </Flex>
        <Button className="add-ons__checkout__button">Checkout</Button>
        <TCTip />
      </div>
    </>
  );

  if (isMobile) {
    return MobileAddons;
  }
  return (
    <>
      <StepInfoBar currentIndex={1} />
      <div className="add-ons__main__layout">
        <AddonsLayout
          LeftChildren={LeftChildren}
          RightChildren={RightChildren}
        />
      </div>
    </>
  );
};

export default SelectCarPage;
