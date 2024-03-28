import CustomizedCollapse from "@/bases/components/collapse";
import request from "@/bases/request";
import { RootState } from "@/bases/store/reducers";
import { AddonItem, CarDetails } from "@/bases/types";
import { formatTimeToUTC } from "@/bases/utils/dates";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import PromoCodeInput from "../promoInput";
import { BreakLine, Payment, Summary, TCTip } from "../summary";

const OthersCollapseSummary = ({ handlePromoCodeInput }: any) => {
  const [previewDetail, setPreviewDetai] = useState<any>({});
  const [promoCodeList, setPromoCodeList] = useState<string[]>([]);

  const [promoCodeInputError, setPromoCodeInputError] = useState(false);
  const { selectedCar } = useSelector((state: RootState) => state.selectedCar);
  const { selectedAddons } = useSelector(
    (state: RootState) => state.selectedAddons
  );
  const { searchData } = useSelector((state: RootState) => state.count);

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

  useEffect(() => {
    getPreviewDetail();
  }, [selectedAddons, promoCodeList]);

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
export default OthersCollapseSummary;
