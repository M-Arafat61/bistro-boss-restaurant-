import { Icon } from "@iconify/react";

const UsersTable = ({ user, index, handleDelete, handleMakeAdmin }) => {
  const { name, email } = user;
  return (
    <tr>
      <td>{index}.</td>
      <td>
        <div className=''>{name}</div>
      </td>

      <td>{email}</td>
      <td>
        {user.role ? (
          "Admin"
        ) : (
          <button
            onClick={() => handleMakeAdmin(user)}
            className=' bg-extended-gold p-2 rounded-lg flex justify-center'
            title='Make Admin'
          >
            <Icon className='text-white text-3xl' icon='ph:user-duotone'></Icon>
          </button>
        )}
      </td>

      <td>
        <button
          onClick={() => handleDelete(user)}
          className=' bg-[#B91C1C] p-2 rounded-lg flex justify-center'
          title='Delete User'
        >
          <Icon className='text-white text-3xl' icon='mdi:delete'></Icon>
        </button>
      </td>
    </tr>
  );
};

export default UsersTable;
