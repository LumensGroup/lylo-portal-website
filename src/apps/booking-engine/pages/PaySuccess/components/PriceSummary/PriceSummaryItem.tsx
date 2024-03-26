import { Flex } from 'antd'
import React from 'react'

export interface PriceSummaryItemData{
  title?:string
  subtitle?:string
  price?:string
  priceDesc?:string
  discount?:string
}

export const formatPrice = (price:any,isDiscount:any) => {
  const pr = price / 100;
  
  return price == 0 ? 'Included' : `${isDiscount == undefined ? '' : '- '}S$ ${pr.toFixed(2)}`;
}

const PriceSummaryItem:React.FC<PriceSummaryItemData> = (props) => {

  

  return (
    <Flex justify='space-between'>
      <Flex vertical>
        
        { props.discount ? <div className='price-summary-item-discount'>{props.discount}</div>
        : 
        <>
        <div hidden={props.title == undefined} className='price-summary-item-title'>{props.title}</div>
        <div hidden={props.subtitle == undefined} className='price-summary-item-sub-title'>{props.subtitle}</div>
        </>
      }
      </Flex>
      <Flex vertical align='end'>
        {props.price && <div className='price-summary-item-price'>{formatPrice(props.price,props.discount)}</div>}
        {props.priceDesc && <div className='price-summary-item-price-desc'>{props.priceDesc}</div>}
      </Flex>
    </Flex>
  )
}

export default PriceSummaryItem