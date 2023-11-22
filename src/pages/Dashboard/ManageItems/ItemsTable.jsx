import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

const ItemsTable = ({ index, item, handleItemDelete }) => {
  const { name, image, price, _id } = item;
  return (
    <tr>
      <td>{index}.</td>
      <td>
        <div className='avatar'>
          <div className='w-16 rounded'>
            <img src={image} />
          </div>
        </div>
      </td>
      <td>
        <div className=''>{name}</div>
      </td>
      <td className='text-end'>${price}</td>
      <td>
        <Link to={`/dashboard/updateItem/${_id}`}>
          <button
            className=' bg-extended-gold p-2 rounded-lg flex justify-center'
            title='Update Menu'
          >
            <Icon
              className='text-white text-3xl'
              icon='basil:edit-solid'
            ></Icon>
          </button>
        </Link>
      </td>

      <td>
        <button
          onClick={() => handleItemDelete(item._id)}
          className=' bg-[#B91C1C] p-2 rounded-lg flex justify-center'
          title='Delete Menu'
        >
          <Icon className='text-white text-3xl' icon='mdi:delete'></Icon>
        </button>
      </td>
    </tr>
  );
};

export default ItemsTable;
