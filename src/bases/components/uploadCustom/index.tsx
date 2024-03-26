import "./styles.scss";
import { useState } from "react";
import { Button, Progress } from "antd";
import { CheckCircleOutlined, DeleteOutlined } from '@ant-design/icons';



type UploadPropsCustom = {
  titleName?: string;
};

const UploadCustom = ({
  titleName,
}: UploadPropsCustom) => {

  const [uploadListData, setUploadListData] = useState<any>([]);
  const fileChange =async (file:any)=>{
    console.log(file.target.files[0])
    const newData =  JSON.parse(JSON.stringify(uploadListData));
    newData.push(
      {
        name:file.target.files[0].name,
        id:file.target.files[0].lastModified,
        percent:100
      }
    )
    setUploadListData(newData)
    const reader = new FileReader();

    // 当文件读取完毕后会触发load事件
    reader.onload = function(event:any) {
      // 此时event.target.result就是Base64编码的图片
      const base64Image = event.target.result;
      // 可以在这里使用base64Image，例如将其设置为图片元素的src
      console.log('base64Image')
      console.log(base64Image);
    };
  
    // 以Base64格式读取文件
    reader.readAsDataURL(file.target.files[0]);
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
            <div className="document-box" key={item.id}>
                <div className='document-title'>
                  {item.name}
                </div>
                <div className="progress-box">
                  <div>
                    <Progress percent={item.percent} />
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