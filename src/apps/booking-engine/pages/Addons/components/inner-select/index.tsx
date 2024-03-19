import Icon from "@/bases/components/icon";
import { Select } from "antd";
import "./styles.scss";
const InnerSelect = () => {
  const dropdownComponent = () => {
    return (
      <div className="addons-dropdown__menu">
        <div className="addons-dropdown__menu__item">1</div>
      </div>
    );
  };

  return (
    <Select
      defaultOpen={true}
      className="inner-select"
      options={[
        { value: 1, label: "hsdhsad " },
        { value: 2, label: "hsdhsad " },
      ]}
      suffixIcon={<Icon source="select-arrow" className={"select-arrow"} />}
      popupClassName="addons-dropdown"
    />
  );
};

export default InnerSelect;
