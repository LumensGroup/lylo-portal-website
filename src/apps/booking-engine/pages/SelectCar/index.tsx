import Icon from "@/bases/components/icon";
import { Space } from "antd";
import { useNavigate } from "react-router-dom";

import Infomation from "../Addons/components/info";
import Select from "../Addons/components/select";
import BreakLine from "./components/breakline";
import CarCard from "./components/car-card";

import StepInfoBar from "@/bases/components/steps";
import request from "@/bases/request";
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import MobileActionBar from "./components/action-bar";
import PickUpEdit from "./components/pickup-edit";
import "./styles.scss";
import { FilterConditionState } from "./types";

const ActionBar = ({ handleSort, handleFilter }: any) => {
  return (
    <Space className="select-cars__actionBar" size={16} align="start">
      <Icon source="swap_vert" />
      <h2 className="">Sort by</h2>
      <Select
        defaultValue={{ value: "1", label: "Lowest price" }}
        name="price"
        multiple={false}
        options={[
          { value: "1", label: "Lowest price" },
          { value: "2", label: "Highlight price" },
        ]}
        handleClick={(value) => {
          console.log(value, "value");
          handleSort(value);
        }}
      />
      <BreakLine direction="vertical" height="32px" color="#717171" />
      <Icon source="filter_alt" />
      <h2>Filter by</h2>
      <Select
        name="Price range"
        multiple={true}
        options={[
          { value: "1", label: "gas" },
          { value: "2", label: "elec" },
        ]}
        handleClick={(value) => {
          handleFilter("sale_price", value);
        }}
      />
      <Select
        name="Seats"
        multiple={true}
        options={[
          { value: "1", label: "5 seats" },
          { value: "2", label: "7 seats" },
        ]}
        handleClick={(value) => {
          handleFilter("seating_category", value);
        }}
      />
      <Select
        name="Vehicle type"
        multiple={true}
        options={[
          { value: "1", label: "Electric" },
          { value: "2", label: "Hybrid" },
          { value: "3", label: "Plug-in Hybrid" },
        ]}
        handleClick={(value) => {
          handleFilter("vehicle_type_category", value);
        }}
      />
    </Space>
  );
};

const AddonsPage = () => {
  const navigate = useNavigate();
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  const [filterCondition, setFilterCondition] = useState<FilterConditionState>({
    sale_price: [],
    seating_category: [],
    vehicle_type_category: [],
  });
  const [sortCondition, setSortCondition] = useState();
  const [carList, setCarList] = useState([]);

  const handleSort = (value: any) => setSortCondition(value);
  const handleFilter = (keyName: string, value: any) => {
    console.log(keyName, value);
    setFilterCondition((prevState) => ({
      ...prevState,
      [keyName]: value,
    }));
  };

  const getCarList = async () => {
    const params: any = {};

    if (sortCondition) {
      if (sortCondition === "1") {
        params.sort = "lowestPrice";
      } else if (sortCondition === "2") {
        params.sort = "highestPrice";
      }
    }

    if (filterCondition.sale_price.length > 0) {
      params["filter[sale_price]"] = filterCondition.sale_price
        .map((item) => item.value)
        .join("|");
    }
    if (filterCondition.seating_category.length > 0) {
      params["filter[seating_category]"] = filterCondition.seating_category
        .map((item) => item.value)
        .join("|");
    }
    if (filterCondition.vehicle_type_category.length > 0) {
      params["filter[vehicle_type_category]"] =
        filterCondition.vehicle_type_category
          .map((item) => item.value)
          .join("|");
    }

    const data = await request.get("/vehicle/getlist", { params });
    const { lists } = data as any;
    setCarList(lists);
  };

  const handleCardClick = () => {
    navigate("/add-ons");
  };

  useEffect(() => {
    getCarList();
  }, [sortCondition, filterCondition]);

  return (
    <>
      <StepInfoBar currentIndex={0} />
      {isMobile && <PickUpEdit />}
      {isMobile && (
        <MobileActionBar handleFilter={handleFilter} handleSort={handleSort} />
      )}
      <div className="select-cars__layouts">
        {!isMobile && (
          <ActionBar handleFilter={handleFilter} handleSort={handleSort} />
        )}
        <Infomation content="The vehicle images shown are examples. Specific models within a car class may vary in availability." />
        <Space className="select-cars__content" wrap size={16}>
          {carList?.map((item, index) => {
            console.log(item, "item");
            return (
              <CarCard
                item={item}
                active={false}
                key={index}
                onCardClick={handleCardClick}
              />
            );
          })}
        </Space>
      </div>
    </>
  );
};
export default AddonsPage;
