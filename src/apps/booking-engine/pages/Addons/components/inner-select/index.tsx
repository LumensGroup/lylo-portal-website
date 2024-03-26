import Icon from "@/bases/components/icon";
import { Select } from "antd";
import "./styles.scss";
const InnerSelect = ({ onSelect }: any) => {
  return (
    <Select
      className="inner-select"
      placeholder="please select your location"
      options={[
        { value: 1, label: "Pickup ONLY" },
        { value: 2, label: "Drop-off ONLY" },
        { value: 3, label: "Pickup & Drop-off(round trip)" },
      ]}
      suffixIcon={<Icon source="select-arrow" className={"select-arrow"} />}
      popupClassName="addons-dropdown"
      onSelect={onSelect}
    />
  );
};

export default InnerSelect;
