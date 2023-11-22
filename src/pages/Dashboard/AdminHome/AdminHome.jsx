import { useQuery } from "@tanstack/react-query";
import useAuthContext from "../../../hooks/useAuthContext";
import useAxiosInstance from "../../../hooks/useAxiosInstance";

import AdminHomeStatsCard from "./AdminHomeStatsCard";
import AdminHomeBarChart from "./AdminHomeBarChart";
import AdminHomePieChart from "./AdminHomePieChart";

const AdminHome = () => {
  const { user } = useAuthContext();
  const axiosInstance = useAxiosInstance();

  const { data: stats = {} } = useQuery({
    queryKey: ["adminStats"],
    queryFn: async () => {
      const res = await axiosInstance.get("/adminStats");
      return res.data;
    },
  });

  const { data: chartData = [] } = useQuery({
    queryKey: ["orderStats"],
    queryFn: async () => {
      const res = await axiosInstance.get("/orderStats");
      return res.data;
    },
  });

  // console.log(chartData);
  return (
    <div>
      <h2 className='text-3xl my-10'>
        <span>Hi, Welcome </span>
        {user?.displayName ? user.displayName : "Back"} !
      </h2>
      <div>
        <AdminHomeStatsCard stats={stats}></AdminHomeStatsCard>
      </div>
      <div className='flex justify-between mt-20 gap-10'>
        <div className='w-1/2'>
          <AdminHomeBarChart data={chartData}></AdminHomeBarChart>
        </div>
        <div className='w-1/2'>
          <AdminHomePieChart chartData={chartData}></AdminHomePieChart>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
