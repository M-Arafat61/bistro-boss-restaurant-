import { NavLink } from "react-router-dom";
import { Icon } from "@iconify/react";
import useCart from "../../hooks/useCart";

const UserLists = () => {
  const [cart] = useCart();
  return (
    <div>
      <ul className='px-10 text-lg gap-2 space-y-2 tracking-wider uppercase'>
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
    </div>
  );
};

export default UserLists;
