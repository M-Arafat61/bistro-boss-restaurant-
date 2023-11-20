import SectionTitle from "../../../components/Shared/SectionTitle";
import ItemForm from "./ItemForm";

const AddItem = () => {
  return (
    <div className='space-y-10'>
      <SectionTitle
        subHeading={"What's new?"}
        heading={"Add an Item"}
      ></SectionTitle>
      <ItemForm></ItemForm>
    </div>
  );
};

export default AddItem;
