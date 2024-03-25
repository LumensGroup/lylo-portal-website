import { Divider, Flex } from "antd";
import React from "react";
import "./index.scss";
import PriceSummaryItem, { PriceSummaryItemData, formatPrice } from "./PriceSummaryItem";
import { BookingData } from "../BookingStatus";

export const PriceSummary:React.FC<BookingData> = ({orderData}) => {

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
    priceDesc:`Avg. rental rate per day - S$ ${rentalAvg.toFixed(2)}`
  };
  priceItemDatas.push(totalPrice);
  return (
    <Flex vertical className="booking-result-card price-summary" gap={16}>
      <h4>Price Summary</h4>
      <Flex vertical gap={16}>
        {
          priceItemDatas.map((e,index)=>(<PriceSummaryItem {...e} key={index}/>))
        }
        
      </Flex>
      <Divider className="price-summary-divider"/>
      <Flex vertical gap={16}>
        <Flex justify="space-between">
          <div className="total-title">Payment made online</div>
          <Flex align="end" vertical>
            <div className="total-price">{formatPrice(orderData.total_price,undefined)}</div>
            <div className="total-price-desc">incl. of GST</div>
          </Flex>
        </Flex>
        <Flex justify="space-between">
          <div className="total-title orange">
            <div>Outstanding payment</div>
            <div className="total-title-desc">(during vehicle collection)</div>
          </div>
          <Flex align="end" vertical>
            <div className="total-price orange">{formatPrice(orderData.total_price,undefined)}</div>
            <div className="total-price-desc orange">incl. of GST</div>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
