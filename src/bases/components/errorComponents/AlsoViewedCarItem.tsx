import { Flex,Image } from 'antd'
import React from 'react'
import './index.scss'

export interface AlsoViewedData{
  img:string
  title:string
}

export const AlsoViewedCarItem:React.FC<AlsoViewedData> = (props) => {
  return (
    <Flex vertical className='also-view-item' gap={10}>
        <Image preview={false} className='also-view-item-img' src={require(`@/bases/assets/imgs/${props.img}`)} />
        <div className='also-view-item-title'>{props.title}</div>
    </Flex>
  )
}
