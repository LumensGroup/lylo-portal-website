import { Divider, Flex } from "antd";
import React from "react";
import "../index.scss";
import { BookingData } from "../../PaySuccess/components/BookingStatus";
import PriceSummaryItem, { PriceSummaryItemData, formatPrice } from "../../PaySuccess/components/PriceSummary/PriceSummaryItem";

export const LeftPriceSummary:React.FC<BookingData> = ({orderData}) => {
  
  const priceItemDatas:PriceSummaryItemData[] = orderData['pricing_breakdown'].map((e: { [x: string]: any; })=>{
    return{
      title:e.name,
      price:`${e.value}`,
      subtitle:e.title == e.name ? undefined : e.title,
      discount:e.type == "DISCOUNT" ? e.name : undefined
    }
  });

  const rentalData = orderData['pricing_breakdown'].filter((e: { type: string; })=>e.type == 'RENTAL')[0];
  
  const rentalAvg = (rentalData['value']/rentalData['quantity'])/100;

  const totalPrice:PriceSummaryItemData = {
    title:'Total',
    price:`${orderData.total_price}`,
    priceDesc:`Avg. rental rate per day - $${rentalAvg.toFixed(2)}`
  };
  priceItemDatas.push(totalPrice);
  return (
    <Flex vertical className="checkout-price-summary" gap={16}>
      <Flex vertical gap={16}>
        {
          priceItemDatas.map((e,index)=>(<PriceSummaryItem {...e} key={index}/>))
        }
        
      </Flex>
      <Divider className="checkout-price-summary-divider inner"/>
      <Flex vertical gap={16}>
        <Flex justify="space-between">
          <div className="total-title">Payment made online</div>
          <Flex align="end" vertical>
            <div className="total-price">{formatPrice(orderData.total_price,undefined)}</div>
            <div className="total-price-desc">incl. of GST</div>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
