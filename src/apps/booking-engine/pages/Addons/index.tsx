import AddonsLayout from "@/bases/components/addons-layout";
import Icon from "@/bases/components/icon";
import StepInfoBar from "@/bases/components/steps";
import { UseAddonSeparation } from "@/bases/hooks";
import { DynamicAddon } from "@/bases/hooks/types";
import request from "@/bases/request";
import { RootState } from "@/bases/store/reducers";
import { setOrAddAddon } from "@/bases/store/reducers/selectAddons";
import { Flex, Space } from "antd";
import clsx from "clsx";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
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

const AddonsPage = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const dispatch = useDispatch();
  const { selectedCar } = useSelector((state: RootState) => state.selectedCar);
  const { selectedAddons } = useSelector(
    (state: RootState) => state.selectedAddons
  );

  const [addonsList, setAddonsList] = useState<DynamicAddon[]>([]);
  const { cdwList, addons } = UseAddonSeparation(addonsList);

  const getAddonsList = async () => {
    const addonsList = (await request.get("/addon/getlist")) as any;
    const { lists } = addonsList || {};

    lists?.forEach((item: { type: string | string[] }) => {
      if (item?.type.indexOf("CDW_BASIC") !== -1) {
        console.log(item);
        dispatch(
          setOrAddAddon({
            selectedCdw: item,
          })
        );
      }
    });
    setAddonsList(lists);
  };

  const getPreviewDetail = async () => {
    const params1: any = {};
    params1.details = [{ item_id: selectedCar.id }];
    console.log(selectedAddons, "selectedAddons");
    const { selectedCdw, selectedAddonsItemList, seatNumber } = selectedAddons;
    const { id, options } = selectedCdw;
    const addonCdw = {
      add_on_option_id: id,
      value: options?.[0]?.price,
      quantity: 1,
    };
    console.log(selectedAddonsItemList, "selectedAddonsItemList");
    const addonItem = selectedAddonsItemList?.map(
      (item: { id: string; options: { price: string }[] }) => {
        console.log(id, typeof id, seatNumber, "seatNumber");
        return {
          add_on_option_id: item.id,
          value: item?.options[0].price,
          quantity: item.id === "6" ? seatNumber : 1,
        };
      }
    );
    addonItem.push(addonCdw);

    params1.add_on_options = addonItem;
    console.log(params1, "params1");

    const params = {
      collection_time: "2024-03-30T09:00:00+08:00",
      return_time: "2024-04-02T15:00:00+08:00",
      collection_location: {
        id: "0",
        address_full: "SAFRA Yishun",
        postal_code: "769027",
        built_in: true,
      },
      return_location: {
        id: "0",
        address_full: "SAFRA Yishun",
        postal_code: "769027",
        built_in: true,
      },
      details: [
        {
          item_id: "1",
        },
      ],
      add_on_options: [
        {
          add_on_option_id: "9",
          value: "500",
          quantity: 1,
        },
        {
          add_on_option_id: "7",
          value: "300",
          quantity: 1,
        },
        {
          add_on_option_id: "1",
          value: "1800",
          quantity: 1,
        },
      ],
      vouchers: [
        {
          code: "23223",
        },
      ],
    };
    await request.post("/order/preview", params);
  };

  useEffect(() => {
    getAddonsList();
  }, []);

  useEffect(() => {
    getPreviewDetail();
  }, [selectedAddons]);

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
          <Icon source="collaps_down_arrow" />
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
              <Icon source="collaps_up_arrow" className="down_arrow" />
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
