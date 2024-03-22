import { Flex,Image } from 'antd'
import React from 'react'
import { ImportantInfoData } from './ImportantInfoItem'


const ImportantInfoContactItem:React.FC<ImportantInfoData> = ({title,desc,icon}) => {
  return (
    <div>
      <Flex gap={16}>
        <Image className='important-icon' src={require(`@/bases/assets/imgs/${icon}`)}/>
        <div>
          <p className='important-title'>{title}</p>
          <p className='important-desc important-contact'>{desc}</p>
        </div>
      </Flex>
    </div>
  )
}

export default ImportantInfoContactItem
