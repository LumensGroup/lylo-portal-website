import AddonsLayout from "@/bases/components/addons-layout";
import Icon from "@/bases/components/icon";
import StepInfoBar from "@/bases/components/steps";
import { UseAddonSeparation } from "@/bases/hooks";
import { DynamicAddon } from "@/bases/hooks/types";
import request from "@/bases/request";
import { RootState } from "@/bases/store/reducers";
import { AddonItem, CarDetails } from "@/bases/types";
import { formatTimeToUTC } from "@/bases/utils/dates";
import { Flex, Space } from "antd";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useMediaQuery } from "react-responsive";
import Addons from "./components/addons";
import CDW from "./components/cdw";
import SelectCarDetail from "./components/details";
import ImportantInfo from "./components/important-info";
import MoneyComponent from "./components/money";
import PickUp from "./components/pickup";
import { CollapseSummary, PriceOverLayInMobile } from "./components/summary";
import "./styles.scss";

const AddonsPage = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const dispatch = useDispatch();
  const { selectedCar } = useSelector((state: RootState) => state.selectedCar);
  const { selectedAddons } = useSelector(
    (state: RootState) => state.selectedAddons
  );
  const { searchData } = useSelector((state: RootState) => state.count);
  const [addonsList, setAddonsList] = useState<DynamicAddon[]>([]);
  const [previewDetail, setPreviewDetai] = useState<any>({});
  const [promoCodeList, setPromoCodeList] = useState<string[]>([]);
  const [promoCodeInputError, setPromoCodeInputError] = useState(false);
  const { cdwList, addons } = UseAddonSeparation(addonsList);

  const handlePromoCodeList = (code: string) => {
    console.log(code, "code------");
    const index = promoCodeList.indexOf(code);
    if (index !== -1) {
      const newPromoCodeList = promoCodeList.filter((item) => item !== code);
      setPromoCodeList(newPromoCodeList);
    } else {
      setPromoCodeList([...promoCodeList, code]);
    }
  };

  const getAddonsList = async () => {
    const addonsList = (await request.get("/addon/getlist")) as any;
    const { lists } = addonsList || {};

    lists?.forEach((item: { type: string | string[] }) => {
      if (item?.type.indexOf("CDW_BASIC") !== -1) {
        console.log(item);
        // dispatch(
        //   setOrAddAddon({
        //     selectedCdw: item,
        //   })
        // );
      }
    });
    setAddonsList(lists);
  };

  const formatFormatParams = (
    selectedCar: any,
    selectedAddons: any,
    searchData: any
  ): any => {
    const params: any = {
      details: [{ item_id: selectedCar.id }] as CarDetails[],
    };

    const { selectedCdw, selectedAddonsItemList, seatNumber } = selectedAddons;
    const { id, options } = selectedCdw;
    const addonCdw: AddonItem = {
      add_on_option_id: id,
      value: options?.[0]?.price || "",
      quantity: 1,
    };

    const addonItem: AddonItem[] =
      selectedAddonsItemList?.map(
        (item: { id: string; options: { price: string }[] }) => {
          console.log(id, typeof id, seatNumber, "seatNumber");
          return {
            add_on_option_id: item.id,
            value: item?.options[0]?.price || "",
            quantity: item.id === "6" ? seatNumber : 1,
          };
        }
      ) || [];

    const { return_time, collection_time } = searchData as {
      return_time: string;
      collection_time: string;
    };

    const formatVouchers = promoCodeList?.map((item) => ({
      code: item,
    }));

    const timeObj = {
      return_time: formatTimeToUTC(return_time),
      collection_time: formatTimeToUTC(collection_time),
    };
    const vouchers = {
      vouchers: formatVouchers,
    };

    params.add_on_options = [...addonItem, addonCdw] as AddonItem[];
    params.collection_location = {
      id: "0",
      address_full: "SAFRA Yishun",
      postal_code: "769027",
      built_in: true,
    };
    params.return_location = {
      id: "0",
      address_full: "SAFRA Yishun",
      postal_code: "769027",
      built_in: true,
    };

    return { ...searchData, ...params, ...timeObj, ...vouchers };
  };

  const getPreviewDetail = async () => {
    const params = formatFormatParams(selectedCar, selectedAddons, searchData);
    console.log(params, "params");

    // const params = {
    //   collection_time: "2024-03-30T09:00:00+08:00",
    //   return_time: "2024-04-02T15:00:00+08:00",
    // collection_location: {
    //   id: "0",
    //   address_full: "SAFRA Yishun",
    //   postal_code: "769027",
    //   built_in: true,
    // },
    // return_location: {
    //   id: "0",
    //   address_full: "SAFRA Yishun",
    //   postal_code: "769027",
    //   built_in: true,
    // },
    //   details: [
    //     {
    //       item_id: "1",
    //     },
    //   ],
    //   add_on_options: [
    //     {
    //       add_on_option_id: "9",
    //       value: "500",
    //       quantity: 1,
    //     },
    //     {
    //       add_on_option_id: "7",
    //       value: "300",
    //       quantity: 1,
    //     },
    //     {
    //       add_on_option_id: "1",
    //       value: "1800",
    //       quantity: 1,
    //     },
    //   ],
    //   vouchers: [
    //     {
    //       code: "saul_-1",
    //     },
    //   ],
    // };

    try {
      const data = await request.post("/order/preview", params);
      console.log(data, "data");
      setPreviewDetai(data);
    } catch (error) {
      if ((error as any).data.code === 600002) {
        console.log("----");
        setPromoCodeInputError(true);
      }
    }
  };

  useEffect(() => {
    getAddonsList();
  }, []);

  useEffect(() => {
    console.log(promoCodeList, "proCode");
    getPreviewDetail();
  }, [selectedAddons, promoCodeList]);

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
      <CollapseSummary
        previewDetail={previewDetail}
        handlePromoCodeInput={handlePromoCodeList}
        promoCodeInputError={promoCodeInputError}
        setPromoCodeInputError={setPromoCodeInputError}
      />
    </Space>
  );

  const MobileChildren = ({
    isVisible,
    onChange,
  }: {
    isVisible: boolean;
    onChange: () => void;
  }) => {
    return (
      <>
        <PriceOverLayInMobile
          onChange={onChange}
          isVisible={isVisible}
          previewDetail={previewDetail}
          handlePromoCodeInput={handlePromoCodeList}
          promoCodeInputError={promoCodeInputError}
          setPromoCodeInputError={setPromoCodeInputError}
        />
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
