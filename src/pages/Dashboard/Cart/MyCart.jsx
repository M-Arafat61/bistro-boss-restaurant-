import { Link } from "react-router-dom";
import SectionTitle from "../../../components/Shared/SectionTitle";
import useAxiosInstance from "../../../hooks/useAxiosInstance";

import useCart from "../../../hooks/useCart";
import CartTable from "./CartTable";
import Swal from "sweetalert2";

const MyCart = () => {
  const [cart, refetch] = useCart();
  const axiosInstance = useAxiosInstance();

  const totalPrice = cart.reduce((acc, item) => acc + item.price, 0).toFixed(2);

  const handleDelete = id => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(result => {
      if (result.isConfirmed) {
        axiosInstance
          .delete(`/carts/${id}`)
          .then(res => {
            console.log(res.data);
            if (res.data.deletedCount) {
              refetch();
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            }
          })
          .catch(error => console.log(error.message));
      }
    });
  };

  return (
    <div className='space-y-10'>
      <SectionTitle
        heading={"Your Selected Cart"}
        subHeading={"My Cart"}
      ></SectionTitle>

      <div className=' bg-[#FFF]'>
        <div className='flex items-center justify-evenly text-xl font-bold mb-5'>
          <h2>Total Order: {cart.length}</h2>
          <h2>Total Price: ${totalPrice}</h2>
          {cart.length ? (
            <Link to='/dashboard/payment'>
              <button className='px-5 py-1 overflow-hidden bg-extended-gold text-white rounded-lg'>
                Pay
              </button>
            </Link>
          ) : (
            <button
              disabled
              className='px-5 py-1 overflow-hidden bg-extended-gold text-white rounded-lg'
            >
              Pay
            </button>
          )}
        </div>
        <table className='table '>
          <thead className='bg-extended-gold '>
            <tr className='text-white text-lg'>
              <th></th>
              <th>Item Image</th>
              <th>Item Name</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>

          {cart.map((item, index) => (
            <tbody key={item._id}>
              <CartTable
                item={item}
                index={index + 1}
                handleDelete={handleDelete}
              ></CartTable>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
};

export default MyCart;
