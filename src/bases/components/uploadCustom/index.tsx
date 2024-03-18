import "./styles.scss";
import { useState } from "react";
import { Button, Progress   } from "antd";
import { CheckCircleOutlined, DeleteOutlined } from '@ant-design/icons';



type UploadPropsCustom = {
  titleName?: string;
};

const UploadCustom = ({
  titleName,
}: UploadPropsCustom) => {

  const [uploadListData, setUploadListData] = useState<any>([]);
  const testChange =async (file:any)=>{
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
                    <input type="file" onChange={testChange} id='fileInput' style={{display:'none'}}/>
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