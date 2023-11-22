import { NavLink } from "react-router-dom";
import { Icon } from "@iconify/react";

const AdminLists = () => {
  return (
    <div>
      <ul className='pl-10 text-md font-medium gap-2 space-y-2 tracking-wider uppercase'>
        <li className='flex items-center gap-2 hover:font-bold '>
          <Icon className='text-2xl' icon='iconamoon:home-bold' />
          <NavLink
            to='/dashboard/adminHome'
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "underline font-bold" : ""
            }
          >
            Admin Home
          </NavLink>
        </li>
        <li className='flex items-center gap-2 hover:font-bold '>
          <Icon className='text-2xl' icon='medical-icon:i-restaurant' />
          <NavLink
            to='/dashboard/addItem'
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "underline font-bold" : ""
            }
          >
            Add Items
          </NavLink>
        </li>

        <li className='flex items-center gap-2 hover:font-bold '>
          <Icon className='text-2xl' icon='uiw:menu' />
          <NavLink
            to='/dashboard/manageItems'
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "underline font-bold" : ""
            }
          >
            Manage Items
          </NavLink>
        </li>

        <li className='flex items-center gap-2 hover:font-bold '>
          <Icon className='text-2xl' icon='bxs:food-menu' />
          <NavLink
            to='/dashboard/manageBookings'
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "underline font-bold" : ""
            }
          >
            Manage Bookings
          </NavLink>
        </li>

        <li className='flex items-center gap-2 hover:font-bold '>
          <Icon className='text-2xl' icon='raphael:users' />
          <NavLink
            to='/dashboard/users'
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "underline font-bold" : ""
            }
          >
            All Users
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default AdminLists;
