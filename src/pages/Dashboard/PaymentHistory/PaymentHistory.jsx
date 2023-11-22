import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../../components/Shared/SectionTitle";
import useAuthContext from "../../../hooks/useAuthContext";
import useAxiosInstance from "../../../hooks/useAxiosInstance";
import PaymentHistoryTable from "./PaymentHistoryTable";

const PaymentHistory = () => {
  const { user } = useAuthContext();
  const axiosInstance = useAxiosInstance();

  const { data: payments = [] } = useQuery({
    queryKey: ["payments", user?.email],
    queryFn: async () => {
      const res = await axiosInstance.get(`/payments/${user.email}`);
      return res.data;
    },
  });

  console.log(payments);

  return (
    <div>
      <SectionTitle
        heading='Payment history'
        subHeading='At a glance'
      ></SectionTitle>
      <h3 className='text-2xl my-10'>Total Payments: {payments.length}</h3>
      <div>
        <table className='table '>
          <thead className='bg-extended-gold '>
            <tr className='text-white text-lg'>
              <th>#</th>
              <th>Email</th>
              <th>Transaction Id</th>
              <th>Date</th>
              <th>Total Price</th>
              <th>Status</th>
            </tr>
          </thead>

          {payments?.map((payment, index) => (
            <tbody key={payment._id}>
              <PaymentHistoryTable
                payment={payment}
                index={index + 1}
              ></PaymentHistoryTable>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
};

export default PaymentHistory;
