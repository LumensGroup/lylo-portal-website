import "./styles.scss";
import { useState,useEffect } from "react";
import { Button, Progress,notification } from "antd";
import { CheckCircleOutlined, DeleteOutlined } from '@ant-design/icons';
import request from "../../../bases/request";



type UploadPropsCustom = {
  titleName?: string;
  valueChange?: any;
};

const UploadCustom = ({
  titleName,
  valueChange
}: UploadPropsCustom) => {
  // const reader = new FileReader();
  const [uploadListData, setUploadListData] = useState<any>([]);
  const [baseValue, setbaseValue] = useState<any>('');
  const isFileAllowed=(file:any) =>{
    const allowedTypes = ['image/jpeg', 'image/png', 'application/pdf'];
    return allowedTypes.includes(file.type);
  }
  const readFileAsDataURL=(file:any)=> {  
    return new Promise((resolve, reject) => {  
        const reader = new FileReader();  
        reader.onload = () => resolve(reader.result);  
        reader.onerror = error => reject(error);  
        reader.readAsDataURL(file);  
    });  
}  
  const fileChange = async(file:any)=>{
    if (!isFileAllowed(file.target.files[0])) {
      console.log(file.target.files[0])
      notification.error({
        message: `Notification`,
        description: 'Please upload JPG, PNG or PDF file',
        placement: "topRight",
      });
    } else {
      const newData =  JSON.parse(JSON.stringify(uploadListData));
      newData.push(
        {
          name:file.target.files[0].name,
          id:file.target.files[0].lastModified,
          percent:100,
          image_url:"",
          object_name:'',
        }
      )
      setUploadListData(newData)
      const dataURL = await readFileAsDataURL(file.target.files[0]); 
      setbaseValue(dataURL)
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
  useEffect(() => {
    (async () => {
        if(baseValue){
          const requestData= await request
          .post("/blob/upload-image",{
            'image_base64':baseValue
          })
          .then((res:any) => {
            return res
          }).catch((e) => {
            notification.error({
              message: `Notification`,
              description: e?.statusText,
              placement: "topRight",
            });
          });
          console.log('uploadListData')
          console.log(uploadListData)
          const data =  JSON.parse(JSON.stringify(uploadListData));
          data[data.length-1].image_url = requestData?.image_url
          data[data.length-1].object_name = requestData?.object_name
          valueChange(data)
          setUploadListData(data)
        }
    })()
  }, [baseValue]);
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