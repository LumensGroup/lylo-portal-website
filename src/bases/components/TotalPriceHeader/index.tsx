import { Button, Flex } from "antd";
import { ReactNode, useCallback, useState } from "react";
import Icon from "../icon";
import "./index.scss";
import { formatPrice } from "@/apps/booking-engine/pages/PaySuccess/components/PriceSummary/PriceSummaryItem";
import { TCTip } from "@/apps/booking-engine/pages/Addons/components/summary";

const TotalPriceHeader = () => {
  return (
    <div className="top_price_header">
      <h1>
        Total Price
      </h1>
      <Flex className="header_price" align="center" vertical>
        <div className="total-price">8989</div>
        <div className="total-price-unit">(incl. of GST)</div>
      </Flex>

      <Button className="payment-checkout__button">Checkout</Button>
      <TCTip />
    </div>
  )
}

export default TotalPriceHeader;
