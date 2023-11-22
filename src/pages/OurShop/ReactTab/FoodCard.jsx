import Swal from "sweetalert2";
import useAuthContext from "../../../hooks/useAuthContext";
import { useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import useAxiosInstance from "../../../hooks/useAxiosInstance";
import useCart from "../../../hooks/useCart";

const FoodCard = ({ foodItem }) => {
  const { name, recipe, image, price, _id } = foodItem;
  const { user } = useAuthContext();
  const navigate = useNavigate();
  const location = useLocation();
  const axiosInstance = useAxiosInstance();
  const [, refetch] = useCart();

  const handleAddToCart = () => {
    if (user && user.email) {
      const cartItem = {
        foodId: _id,
        email: user.email,
        name,
        image,
        price,
      };
      //   axios
      //     .post("http://localhost:5000/cart", cartItem)
      //     .then(response => {
      //       console.log(response.data);
      //       if (response.data.insertedId) {
      //         toast.success(`${name} added to your cart.`);
      //       }
      //     })
      //     .catch(error => {
      //       console.log(error);
      //     });
      // }

      axiosInstance
        .post("/carts", cartItem)
        .then(response => {
          if (response.data.insertedId) {
            toast.success(`${name} added to your cart.`);
          }
          refetch();
        })
        .catch(error => {
          toast.error(`${error.message}`);
        });
    } else {
      Swal.fire({
        title: "You aren't logged in!",
        text: "Please login first to add the item on your cart.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes! Login",
      }).then(result => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } }, { replace: true });
        }
      });
    }
  };
  return (
    <div className='card card-compact bg-base-100 mt-10'>
      <figure>
        <img className='w-full object-cover' src={image} />
      </figure>
      <p className='bg-black absolute text-white right-4 top-4'>${price}</p>
      <div className='card-body'>
        <h2 className='card-title'>{name}</h2>
        <p>{recipe}</p>
        <div className='card-actions shadow-xl mt-2'>
          <button
            onClick={handleAddToCart}
            className='uppercase rounded-lg overflow-hidden px-4 py-3 bg-[#E8E8E8]  w-full text-xl text-extended-yellow border-b-4 border-b-extended-yellow hover:bg-zinc-800'
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
