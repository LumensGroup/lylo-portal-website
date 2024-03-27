import CustomizedCollapse from "@/bases/components/collapse";
import Icon from "@/bases/components/icon";
import { Checkbox, List, Space } from "antd";
import clsx from "clsx";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import InnerSelect from "../inner-select";
import LocationInput from "../location-input";
import MoneyComponent from "../money";
import "./styles.scss";

const Location = () => {
  const [selectLocationItem, setSelectLocationItem] = useState(1);

  const prefixPickUp = selectLocationItem === 3 ? "Pick-up location" : "";
  const prefixDropUp = selectLocationItem === 3 ? "Drop-off location" : "";

  return (
    <Space size={16} direction="vertical" style={{ width: "100%" }}>
      <InnerSelect onSelect={(value: number) => setSelectLocationItem(value)} />
      <LocationInput prefix={prefixPickUp} />
      {selectLocationItem === 3 && <LocationInput prefix={prefixDropUp} />}
    </Space>
  );
};
const Addons = ({ addons }: { addons: any[] }) => {
  const [number, setNumber] = useState(1);

  const increment = () => {
    if (number >= 3) {
      return;
    }
    setNumber((prevCount: number) => prevCount + 1);
  };
  const decrement = () => {
    if (number <= 0) {
      return;
    }
    setNumber((prevCount) => prevCount - 1);
  };

  const TextArea = ({ addons }: { addons: any[] }) => {
    const renderItem = (item: any, index: number) => {
      const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
      const [selectVisible, setSelectVisible] = useState(false);

      const priceStyle = {
        marginLeft: 30,
        ...(isMobile && { marginTop: 16 }),
      };

      const { name, options, type } = item;
      const isSeats = type === "CHILD_BOOSTER_SEAT";
      const price = String(options[0]?.price / 100);

      const selectItem = (index: number, e: any, item: any) => {
        console.log(index, e.target.checked, item, "----");
        const { type } = item;
        if (type === "ISLAND_WIDE_PICKUP_AND_DROP_OFF") {
          setSelectVisible(e.target.checked);
        }
      };

      return (
        <>
          <List.Item className="add-ons__item">
            <Checkbox
              className={clsx("checkbox-item")}
              onChange={(e) => selectItem(index, e, item)}
            >
              <div className="description">{name}</div>
            </Checkbox>

            {isSeats && (
              <div className="add-ons__inputNumber">
                <Icon
                  source="minus"
                  className={"operateButton"}
                  handleClick={decrement}
                />
                <input type="text" className="input" value={number} />
                <Icon
                  source="add"
                  className={"operateButton"}
                  handleClick={increment}
                />
              </div>
            )}
            <MoneyComponent price={price} style={priceStyle} />
          </List.Item>
          {selectVisible && <Location />}
        </>
      );
    };

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
      <TextArea addons={addons} />
    </CustomizedCollapse>
  );
};

export default Addons;
