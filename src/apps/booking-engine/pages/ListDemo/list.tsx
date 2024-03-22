import YourComponent from "../../../../bases/store/demoComponent";
import NewSearch from "@/bases/components/newSearch";
import EnterDriverInfo from "@/bases/components/enterDriverInfo"


const ListPage = () => {
  return (
    <>
      redux demo:
      <div style={{width:'100%'}}>
        <NewSearch />
        {/* <EnterDriverInfo></EnterDriverInfo> */}
      </div>
    </>
  );
};

export default ListPage;
