import { Navigate, useLocation } from "react-router-dom";
import useAuthContext from "../hooks/useAuthContext";
import CircleLoader from "react-spinners/CircleLoader";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuthContext();
  const location = useLocation();

  //   if (loading) return <p>loading</p>;
  if (loading)
    return (
      <div className='min-h-screen flex justify-center items-center'>
        <CircleLoader color='#a85232' size={100} />;
      </div>
    );
  if (user) return children;
  return <Navigate to='/login' state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;
