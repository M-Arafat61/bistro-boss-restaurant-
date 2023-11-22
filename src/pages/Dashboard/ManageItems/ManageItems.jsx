import Swal from "sweetalert2";
import SectionTitle from "../../../components/Shared/SectionTitle";
import useMenuItems from "../../../hooks/useMenuItems";
import ItemsTable from "./ItemsTable";
import toast from "react-hot-toast";
import useAxiosInstance from "../../../hooks/useAxiosInstance";

const ManageItems = () => {
  const [menu, , refetch] = useMenuItems();

  const axiosInstance = useAxiosInstance();

  // const handleItemUpdate = id => {
  //   console.log(id);
  // };
  const handleItemDelete = id => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async result => {
      if (result.isConfirmed) {
        const res = await axiosInstance.delete(`/menu/${id}`);
        if (res.data.deletedCount > 0) {
          refetch();
          toast.success("Item deleted successfully");
        }
      }
    });
  };
  return (
    <div className='space-y-10'>
      <SectionTitle
        heading='Manage all items'
        subHeading='Hurry up'
      ></SectionTitle>
      <div>
        <table className='table'>
          <thead className='bg-extended-gold'>
            <tr className='text-white text-lg'>
              <th>#</th>
              <th>Item image</th>
              <th>Name</th>
              <th>Price</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>

          {menu.map((item, index) => (
            <tbody key={item._id}>
              <ItemsTable
                item={item}
                index={index + 1}
                handleItemDelete={handleItemDelete}
              ></ItemsTable>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
};

export default ManageItems;
