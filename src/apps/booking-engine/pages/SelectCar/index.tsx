import Icon from "@/bases/components/icon";
import { Space } from "antd";
import { useNavigate } from "react-router-dom";

import Infomation from "../Addons/components/info";
import Select from "../Addons/components/select";
import BreakLine from "./components/breakline";
import CarCard from "./components/car-card";

import request from "@/bases/request";
import { useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import MobileActionBar from "./components/action-bar";
import PickUpEdit from "./components/pickup-edit";
import "./styles.scss";

const AddonsPage = () => {
  const navigate = useNavigate();
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  const getCarList = async () => {
    request
      .get("/item/getlist")
      .then((data) => {
        console.log(data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

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

  const handleCardClick = () => {
    navigate("/add-ons");
  };

  useEffect(() => {
    getCarList();
  }, []);

  return (
    <>
      {isMobile && <PickUpEdit />}
      {isMobile && <MobileActionBar />}
      <div className="select-cars__layouts">
        {!isMobile && <ActionBar />}
        <Infomation content="The vehicle images shown are examples. Specific models within a car class may vary in availability." />
        <Space className="select-cars__content" wrap size={16}>
          {[1, 2, 3, 4, 5, 6, 6, 7, 8, 9, 10].map((index) => {
            return (
              <CarCard
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
