import YourComponent from "../../../../bases/store/demoComponent";
import NewSearch from "@/bases/components/newSearch";
import EnterDriverInfo from "@/bases/components/enterDriverInfo"


const ListPage = () => {
  const searchChange =(value:any)=>{
    console.log('搜索栏返回的数据')
    console.log(value)
  }
  return (
    <>
      redux demo:
      <div style={{width:'100%'}}>
        {/* <NewSearch searchChange={searchChange}/> */}
        <EnterDriverInfo></EnterDriverInfo>
      </div>
    </>
  );
};

export default ListPage;
