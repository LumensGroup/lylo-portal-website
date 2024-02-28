import CarCard from "./components/carCard";
import "./styles.scss";
const SelectCarPage = () => {
  return (
    <div className="car-select_main-layout">
      <CarCard active={false} />
    </div>
  );
};

export default SelectCarPage;
