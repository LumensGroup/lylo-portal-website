import NewSearch from "@/bases/components/newSearch";


const ListPage = () => {
  const searchChange = (value: any) => {
    console.log("搜索栏返回的数据");
    console.log(value);
  };
  return (
    <>
      redux demo:
      <div style={{ width: "100%" }}>
        <NewSearch
          searchChange={searchChange}
          radiusType={false}
          shadowType={false}
        />
        {/* <EnterDriverInfo></EnterDriverInfo> */}
        {/* <EnterDriverInfo></EnterDriverInfo> */}
      </div>
    </>
  );
};

export default ListPage;
