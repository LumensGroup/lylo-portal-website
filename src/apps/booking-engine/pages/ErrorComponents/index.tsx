import React from "react";
import { SystemErrorComponents } from "./SystemErrorComponents";
import "index.scss";
import { Divider, Image } from "antd";
import RetriveMyInfoImg from "../../../../bases/assets/imgs/error-retrive-myinfo.svg";

export const ErrorComponents = () => {
  return (
    <div className="error-components-container">
      <SystemErrorComponents
        errorDetailInfo="Please refresh your browser or try again later"
        errorMsg="Oops! Something went wrong"
      />
      <Divider />
      <SystemErrorComponents
        errorDetailInfo="Try to retrieve MyInfo with Singpass again"
        errorMsg="Failed to retrieve your<br> information from Singpass"
      >
        <Image src={RetriveMyInfoImg}/>
        <div>Or <span className="error-detail-link">fill form manually</span></div>
      </SystemErrorComponents>
    </div>
  );
};
