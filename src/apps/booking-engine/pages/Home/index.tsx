import { Button, notification } from "antd";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Icon from "../../../../bases/components/icon";
import request from "../../../../bases/request";
import { RootState } from "../../../../bases/store/reducers";
import { useMediaQuery } from "react-responsive";
import NewSearch from "@/bases/components/newSearch";
import PickUpEdit from "../SelectCar/components/pickup-edit";
import MobileActionBar from "../SelectCar/components/action-bar";
import { useState } from "react";
import { FilterConditionState } from "../SelectCar/types";

const HomePage = () => {
  const { count } = useSelector((state: RootState) => state.count);
  const navigate = useNavigate();
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const [filterCondition, setFilterCondition] = useState<FilterConditionState>({
    sale_price: [],
    seating_category: [],
    vehicle_type_category: [],
  });
  const [sortCondition, setSortCondition] = useState();
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


  const handleEditClick = () => {
    setEditPopupVisible(true);
  };

  const handleClick = () => {
    navigate("/list");
  };

  const handleRequest = () => {
    request
      .get("/api/data")
      .then((res) => {
        console.log(res, "---");
      })
      .catch((e) => {
        notification.error({
          message: `Notification`,
          description: e?.statusText,
          placement: "topRight",
        });
      });
  };
  return (
    <div>
      {!isMobile && (
        <div className="select-cars__search__area">
          <NewSearch radiusType={false} shadowType={false} />
        </div>
      )}
      {isMobile && (
        <>
          <PickUpEdit handleClick={handleEditClick} />
          <MobileActionBar
            handleFilter={handleFilter}
            handleSort={handleSort}
          />
        </>
      )}
    </div>
  );
};

export default HomePage;
