import { Icon } from "@iconify/react";

const ItemsTable = ({ index, item, handleItemDelete, handleItemUpdate }) => {
  const { name, image, price } = item;
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
        <button
          onClick={() => handleItemUpdate(item._id)}
          className=' bg-extended-gold p-2 rounded-lg flex justify-center'
          title='Update Menu'
        >
          <Icon className='text-white text-3xl' icon='basil:edit-solid'></Icon>
        </button>
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
