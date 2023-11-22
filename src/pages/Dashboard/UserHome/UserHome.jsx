import useAuthContext from "../../../hooks/useAuthContext";

const UserHome = () => {
  const { user } = useAuthContext();
  return (
    <div>
      <h2 className='text-3xl mt-10'>
        <span>Hi, Welcome </span>
        {user?.displayName ? user.displayName : "Back"}
      </h2>
    </div>
  );
};

export default UserHome;
