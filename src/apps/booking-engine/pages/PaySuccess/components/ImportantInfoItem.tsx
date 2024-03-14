import { Flex,Image } from 'antd'
import React from 'react'

export interface ImportantInfoData{
  title:string
  desc:string
  icon:string
}

const ImportantInfoItem:React.FC<ImportantInfoData> = ({title,desc,icon}) => {
  return (
    <div>
      <Flex gap={16}>
        <Image preview={false} className='important-icon' src={require(`../../../../../bases/assets/imgs/${icon}`)}/>
        <div>
          <p className='important-title'>{title}</p>
          <p className='important-desc'>{desc}</p>
        </div>
      </Flex>
    </div>
  )
}

export default ImportantInfoItem
