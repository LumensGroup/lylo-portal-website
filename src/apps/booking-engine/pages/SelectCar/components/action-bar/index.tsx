import Icon from "@/bases/components/icon";
import { Checkbox, Flex } from "antd";
import { Popup, Slider } from "antd-mobile";
import { useState } from "react";
import BreakLine from "../breakline";
import "./styles.scss";

type Option = {
  label: string;
  value: number;
};
interface CardProps {
  title: string;
  options: Option[];
  name?: string;
  handleFilter: (name: string, value: any) => void;
  handleSort?: () => void;
}

const seatOptions = [
  { label: "5 seater", value: 1 },
  { label: "7 seater", value: 2 },
];
const vehicleTypeOptions = [
  { label: "Hybrid", value: 3 },
  { label: "Electric", value: 4 },
  { label: "Plug-in Hybrid", value: 5 },
];

const PopupContent = ({ handleFilter }: any) => {
  const [priceRange, setPriceRange] = useState<number[]>([0, 0]);

  const toastValue = (value: number | number[]) => {
    const formatValue = (value as number[])?.map((item) => {
      return {
        value: item,
      };
    });

    handleFilter("sale_price", formatValue);
    setPriceRange(value as number[]);
  };
  return (
    <div className="mobile-action__card__content">
      <div className="mobile-action__card__maintitle">
        <Icon source="filter_alt" />
        Filter by
      </div>
      <div className="mobile-action__card__title" style={{ marginTop: 24 }}>
        Price range
      </div>
      <div className="mobile-action__card__price">{`S$${priceRange?.[0]} - S$${priceRange?.[1]}`}</div>
      <Slider
        range
        icon={<Icon source="slide_handle" />}
        onAfterChange={toastValue}
      />
      <Card title="Seats" options={seatOptions} handleFilter={handleFilter} />
      <Card
        title="Vehicle type"
        options={vehicleTypeOptions}
        handleFilter={handleFilter}
      />
    </div>
  );
};

const Card = ({ title, options, handleFilter }: CardProps) => {
  const onChange = (value: number[]) => {
    const resultArray = value.map((value) => ({ value }));
    const mapping: { [key: string]: string } = {
      Seats: "seating_category",
      "Vehicle type": "vehicle_type_category",
    };
    handleFilter(mapping[title], resultArray);
  };
  return (
    <div>
      <div className="mobile-action__card__title">{title}</div>
      <div className="mobile-action__card__item">
        {" "}
        <Checkbox.Group onChange={onChange} options={options} />
      </div>
    </div>
  );
};

const MobileActionBar = ({ handleSort, handleFilter }: any) => {
  const [visible, setVisible] = useState(false);
  const [sortParam, setSortParam] = useState("DESC");

  const sort = () => {
    if (sortParam === "DESC") {
      setSortParam("ASC");
    } else {
      setSortParam("DESC");
    }
    handleSort(sortParam);
  };

  return (
    <>
      <Flex className="mobile-action__bar">
        <Flex className="flex-item" onClick={sort}>
          <Icon source="swap_vert" className="icon" />
          <div className="action__title">Sort</div>
          <div className="point" />
        </Flex>
        <BreakLine height={"20px"} />
        <Flex className="flex-item" onClick={() => setVisible(true)}>
          <Icon source="filter_alt" className="icon" />
          <div className="action__title">Filter</div>
        </Flex>
      </Flex>
      <Popup
        bodyClassName="mobile-action__popup"
        visible={visible}
        onMaskClick={() => {
          setVisible(false);
        }}
        onClose={() => {
          setVisible(false);
        }}
        bodyStyle={{ height: "50vh" }}
      >
        <PopupContent handleFilter={handleFilter} />
      </Popup>
    </>
  );
};

export default MobileActionBar;
