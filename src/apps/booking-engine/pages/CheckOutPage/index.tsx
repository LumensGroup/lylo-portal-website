import { Empty, Flex, Spin, notification } from "antd";
import React, { useEffect, useState } from "react";
import "./index.scss";
import { LeftPriceDetails } from "./components/LeftPriceDetails";
import { RightPayInfo } from "./components/RightPayInfo";
import { useNavigate } from "react-router-dom";
import request from "@/bases/request";

export const CheckOutPage = () => {

  const [orderData, setOrderData] = useState<any>();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);



  const getOrderInfo = () => {
    setIsLoading(true);
    request
      .get("/order/get?id=4")
      .then((res) => {
        setOrderData(res);
        setIsLoading(false);
      })
      .catch((e) => {
        notification.error({
          message: `Notification`,
          description: e?.statusText,
          placement: "topRight",
        });
        setIsLoading(false);
      });
  };

  useEffect(() => {
    getOrderInfo();
  }, []);

  return isLoading ? (
    <Spin style={{ width: "100%" }} />
  ) : orderData ? (
    <Flex className="checkout-page" justify="center">
      <Flex className="checkout-container">
        <LeftPriceDetails orderData={orderData}/>
        <RightPayInfo orderData={orderData}/>
      </Flex>
    </Flex>
  ) : (
    <Empty />
  );
};
