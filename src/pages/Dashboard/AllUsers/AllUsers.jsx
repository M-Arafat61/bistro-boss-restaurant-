import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../../components/Shared/SectionTitle";

import UsersTable from "./UsersTable";
import Swal from "sweetalert2";
import toast from "react-hot-toast";
import useAxiosInstance from "../../../hooks/useAxiosInstance";

const AllUsers = () => {
  const axiosInstance = useAxiosInstance();

  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const result = await axiosInstance.get("/users");
      return result.data;
    },
  });

  const handleMakeAdmin = user => {
    axiosInstance.patch(`/users/admin/${user._id}`).then(res => {
      console.log(res.data);
      if (res.data.modifiedCount > 0) {
        refetch();
        toast.success(`${user.name} is an Admin Now!`);
      }
    });
  };

  const handleDelete = user => {
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
          .delete(`/users/${user._id}`)
          .then(res => {
            console.log(res.data);
            if (res.data.deletedCount) {
              refetch();
              Swal.fire({
                title: "Deleted!",
                text: "User has been deleted.",
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
        heading={"How many??"}
        subHeading={"MANAGE ALL USERS"}
      ></SectionTitle>
      <div className='space-y-5'>
        <div className='text-xl font-bold'>Total users: {users.length}</div>
        <div>
          <table className='table '>
            <thead className='bg-extended-gold '>
              <tr className='text-white text-lg'>
                <th></th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Action</th>
              </tr>
            </thead>

            {users.map((user, index) => (
              <tbody key={user._id}>
                <UsersTable
                  user={user}
                  index={index + 1}
                  handleMakeAdmin={handleMakeAdmin}
                  handleDelete={handleDelete}
                ></UsersTable>
              </tbody>
            ))}
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllUsers;
