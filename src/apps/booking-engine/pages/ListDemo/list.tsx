import YourComponent from "../../../../bases/store/demoComponent";
import { Search } from "../../../../bases/components";

const ListPage = () => {
  return (
    <>
      redux demo:
      <YourComponent />
      <div>55555555555555555</div>
      <div style={{ width: "800px",padding:'20px',margin:'auto' }}>
        <Search></Search>
      </div>
    </>
  );
};

export default ListPage;
