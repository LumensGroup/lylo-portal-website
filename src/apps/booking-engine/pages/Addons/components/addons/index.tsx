import CustomizedCollapse from "@/bases/components/collapse";
import Icon from "@/bases/components/icon";
import { Checkbox, List } from "antd";
import clsx from "clsx";
import { useState } from "react";
import InnerSelect from "../inner-select";
import MoneyComponent from "../money";
import "./styles.scss";

const data = [
  "Racing car sprays burning fuel into crowd.",
  "Japanese princess to wed commoner.",
  "Australian walks 100km after outback crash.",
  "Man charged over missing wedding girl.",
  "Los Angeles battles huge wildfires.",
];

const renderItem = () => {
  const [number, setNumber] = useState(1);
  const increment = () => {
    setNumber((prevCount) => prevCount + 1);
  };
  const decrement = () => {
    setNumber((prevCount) => prevCount - 1);
  };
  return (
    <List.Item className="add-ons__item">
      <Checkbox className={clsx("checkbox-item")}>
        <div className="description">123</div>
      </Checkbox>
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
      <MoneyComponent price="1233" style={{ marginLeft: 40 }} />
    </List.Item>
  );
};

const TextArea = () => {
  return (
    <List dataSource={data} renderItem={renderItem} className="add-ons__list" />
  );
};
const Addons = () => {
  return (
    <CustomizedCollapse header={<h1>Add-ons 2/2 </h1>}>
      <TextArea />
      <InnerSelect />
    </CustomizedCollapse>
  );
};

export default Addons;
