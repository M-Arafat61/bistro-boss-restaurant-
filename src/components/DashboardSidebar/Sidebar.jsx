import { NavLink } from "react-router-dom";
import { Icon } from "@iconify/react";
import AdminLists from "./AdminLists";
import UserLists from "./UserLists";
import useAdmin from "../../hooks/useAdmin";

const Sidebar = () => {
  const [isAdmin] = useAdmin();
  return (
    <div className='space-y-8'>
      {/* Conditional lists  */}
      {isAdmin ? <AdminLists></AdminLists> : <UserLists></UserLists>}

      <div className='px-5'>
        <hr />
      </div>
      {/* Fixed lists */}
      <ul className='pl-10 text-md font-medium uppercase gap-2 space-y-2 tracking-wider '>
        <li className='flex items-center gap-2 hover:font-bold'>
          <Icon className='text-2xl' icon='iconamoon:home-bold' />
          <NavLink
            to='/'
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "underline font-bold" : ""
            }
          >
            Home
          </NavLink>
        </li>
        <li className='flex items-center gap-2 hover:font-bold'>
          <Icon className='text-2xl' icon='mingcute:menu-line' />
          <NavLink
            to='/menu'
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "underline font-bold" : ""
            }
          >
            Menu
          </NavLink>
        </li>
        <li className='flex items-center gap-2 hover:font-bold'>
          <Icon className='text-2xl' icon='icon-park-solid:shopping-bag' />
          <NavLink
            to='/dashboard/shop'
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "underline font-bold" : ""
            }
          >
            Shop
          </NavLink>
        </li>
        <li className='flex items-center gap-2 hover:font-bold'>
          <Icon className='text-2xl' icon='fluent:mail-24-filled' />
          <NavLink
            to='/dashboard/contact'
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "underline font-bold" : ""
            }
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
