import { Link, NavLink } from "react-router-dom";
import Container from "../Container";
import useAuthContext from "../../../hooks/useAuthContext";
import { Icon } from "@iconify/react";
import useCart from "../../../hooks/useCart";
import useAdmin from "../../../hooks/useAdmin";

const Navbar = () => {
  const { user, logout } = useAuthContext();

  const [cart, ,] = useCart();

  const [isAdmin] = useAdmin();

  const handleLogout = () => {
    logout()
      .then(() => {})
      .catch(error => console.log(error));
  };
  const navItems = (
    <>
      <NavLink
        to='/'
        className={({ isActive, isPending }) =>
          isPending ? "" : isActive ? "underline font-bold" : ""
        }
      >
        <li>Home</li>
      </NavLink>
      <NavLink
        to='/menu'
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "underline font-bold" : ""
        }
      >
        <li>Our Menu</li>
      </NavLink>
      <NavLink
        to='/shop/offered'
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "underline font-bold" : ""
        }
      >
        <li>Our Shop</li>
      </NavLink>
      <NavLink
        to='/contact'
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "underline font-bold" : ""
        }
      >
        <li>Contact Us</li>
      </NavLink>

      {user && isAdmin && (
        <Link to='/dashboard/adminHome'>
          <li>Dashboard </li>
        </Link>
      )}
      {user && !isAdmin && (
        <Link to='/dashboard/userHome'>
          <li>Dashboard</li>
        </Link>
      )}

      {user && !isAdmin && (
        <Link to='/dashboard/carts'>
          <button className='flex items-center'>
            <Icon className='text-2xl mr-2' icon='mdi:cart' />
            <div className='px-2 rounded-md  bg-extended-yellow'>
              + {cart.length}
            </div>
          </button>
        </Link>
      )}
      {user ? (
        <button onClick={handleLogout}>
          <li>Logout</li>
        </button>
      ) : (
        <NavLink
          to='/login'
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "underline font-bold" : ""
          }
        >
          <li>Login</li>
        </NavLink>
      )}
    </>
  );
  return (
    <div className='fixed z-10  text-white w-full '>
      <Container>
        <div className='navbar py-2 px-6 bg-zinc-900 bg-opacity-30 '>
          <div className='navbar-start flex  '>
            <div className='dropdown '>
              <label tabIndex={0} className='btn btn-ghost lg:hidden'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-5 w-5'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M4 6h16M4 12h8m-8 6h16'
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow  rounded-box w-52 gap-2'
              >
                {navItems}
              </ul>
            </div>
            <div className='flex flex-col items-center space-y-2'>
              <button className=' normal-case text-3xl'>Bistro Boss</button>
              <p className='uppercase tracking-widest text-lg'>Restaurant</p>
            </div>
          </div>
          <div className='navbar-center  hidden lg:flex '>
            <ul className='menu menu-horizontal px-1 gap-5'>{navItems}</ul>
          </div>
          <div className='navbar-end '>
            <button className='btn'>Button</button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
