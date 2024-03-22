import EmptyDataMovingCar from "@/bases/assets/imgs/empty_data_moving_car.svg";
import { Empty, Flex } from "antd";
import React, { ReactNode } from "react";
import "./index.scss";

export interface EmptyMesgData {
  errorMsg: string;
  errorDetailInfo: string;
  children?: ReactNode;
  alignStart?: boolean;
}

export const EmptyDataComponents: React.FC<EmptyMesgData> = (props) => {
  return (
    <Empty
      image={EmptyDataMovingCar}
      imageStyle={{ height: 125 }}
      description={null}
      className="empty-component"
    >
      <Flex vertical align="center">
        <div
          className={[
            "empty-msg-container",
            props.alignStart ? "align-start" : null,
          ].join(" ")}
        >
          <div className="empty-msg">{props.errorMsg}</div>
          <div className="empty-detail-info">{props.errorDetailInfo}</div>
        </div>

        {props.children}
      </Flex>
    </Empty>
  );
};
