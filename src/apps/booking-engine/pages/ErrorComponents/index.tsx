import React from "react";
import { SystemErrorComponents } from "./SystemErrorComponents";
import "index.scss";
import { Divider, Flex, Image } from "antd";
import RetriveMyInfoImg from "../../../../bases/assets/imgs/error-retrive-myinfo.svg";
import { EmptyDataComponents } from "./EmptyDataComponents";
import { AlsoViewedCarItem } from "./AlsoViewedCarItem";

export const ErrorComponents = () => {

  const alsoViewedCars = [
    {
      img:'empty_7seat_car.svg',
      title:'7 seaters'
    },
    {
      img:'empty_prestige_car.svg',
      title:'Prestige'
    },
    {
      img:'empty_electric_car.svg',
      title:'Electric'
    }
  ];

  return (
    <div className="error-components-container">
      <SystemErrorComponents
        errorDetailInfo="Please refresh your browser or try again later"
        errorMsg="Oops! Something went wrong"
      />
      <Divider />
      <SystemErrorComponents
        errorDetailInfo="Try to retrieve MyInfo with Singpass again"
        errorMsg="Failed to retrieve your information from Singpass"
      >
        <Image src={RetriveMyInfoImg} />
        <div>
          Or <span className="error-detail-link">fill form manually</span>
        </div>
      </SystemErrorComponents>
      <Divider />
      <EmptyDataComponents
        errorMsg="Oops! That’s a miss..."
        errorDetailInfo="Sorry, this search combination has no results, please search with different criteria"
        alignStart={true}
      />
      <Divider />
      <EmptyDataComponents
        errorMsg="Oops! No results matching your search"
        errorDetailInfo="Customers searching for “5 seater hybrid” also viewed these cars"
      />
      <Flex justify="center" gap={16}>
        {
          alsoViewedCars.map(e=>(
            <AlsoViewedCarItem key={e.title} {...e}/>
          ))
        }
      </Flex>
    </div>
  );
};
