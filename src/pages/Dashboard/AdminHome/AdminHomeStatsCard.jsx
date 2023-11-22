import { Icon } from "@iconify/react";

const AdminHomeStatsCard = ({ stats }) => {
  return (
    <div className='flex gap-5 text-white'>
      <div className='flex items-center rounded-md overflow-hidden stat place-items-center bg-gradient-to-r from-[#BB34F5] to-[#FCDBFF]'>
        <Icon className='text-5xl' icon='streamline:bag-dollar'></Icon>
        <div>
          <div className='stat-value'>{stats?.revenue}</div>
          <div className='text-2xl font-bold'>Revenue</div>
        </div>
      </div>
      <div className='flex items-center rounded-md overflow-hidden stat place-items-center bg-gradient-to-r from-[#D3A256] to-[#FDE8C0]'>
        <Icon className='text-5xl' icon='fa6-solid:users-line'></Icon>
        <div>
          <div className='stat-value'>{stats?.users}</div>
          <div className='text-2xl font-bold'>Users</div>
        </div>
      </div>
      <div className='flex items-center rounded-md overflow-hidden stat place-items-center bg-gradient-to-r from-[#FE4880] to-[#FECDE9]'>
        <Icon className='text-5xl' icon='simple-icons:codechef'></Icon>
        <div>
          <div className='stat-value'>{stats?.menuItems}</div>
          <div className='text-2xl font-bold'>Menu Items</div>
        </div>
      </div>
      <div className='flex items-center rounded-md overflow-hidden stat place-items-center bg-gradient-to-r from-[#6AAEFF] to-[#B6F7FF]'>
        <Icon className='text-5xl' icon='iconamoon:delivery-free-fill'></Icon>
        <div>
          <div className='stat-value'>{stats?.orders}</div>
          <div className='text-2xl font-bold'>Orders</div>
        </div>
      </div>
    </div>
  );
};

export default AdminHomeStatsCard;
