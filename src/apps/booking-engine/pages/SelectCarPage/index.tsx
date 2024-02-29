import CarCard from "./components/car-card";
import ImportantInfo from "./components/important-info";
import Infomation from "./components/info";
import Select from "./components/select";
import "./styles.scss";
const SelectCarPage = () => {
  return (
    <div className="car-select_main-layout">
      <Select
        name="Car"
        multiple={true}
        options={[
          { value: "1", label: "gas" },
          { value: "2", label: "elec" },
        ]}
      />
      <Infomation content="The vehicle images shown are examples. Specific models within a car class may vary in availability." />
      <CarCard active={false} />

      <ImportantInfo />
    </div>
  );
};

export default SelectCarPage;
