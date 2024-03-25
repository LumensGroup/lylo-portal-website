import { Divider, Flex } from "antd";
import React from "react";
import "./index.scss";
import PriceSummaryItem from "./PriceSummaryItem";

export default function PriceSummary() {

  const priceItemDatas = [
    {title:'CDW Basic x 6 day(s)',price:'Included'},
    {title:'Rental duration - 6 day(s)'},
    {title:'CNY seasonal rate',subtitle:'S$ 100 x 5 day(s)',price:'S$ 500.00'},
    {title:'Regular rate',subtitle:'S$ 80 x 1 day(s)',price:'S$ 80.00'},
    {title:'Booking surcharge',price:'S$ 20.00'},
    {title:'Child booster seat x 1',price:'S$ 25.00'},
    {title:'Windscreen damage protection',price:'S$ 15.00'},
    {discount:'PROMO10%',price:'- S$ 64.00'},
    {title:'Total',price:'S$ 630.00',priceDesc:'Avg. rental rate per day - $96.67'}
  ]
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
            <div className="total-price">S$ 315.00</div>
            <div className="total-price-desc">incl. of GST</div>
          </Flex>
        </Flex>
        <Flex justify="space-between">
          <div className="total-title orange">
            <div>Outstanding payment</div>
            <div className="total-title-desc">(during vehicle collection)</div>
          </div>
          <Flex align="end" vertical>
            <div className="total-price orange">S$ 315.00</div>
            <div className="total-price-desc orange">incl. of GST</div>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
