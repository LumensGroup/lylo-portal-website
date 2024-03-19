import Icon from "@/bases/components/icon";
import { Space } from "antd";
import Infomation from "../Addons/components/info";
import Select from "../Addons/components/select";
import BreakLine from "./components/breakline";
import CarCard from "./components/car-card";
import "./styles.scss";
const AddonsPage = () => {
  const ActionBar = () => {
    return (
      <Space className="select-cars__actionBar" size={16} align="start">
        <Icon source="swap_vert" />
        <h2 className="">Sort by</h2>
        <Select
          name="Car"
          multiple={true}
          options={[
            { value: "1", label: "gas" },
            { value: "2", label: "elec" },
          ]}
        />
        <BreakLine direction="vertical" height="32px" color="#717171" />
        <Icon source="filter_alt" />
        <h2>Filter by</h2>
        <Select
          name="Car"
          multiple={true}
          options={[
            { value: "1", label: "gas" },
            { value: "2", label: "elec" },
          ]}
        />
        <Select
          name="Car"
          multiple={true}
          options={[
            { value: "1", label: "gas" },
            { value: "2", label: "elec" },
          ]}
        />
        <Select
          name="Car"
          multiple={true}
          options={[
            { value: "1", label: "gas" },
            { value: "2", label: "elec" },
          ]}
        />
      </Space>
    );
  };

  return (
    <div className="select-cars__layouts">
      <div>calendar</div>
      <ActionBar />
      <Infomation
        content="The vehicle images shown are examples. Specific models within a car class may vary in availability."
        style={{ width: "976px", marginTop: 8, marginBottom: 16 }}
      />
      <Space className="select-cars__content" wrap size={16}>
        {[1, 2, 3, 4, 5, 6, 6, 7, 8, 9, 10].map((index) => {
          return <CarCard active={false} key={index} />;
        })}
      </Space>
    </div>
  );
};
export default AddonsPage;
