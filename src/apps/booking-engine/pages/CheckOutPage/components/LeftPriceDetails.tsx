import Icon from "@/bases/components/icon";
import { Divider, Flex } from "antd";
import React, { useState } from "react";
import { BookingData } from "../../PaySuccess/components/BookingStatus";
import { LeftPriceSummary } from "./LeftPriceSummary";

export const LeftPriceDetails: React.FC<BookingData> = ({ orderData }) => {
  const [showPriceSummary, setShowPriceSummary] = useState(true);
  const [showDetails, setshowDetails] = useState(false);

  return (
    <Flex className="checkout-left" vertical align="flex-end">
      <Flex vertical align="center" className="checkout-left-container">
        <div className="you-are-paying">You are paying</div>
        <div className="checkout-big-price">245.00</div>
        <div className="checkout-unit">SGD</div>
        <div className="checkout-collapse-container">
        <Divider className="checkout-price-summary-divider"/>
          <Flex
            className="checkout-cllapse"
            onClick={() => setShowPriceSummary(!showPriceSummary)}
          >
            <div className="checkout-cllapse-title">Price summary</div>
            <Icon
              source={showPriceSummary ? "arrow_up_price" : "arrow_down_price"}
              className="price-arrow"
            />
          </Flex>
          {showPriceSummary && <LeftPriceSummary orderData={orderData} />}
          <Divider className="checkout-price-summary-divider"/>
          <Flex
            className="checkout-cllapse"
            onClick={() => setshowDetails(!showDetails)}
          >
            <div className="checkout-cllapse-title">Details</div>
            <Icon
              source={showDetails ? "arrow_up_price" : "arrow_down_price"}
              className="price-arrow"
            />
          </Flex>
          {showDetails && (
            <Flex vertical>
              <div>123</div>
              <div>123</div>
              <div>123</div>
              <div>123</div>
            </Flex>
          )}
        </div>
      </Flex>
    </Flex>
  );
};
