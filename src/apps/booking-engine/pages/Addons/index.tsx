import AddonsLayout from "@/bases/components/addons-layout";
import Icon from "@/bases/components/icon";
import StepInfoBar from "@/bases/components/steps";
import request from "@/bases/request";
import { RootState } from "@/bases/store/reducers";
import { Flex, Space } from "antd";
import clsx from "clsx";
import { useEffect, useState } from "react";
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
} from "./components/summary";
import "./styles.scss";

interface DynamicAddon {
  [key: string]: any;
}

const AddonsPage = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const { selectedCar } = useSelector((state: RootState) => state.selectedCar);
  const [addonsList, setAddonsList] = useState<DynamicAddon[]>([]);

  const cdwList: DynamicAddon[] = [];
  const addons: DynamicAddon[] = [];
  addonsList?.forEach((item) => {
    if (item.type.indexOf("CDW") !== -1) {
      cdwList.push(item);
    } else {
      addons.push(item);
    }
  });

  const getAddonsList = async () => {
    const addonsList = (await request.get("/addon/getlist")) as any;
    const { lists } = addonsList || {};
    setAddonsList(lists);
  };

  useEffect(() => {
    getAddonsList();
  }, []);

  const LeftChildren = (
    <Space direction="vertical" size={16} className="left-area">
      <SelectCarDetail selectedCarDetail={selectedCar} />
      <CDW direction="horizontal" cdwList={cdwList} />
      <Addons addons={addons} />
      <ImportantInfo />
    </Space>
  );

  const RightChildren = (
    <Space direction="vertical" size={16} className="right-area">
      <PickUp />
      <CollapseSummary />
    </Space>
  );
  const PriceOverLay = ({
    onChange,
    isVisible,
  }: {
    isVisible: boolean;
    onChange: () => void;
  }) => {
    console.log(isVisible, "isVisible");
    return (
      <div className={clsx("drawer", { open: isVisible, close: !isVisible })}>
        <div className="price__overlay__header" onClick={onChange}>
          <h1>Price summary</h1>
          <Icon source="collaps_up_arrow" />
        </div>
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
                <RateDescLabel
                  rateName="CNY seasonal rate"
                  price="80"
                  day="1"
                />
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
      </div>
    );
  };
  const MobileChildren = ({
    isVisible,
    onChange,
  }: {
    isVisible: boolean;
    onChange: () => void;
  }) => {
    return (
      <>
        <PriceOverLay onChange={onChange} isVisible={isVisible} />
        <Space direction="vertical" size={16} style={{ width: "100%" }}>
          <SelectCarDetail selectedCarDetail={selectedCar} />
          <CDW direction="vertical" cdwList={cdwList} />
          <Addons addons={addons} />
          <ImportantInfo />
        </Space>
      </>
    );
  };

  const MobileAddons = () => {
    const [priceModuleVisible, setPriceModuleVisible] = useState(false);

    useEffect(() => {
      const layoutHeaderContent = document.querySelector(
        ".layout-header-container__content"
      ) as HTMLElement | null;
      if (layoutHeaderContent) {
        if (priceModuleVisible) {
          layoutHeaderContent.style.overflow = "hidden";
        } else {
          layoutHeaderContent.style.overflow = "scroll";
        }
      }
    }, [priceModuleVisible]);

    return (
      <>
        <StepInfoBar currentIndex={1} />
        <div className="add-ons__mobile__layout">
          {
            <MobileChildren
              isVisible={priceModuleVisible}
              onChange={() => setPriceModuleVisible(!priceModuleVisible)}
            />
          }
        </div>
        <div className="add-ons__footer">
          <Flex
            justify="space-between"
            onClick={() => setPriceModuleVisible(true)}
          >
            <Flex align="center" style={{ height: 28 }}>
              <div className="add-ons__title">Total price</div>
              <Icon source="collaps_down_arrow" className="down_arrow" />
            </Flex>
            <div>
              <MoneyComponent price="630" />
              <div>(incl.of GST)</div>
            </div>
          </Flex>
        </div>
      </>
    );
  };

  if (isMobile) {
    return <MobileAddons />;
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

export default AddonsPage;
