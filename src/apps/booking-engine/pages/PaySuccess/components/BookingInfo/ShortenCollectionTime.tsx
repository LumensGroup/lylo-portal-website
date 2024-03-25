import { Flex,Image } from 'antd'
import React from 'react'
import CheckSafetyVideo from '@/bases/assets/imgs/check_safety_video.svg'
import SignControactImg from '@/bases/assets/imgs/sign_contract_img.svg'

const ShortenCollectionTime = () => {
  const openUrl = (url:string)=>{
    
    const w=window.open('about:blank')!;
    w.location.href=url; 
  }

  return (
    <Flex className='shorten-vehicle-collection-time' justify='space-between' align='center'>
      <div className='shorten-vehicle-collection-time-desc'>Shorten your vehicle collection time by doing these!</div>
      <Flex gap={24} className='shorten-vehicle-collection-time-container'>
        <Flex gap={16} className='shorten-vehicle-collection-time-action' align='center' onClick={()=>openUrl('https://lylo.sg/user-manual')}>
          <Image className='video' preview={false} src={CheckSafetyVideo}/> 
          <div className='shorten-vehicle-collection-action-lbl'>Check out our safety video!</div>
        </Flex>
        <Flex gap={16} className='shorten-vehicle-collection-time-action' align='center' onClick={()=>openUrl('https://lylo.sg/user-manual')}>
          <Image width={76} preview={false} src={SignControactImg}/> 
          <div className='shorten-vehicle-collection-action-lbl last'>Sign contract here</div>
        </Flex>
      </Flex>
    </Flex>
    
  )
}

export default ShortenCollectionTime