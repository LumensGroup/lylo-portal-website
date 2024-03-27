import Icon from "@/bases/components/icon";
import { Slider, Space, Spin } from "antd";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import Infomation from "../Addons/components/info";
import Select from "../Addons/components/select";
import BreakLine from "./components/breakline";
import CarCard from "./components/car-card";

import { EmptyDataComponents } from "@/bases/components/errorComponents/EmptyDataComponents";
import NewSearch from "@/bases/components/newSearch";
import request from "@/bases/request";
import { selectCar } from "@/bases/store/reducers/selectedCar";
import { Popup } from "antd-mobile";
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import MobileActionBar from "./components/action-bar";
import PickUpEdit from "./components/pickup-edit";
import "./styles.scss";
import { FilterConditionState } from "./types";

const ActionBar = ({ handleSort, handleFilter }: any) => {
  const onSlideChange = (value: any) => {
    const formatValue = value?.map((item: any) => {
      return { value: item };
    });
    handleFilter("sale_price", formatValue);
  };

  return (
    <Space className="select-cars__actionBar" size={16} align="start">
      <Icon source="swap_vert" />
      <h2 className="">Sort by</h2>
      <Select
        defaultValue={{ value: "1", label: "Lowest price" }}
        name="price"
        multiple={false}
        options={[
          { value: "DESC", label: "Lowest price" },
          { value: "ASC", label: "Highlight price" },
        ]}
        handleClick={(item) => {
          const { value } = item;
          handleSort(value);
        }}
      />
      <BreakLine direction="vertical" height="32px" color="#717171" />
      <Icon source="filter_alt" />
      <h2>Filter by</h2>
      <Select name="Price range" multiple={true}>
        <Slider range onChangeComplete={onSlideChange} />
      </Select>
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

const CarSelectPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [seatType, setSeatType] = useState("");
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  const [filterCondition, setFilterCondition] = useState<FilterConditionState>({
    sale_price: [],
    seating_category: [],
    vehicle_type_category: [],
  });
  const [sortCondition, setSortCondition] = useState();
  const [carList, setCarList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [editPopupVisible, setEditPopupVisible] = useState(false);

  const handleSort = (value: any) => setSortCondition(value);

  const handleFilter = (keyName: string, value: any) => {
    setFilterCondition((prevState) => {
      return {
        ...prevState,
        [keyName]: value,
      };
    });
  };

  const getCarList = async () => {
    setIsLoading(true);
    const params: any = { pageSize: 1000 };
    if (sortCondition) {
      params["sorter[sale_price]"] = sortCondition;
    }

    if (filterCondition.sale_price.length > 0) {
      params["filter[sale_price]"] = filterCondition.sale_price
        .map((item) => item.value)
        .join("~");
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
    setIsLoading(false);
  };

  const handleCardClick = (item: any) => {
    dispatch(selectCar(item));
    navigate("/add-ons");
  };

  const handleEditClick = () => {
    setEditPopupVisible(true);
  };

  useEffect(() => {
    getCarList();
  }, [sortCondition, filterCondition]);

  return (
    <>
      <div className="select-cars__search__area">
        <NewSearch radiusType={false} shadowType={false} />
      </div>
      {isMobile && (
        <>
          <PickUpEdit handleClick={handleEditClick} />
          <MobileActionBar
            handleFilter={handleFilter}
            handleSort={handleSort}
          />
        </>
      )}
      <div className="select-cars__layouts">
        <div className="select-cars__action__area">
          {!isMobile && (
            <ActionBar handleFilter={handleFilter} handleSort={handleSort} />
          )}
          <Infomation
            content="The vehicle images shown are examples. Specific models within a car class may vary in availability."
            seatType={filterCondition}
          />
        </div>

        {isLoading && <Spin style={{ width: "100%" }} />}
        <div
          style={{
            flex: 1,
            overflowY: "scroll",
            width: "100%",
            justifyContent: "center",
            display: "flex",
            scrollbarWidth: "none",
          }}
        >
          {!isLoading && (
            <Space className="select-cars__content" wrap size={16}>
              {carList?.map((item, index) => {
                return (
                  <CarCard
                    item={item}
                    active={false}
                    key={index}
                    onCardClick={() => handleCardClick(item)}
                  />
                );
              })}
            </Space>
          )}

          {!isLoading && carList?.length === 0 && (
            <EmptyDataComponents
              errorMsg="Oops! That’s a miss..."
              errorDetailInfo="Sorry, this search combination has no results, please search with different criteria"
              alignStart={true}
            />
          )}
        </div>
      </div>
      <Popup
        visible={editPopupVisible}
        onMaskClick={() => {
          setEditPopupVisible(false);
        }}
        onClose={() => {
          setEditPopupVisible(false);
        }}
        bodyStyle={{
          borderTopLeftRadius: "16px",
          borderTopRightRadius: "16px",
          minHeight: "40vh",
        }}
      >
        {3123123}
      </Popup>
    </>
  );
};
export default CarSelectPage;
