import { Flex, Image } from "antd";
import React from "react";
import { BookingData } from "../../PaySuccess/components/BookingStatus";
import { AddressTimeInfo } from "../../PaySuccess/components/BookingInfo/AddressTimeInfo";
import Icon from "@/bases/components/icon";

export const LeftPickupRetrunInfo: React.FC<BookingData> = ({ orderData }) => {
  const formatAddress = (address: any) => {
    return `${address["address_name"]} ${address["address_full"]} ${address["postal_code"]}`;
  };

  const formatDateTime = (rawDate: any) => {
    const date = new Date(rawDate);
    const monthFormatter = new Intl.DateTimeFormat("en-US", { month: "short" });
    const monthName = monthFormatter.format(date);
    const year = date.getFullYear();
    const day = date.getDate();
    const startTime = date.getHours();
    const startTimeStr = startTime < 10 ? "0" + startTime : startTime;
    const endTime = (startTime + 1) % 24;
    const endTimeStr = endTime < 10 ? "0" + endTime : endTime;
    return `${day} ${monthName} ${year}, ${startTimeStr}:00 ${endTimeStr}:00`;
  };

  const getRentDays = () => {
    const ret =
      new Date(orderData["return_time"]).getDate() -
      new Date(orderData["collection_time"]).getDate();
    return Math.max(1, ret);
  };

  const pickUpInfoData = {
    time: formatDateTime(orderData["collection_time"]),
    address: formatAddress(orderData["collection_location"]),
    type: "Pickup",
  };
  const returnInfoData = {
    time: formatDateTime(orderData["return_time"]),
    address: formatAddress(orderData["return_location"]),
    type: "Return",
  };

  const carModel = orderData["details"][0]["item_detail"]["name"];
  return (
    <Flex vertical className="checkout-address-info">
      <div className="booking-info-name">{carModel}</div>
      <Flex gap={16}>
        <Flex vertical align="center" className="address-indecator">
          <Icon source="checkout-pickup" className="price-arrow" />
          <Icon
            className="booking-info-left-vertical-line"
            source="checkout-vertical-line"
          />
          <Icon source="checkout-return" className="price-arrow" />
        </Flex>
        <Flex vertical gap={16} align="flex-start">
          <AddressTimeInfo {...pickUpInfoData} />
          <div className="booking-info-day-count">{getRentDays()} days</div>
          <AddressTimeInfo {...returnInfoData} />
        </Flex>
      </Flex>
    </Flex>
  );
};
