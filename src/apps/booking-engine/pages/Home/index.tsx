import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "../../../../bases/store/reducers";
import { useMediaQuery } from "react-responsive";
import NewSearch from "@/bases/components/newSearch";
import PickUpEdit from "../SelectCar/components/pickup-edit";
import MobileActionBar from "../SelectCar/components/action-bar";
import { useState } from "react";
import { FilterConditionState } from "../SelectCar/types";
import { ROUTESMAP } from "../../routes";

const HomePage = () => {
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

  const handleOnSearchClick = () => {
    navigate(ROUTESMAP.SelectCarPage);
  }

  return (
    <div>
      {!isMobile && (
        <div className="select-cars__search__area">
          <NewSearch radiusType={false} shadowType={false} onSearchClick={handleOnSearchClick}/>
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
