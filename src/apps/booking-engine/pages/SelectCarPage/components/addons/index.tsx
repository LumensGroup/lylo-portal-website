import CustomizedCollapse from "@/bases/components/collapse";

const TextArea = () => {
  return <div>1</div>;
};
const Addons = () => {
  return (
    <CustomizedCollapse header={<h1>Add-ons 2/2 </h1>}>
      <TextArea />
    </CustomizedCollapse>
  );
};

export default Addons;
