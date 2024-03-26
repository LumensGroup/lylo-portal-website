import "./styles.scss";
import { useState,useEffect } from "react";
import { Button, Progress,notification } from "antd";
import { CheckCircleOutlined, DeleteOutlined } from '@ant-design/icons';
import request from "../../../bases/request";



type UploadPropsCustom = {
  titleName?: string;
};

const UploadCustom = ({
  titleName,
}: UploadPropsCustom) => {
  const reader = new FileReader();
  const [uploadListData, setUploadListData] = useState<any>([]);
  const isFileAllowed=(file:any) =>{
    const allowedTypes = ['image/jpeg', 'image/png', 'application/pdf'];
    return allowedTypes.includes(file.type);
  }
  const fileChange =async (file:any)=>{
    if (!isFileAllowed(file.target.files[0])) {
      console.log(file.target.files[0])
      notification.error({
        message: `Notification`,
        description: 'Please upload JPG, PNG or PDF file',
        placement: "topRight",
      });
    } else {
      // 文件类型正确，可以继续处理
      const imgurl: any[] = [];
      console.log(file.target.files[0])
      const newData =  JSON.parse(JSON.stringify(uploadListData));
      newData.push(
        {
          name:file.target.files[0].name,
          id:file.target.files[0].lastModified,
          percent:100
        }
      )
      await setUploadListData(newData)
      // 当文件读取完毕后会触发load事件
      reader.onload =  (event:any) =>{
        const base64Image = event.target.result;
        request
        .post("/blob/upload-image",{
          'image_base64':base64Image
        })
        .then((res:any) => {
          console.log(res, "---");
          const data =  JSON.parse(JSON.stringify(uploadListData));
          data[data.length-1].image_url = res?.image_url
          data[data.length-1].object_name = res?.object_name
          setUploadListData(data)
        })
      };
    
      // 以Base64格式读取文件
      await reader.readAsDataURL(file.target.files[0]);
    }
  }
  const deleteClick = (index:any)=>{
    console.log(index)
    const newData =  JSON.parse(JSON.stringify(uploadListData));
    newData.splice(index,1)
    console.log(newData)
    setUploadListData(newData)
  }
  const uploadList = (value:any)=>{
      return (
        value.map((item:any,index:any) => (
            <div className="document-box" key={item?.id}>
                <div className='document-title'>
                  {item?.name}
                </div>
                <div className="progress-box">
                  <div>
                    <Progress percent={item?.percent} />
                  </div>
                  <div onClick={()=>deleteClick(index)}>
                    <DeleteOutlined />
                  </div>
                </div>
            </div>
          ))
      )
  }
    return (
      <div className="upload-box">
        <div className="upload-box">
              <div className="upload-box-title">
                {titleName}
              </div>
              <div className="upload-content">
                  <div className='upload-content-right'>
                    <div>
                      Drag & drop files here or Click upload
                    </div>
                    <div>
                      Support JPG, PNG & PDF (file size limit: 5MB)
                    </div>
                  </div>
                  <div className='upload-content-left' onClick={()=>{
                    const fileInput=document.getElementById("fileInput");
                    fileInput?.click()
                  }}>
                    Upload
                    <input type="file" onChange={fileChange} id='fileInput' style={{display:'none'}}/>
                  </div>
              </div>
              <div className="document-list">
                {uploadList(uploadListData)}
              </div>
         </div>
      </div>
    );
  };
  
  export default UploadCustom;