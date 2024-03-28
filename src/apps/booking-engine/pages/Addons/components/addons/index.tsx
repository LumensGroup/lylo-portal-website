import CustomizedCollapse from "@/bases/components/collapse";
import Icon from "@/bases/components/icon";
import { setOrAddAddon } from "@/bases/store/reducers/selectAddons";
import { Checkbox, List, Space } from "antd";
import clsx from "clsx";
import { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { useMediaQuery } from "react-responsive";
import InnerSelect from "../inner-select";
import LocationInput from "../location-input";
import MoneyComponent from "../money";
import "./styles.scss";

const Addons = ({ addons }: { addons: any[] }) => {
  const [seatNumber, setSeatNumber] = useState(1);
  const [inputVisible, setInputVisible] = useState(false);
  const [selectedItems, setSelectedItems] = useState<any[]>([]);
  const [selectVisible, setSelectVisible] = useState(false);
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  const renderItem = (item: any, index: number) => {
    const priceStyle = {
      marginLeft: 30,
      ...(isMobile && { marginTop: 16 }),
    };

    const dispatch = useDispatch();
    const increment = () => {
      if (seatNumber >= 3) {
        return;
      }
      setSeatNumber((prevCount) => {
        const newCount = prevCount + 1;
        dispatch(setOrAddAddon({ seatNumber: newCount }));
        return newCount;
      });
    };
    const decrement = () => {
      if (seatNumber <= 0) {
        return;
      }
      setSeatNumber((prevCount) => {
        const newCount = prevCount - 1;
        dispatch(setOrAddAddon({ seatNumber: newCount }));
        return newCount;
      });
    };

    const selectItem = useCallback((index: number, e: any, item: any) => {
      const { type, id } = item;
      if (type === "ISLAND_WIDE_PICKUP_AND_DROP_OFF") {
        setSelectVisible(e.target.checked);
      }

      if (type === "CHILD_BOOSTER_SEAT") {
        setInputVisible(e.target.checked);
      }

      if (e.target.checked) {
        setSelectedItems((prevItems) => {
          const data = [...prevItems, item];
          dispatch(setOrAddAddon({ selectedAddonsItemList: data }));
          return data;
        });
      } else {
        setSelectedItems((prevItems) => {
          const data = prevItems.filter((item) => item.id !== id);
          dispatch(setOrAddAddon({ selectedAddonsItemList: data }));
          return data;
        });
      }
    }, []);

    const { name, options, type } = item;
    const isSeats = type === "CHILD_BOOSTER_SEAT";
    const price = String(options[0]?.price / 100);

    const Location = () => {
      const [selectedLocationItem, setSelectedLocationItem] = useState(1);

      const prefixPickUp = selectedLocationItem === 3 ? "Pick-up location" : "";
      const prefixDropUp =
        selectedLocationItem === 3 ? "Drop-off location" : "";
      const locationInput = (value: string) => {
        console.log(value, "value");
      };

      const selectLocationItem = (value: number) => {
        setSelectedLocationItem(value);
        // dispatch();
      };

      return (
        <Space size={16} direction="vertical" style={{ width: "100%" }}>
          <InnerSelect
            onSelect={(value: number) => {
              selectLocationItem(value);
            }}
          />
          <LocationInput
            prefix={prefixPickUp}
            onChange={(value: string) => locationInput(value)}
          />
          {selectedLocationItem === 3 && (
            <LocationInput
              prefix={prefixDropUp}
              onChange={(value: string) => locationInput(value)}
            />
          )}
        </Space>
      );
    };

    return (
      <>
        <List.Item className="add-ons__item">
          <Checkbox
            checked={selectedItems?.some(({ id }) => id === item.id)}
            className={clsx("checkbox-item")}
            onChange={(e) => selectItem(index, e, item)}
          >
            <div className="description">{name}</div>
          </Checkbox>

          {inputVisible && isSeats && (
            <div className="add-ons__inputNumber">
              <Icon
                source="minus"
                className={"operateButton"}
                handleClick={decrement}
              />
              <input type="text" className="input" value={seatNumber} />
              <Icon
                source="add"
                className={"operateButton"}
                handleClick={increment}
              />
            </div>
          )}
          <MoneyComponent price={price} style={priceStyle} />
        </List.Item>
        {selectVisible && item.id === "11" && <Location />}
      </>
    );
  };
  const AddonsList = ({ addons }: { addons: any[] }) => {
    return (
      <List
        dataSource={addons}
        renderItem={renderItem}
        className="add-ons__list"
      />
    );
  };

  return (
    <CustomizedCollapse header={<h1>Add-ons 2/2 </h1>}>
      <AddonsList addons={addons} />
    </CustomizedCollapse>
  );
};

export default Addons;
