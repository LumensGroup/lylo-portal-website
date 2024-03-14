import { Flex } from 'antd'
import React from 'react'

export interface PriceSummaryItemData{
  title?:string
  subtitle?:string
  price?:string
  priceDesc?:string
  discount?:string
}

const PriceSummaryItem:React.FC<PriceSummaryItemData> = (props) => {
  return (
    <Flex justify='space-between'>
      <Flex vertical>
        {props.title && <div className='price-summary-item-title'>{props.title}</div>}
        {props.subtitle && <div className='price-summary-item-sub-title'>{props.subtitle}</div>}
        {props.discount && <div className='price-summary-item-discount'>{props.discount}</div>}
      </Flex>
      <Flex vertical align='end'>
        {props.price && <div className='price-summary-item-price'>{props.price}</div>}
        {props.priceDesc && <div className='price-summary-item-price-desc'>{props.priceDesc}</div>}
      </Flex>
    </Flex>
  )
}

export default PriceSummaryItem