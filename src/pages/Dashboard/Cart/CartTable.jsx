import { Icon } from "@iconify/react";

const CartTable = ({ index, item, handleDelete }) => {
  const { name, image, price, _id } = item;

  return (
    <tr>
      <td>{index}.</td>
      <td>
        <div className='avatar'>
          <div className='mask mask-squircle w-12 h-12'>
            <img src={image} alt='Avatar Tailwind CSS Component' />
          </div>
        </div>
      </td>

      <td>
        <div>
          <div className='font-bold'>{name}</div>
        </div>
      </td>
      <td>${price}</td>

      <td>
        <button
          onClick={() => handleDelete(_id)}
          className=' bg-[#B91C1C] p-2 rounded-lg flex justify-center'
        >
          <Icon className='text-white text-3xl' icon='mdi:delete'></Icon>
        </button>
      </td>
    </tr>
  );
};

export default CartTable;
