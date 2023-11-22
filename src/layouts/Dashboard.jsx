import { Outlet } from "react-router-dom";
import Sidebar from "../components/DashboardSidebar/Sidebar";

const Dashboard = () => {
  return (
    <div className='max-w-screen-xl mx-auto'>
      <div className='flex'>
        <div className='w-80 min-h-screen bg-extended-gold space-y-10 pt-8 '>
          <div className='flex flex-col items-center space-y-2'>
            <div className=' font-bold text-3xl'>Bistro Boss</div>
            <p className='uppercase tracking-widest text-lg font-semibold'>
              Restaurant
            </p>
          </div>
          <Sidebar></Sidebar>
        </div>
        <div className='flex-1 pl-16'>
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
