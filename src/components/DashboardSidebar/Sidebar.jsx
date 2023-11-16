import { NavLink } from "react-router-dom";
import { Icon } from "@iconify/react";
import useCart from "../../hooks/useCart";

const Sidebar = () => {
  const [cart] = useCart();
  return (
    // flex items-center gap-2
    <div className='space-y-8'>
      <ul className='px-10 text-lg gap-2 space-y-2 tracking-wider'>
        <li className='flex items-center gap-2'>
          <Icon className='text-2xl' icon='iconamoon:home-bold' />
          <NavLink
            to='/dashboard/userHome'
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "underline font-bold" : ""
            }
          >
            User Home
          </NavLink>
        </li>
        <li className='flex items-center gap-2'>
          <Icon className='text-2xl' icon='uim:calender' />
          <NavLink
            to='/dashboard/reservation'
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "underline font-bold" : ""
            }
          >
            Reservation
          </NavLink>
        </li>

        <li className='flex items-center gap-2'>
          <Icon className='text-2xl' icon='streamline:payment-10-solid' />
          <NavLink
            to='/dashboard/payment'
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "underline font-bold" : ""
            }
          >
            Payment History
          </NavLink>
        </li>

        <li className='flex items-center gap-2'>
          <Icon className='text-2xl' icon='mdi:cart' />
          <NavLink
            to='/dashboard/cart'
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "underline font-bold" : ""
            }
          >
            My Cart ({cart.length})
          </NavLink>
        </li>

        <li className='flex items-center gap-2'>
          <Icon className='text-2xl' icon='ic:round-reviews' />
          <NavLink
            to='/dashboard/addReview'
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "underline font-bold" : ""
            }
          >
            Add Review
          </NavLink>
        </li>
      </ul>
      <div className='px-5'>
        <hr />
      </div>
      <ul className='px-10 text-lg gap-2 space-y-2 tracking-wider '>
        <li className='flex items-center gap-2'>
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
        <li className='flex items-center gap-2'>
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
        <li className='flex items-center gap-2'>
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
        <li className='flex items-center gap-2'>
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
