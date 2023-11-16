import { Outlet } from "react-router-dom";
import Sidebar from "../components/DashboardSidebar/Sidebar";
import Container from "../components/Shared/Container";

const Dashboard = () => {
  return (
    <Container>
      <div className='flex'>
        <div className='w-72 min-h-screen bg-extended-gold space-y-10 pt-8'>
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
    </Container>
  );
};

export default Dashboard;
