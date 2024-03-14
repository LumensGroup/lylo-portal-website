import { Divider, Flex,Image } from "antd";
import React from "react";
import { AddressTimeInfo } from "./AddressTimeInfo";
import BookingInfoPickUpImg from "../../../../../../bases/assets/imgs/booking_info_pickup.svg";
import BookingInfoReturnImg from "../../../../../../bases/assets/imgs/booking_info_return.svg";
import BookingInfoLeftVerticalLine from "../../../../../../bases/assets/imgs/booking_info_left_vertical_line.svg";

export const PickupRetrunInfo = () => {
  const pickUpInfoData = {
    time: "14 Jan 2024, 09:00 - 10:00",
    address: "Lylohaus - 300 Sin Ming Rd, Singapore 123300",
    type: "Pickup",
  };
  const returnInfoData = {
    time: "20 Jan 2024, 09:00 - 10:00",
    address: "77 Robinson Rd #02-01, Singapore 123077",
    type: "Return",
  };
  return (
    <Flex gap={16}>
      <Flex vertical align="center">
        <Image preview={false} width={24} height={24} src={BookingInfoPickUpImg}/>
        <Image className="booking-info-left-vertical-line" src={BookingInfoLeftVerticalLine}/>
        <Image preview={false} src={BookingInfoReturnImg}/>
      </Flex>
      <Flex vertical gap={16} align="flex-start">
        <AddressTimeInfo {...pickUpInfoData} />
        <div className="booking-info-day-count">7 days</div>
        <AddressTimeInfo {...returnInfoData} />
      </Flex>
    </Flex>
  );
};
